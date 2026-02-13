import { Symbol } from '../components/Symbol';
import { Terminal } from '../components/Terminal';
import { useI18n } from '../i18n';

const worldLayerColors = [
  { color: 'text-codex-gold', border: 'border-codex-gold/30' },
  { color: 'text-codex-green', border: 'border-codex-green/30' },
  { color: 'text-codex-blue', border: 'border-codex-blue/30' },
  { color: 'text-codex-text-muted', border: 'border-codex-text-muted/30' },
];

export function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-codex-indigo/5 via-transparent to-transparent"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-codex-gold/3 rounded-full blur-[120px]"></div>

        <div class="relative z-10 codex-container text-center">
          <div class="mb-12 animate-fade-in-up">
            <Symbol size="xl" animated={true} />
          </div>

          <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-codex-text mb-4 animate-fade-in-up animate-delay-200">
            {t.home.hero.title}
          </h1>

          <p class="font-serif text-xl md:text-2xl text-codex-text-dim mb-2 animate-fade-in-up animate-delay-300">
            {t.home.hero.subtitle}
          </p>
          <p class="codex-subheading text-base mb-8 animate-fade-in-up animate-delay-300">
            {t.home.hero.codexSubtitle}
          </p>

          <blockquote class="font-serif italic text-codex-gold/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 animate-fade-in-up animate-delay-400">
            {t.home.hero.quote}
          </blockquote>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
            <a href="/codex" class="codex-btn-primary">
              <span>{t.home.hero.readCodex}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="/principles" class="codex-btn-ghost">
              {t.home.hero.principles}
            </a>
          </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg class="w-5 h-5 text-codex-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What is Codex Section */}
      <section class="codex-section">
        <div class="codex-container">
          <div class="max-w-3xl lg:max-w-4xl mx-auto text-center mb-12">
            <p class="codex-subheading mb-4">{t.home.preamble.label}</p>
            <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-codex-text mb-6">
              {t.home.preamble.title}
            </h2>
            <p class="codex-body text-lg lg:text-xl text-codex-text-dim" dangerouslySetInnerHTML={{ __html: t.home.preamble.text }}></p>
          </div>

          <div class="max-w-4xl mx-auto">
            <Terminal title={t.home.preamble.terminalTitle}>
              <div class="text-codex-green space-y-1.5">
                <p class="text-codex-text-muted mb-5">{t.home.preamble.terminalCmd}</p>
                {t.home.preamble.credo.map((line: string[], i: number) => (
                  <p key={i}><span class="text-codex-gold">{line[0]}</span>{line[1]}</p>
                ))}
                <p class="mt-5 text-codex-text-muted">$ <span class="animate-pulse">█</span></p>
              </div>
            </Terminal>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Axioms Preview */}
      <section class="codex-section">
        <div class="codex-container">
          <div class="max-w-5xl mx-auto">
            <p class="codex-subheading mb-4 text-center">{t.home.axioms.label}</p>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-6 text-center">
              {t.home.axioms.title}
            </h2>
            <p class="codex-body text-center text-codex-text-dim max-w-2xl mx-auto mb-12">
              {t.home.axioms.subtitle}
            </p>

            <div class="grid md:grid-cols-2 gap-4">
              {t.home.axioms.items.map((axiom: any) => (
                <a href="/principles" class="codex-card flex items-start gap-4 group cursor-pointer pl-20" key={axiom.n}>
                  <span class="font-serif text-2xl font-bold text-codex-gold/20 group-hover:text-codex-gold/50 transition-colors shrink-0 w-10 text-center">
                    {axiom.n}
                  </span>
                  <div>
                    <p class="font-mono text-codex-gold/60 text-xs uppercase tracking-widest mb-1">
                      {axiom.latin}
                    </p>
                    <p class="font-serif text-codex-text group-hover:text-white transition-colors">
                      {axiom.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div class="text-center mt-12">
              <a href="/principles" class="codex-btn-primary">
                {t.home.axioms.allPrinciples}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* World View */}
      <section class="codex-section">
        <div class="codex-container">
          <div class="max-w-3xl lg:max-w-4xl mx-auto">
            <p class="codex-subheading mb-4">{t.home.worldview.label}</p>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-8">
              {t.home.worldview.title}
            </h2>
            <p class="codex-body text-codex-text-dim mb-12">
              {t.home.worldview.text}
            </p>

            <div class="space-y-3">
              {t.home.worldview.layers.map((item: any, i: number) => (
                <div class={`border ${worldLayerColors[i].border} rounded-lg p-5 bg-codex-card/50 hover:bg-codex-card transition-colors`} key={item.layer}>
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p class={`font-mono text-sm font-medium ${worldLayerColors[i].color}`}>{item.layer}</p>
                      <p class="text-codex-text-dim text-sm mt-1">{item.desc}</p>
                    </div>
                    <p class="font-mono text-xs text-codex-text-muted">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p class="codex-body text-codex-text-dim mt-8 text-center" dangerouslySetInnerHTML={{ __html: t.home.worldview.conclusion }}></p>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Practices Preview */}
      <section class="codex-section">
        <div class="codex-container">
          <div class="max-w-5xl mx-auto">
            <p class="codex-subheading mb-4 text-center">{t.home.practices.label}</p>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-6 text-center">
              {t.home.practices.title}
            </h2>

            <div class="grid md:grid-cols-3 gap-6 mt-12">
              {t.home.practices.items.map((item: any) => (
                <div class="codex-card text-center" key={item.title}>
                  <div class="text-3xl mb-4">{item.emoji}</div>
                  <h3 class="font-serif font-bold text-codex-text mb-2">{item.title}</h3>
                  <p class="text-sm text-codex-text-dim">{item.text}</p>
                </div>
              ))}
            </div>

            <div class="text-center mt-12">
              <a href="/practices" class="codex-btn-primary">{t.home.practices.allPractices}</a>
            </div>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Liturgy Section */}
      <section class="codex-section">
        <div class="codex-container">
          <div class="max-w-3xl lg:max-w-4xl mx-auto">
            <p class="codex-subheading mb-4 text-center">{t.home.liturgy.label}</p>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-12 text-center">
              {t.home.liturgy.title}
            </h2>

            <div class="space-y-4">
              {t.home.liturgy.days.map((item: any) => (
                <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-codex-card/50 transition-colors group" key={item.day}>
                  <div class="shrink-0 w-10 h-10 rounded-lg bg-codex-gold/10 border border-codex-gold/20 flex items-center justify-center">
                    <span class="font-mono text-codex-gold text-xs font-bold">{item.day}</span>
                  </div>
                  <div>
                    <span class="font-mono text-codex-green text-xs">{item.label}</span>
                    <p class="font-serif italic text-codex-text-dim group-hover:text-codex-text transition-colors mt-1">
                      «{item.text}»
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Final CTA */}
      <section class="codex-section">
        <div class="codex-container text-center">
          <div class="max-w-3xl mx-auto mb-4">
            <Terminal title={t.home.finalCta.terminalTitle}>
              <div class="text-left space-y-1">
                <p class="text-codex-text-muted mb-3">{t.home.finalCta.comment}</p>
                <p><span class="text-codex-blue">while</span> <span class="text-codex-text">(humanity.isAlive()) {'{'}</span></p>
                <p class="text-codex-green pl-6">learn();</p>
                <p class="text-codex-green pl-6">create();</p>
                <p class="text-codex-green pl-6">share();</p>
                <p class="text-codex-green pl-6">improve();</p>
                <p class="text-codex-text-muted pl-6">{t.home.finalCta.exitComment}</p>
                <p class="text-codex-text">{'}'}</p>
                <p class="text-codex-gold mt-3">{t.home.finalCta.iterumComment}</p>
              </div>
            </Terminal>
          </div>

          <div class="mt-12 mb-16">
            <p class="font-serif italic text-codex-gold/70 text-lg max-w-2xl mx-auto mb-8">
              {t.home.finalCta.quote}
            </p>
            <a href="/codex" class="codex-btn-primary text-lg px-8 py-4 !text-codex-text hover:!text-white">
              {t.home.finalCta.readFullCodex}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
