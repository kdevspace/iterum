import { PrincipleCard } from '../components/PrincipleCard';
import { SinCard } from '../components/SinCard';
import { useI18n } from '../i18n';

export function Principles() {
  const { t } = useI18n();
  const p = t.principles;

  return (
    <>
      <section class="codex-section-first">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.header.label}</p>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-codex-text mb-4">
            {p.header.title}
          </h1>
          <p class="codex-body text-codex-text-dim max-w-3xl mb-12">
            {p.header.subtitle}
          </p>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {p.cards.map((card: any) => (
              <PrincipleCard
                key={card.number}
                number={card.number}
                latin={card.latin}
                title={card.title}
                quote={card.quote}
                description={card.description}
                practice={card.practice}
                ritual={card.ritual}
                meditation={card.meditation}
                practiceLabel={p.practiceLabel}
                ritualLabel={p.ritualLabel}
                meditationLabel={p.meditationLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Ten Commandments */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.commandments.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-10">
            {p.commandments.title}
          </h2>

          <div class="space-y-6 max-w-3xl lg:max-w-4xl">
            {p.commandments.items.map((item: any) => (
              <div class="flex items-start gap-4 group" key={item.n}>
                <span class="font-serif text-2xl font-bold text-codex-gold/30 group-hover:text-codex-gold/60 transition-colors shrink-0 w-10 text-right">
                  {item.n}
                </span>
                <div>
                  <p class="font-serif text-codex-text text-lg leading-relaxed">{item.cmd}</p>
                  <p class="font-mono text-xs text-codex-text-muted mt-1">// {item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Seven Deadly Sins */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.sins.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-4">
            {p.sins.title}
          </h2>
          <p class="codex-body text-codex-text-dim mb-10 max-w-3xl">
            {p.sins.subtitle}
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {p.sins.items.map((sin: any) => (
              <SinCard
                key={sin.latin}
                latin={sin.latin}
                name={sin.name}
                description={sin.description}
                antidote={sin.antidote}
                antidoteLabel={p.sins.antidoteLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
