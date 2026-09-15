import { useState } from 'preact/hooks';
import Router, { RouterOnChangeArgs } from 'preact-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Principles } from './pages/Principles';
import { Practices } from './pages/Practices';
import { Community } from './pages/Community';
import { CodexPage } from './pages/Codex';
import { About } from './pages/About';
import { getPageMeta, normalizePath } from './seo';
import { trackHit } from './metrika';
import { RoutePathContext } from './route-path';

let skipInitialHit = true;

function initialPath(url?: string) {
  if (url) return normalizePath(url);
  if (typeof window !== 'undefined') return normalizePath(window.location.pathname);
  return '/';
}

function applyPageMeta(url: string) {
  const meta = getPageMeta(url);
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
}

export function App({ url }: { url?: string }) {
  const [path, setPath] = useState(() => initialPath(url));
  const current = url ? normalizePath(url) : path;

  function handleRouteChange(e: RouterOnChangeArgs) {
    if (import.meta.env.SSR || typeof document === 'undefined') return;

    setPath(normalizePath(e.url));
    applyPageMeta(e.url);
    window.scrollTo(0, 0);

    // The Metrika snippet already records the first view.
    if (skipInitialHit) {
      skipInitialHit = false;
      return;
    }
    trackHit(e.url);
  }

  return (
    <RoutePathContext.Provider value={current}>
      <Layout>
        <Router url={url} onChange={handleRouteChange}>
          <Home path="/" />
          <CodexPage path="/codex" />
          <Principles path="/principles" />
          <Practices path="/practices" />
          <Community path="/community" />
          <About path="/about" />
        </Router>
      </Layout>
    </RoutePathContext.Provider>
  );
}
