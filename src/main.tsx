import { hydrate, render } from 'preact';
import renderToString from 'preact-render-to-string';
import { App } from './app';
import { I18nProvider } from './i18n';
import { PRERENDER_ROUTES, SITE_URL, absoluteUrl, getPageMeta } from './seo';
import './index.css';

const app = (
  <I18nProvider>
    <App />
  </I18nProvider>
);

if (typeof window !== 'undefined') {
  console.log('%c<>  []  ()', 'font-size: 24px; color: #c9a84c; font-family: monospace;');
  console.log('%cIterum — Codex Digitalis v1.1.0', 'font-size: 14px; color: #4ade80; font-family: monospace;');
  console.log('%c«In the beginning was the Bit, and the Bit was with Man, and Man gave it meaning.»', 'font-size: 12px; color: #94a3b8; font-style: italic;');
  console.log('%cYou found the easter egg. You are already an iterant.', 'font-size: 11px; color: #64748b;');

  const el = document.getElementById('app')!;
  if (el.hasChildNodes()) {
    hydrate(app, el);
  } else {
    render(app, el);
  }
}

export async function prerender(data: { url?: string }) {
  const url = data?.url || '/';
  const meta = getPageMeta(url);
  const canonical = absoluteUrl(url);
  const html = renderToString(
    <I18nProvider>
      <App url={url} />
    </I18nProvider>
  );

  return {
    html,
    links: new Set(PRERENDER_ROUTES),
    head: {
      lang: 'ru',
      title: meta.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: meta.description } },
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Iterum' } },
        { type: 'meta', props: { property: 'og:locale', content: 'ru_RU' } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { name: 'twitter:card', content: 'summary' } },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
      ]),
    },
    data: { url, site: SITE_URL },
  };
}
