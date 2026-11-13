"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Bot,
  Check,
  Cloud,
  Database,
  Github,
  GitPullRequest,
  Slack,
  Sparkles,
  Triangle,
  Webhook,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const planFeatures = [
  "Editor visual de workflows",
  "Integração GitHub e Slack",
  "Import de templates n8n",
  "Webhooks e API REST",
  "Logs e histórico de runs",
  "Suporte em português",
] as const;

type FlowTone = "neutral" | "violet" | "dark" | "emerald";

const flowSteps: { label: string; icon: LucideIcon; tone: FlowTone }[] = [
  { label: "PR aberto", icon: GitPullRequest, tone: "neutral" },
  { label: "IA revisa", icon: Sparkles, tone: "violet" },
  { label: "Avisa no Slack", icon: Slack, tone: "dark" },
  { label: "Deploy", icon: Triangle, tone: "emerald" },
];

const toneStyles: Record<FlowTone, string> = {
  neutral: "border border-slate-200 bg-white text-slate-700 shadow-sm",
  violet:
    "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-md shadow-violet-500/30",
  dark: "bg-slate-800 text-white shadow-md shadow-slate-900/20",
  emerald:
    "bg-gradient-to-r from-emerald-400 to-emerald-300 text-emerald-950 shadow-md shadow-emerald-500/25",
};

const integrations: { label: string; icon: LucideIcon }[] = [
  { label: "GitHub", icon: Github },
  { label: "Slack", icon: Slack },
  { label: "Vercel", icon: Triangle },
  { label: "Webhooks", icon: Webhook },
  { label: "Postgres", icon: Database },
  { label: "AWS", icon: Cloud },
];

const reportBars = [42, 58, 36, 72, 50, 90, 64];

function BentoCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border border-white bg-white/90 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(91,33,182,0.14)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-12px_rgba(91,33,182,0.22)] sm:p-7",
        className,
      )}
    >
      {children}
    </motion.article>
  );
}

function CardHeading({
  eyebrow,
  title,
  description,
  large = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  large?: boolean;
}) {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {eyebrow}
      </p>
      <h3
        className={cn(
          "mt-2 font-bold tracking-tight text-slate-900",
          large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
        )}
      >
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {description}
        </p>
      )}
    </>
  );
}

export function FeaturesBento() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-[#f8f7fc] to-[#f4f6fb] py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#4c1d95_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-emerald-200/30 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Tudo isso já vem{" "}
            <span className="relative inline-block">
              <span className="relative z-10">no plano</span>
              <span
                className="absolute inset-x-[-4px] bottom-1 z-0 h-3 -rotate-1 rounded-sm bg-violet-300/70 sm:h-4"
                aria-hidden
              />
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            O básico bem feito: conectar, automatizar e monitorar execuções sem
            taxas ocultas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <BentoCard className="md:col-span-8">
            <CardHeading
              eyebrow="Editor visual"
              title="Canvas sem código"
              description="Monte o fluxo vendo o caminho dos dados. Teste em sandbox, versione e publique quando estiver confiante."
              large
            />
            <div className="mt-auto pt-7">
              <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-violet-50/60 p-4 sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  {flowSteps.map((step, i) => (
                    <div
                      key={step.label}
                      className="flex items-center sm:flex-1 sm:last:flex-none"
                    >
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold sm:text-sm",
                          toneStyles[step.tone],
                        )}
                      >
                        <step.icon className="h-4 w-4" aria-hidden />
                        {step.label}
                      </span>
                      {i < flowSteps.length - 1 && (
                        <span
                          className="mx-2 hidden h-px min-w-3 flex-1 border-t border-dashed border-slate-300 sm:block"
                          aria-hidden
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span>on: pull_request → main</span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    publicado
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.06} className="md:col-span-4">
            <CardHeading eyebrow="Notificações" title="Onde seu time já está" />
            <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/50 p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 shadow-sm shadow-violet-500/40">
                  <Bot className="h-3.5 w-3.5 text-white" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  DevPulse
                </span>
                <span className="rounded bg-slate-200/80 px-1 text-[10px] font-semibold text-slate-600">
                  APP
                </span>
                <span className="ml-auto text-[11px] text-slate-400">14:32</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                <span className="mr-1 inline-flex rounded-full bg-emerald-100 px-1.5 text-[11px] font-semibold text-emerald-700">
                  Merged
                </span>
                <span className="font-semibold text-slate-900">PR #418</span> em
                produção. A IA aplicou 2 sugestões antes do merge.
              </p>
              <div className="mt-3 flex gap-1.5 text-xs">
                <span className="rounded-full border border-violet-200 bg-white px-2 py-0.5">
                  🚀 4
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5">
                  👀 1
                </span>
              </div>
            </div>
            <p className="mt-auto pt-4 text-sm text-slate-600">
              PR, merge e deploy no canal certo — sem bot caseiro que quebra todo
              mês.
            </p>
          </BentoCard>

          <BentoCard delay={0.1} className="min-h-[260px] md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Resultado
            </p>
            <p className="mt-3 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-600 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent">
              18h
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              economizadas por semana
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Média de times com 5+ workflows ativos.
            </p>
            <svg
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="bento-spark" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 50 C20 48 30 44 50 45 S80 36 100 34 S135 30 150 22 S180 14 200 8 L200 60 L0 60 Z"
                fill="url(#bento-spark)"
              />
              <path
                d="M0 50 C20 48 30 44 50 45 S80 36 100 34 S135 30 150 22 S180 14 200 8"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </BentoCard>

          <BentoCard delay={0.14} className="md:col-span-4">
            <CardHeading
              eyebrow="Relatórios por IA"
              title="Sabe onde trava antes de doer"
            />
            <div className="mt-auto pt-6">
              <div className="flex h-24 items-end gap-2">
                {reportBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                    className={cn(
                      "flex-1 rounded-t-md",
                      i === 5
                        ? "bg-gradient-to-t from-violet-600 to-fuchsia-400 shadow-md shadow-violet-500/30"
                        : "bg-violet-200/80",
                    )}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2 rounded-xl bg-violet-50 p-3 text-sm text-violet-900">
                <Sparkles
                  className="mt-0.5 h-4 w-4 shrink-0 text-violet-600"
                  aria-hidden
                />
                <span>Testes e2e 32% mais lentos na sexta. Paralelizar?</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.18} className="md:col-span-4">
            <CardHeading eyebrow="Integrações" title="Conecta com o seu stack" />
            <div className="mt-auto grid grid-cols-3 gap-2.5 pt-6">
              {integrations.map((item) => (
                <div
                  key={item.label}
                  className="group flex flex-col items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-2 py-3 text-[11px] font-medium text-slate-600 shadow-sm transition-colors hover:border-violet-200 hover:text-violet-700"
                >
                  <item.icon
                    className="h-5 w-5 text-slate-800 transition-colors group-hover:text-violet-600"
                    aria-hidden
                  />
                  {item.label}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              + 200 apps via n8n e API REST.
            </p>
          </BentoCard>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {planFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              <Check className="h-4 w-4 text-violet-600" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
