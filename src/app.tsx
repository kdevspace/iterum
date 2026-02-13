import Router from 'preact-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Principles } from './pages/Principles';
import { Practices } from './pages/Practices';
import { Community } from './pages/Community';
import { CodexPage } from './pages/Codex';
import { About } from './pages/About';

function handleRouteChange() {
  window.scrollTo(0, 0);
}

export function App() {
  return (
    <Layout>
      <Router onChange={handleRouteChange}>
        <Home path="/" />
        <CodexPage path="/codex" />
        <Principles path="/principles" />
        <Practices path="/practices" />
        <Community path="/community" />
        <About path="/about" />
      </Router>
    </Layout>
  );
}
