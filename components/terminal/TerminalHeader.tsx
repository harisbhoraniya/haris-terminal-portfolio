export function TerminalHeader() {
  return (
    <div className="flex items-center justify-between border-b border-ink/10 px-4 py-1.5 text-[11px] text-ink-muted">
      <span className="text-ink">┤ TERMINAL ├</span>
      <span className="text-ink-faint">PID 1337 · tty/1</span>
    </div>
  );
}
