import { ComponentChildren } from 'preact';

interface TerminalProps {
  title?: string;
  children: ComponentChildren;
}

export function Terminal({ title = 'codex-digitalis', children }: TerminalProps) {
  return (
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-dot bg-red-500/80"></div>
        <div class="terminal-dot bg-yellow-500/80"></div>
        <div class="terminal-dot bg-green-500/80"></div>
        <span class="ml-3 text-xs text-codex-text-muted font-mono">{title}</span>
      </div>
      <div class="terminal-body">
        {children}
      </div>
    </div>
  );
}
