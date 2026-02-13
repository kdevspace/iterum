import { Symbol } from '../components/Symbol';
import { useI18n } from '../i18n';

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section class="codex-section-first">
      <div class="codex-container">
        <div class="max-w-3xl lg:max-w-4xl mx-auto">
          <p class="codex-subheading mb-4">{a.header.label}</p>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-codex-text mb-6">
            {a.header.title}
          </h1>

          <div class="space-y-6 text-codex-text-dim leading-relaxed">
            <p class="text-lg" dangerouslySetInnerHTML={{ __html: a.intro }} />

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.whyTitle}</h2>
            <p>{a.whyP1}</p>
            <p dangerouslySetInnerHTML={{ __html: a.whyP2 }} />

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.cycleTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: a.cycleP1 }} />
            <p dangerouslySetInnerHTML={{ __html: a.cycleP2 }} />

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.forWhomTitle}</h2>
            <ul class="space-y-3">
              {a.forWhomItems.map((item: string, i: number) => (
                <li class="flex items-start gap-3" key={i}>
                  <span class="codex-code text-xs mt-1 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.notTitle}</h2>
            <div class="p-6 rounded-xl bg-codex-card border border-codex-border">
              <ul class="space-y-3">
                {a.notItems.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.authorshipTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: a.authorshipP1 }} />
            <p>{a.authorshipP2}</p>

            <div class="codex-divider"></div>

            <h2 class="font-serif text-2xl font-bold text-codex-text">{a.faqTitle}</h2>

            <div class="space-y-6">
              {a.faq.map((item: { q: string; a: string }, i: number) => (
                <div key={i}>
                  <p class="font-serif text-codex-text font-bold">{item.q}</p>
                  <p class="mt-1">{item.a}</p>
                </div>
              ))}
            </div>

            <div class="codex-divider"></div>

            <div class="text-center py-8">
              <Symbol size="md" animated={true} />
              <p class="font-mono text-codex-text-muted text-sm mt-6">
                {a.footerNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
