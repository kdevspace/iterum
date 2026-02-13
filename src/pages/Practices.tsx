import { useI18n } from '../i18n';

const dailyColorMap: Record<string, { bg: string; border: string; text: string }> = {
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-500' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-500' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-500' },
};

const initColorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-500' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-500' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-500' },
  gold: { bg: 'bg-codex-gold/10', border: 'border-codex-gold/20', text: 'text-codex-gold' },
};

const retroColors = [
  { bg: 'bg-green-500/5', border: 'border-green-500/10', icon: '✓', iconColor: 'text-green-500' },
  { bg: 'bg-red-500/5', border: 'border-red-500/10', icon: '✗', iconColor: 'text-red-500' },
  { bg: 'bg-blue-500/5', border: 'border-blue-500/10', icon: '→', iconColor: 'text-blue-500' },
];

export function Practices() {
  const { t } = useI18n();
  const p = t.practices;

  return (
    <>
      {/* Daily Practices */}
      <section class="codex-section-first">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.header.label}</p>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-codex-text mb-4">
            {p.header.title}
          </h1>
          <p class="codex-body text-codex-text-dim max-w-3xl mb-12">
            {p.header.subtitle}
          </p>

          <h2 class="font-serif text-2xl font-bold text-codex-text mb-8">{p.daily.title}</h2>

          <div class="grid md:grid-cols-3 gap-6 mb-12">
            {p.daily.items.map((item: any) => {
              const c = dailyColorMap[item.color] || dailyColorMap.yellow;
              return (
                <div class="codex-card" key={item.title}>
                  <div class="flex items-center gap-3 mb-4">
                    <div class={`w-10 h-10 rounded-lg ${c.bg} ${c.border} border flex items-center justify-center`}>
                      <span class={c.text}>{item.icon}</span>
                    </div>
                    <div>
                      <p class="font-mono text-codex-gold text-xs">{item.latin}</p>
                      <h3 class="font-serif font-bold text-codex-text">{item.title}</h3>
                    </div>
                  </div>
                  <p class="text-sm text-codex-text-dim leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <h2 class="font-serif text-2xl font-bold text-codex-text mb-8">{p.weekly.title}</h2>

          <div class="grid md:grid-cols-2 gap-6 mb-12">
            <div class="codex-card">
              <h3 class="font-serif font-bold text-codex-text mb-3">{p.weekly.refactoring.title}</h3>
              <ul class="space-y-2 text-sm text-codex-text-dim">
                {p.weekly.refactoring.items.map((item: any) => (
                  <li class="flex items-start gap-2" key={item.code}>
                    <span class="codex-code text-xs mt-0.5">{item.code}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="codex-card">
              <h3 class="font-serif font-bold text-codex-text mb-3">{p.weekly.retro.title}</h3>
              <p class="text-sm text-codex-text-dim mb-4">{p.weekly.retro.subtitle}</p>
              <div class="space-y-2">
                {p.weekly.retro.questions.map((q: string, i: number) => (
                  <div class={`flex items-center gap-3 p-2 rounded ${retroColors[i].bg} border ${retroColors[i].border}`} key={q}>
                    <span class={`${retroColors[i].iconColor} text-sm`}>{retroColors[i].icon}</span>
                    <span class="text-sm text-codex-text-dim">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sabbath */}
          <div class="codex-card border-codex-gold/20 bg-gradient-to-br from-codex-card to-codex-gold/5 mb-0">
            <div class="flex items-start gap-4">
              <span class="text-4xl">🫖</span>
              <div>
                <p class="codex-subheading mb-1">{p.sabbath.latin}</p>
                <h3 class="font-serif text-2xl font-bold text-codex-text mb-3">{p.sabbath.title}</h3>
                <p class="text-codex-text-dim leading-relaxed mb-4">
                  {p.sabbath.text}
                </p>
                <p class="text-codex-text-dim leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p.sabbath.allowed }}></p>
                <p class="font-mono text-codex-gold text-sm">
                  {p.sabbath.error}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Life Cycle Rituals */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.lifecycle.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-4">
            {p.lifecycle.title}
          </h2>
          <p class="codex-body text-codex-text-dim max-w-3xl mb-12">
            {p.lifecycle.subtitle}
          </p>

          <div class="space-y-4 max-w-3xl lg:max-w-4xl">
            {p.lifecycle.items.map((item: any) => (
              <div class="codex-card flex items-start gap-4" key={item.fn}>
                <code class={`font-mono text-sm font-bold ${item.color} shrink-0 mt-1`}>{item.fn}</code>
                <div>
                  <h4 class="font-serif font-bold text-codex-text">{item.title}</h4>
                  <p class="text-sm text-codex-text-dim mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Initiations */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.initiations.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-12">
            {p.initiations.title}
          </h2>

          <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {p.initiations.items.map((item: any) => {
              const c = initColorMap[item.color] || initColorMap.green;
              return (
                <div class="codex-card" key={item.num}>
                  <div class={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                    <span class={`font-mono ${c.text} text-sm`}>{item.num}</span>
                  </div>
                  <h3 class="font-serif font-bold text-codex-text mb-2">{item.title}</h3>
                  <p class="text-sm text-codex-text-dim">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Sacred Calendar */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.calendar.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-12">
            {p.calendar.title}
          </h2>

          <div class="space-y-3 max-w-3xl lg:max-w-4xl">
            {p.calendar.items.map((item: any) => (
              <div class="flex items-center gap-4 p-4 rounded-lg hover:bg-codex-card/50 transition-colors group" key={item.date}>
                <div class="shrink-0 w-20 text-right">
                  <span class="font-mono text-codex-gold text-xs">{item.date}</span>
                </div>
                <div class="w-px h-8 bg-codex-border shrink-0"></div>
                <div>
                  <p class="font-serif font-bold text-codex-text group-hover:text-white transition-colors">{item.name}</p>
                  <p class="text-xs text-codex-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Balance */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{p.balance.label}</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-codex-text mb-4">
            {p.balance.title}
          </h2>
          <blockquote class="codex-quote max-w-xl mb-12">
            {p.balance.quote}
          </blockquote>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="codex-card">
              <h3 class="font-serif font-bold text-codex-text mb-4">{p.balance.health.title}</h3>
              <ul class="space-y-3 text-sm text-codex-text-dim">
                {p.balance.health.items.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div class="codex-card">
              <h3 class="font-serif font-bold text-codex-text mb-4">{p.balance.refactoring.title}</h3>
              <p class="text-sm text-codex-text-dim mb-4">{p.balance.refactoring.subtitle}</p>
              <ul class="space-y-3 text-sm text-codex-text-dim">
                {p.balance.refactoring.questions.map((q: string) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
