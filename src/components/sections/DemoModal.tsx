"use client";

import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  GitPullRequest,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  Slack,
  Sparkles,
  Triangle,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const STEP_DURATION_MS = 3200;

const steps: { id: string; label: string; detail: string; icon: LucideIcon }[] = [
  { id: "pr", label: "PR aberto", detail: "Trigger do GitHub", icon: GitPullRequest },
  { id: "review", label: "IA revisa", detail: "Análise contextual", icon: Sparkles },
  { id: "slack", label: "Avisa no Slack", detail: "#deploys", icon: Slack },
  { id: "deploy", label: "Deploy", detail: "Vercel · produção", icon: Triangle },
];

type StepStatus = "pending" | "running" | "done";

function PrPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-medium text-emerald-300">
          Open
        </span>
        acme/api · #418
      </div>
      <p className="text-lg font-semibold text-white">feat: rate limit no endpoint /checkout</p>
      <div className="flex items-center gap-3 text-sm text-slate-400">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-[11px] font-bold text-white">
          M
        </span>
        matheus quer fazer merge de 3 commits em <code className="text-slate-200">main</code>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-xs">
        <p className="text-slate-500">src/routes/checkout.ts</p>
        <p className="mt-2 text-emerald-400">+ import {"{ rateLimit }"} from &quot;@/lib/limits&quot;;</p>
        <p className="text-emerald-400">+ router.use(rateLimit({"{ max: 30 }"}));</p>
        <p className="text-rose-400">- router.use(legacyThrottle);</p>
      </div>
      <p className="text-xs text-slate-500">
        <span className="text-emerald-400">+128</span> <span className="text-rose-400">−14</span> ·
        4 arquivos alterados
      </p>
    </div>
  );
}

const suggestions = [
  "Faltou teste para o limite de 30 req/min. Gerei o caso em checkout.test.ts.",
  "legacyThrottle ainda é usado em /refund. Removi o import órfão.",
];

function ReviewPanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <Bot className="h-4 w-4 text-white" aria-hidden />
        </span>
        DevPulse AI analisou 4 arquivos com o contexto do repositório
      </div>
      {suggestions.map((text, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.7 }}
          className="rounded-lg border border-violet-400/20 bg-violet-500/[0.07] p-3 text-sm text-slate-200"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
            Sugestão {i + 1} · aplicada
          </p>
          {text}
        </motion.div>
      ))}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="flex items-center gap-2 text-sm text-emerald-300"
      >
        <Check className="h-4 w-4" aria-hidden />
        Aprovado · testes passando (42/42)
      </motion.p>
    </div>
  );
}

function SlackPanel() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-400">
        <span className="font-semibold text-slate-200"># deploys</span> · Slack
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 22 }}
        className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500">
            <Bot className="h-4 w-4 text-white" aria-hidden />
          </span>
          <span className="text-sm font-semibold text-white">DevPulse</span>
          <span className="rounded bg-white/10 px-1 text-[10px] font-semibold text-slate-300">
            APP
          </span>
          <span className="ml-auto text-xs text-slate-500">agora</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-200">
          ✅ <strong>PR #418</strong> aprovado pela IA com 2 sugestões aplicadas. Subindo para
          produção…
        </p>
        <div className="mt-3 flex gap-1.5 text-xs">
          <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-0.5">
            🚀 3
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">👀 1</span>
        </div>
      </motion.div>
    </div>
  );
}

const deployLogs = ["Build iniciado", "Testes e2e ok", "Edge functions publicadas", "DNS propagado"];

function DeployPanel() {
  return (
    <div className="space-y-4">
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400"
        />
      </div>
      <ul className="space-y-1.5 font-mono text-xs text-slate-400">
        {deployLogs.map((log, i) => (
          <motion.li
            key={log}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.5 }}
          >
            <span className="text-emerald-400">✓</span> {log}
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
        className="flex items-center justify-between rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-4 py-3"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live em produção
        </span>
        <span className="font-mono text-xs text-emerald-200/80">api.acme.dev · 47s</span>
      </motion.div>
    </div>
  );
}

const panels = [PrPanel, ReviewPanel, SlackPanel, DeployPanel];

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const restart = useCallback(() => {
    setStep(0);
    setFinished(false);
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (open) restart();
  }, [open, restart]);

  useEffect(() => {
    if (!open || !playing || finished) return;
    const timer = setTimeout(() => {
      if (step < steps.length - 1) setStep(step + 1);
      else {
        setFinished(true);
        setPlaying(false);
      }
    }, STEP_DURATION_MS);
    return () => clearTimeout(timer);
  }, [open, playing, finished, step]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const statusOf = (i: number): StepStatus => {
    if (i < step || (finished && i === step)) return "done";
    if (i === step) return "running";
    return "pending";
  };

  const goTo = (i: number) => {
    setStep(i);
    setFinished(false);
    setPlaying(false);
  };

  const ActivePanel = panels[step];
  const progress = finished ? 100 : (step / steps.length) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] shadow-2xl shadow-black/60"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <p id="demo-title" className="truncate font-mono text-xs text-slate-400">
                devpulse · acme/api · workflow <span className="text-slate-200">pr-review</span>
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="ml-auto rounded-md p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Fechar demonstração"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-0.5 bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-sky-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="grid flex-1 overflow-y-auto md:grid-cols-[240px_minmax(0,1fr)]">
              <ol className="flex gap-2 overflow-x-auto border-b border-white/[0.06] p-3 md:flex-col md:border-b-0 md:border-r md:p-4">
                {steps.map((s, i) => {
                  const status = statusOf(i);
                  return (
                    <li key={s.id} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                          i === step ? "bg-white/[0.06]" : "hover:bg-white/[0.03]",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                            status === "done" &&
                              "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
                            status === "running" &&
                              "border-violet-400/40 bg-violet-500/15 text-violet-300",
                            status === "pending" && "border-white/10 text-slate-500",
                          )}
                        >
                          {status === "done" ? (
                            <Check className="h-4 w-4" aria-hidden />
                          ) : status === "running" && playing ? (
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                          ) : (
                            <s.icon className="h-4 w-4" aria-hidden />
                          )}
                        </span>
                        <span className="hidden min-w-0 sm:block">
                          <span
                            className={cn(
                              "block text-sm font-medium",
                              status === "pending" ? "text-slate-500" : "text-white",
                            )}
                          >
                            {s.label}
                          </span>
                          <span className="block truncate text-xs text-slate-500">{s.detail}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="min-h-[340px] p-5 sm:p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ActivePanel />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] px-4 py-3 sm:px-5">
              {finished ? (
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:bg-white/10"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                  Repetir
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:bg-white/10"
                >
                  {playing ? (
                    <Pause className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    <Play className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {playing ? "Pausar" : "Continuar"}
                </button>
              )}
              <span className="text-xs text-slate-500">
                {finished ? "Workflow concluído em 47s" : `Etapa ${step + 1} de ${steps.length}`}
              </span>
              <a
                href={routes.pricing}
                onClick={onClose}
                className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-brand-violet px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110"
              >
                Testar no meu repositório
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
