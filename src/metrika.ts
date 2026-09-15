export const METRIKA_ID = 112639874;

export function trackHit(url: string) {
  if (typeof window === 'undefined' || typeof window.ym !== 'function') return;
  window.ym(METRIKA_ID, 'hit', url, {
    title: document.title,
    referer: document.referrer,
  });
}
