import { NextRequest, NextResponse } from 'next/server';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-H9P5ZD71TP';
const GA_API_SECRET = process.env.GA_API_SECRET || 'gEEUmhZmQ_yfvDCed0opsA';

export async function POST(request: NextRequest) {
  try {
    const { clientId, events } = await request.json();

    if (!clientId || !events?.length) {
      return NextResponse.json({ error: 'Missing clientId or events' }, { status: 400 });
    }

    // Forward to GA4 Measurement Protocol
    const res = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId, events }),
      }
    );

    // GA4 MP returns 204 on success
    if (res.status === 204 || res.ok) {
      return NextResponse.json({ ok: true });
    }

    const text = await res.text();
    console.error('[Track] GA4 MP error:', res.status, text);
    return NextResponse.json({ ok: false }, { status: 502 });
  } catch (err) {
    console.error('[Track] Error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
