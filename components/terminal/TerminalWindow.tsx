"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { TerminalHeader } from "./TerminalHeader";
import { BootSequence } from "./BootSequence";
import { CommandChips } from "./CommandChips";
import { useCommandHistory } from "@/hooks/useCommandHistory";
import { COMMAND_CONFIRMATION, COMMAND_TO_VIEW, normalizeCommand } from "@/lib/commands";
import { HELP_ENTRIES } from "@/lib/content";
import { lineEntrance, panelEntrance } from "@/lib/motion";
import type { PreviewView, TerminalLine } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  onNavigate: (view: PreviewView) => void;
}

let lineIdCounter = 0;
function nextId() {
  lineIdCounter += 1;
  return `line-${lineIdCounter}`;
}

export function TerminalWindow({ onNavigate }: TerminalWindowProps) {
  const [booted, setBooted] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState("");

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { push, goBack, goForward } = useCommandHistory();

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
    });
  };

  const addLine = (kind: TerminalLine["kind"], content: string) => {
    setLines((prev) => [...prev, { id: nextId(), kind, content }]);
    scrollToBottom();
  };

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    push(trimmed);
    const key = normalizeCommand(trimmed);

    if (key === "clear") {
      setLines([]);
      return;
    }

    addLine("echo", trimmed);

    if (key === "help") {
      addLine("heading", "Available commands:");
      HELP_ENTRIES.forEach((h) => addLine("muted", `  ${h.cmd.padEnd(14)}${h.desc}`));
      onNavigate("help");
      return;
    }

    const confirmation = COMMAND_CONFIRMATION[key as keyof typeof COMMAND_CONFIRMATION];
    const view = COMMAND_TO_VIEW[key as keyof typeof COMMAND_TO_VIEW];

    if (confirmation && view) {
      addLine("amber", confirmation);
      onNavigate(view);
      return;
    }

    addLine(
      "error",
      `bash: ${trimmed}: command not found`
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = goBack();
      if (prev !== null) setInputValue(prev);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = goForward();
      if (next !== null) setInputValue(next);
    }
  };

  const [isTyping, setIsTyping] = useState(false);

  const simulateTyping = async (cmd: string) => {
    if (isTyping) return;
    setIsTyping(true);
    setInputValue("");
    
    // Type fast!
    for (let i = 0; i <= cmd.length; i++) {
      setInputValue(cmd.substring(0, i));
      await new Promise((r) => setTimeout(r, 15 + Math.random() * 30));
    }
    
    // Brief pause before hitting "Enter"
    await new Promise((r) => setTimeout(r, 150));
    runCommand(cmd);
    setInputValue("");
    setIsTyping(false);
  };

  const handleChipRun = (cmd: string) => {
    simulateTyping(cmd);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (booted) inputRef.current?.focus();
  }, [booted]);

  return (
    <motion.section
      variants={panelEntrance}
      initial="hidden"
      animate="show"
      custom={0}
      className="flex h-full flex-col overflow-hidden"
      aria-label="Interactive terminal"
    >
      <TerminalHeader />

      <div
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
        className="scrollbar-thin flex-1 overflow-y-auto px-4 pb-1.5 pt-3 font-mono text-[13px] leading-[1.65]"
      >
        {!booted ? (
          <BootSequence onDone={() => setBooted(true)} />
        ) : (
          <>
            {lines.map((line) => (
              <motion.div
                key={line.id}
                variants={lineEntrance}
                initial="hidden"
                animate="show"
                className={cn(
                  "mb-0.5 break-words",
                  line.kind === "echo" && "text-ink",
                  line.kind === "muted" && "text-ink-muted",
                  line.kind === "amber" && "text-ink",
                  line.kind === "error" && "text-traffic-red",
                  line.kind === "heading" && "mt-1 font-bold text-ink"
                )}
              >
                {line.kind === "echo" ? (
                  <>
                    <span className="text-ink-muted">root@kali</span>
                    <span className="text-ink-faint">:</span>
                    <span className="text-ink-muted">~</span>
                    <span className="text-ink-faint">$ </span>
                    <span className="text-ink">{line.content}</span>
                  </>
                ) : (
                  line.content
                )}
              </motion.div>
            ))}

            <div className="flex items-center py-1">
              <span className="flex-shrink-0 select-none">
                <span className="text-ink-muted">root@kali</span>
                <span className="text-ink-faint">:</span>
                <span className="text-ink-muted">~</span>
                <span className="text-ink-faint">$ </span>
              </span>
              <div className="relative min-w-0 flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-label="Terminal command input"
                  placeholder=""
                  className="w-full bg-transparent font-mono text-[13px] text-ink caret-transparent outline-none disabled:opacity-50"
                />
                {/* Invisible text measurer + blinking block cursor */}
                <span className="pointer-events-none absolute left-0 top-0 flex items-center font-mono text-[13px]">
                  <span className="invisible whitespace-pre">{inputValue}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block h-[18px] w-[8px] animate-blink bg-ink"
                  />
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <CommandChips onRun={handleChipRun} disabled={!booted || isTyping} />
    </motion.section>
  );
}
