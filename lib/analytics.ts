/**
 * GA4 server-side tracking via /api/track (Measurement Protocol).
 * Client ID is stored in localStorage for session continuity.
 */

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
 * Send an event to GA4 via server-side Measurement Protocol.
 * Non-blocking — fires and forgets via navigator.sendBeacon with fetch fallback.
 */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  const clientId = getClientId();
  if (!clientId) return;

  const payload = JSON.stringify({
    clientId,
    events: [{ name, params }],
  });

  // sendBeacon is reliable on navigation (link clicks)
  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon('/api/track', new Blob([payload], { type: 'application/json' }));
    if (sent) return;
  }

  // Fallback
  fetch('/api/track', {
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
