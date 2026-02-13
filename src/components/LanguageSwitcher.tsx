import { useState, useRef, useEffect } from 'preact/hooks';
import { useI18n, languages, Lang } from '../i18n';

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find(l => l.code === lang)!;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div class="relative" ref={ref}>
      <button
        class="codex-btn-ghost text-xs flex items-center gap-1.5 px-2 py-1.5"
        onClick={() => setOpen(!open)}
        aria-label="Language"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span class="hidden sm:inline">{current.nativeName}</span>
        <svg class={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div class="absolute right-0 top-full mt-1 w-44 bg-codex-dark border border-codex-border/50 rounded-lg shadow-xl overflow-hidden z-50 backdrop-blur-xl">
          {languages.map((l) => (
            <button
              key={l.code}
              class={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between hover:bg-codex-card/50 ${
                l.code === lang ? 'text-codex-gold bg-codex-gold/5' : 'text-codex-text-dim hover:text-codex-text'
              }`}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
            >
              <span>{l.nativeName}</span>
              {l.code === lang && (
                <svg class="w-4 h-4 text-codex-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
