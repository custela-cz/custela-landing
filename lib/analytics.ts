/**
 * GA4 + Meta CAPI server-side tracking.
 *
 * GA4: sent directly via Measurement Protocol (client → Google)
 * Meta CAPI: sent via /api/track (client → server → Meta) because token must stay server-side
 */

const GA_MEASUREMENT_ID = 'G-H9P5ZD71TP';
const GA_API_SECRET = 'gEEUmhZmQ_yfvDCed0opsA';
const GA_MP_URL = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;

function getClientId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('_ga_client_id');
  if (!id) {
    id = `${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem('_ga_client_id', id);
  }
  return id;
}

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1];
}

/**
 * Send event to GA4 (direct) + Meta CAPI (via server).
 * Uses sendBeacon for reliability during page navigation.
 */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  const clientId = getClientId();
  if (!clientId) return;

  const events = [{ name, params }];

  // 1) GA4 — direct to Measurement Protocol (avoids redirect issues)
  const ga4Payload = JSON.stringify({ client_id: clientId, events });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(GA_MP_URL, new Blob([ga4Payload], { type: 'application/json' }));
  } else {
    fetch(GA_MP_URL, { method: 'POST', body: ga4Payload, keepalive: true }).catch(() => {});
  }

  // 2) Meta CAPI — via /api/track (server keeps the token secret)
  const serverPayload = JSON.stringify({
    clientId,
    events,
    pageUrl: window.location.href,
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
  });

  // Use absolute URL to handle custela.com → www.custela.com redirect
  const trackUrl = `${window.location.origin}/api/track`;
  if (navigator.sendBeacon) {
    navigator.sendBeacon(trackUrl, new Blob([serverPayload], { type: 'application/json' }));
  } else {
    fetch(trackUrl, { method: 'POST', body: serverPayload, keepalive: true }).catch(() => {});
  }
}

/**
 * Track CTA button click → GA4 cta_click + Meta Lead event.
 */
export function trackCta(location: string, text?: string) {
  trackEvent('cta_click', {
    cta_location: location,
    cta_text: text || '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}
