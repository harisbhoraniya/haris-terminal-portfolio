"use client";

import { useState } from "react";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";
import { PreviewPanel } from "@/components/preview/PreviewPanel";
import type { PreviewView } from "@/lib/types";

export function PortfolioShell() {
  const [view, setView] = useState<PreviewView>("welcome");

  return (
    <div className="relative z-10 flex min-h-screen flex-col font-mono text-ink">
      {/* Top bar — looks like a real terminal title bar */}
      <div className="flex flex-shrink-0 items-center justify-between border-b border-ink/20 px-4 py-1.5 text-xs text-ink-muted">
        <span className="truncate pr-4">root@kali:~/haris-portfolio</span>
        <span className="text-ink-faint hidden sm:inline whitespace-nowrap">bash — 120×40</span>
      </div>

      {/* Main content — two panes side by side like tmux */}
      <div className="flex flex-1 max-[860px]:flex-col">
        {/* Left pane — terminal */}
        <div className="flex-1 border-r border-ink/10 max-[860px]:min-h-[65vh] max-[860px]:flex-none max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:border-ink/10">
          <TerminalWindow onNavigate={setView} />
        </div>

        {/* Right pane — output */}
        <div className="flex-1 max-[860px]:min-h-[85vh] max-[860px]:flex-none">
          <PreviewPanel view={view} />
        </div>
      </div>

      {/* Bottom status bar — like vim/tmux status line */}
      <div className="flex flex-shrink-0 items-center justify-between border-t border-ink/20 px-4 py-1 text-[10px] text-ink-muted">
        <span className="whitespace-nowrap">[0] 0:bash*</span>
        <span className="hidden text-ink-faint sm:inline">
          type &apos;help&apos; for commands · ↑/↓ for history
        </span>
        <span className="truncate pl-4 text-right">&quot;haris-portfolio&quot; 17:15 01-Jul-26</span>
      </div>
    </div>
  );
}
