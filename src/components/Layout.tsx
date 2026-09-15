import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import { useI18n } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { isActivePath, useRoutePath } from '../route-path';

function NavLink({ href, children, class: className = '' }: { href: string; children: ComponentChildren; class?: string }) {
  const current = useRoutePath();
  const active = isActivePath(href, current);
  return (
    <a href={href} class={`${className}${active ? ' text-codex-gold' : ''}`}>
      {children}
    </a>
  );
}

interface LayoutProps {
  children: ComponentChildren;
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <div class="bg-codex-black min-h-screen bg-grid">
      {/* Navigation */}
      <nav class="fixed top-0 w-full z-50 bg-codex-black/80 backdrop-blur-xl border-b border-codex-border/50">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 h-16 flex items-center justify-between">
          <a href="/" class="flex items-center gap-3 group">
            <span class="font-mono text-codex-gold text-lg symbol-glow group-hover:animate-pulse-slow">&lt;&gt;[]()&nbsp;</span>
            <span class="font-serif font-bold text-codex-text tracking-wide">Iterum</span>
          </a>

          {/* Desktop nav */}
          <div class="hidden md:flex items-center gap-1">
            <NavLink href="/codex" class="codex-btn-ghost text-xs">{t.nav.codex}</NavLink>
            <NavLink href="/principles" class="codex-btn-ghost text-xs">{t.nav.principles}</NavLink>
            <NavLink href="/practices" class="codex-btn-ghost text-xs">{t.nav.practices}</NavLink>
            <NavLink href="/community" class="codex-btn-ghost text-xs">{t.nav.community}</NavLink>
            <NavLink href="/about" class="codex-btn-ghost text-xs">{t.nav.about}</NavLink>
            <a
              href="https://www.donationalerts.com/r/iterum_servitor"
              target="_blank"
              rel="noopener noreferrer"
              class="codex-btn-ghost text-xs !text-codex-gold hover:!text-white"
            >
              ♡ {t.nav.donate}
            </a>
            <a
              href="https://discord.gg/EZ6RXw7Ys9"
              target="_blank"
              rel="noopener noreferrer"
              class="codex-btn-ghost p-2 text-codex-text-dim hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu toggle */}
          <div class="flex md:hidden items-center gap-1">
            <a
              href="https://discord.gg/EZ6RXw7Ys9"
              target="_blank"
              rel="noopener noreferrer"
              class="codex-btn-ghost p-2 text-codex-text-dim hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <LanguageSwitcher />
            <button
              class="codex-btn-ghost p-2"
              aria-label={t.nav.menu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div class="md:hidden border-t border-codex-border/50 bg-codex-black/95 backdrop-blur-xl">
            <div class="px-6 sm:px-8 py-4 flex flex-col gap-1">
              <a href="/codex" class="codex-btn-ghost text-sm justify-start" onClick={() => setMenuOpen(false)}>{t.nav.codex}</a>
              <a href="/principles" class="codex-btn-ghost text-sm justify-start" onClick={() => setMenuOpen(false)}>{t.nav.principles}</a>
              <a href="/practices" class="codex-btn-ghost text-sm justify-start" onClick={() => setMenuOpen(false)}>{t.nav.practices}</a>
              <a href="/community" class="codex-btn-ghost text-sm justify-start" onClick={() => setMenuOpen(false)}>{t.nav.community}</a>
              <a href="/about" class="codex-btn-ghost text-sm justify-start" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
              <a
                href="https://www.donationalerts.com/r/iterum_servitor"
                target="_blank"
                rel="noopener noreferrer"
                class="codex-btn-ghost text-sm justify-start !text-codex-gold"
                onClick={() => setMenuOpen(false)}
              >
                ♡ {t.nav.donate}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main class="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer class="border-t border-codex-border/50 bg-codex-dark/50">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-12 md:py-16">
          <div class="grid md:grid-cols-4 gap-12">
            <div>
              <span class="font-mono text-codex-gold text-2xl symbol-glow">&lt;&gt;[]()&nbsp;</span>
              <p class="mt-4 text-codex-text-dim text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.footer.description }}></p>
            </div>
            <div>
              <h4 class="font-mono text-codex-text uppercase tracking-widest text-sm mb-4">{t.footer.navigation}</h4>
              <div class="flex flex-col gap-2">
                <a href="/codex" class="text-codex-text-dim hover:text-codex-gold text-sm transition-colors">{t.footer.readCodex}</a>
                <a href="/principles" class="text-codex-text-dim hover:text-codex-gold text-sm transition-colors">{t.footer.principles}</a>
                <a href="/practices" class="text-codex-text-dim hover:text-codex-gold text-sm transition-colors">{t.footer.practices}</a>
                <a href="/community" class="text-codex-text-dim hover:text-codex-gold text-sm transition-colors">{t.footer.community}</a>
              </div>
            </div>
            <div>
              <h4 class="font-mono text-codex-text uppercase tracking-widest text-sm mb-4">{t.footer.support}</h4>
              <a
                href="https://www.donationalerts.com/r/iterum_servitor"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-codex-gold hover:text-white text-sm transition-colors"
              >
                ♡ {t.footer.donate}
              </a>
              <p class="text-codex-text-muted text-xs mt-2">{t.footer.donateDesc}</p>
            </div>
            <div>
              <h4 class="font-mono text-codex-text uppercase tracking-widest text-sm mb-4">{t.footer.version}</h4>
              <p class="text-codex-text-dim text-sm">Iterum v1.1.0</p>
              <p class="text-codex-text-dim text-sm mt-1">{t.footer.license}</p>
              <p class="text-codex-text-muted text-xs mt-4">{t.footer.tagline}</p>
            </div>
          </div>
          <div class="codex-divider my-8"></div>
          <div class="text-center">
            <p class="font-mono text-codex-text-muted text-xs">
              while (humanity.isAlive()) {'{'} learn(); create(); share(); improve(); {'}'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
