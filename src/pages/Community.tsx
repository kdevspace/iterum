import { useI18n } from '../i18n';

const roleColorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-codex-green/10', border: 'border-codex-green/20', text: 'text-codex-green' },
  blue: { bg: 'bg-codex-blue/10', border: 'border-codex-blue/20', text: 'text-codex-blue' },
  gold: { bg: 'bg-codex-gold/10', border: 'border-codex-gold/20', text: 'text-codex-gold' },
};

const onboardingColorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-codex-green/10', border: 'border-codex-green/30', text: 'text-codex-green' },
  blue: { bg: 'bg-codex-blue/10', border: 'border-codex-blue/30', text: 'text-codex-blue' },
  gold: { bg: 'bg-codex-gold/10', border: 'border-codex-gold/30', text: 'text-codex-gold' },
};

export function Community() {
  const { t } = useI18n();
  const c = t.community;

  return (
    <>
      <section class="codex-section-first">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{c.header.label}</p>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-codex-text mb-4">
            {c.header.title}
          </h1>
          <p class="codex-body text-codex-text-dim max-w-3xl mb-12">
            {c.header.subtitle}
          </p>

          {/* Discord CTA */}
          <div class="codex-card border-[#5865F2]/30 bg-gradient-to-br from-codex-card to-[#5865F2]/5 mb-12">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div class="shrink-0 w-14 h-14 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center">
                <svg class="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="font-serif text-2xl font-bold text-codex-text mb-2">{c.discord.title}</h2>
                <p class="text-codex-text-dim leading-relaxed">{c.discord.text}</p>
              </div>
              <a
                href="https://discord.gg/EZ6RXw7Ys9"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white font-mono text-sm font-bold transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                {c.discord.button}
              </a>
            </div>
          </div>

          {/* Organization Principle */}
          <div class="codex-card border-codex-indigo/20 bg-gradient-to-br from-codex-card to-codex-indigo/5 mb-12">
            <h2 class="font-serif text-2xl font-bold text-codex-text mb-4">{c.organization.title}</h2>
            <p class="text-codex-text-dim leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: c.organization.text }}></p>
            <div class="flex items-center gap-2 font-mono text-sm text-codex-indigo">
              <span>node_1</span>
              <span class="text-codex-border">⟷</span>
              <span>node_2</span>
              <span class="text-codex-border">⟷</span>
              <span>node_3</span>
              <span class="text-codex-border">⟷</span>
              <span>...</span>
            </div>
          </div>

          {/* Circles */}
          <h2 class="font-serif text-2xl font-bold text-codex-text mb-6">{c.circles.title}</h2>
          <p class="text-codex-text-dim mb-8 max-w-xl">
            {c.circles.subtitle}
          </p>

          {/* Roles */}
          <div class="grid md:grid-cols-3 gap-6 mb-10">
            {c.circles.roles.map((role: any) => {
              const clr = roleColorMap[role.color] || roleColorMap.green;
              return (
                <div class="codex-card" key={role.title}>
                  <div class={`w-10 h-10 rounded-lg ${clr.bg} border ${clr.border} flex items-center justify-center mb-4`}>
                    <span class={clr.text}>{role.icon}</span>
                  </div>
                  <h3 class="font-serif font-bold text-codex-text mb-2">{role.title}</h3>
                  <p class="text-sm text-codex-text-dim">
                    {role.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div class="p-4 rounded-lg bg-codex-card/50 border border-codex-border/50 text-center mb-0">
            <p class="font-serif italic text-codex-text-dim">
              {c.circles.leaderNote}
            </p>
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Joint Practices */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{c.jointPractices.label}</p>
          <h2 class="font-serif text-3xl font-bold text-codex-text mb-12">
            {c.jointPractices.title}
          </h2>

          <div class="grid md:grid-cols-2 gap-6 mb-0">
            {c.jointPractices.items.map((item: any) => (
              <div class="codex-card" key={item.title}>
                <h3 class="font-serif font-bold text-codex-text mb-2">{item.title}</h3>
                <p class="text-sm text-codex-text-dim">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Onboarding */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{c.onboarding.label}</p>
          <h2 class="font-serif text-3xl font-bold text-codex-text mb-12">
            {c.onboarding.title}
          </h2>

          <div class="space-y-6 max-w-3xl lg:max-w-4xl">
            {c.onboarding.steps.map((step: any) => {
              const clr = onboardingColorMap[step.color] || onboardingColorMap.green;
              return (
                <div class="flex items-start gap-6" key={step.num}>
                  <div class={`shrink-0 w-12 h-12 rounded-full ${clr.bg} border ${clr.border} flex items-center justify-center`}>
                    <span class={`font-mono ${clr.text} text-sm font-bold`}>{step.num}</span>
                  </div>
                  <div>
                    <h3 class={`font-mono ${clr.text} font-bold mb-1`}>{step.cmd}</h3>
                    <p class="text-codex-text-dim">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Anti-patterns */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{c.antiPatterns.label}</p>
          <h2 class="font-serif text-3xl font-bold text-codex-text mb-4">
            {c.antiPatterns.title}
          </h2>
          <p class="codex-body text-codex-text-dim max-w-3xl mb-12">
            {c.antiPatterns.subtitle}
          </p>

          <div class="space-y-3 max-w-3xl lg:max-w-4xl">
            {c.antiPatterns.items.map((item: any) => (
              <div class="flex items-start gap-4 p-4 rounded-lg bg-codex-card/50 border border-codex-border/50" key={item.text}>
                <span class="text-lg shrink-0">{item.icon}</span>
                <div>
                  <p class="font-serif font-bold text-codex-text">{item.text}</p>
                  <p class="text-sm text-codex-text-dim mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="codex-divider codex-container my-2"></div>

      {/* Conflict Protocol */}
      <section class="codex-section">
        <div class="codex-container">
          <p class="codex-subheading mb-4">{c.conflict.label}</p>
          <h2 class="font-serif text-3xl font-bold text-codex-text mb-12">
            {c.conflict.title}
          </h2>

          <div class="max-w-3xl lg:max-w-4xl space-y-4">
            <div class="codex-card border-l-4 border-l-codex-green">
              <code class="font-mono text-codex-green text-sm">try</code>
              <p class="text-codex-text-dim mt-2">{c.conflict.tryStep}</p>
            </div>
            <div class="codex-card border-l-4 border-l-codex-blue">
              <code class="font-mono text-codex-blue text-sm">catch</code>
              <p class="text-codex-text-dim mt-2">{c.conflict.catchStep}</p>
            </div>
            <div class="codex-card border-l-4 border-l-codex-gold">
              <code class="font-mono text-codex-gold text-sm">finally</code>
              <p class="text-codex-text-dim mt-2">{c.conflict.finallyStep}</p>
            </div>
            <div class="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
              <code class="font-mono text-red-400 text-sm">// NEVER:</code>
              <p class="text-codex-text-dim mt-2">{c.conflict.neverStep}</p>
            </div>
          </div>

          <blockquote class="codex-quote max-w-xl mt-8">
            {c.conflict.quote}
          </blockquote>
        </div>
      </section>

      {c.speech && (
        <>
          <div class="codex-divider codex-container my-2"></div>
          <section class="codex-section">
            <div class="codex-container">
              <p class="codex-subheading mb-4">{c.speech.label}</p>
              <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">
                {c.speech.title}
              </h2>
              <p class="codex-body text-codex-text-dim max-w-3xl">
                {c.speech.text}
              </p>
            </div>
          </section>
        </>
      )}

      {c.amendment && (
        <>
          <div class="codex-divider codex-container my-2"></div>
          <section class="codex-section">
            <div class="codex-container">
              <p class="codex-subheading mb-4">{c.amendment.label}</p>
              <h2 class="font-serif text-3xl font-bold text-codex-text mb-6">
                {c.amendment.title}
              </h2>
              <p class="codex-body text-codex-text-dim max-w-3xl mb-8">
                {c.amendment.text}
              </p>
              <div class="space-y-4 max-w-3xl lg:max-w-4xl">
                {c.amendment.steps.map((step: { n: string; text: string }) => (
                  <div class="flex items-start gap-4" key={step.n}>
                    <span class="font-mono text-codex-gold text-sm shrink-0 mt-1">{step.n}</span>
                    <p class="text-codex-text-dim">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
