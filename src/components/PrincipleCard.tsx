interface PrincipleCardProps {
  number: string;
  latin: string;
  title: string;
  quote: string;
  description: string;
  practice?: string;
  ritual?: string;
  meditation?: string;
  practiceLabel?: string;
  ritualLabel?: string;
  meditationLabel?: string;
}

export function PrincipleCard({ number, latin, title, quote, description, practice, ritual, meditation, practiceLabel = 'практика', ritualLabel = 'ритуал', meditationLabel = 'медитация' }: PrincipleCardProps) {
  return (
    <article class="codex-card group">
      <div class="flex items-start gap-4 mb-4">
        <span class="font-serif text-4xl font-bold text-codex-gold/30 group-hover:text-codex-gold/60 transition-colors leading-none">
          {number}
        </span>
        <div>
          <p class="codex-subheading mb-1">{latin}</p>
          <h3 class="font-serif text-xl font-bold text-codex-text">{title}</h3>
        </div>
      </div>

      <blockquote class="codex-quote mb-4">
        {quote}
      </blockquote>

      <p class="codex-body text-codex-text-dim mb-6">
        {description}
      </p>

      <div class="space-y-3">
        {practice && (
          <div class="flex items-start gap-3">
            <span class="codex-code text-xs mt-0.5 shrink-0">{practiceLabel}</span>
            <p class="text-sm text-codex-text-dim">{practice}</p>
          </div>
        )}
        {ritual && (
          <div class="flex items-start gap-3">
            <span class="codex-code text-xs mt-0.5 shrink-0 !text-codex-blue">{ritualLabel}</span>
            <p class="text-sm text-codex-text-dim">{ritual}</p>
          </div>
        )}
        {meditation && (
          <div class="flex items-start gap-3">
            <span class="codex-code text-xs mt-0.5 shrink-0 !text-codex-gold">{meditationLabel}</span>
            <p class="text-sm text-codex-text-dim">{meditation}</p>
          </div>
        )}
      </div>
    </article>
  );
}
