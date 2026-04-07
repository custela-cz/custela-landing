/**
 * GA4 server-side tracking via /api/track (Measurement Protocol).
 * Client ID is stored in localStorage for session continuity.
 *
 * Uses absolute URL to avoid sendBeacon losing POST body on 307 redirects
 * (custela.com → www.custela.com).
 */

const GA_MEASUREMENT_ID = 'G-H9P5ZD71TP';
const GA_API_SECRET = 'gEEUmhZmQ_yfvDCed0opsA';

/** Direct GA4 Measurement Protocol URL — bypasses /api/track to avoid redirect issues */
const MP_URL = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;

function getClientId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('_ga_client_id');
  if (!id) {
    id = `${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem('_ga_client_id', id);
  }
  return id;
}

/**
 * Send an event to GA4 via Measurement Protocol (direct, no server proxy).
 * Uses sendBeacon for reliability during navigation, fetch as fallback.
 */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  const clientId = getClientId();
  if (!clientId) return;

  const payload = JSON.stringify({
    client_id: clientId,
    events: [{ name, params }],
  });

  // sendBeacon direct to GA4 — no redirect issues
  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon(MP_URL, new Blob([payload], { type: 'application/json' }));
    if (sent) return;
  }

  // Fallback
  fetch(MP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}

/**
 * Track CTA button click. Call this in onClick handlers.
 */
export function trackCta(location: string, text?: string) {
  trackEvent('cta_click', {
    cta_location: location,
    cta_text: text || '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}
