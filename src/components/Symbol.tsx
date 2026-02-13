interface SymbolProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-3xl',
  lg: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-8xl',
};

export function Symbol({ size = 'md', animated = true }: SymbolProps) {
  return (
    <div class={`font-mono ${sizeClasses[size]} ${animated ? 'animate-float' : ''} select-none`}>
      <div class="flex flex-col items-center leading-none">
        <span class="text-codex-gold symbol-glow">&lt; &gt;</span>
        <span class="text-codex-blue symbol-glow">[&nbsp;&nbsp;&nbsp;]</span>
        <span class="text-codex-green symbol-glow">(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>
      </div>
    </div>
  );
}
