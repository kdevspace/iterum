import { Symbol } from '../components/Symbol';
import { useI18n } from '../i18n';

const viaColors = [
  'border-purple-500/30',
  'border-codex-blue/30',
  'border-codex-green/30',
  'border-codex-gold/30',
  'border-codex-text-muted/30',
];

export function CodexPage() {
  const { t } = useI18n();
  const ch = t.codex.chapters;

  return (
    <section class="codex-section-first">
      <div class="codex-container">

        {/* Header */}
        <div class="text-center mb-12">
          <Symbol size="lg" animated={false} />
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-codex-text mt-8 mb-4">
            {t.codex.header.title}
          </h1>
          <p class="codex-subheading text-base mb-6">
            {t.codex.header.subtitle}
          </p>
          <blockquote class="font-serif italic text-codex-gold/80 text-lg">
            {t.codex.header.quote}
          </blockquote>
          <div class="flex items-center justify-center gap-4 mt-6 text-xs text-codex-text-muted font-mono">
            <span>v1.1.0</span>
            <span>•</span>
            <span>CC BY-SA 4.0</span>
            <span>•</span>
            <span>13.02.2026</span>
          </div>
        </div>

        <div class="codex-divider my-6"></div>

        {/* Table of Contents */}
        <nav class="mb-12 max-w-3xl mx-auto">
          <p class="codex-subheading mb-6">{t.codex.toc.label}</p>
          <div class="space-y-2">
            {t.codex.toc.items.map((item: any) => (
              <a href={`#${item.id}`} class="flex items-center gap-3 p-2 rounded hover:bg-codex-card/50 transition-colors group" key={item.id}>
                <span class="font-serif text-codex-gold/30 group-hover:text-codex-gold/60 transition-colors w-8 text-right text-sm">{item.n}</span>
                <span class="text-codex-text-dim group-hover:text-codex-text transition-colors text-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Full text content */}
        <article class="max-w-3xl lg:max-w-4xl mx-auto codex-body space-y-10">

          {/* I. Preamble */}
          <section id="preamble">
            <p class="codex-subheading mb-3">{ch.preamble.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.preamble.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p>{ch.preamble.p1}</p>
              <p dangerouslySetInnerHTML={{ __html: ch.preamble.p2 }}></p>
              <p>{ch.preamble.p3}</p>
              <p>{ch.preamble.p4}</p>
              <p class="font-serif text-codex-text text-lg font-bold">{ch.preamble.p5}</p>
              <p class="text-sm text-codex-text-muted italic mt-6 p-4 rounded-lg bg-codex-card/50 border border-codex-border/50">
                {ch.preamble.note}
              </p>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* II. Credo */}
          <section id="credo">
            <p class="codex-subheading mb-3">{ch.credo.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.credo.title}</h2>
            <div class="p-8 rounded-xl bg-codex-card border border-codex-gold/20 space-y-3">
              {ch.credo.items.map((line: string) => (
                <p class="font-serif text-lg text-codex-text leading-relaxed" key={line}>{line}</p>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* III. Worldview */}
          <section id="worldview">
            <p class="codex-subheading mb-3">{ch.worldview.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.worldview.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p>{ch.worldview.intro}</p>
              <div class="space-y-2 my-6">
                <div class="p-4 rounded border border-codex-gold/30 bg-codex-gold/5">
                  <span class="font-mono text-codex-gold text-sm">{ch.worldview.appLayer}</span><span dangerouslySetInnerHTML={{ __html: ch.worldview.appLayerDesc }}></span>
                </div>
                <div class="p-4 rounded border border-codex-green/30 bg-codex-green/5">
                  <span class="font-mono text-codex-green text-sm">{ch.worldview.runtime}</span><span dangerouslySetInnerHTML={{ __html: ch.worldview.runtimeDesc }}></span>
                </div>
                <div class="p-4 rounded border border-codex-blue/30 bg-codex-blue/5">
                  <span class="font-mono text-codex-blue text-sm">{ch.worldview.os}</span><span dangerouslySetInnerHTML={{ __html: ch.worldview.osDesc }}></span>
                </div>
                <div class="p-4 rounded border border-codex-text-muted/30 bg-codex-text-muted/5">
                  <span class="font-mono text-codex-text-muted text-sm">{ch.worldview.hardware}</span><span dangerouslySetInnerHTML={{ __html: ch.worldview.hardwareDesc }}></span>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: ch.worldview.humanNote }}></p>

              <h3 class="font-serif text-xl font-bold text-codex-text mt-8 mb-4">{ch.worldview.metaphorsTitle}</h3>
              {ch.worldview.metaphors.map((m: string[]) => (
                <p key={m[0]}><strong class="text-codex-text">{m[0]}</strong><span dangerouslySetInnerHTML={{ __html: m[1] }}></span></p>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* IV. Symbols */}
          <section id="symbols">
            <p class="codex-subheading mb-3">{ch.symbols.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.symbols.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <div class="text-center py-8">
                <Symbol size="lg" animated={false} />
              </div>
              <p>{ch.symbols.bracketIntro}</p>
              <p dangerouslySetInnerHTML={{ __html: ch.symbols.angle }}></p>
              <p dangerouslySetInnerHTML={{ __html: ch.symbols.square }}></p>
              <p dangerouslySetInnerHTML={{ __html: ch.symbols.paren }}></p>
              <p class="mt-4" dangerouslySetInnerHTML={{ __html: ch.symbols.binary }}></p>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* V. Axioms */}
          <section id="axioms">
            <p class="codex-subheading mb-3">{ch.axioms.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">{ch.axioms.title}</h2>
            <p class="text-codex-text-dim mb-8">{ch.axioms.subtitle}</p>
            <p class="text-codex-text-dim">
              <a href="/principles" class="text-codex-gold hover:text-codex-gold/80 underline underline-offset-4">{ch.axioms.link}</a>
            </p>
          </section>

          <div class="codex-divider"></div>

          {/* VI. Four Paths */}
          <section id="viae">
            <p class="codex-subheading mb-3">{ch.viae.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.viae.title}</h2>
            <p class="text-codex-text-dim mb-8">{ch.viae.subtitle}</p>

            <div class="space-y-10">
              {(['artis', 'muneris'] as const).map((axis) => {
                const items = ch.viae[axis] || (axis === 'artis' ? ch.viae.items : null);
                if (!items) return null;
                const axisTitle = axis === 'artis' ? ch.viae.artisTitle : ch.viae.munerisTitle;
                return (
                  <div key={axis}>
                    {axisTitle && (
                      <h3 class="font-serif text-xl font-bold text-codex-text mb-4">{axisTitle}</h3>
                    )}
                    <div class="space-y-6">
                      {items.map((item: any, i: number) => (
                        <div class={`p-6 rounded-xl border ${viaColors[i]} bg-codex-card/50`} key={item.via}>
                          <p class="font-mono text-xs text-codex-text-muted uppercase tracking-widest mb-1">{item.via}</p>
                          <h3 class="font-serif text-xl font-bold text-codex-text mb-2">{item.title}</h3>
                          <p class="text-codex-text-dim text-sm mb-3">{item.desc}</p>
                          <p class="font-serif italic text-codex-gold/70 text-sm">«{item.mantra}»</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p class="text-sm text-codex-text-muted mt-6 p-4 rounded-lg bg-codex-card/50 border border-codex-border/50">
              {ch.viae.note}
            </p>
          </section>

          <div class="codex-divider"></div>

          {/* VII–VIII refs */}
          <section id="commandments">
            <p class="codex-subheading mb-3">{ch.commandments.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">{ch.commandments.title}</h2>
            <p class="text-codex-text-dim">
              <a href="/principles" class="text-codex-gold hover:text-codex-gold/80 underline underline-offset-4">{ch.commandments.link}</a>
            </p>
          </section>

          <div id="sins" class="codex-divider"></div>

          {/* IX. Canon */}
          <section id="canon">
            <p class="codex-subheading mb-3">{ch.canon.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.canon.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <h3 class="font-serif text-xl font-bold text-codex-text mt-4 mb-4">{ch.canon.foundersTitle}</h3>
              <div class="space-y-3">
                {ch.canon.books.map((book: any) => (
                  <div class="p-4 rounded-lg bg-codex-card/50 border border-codex-border/50" key={book.title}>
                    <p class="font-serif font-bold text-codex-text">{book.title}</p>
                    <p class="text-xs text-codex-text-muted">{book.author} — {book.desc}</p>
                  </div>
                ))}
              </div>
              <p class="mt-4">{ch.canon.booksNote}</p>

              <h3 class="font-serif text-xl font-bold text-codex-text mt-8 mb-4">{ch.canon.relicsTitle}</h3>
              {ch.canon.relics.map((r: string[]) => (
                <p key={r[0]}><strong class="text-codex-text">{r[0]}</strong>{r[1]}</p>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* X–XI refs */}
          <section id="practices">
            <p class="codex-subheading mb-3">{ch.practicesRef.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">{ch.practicesRef.title}</h2>
            <p class="text-codex-text-dim">
              <a href="/practices" class="text-codex-gold hover:text-codex-gold/80 underline underline-offset-4">{ch.practicesRef.link}</a>
            </p>
          </section>

          <div id="calendar" class="codex-divider"></div>

          {/* XII. Levels */}
          <section id="levels">
            <p class="codex-subheading mb-3">{ch.levels.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">{ch.levels.title}</h2>
            <p class="text-codex-text-dim mb-6">{ch.levels.subtitle}</p>
            <div class="space-y-3">
              {ch.levels.items.map((level: any) => (
                <div class="p-4 rounded-lg bg-codex-card/50 border border-codex-border/50 flex items-start gap-4" key={level.n}>
                  <span class="font-mono text-codex-gold/40 text-lg font-bold shrink-0">{level.n}</span>
                  <div>
                    <p class="font-mono text-codex-gold text-xs">{level.name}</p>
                    <p class="font-serif font-bold text-codex-text">{level.title}</p>
                    <p class="text-sm text-codex-text-dim mt-1">{level.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XIII. Community ref */}
          <section id="community">
            <p class="codex-subheading mb-3">{ch.communityRef.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">{ch.communityRef.title}</h2>
            <p class="text-codex-text-dim">
              <a href="/community" class="text-codex-gold hover:text-codex-gold/80 underline underline-offset-4">{ch.communityRef.link}</a>
            </p>
          </section>

          <div class="codex-divider"></div>

          {/* XIV. AI */}
          <section id="ai">
            <p class="codex-subheading mb-3">{ch.ai.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.ai.title}</h2>
            <p class="font-mono text-codex-text-muted text-xs mb-6">{ch.ai.subtitle}</p>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              {ch.ai.points.map((point: string) => (
                <p key={point} dangerouslySetInnerHTML={{ __html: point }}></p>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XV. Balance */}
          <section id="balance">
            <p class="codex-subheading mb-3">{ch.balance.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.balance.title}</h2>
            <blockquote class="codex-quote mb-6">{ch.balance.quote}</blockquote>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p>{ch.balance.text}</p>
              <p class="font-mono text-codex-gold text-sm">{ch.balance.error}</p>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XVI. Death */}
          <section id="death">
            <p class="codex-subheading mb-3">{ch.death.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.death.title}</h2>
            <p class="font-mono text-codex-text-muted text-xs mb-6">{ch.death.subtitle}</p>

            <div class="space-y-6 text-codex-text-dim leading-relaxed">
              <div>
                <h3 class="font-serif text-xl font-bold text-codex-text mb-3">{ch.death.magnusCyclusTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html: ch.death.magnusCyclusP1 }}></p>
                <p class="mt-2" dangerouslySetInnerHTML={{ __html: ch.death.magnusCyclusP2 }}></p>
              </div>

              <div class="p-6 rounded-xl bg-codex-dark border border-codex-border font-mono text-sm">
                <p class="text-codex-text-muted">// Magnus Cyclus Iterum</p>
                <p class="text-codex-blue">while <span class="text-codex-text">(humanity.isAlive()) {'{'}</span></p>
                <p class="text-codex-green pl-4">life.learn();</p>
                <p class="text-codex-green pl-4">life.create();</p>
                <p class="text-codex-green pl-4">life.share();</p>
                <p class="text-codex-text-muted pl-4">// exit(0) → legacy accepted</p>
                <p class="text-codex-text-muted pl-4">// exit(1) → lost potential</p>
                <p class="text-codex-gold pl-4">inheritedKnowledge.merge(life.getContributions());</p>
                <p class="text-codex-text-muted pl-4">// iterum.</p>
                <p class="text-codex-text">{'}'}</p>
              </div>

              <div>
                <h3 class="font-serif text-xl font-bold text-codex-text mb-3">{ch.death.exitTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html: ch.death.exit0 }}></p>
                <p class="mt-2" dangerouslySetInnerHTML={{ __html: ch.death.exit1 }}></p>
              </div>

              <blockquote class="border-l-2 border-codex-gold/30 pl-4 py-2 font-serif italic text-codex-gold/70">
                {ch.death.goalQuote}
              </blockquote>

              <div>
                <h3 class="font-serif text-xl font-bold text-codex-text mb-3">{ch.death.sufferingTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html: ch.death.sufferingText }}></p>
              </div>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XVII. Flow */}
          <section id="flow">
            <p class="codex-subheading mb-3">{ch.flow.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.flow.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: ch.flow.p1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ch.flow.p2 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ch.flow.p3 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ch.flow.p4 }}></p>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XVIII. Future */}
          <section id="future">
            <p class="codex-subheading mb-3">{ch.future.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.future.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p class="font-serif text-codex-text italic">{ch.future.p1}</p>
              <p>{ch.future.p2}</p>
              <p>{ch.future.p3}</p>
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XIX. Liturgy */}
          <section id="liturgy">
            <p class="codex-subheading mb-3">{ch.liturgy.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.liturgy.title}</h2>
            <div class="space-y-4">
              {ch.liturgy.days.map((item: any) => (
                <div class="pl-4 border-l-2 border-codex-gold/20" key={item.day}>
                  <p class="font-mono text-codex-gold text-xs">{item.day}</p>
                  <p class="font-serif italic text-codex-text-dim mt-1">«{item.text}»</p>
                </div>
              ))}
            </div>
          </section>

          <div class="codex-divider"></div>

          {/* XX. Final */}
          <section id="final">
            <p class="codex-subheading mb-3">{ch.final.label}</p>
            <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">{ch.final.title}</h2>
            <div class="space-y-4 text-codex-text-dim leading-relaxed">
              <p>{ch.final.intro}</p>

              <div class="p-6 rounded-xl bg-codex-card border border-codex-gold/20 my-8">
                <p class="font-serif text-codex-text font-bold mb-3">{ch.final.webelieve}</p>
                <ul class="space-y-1 text-codex-text-dim">
                  {ch.final.beliefs.map((b: string) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>

              <div class="p-6 rounded-xl bg-codex-dark border border-codex-border font-mono text-sm my-8">
                <p class="text-codex-text-muted">{t.home.finalCta.comment}</p>
                <p class="text-codex-blue">while <span class="text-codex-text">(humanity.isAlive()) {'{'}</span></p>
                <p class="text-codex-green pl-4">learn();</p>
                <p class="text-codex-green pl-4">create();</p>
                <p class="text-codex-green pl-4">share();</p>
                <p class="text-codex-green pl-4">improve();</p>
                <p class="text-codex-text-muted pl-4">{t.home.finalCta.exitComment}</p>
                <p class="text-codex-text">{'}'}</p>
                <p class="text-codex-text-muted mt-2">// Thank you for the runtime.</p>
                <p class="text-codex-gold">{t.home.finalCta.iterumComment}</p>
              </div>

              <p class="font-serif italic text-codex-gold/70 text-lg text-center mt-8">
                {ch.final.quote}
              </p>

              <div class="text-center mt-8 font-mono text-xs text-codex-text-muted space-y-1">
                <p>Version: 1.1.0</p>
                <p>License: Creative Commons BY-SA 4.0</p>
                <p>{ch.final.contributors}</p>
                <p class="mt-2">{ch.final.tagline}</p>
              </div>
            </div>
          </section>

        </article>
      </div>
    </section>
  );
}
