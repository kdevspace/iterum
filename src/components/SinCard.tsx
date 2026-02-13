interface SinCardProps {
  latin: string;
  name: string;
  description: string;
  antidote: string;
  antidoteLabel?: string;
}

export function SinCard({ latin, name, description, antidote, antidoteLabel = 'антидот' }: SinCardProps) {
  return (
    <div class="codex-card group hover:border-red-500/20">
      <p class="font-mono text-red-400/70 text-xs uppercase tracking-widest mb-2 group-hover:text-red-400 transition-colors">
        {latin}
      </p>
      <h4 class="font-serif text-lg font-bold text-codex-text mb-2">{name}</h4>
      <p class="text-sm text-codex-text-dim mb-4">{description}</p>
      <div class="flex items-start gap-2 pt-3 border-t border-codex-border/50">
        <span class="codex-code text-xs !text-codex-green shrink-0">{antidoteLabel}</span>
        <p class="text-xs text-codex-text-muted">{antidote}</p>
      </div>
    </div>
  );
}
