import { NextRequest, NextResponse } from 'next/server';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-H9P5ZD71TP';
const GA_API_SECRET = process.env.GA_API_SECRET || 'gEEUmhZmQ_yfvDCed0opsA';
const META_PIXEL_ID = process.env.META_PIXEL_ID || '1256800479990130';
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || 'EABoHzAJ4nhgBRCvWg8dgmKDh8YktZCoYEyIosxQZB8XDWRNFNpmbwcQszCcb18HoytHhduyfrQxN9D9ZBMgcmmPlVqiolXW32XsKjORZCMxz9jFn1MKqQVzPDfn4ZABSZBA1e2Ie8lZCZAWVWyS8UVRW5RoveLsZBBdGFVscKplHjYeSCCMdEqzwpVuLyF86gUn4x1wZDZD';

// Map internal event names to Meta standard events
const META_EVENT_MAP: Record<string, string> = {
  cta_click: 'Lead',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientId, events, pageUrl, fbp, fbc } = body;

    if (!clientId || !events?.length) {
      return NextResponse.json({ error: 'Missing clientId or events' }, { status: 400 });
    }

    // Collect user data from request headers for Meta CAPI
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || '';
    const ua = request.headers.get('user-agent') || '';

    // Send to GA4 + Meta CAPI in parallel
    const promises: Promise<unknown>[] = [];

    // 1) GA4 Measurement Protocol
    promises.push(
      fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ client_id: clientId, events }),
        }
      ).catch(err => console.error('[Track] GA4 MP error:', err))
    );

    // 2) Meta Conversions API
    const metaEvents = events
      .filter((e: { name: string }) => META_EVENT_MAP[e.name])
      .map((e: { name: string; params?: Record<string, string> }) => ({
        event_name: META_EVENT_MAP[e.name],
        event_time: Math.floor(Date.now() / 1000),
        event_id: `${e.name}_${clientId}_${Date.now()}`, // deduplication with browser pixel
        event_source_url: pageUrl || 'https://custela.com',
        action_source: 'website',
        user_data: {
          client_ip_address: ip,
          client_user_agent: ua,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
        },
        custom_data: {
          content_name: e.params?.cta_text || '',
          content_category: e.params?.cta_location || '',
        },
      }));

    if (metaEvents.length > 0) {
      promises.push(
        fetch(
          `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              data: metaEvents,
              test_event_code: process.env.META_TEST_EVENT_CODE || undefined,
            }),
          }
        ).then(async res => {
          if (!res.ok) {
            const text = await res.text();
            console.error('[Track] Meta CAPI error:', res.status, text);
          }
        }).catch(err => console.error('[Track] Meta CAPI error:', err))
      );
    }

    await Promise.all(promises);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Track] Error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
