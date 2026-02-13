import { render } from 'preact';
import { App } from './app';
import { I18nProvider } from './i18n';
import './index.css';

// Easter egg in console
console.log('%c<>  []  ()', 'font-size: 24px; color: #c9a84c; font-family: monospace;');
console.log('%cIterum — Codex Digitalis v1.0.0', 'font-size: 14px; color: #4ade80; font-family: monospace;');
console.log('%c«In the beginning was the Bit, and the Bit was with Man, and Man gave it meaning.»', 'font-size: 12px; color: #94a3b8; font-style: italic;');
console.log('%cYou found the easter egg. You are already an iterant.', 'font-size: 11px; color: #64748b;');

render(
  <I18nProvider>
    <App />
  </I18nProvider>,
  document.getElementById('app')!
);
