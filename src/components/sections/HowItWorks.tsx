"use client";

import { motion } from "framer-motion";
import { Link2, Sliders, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Conecte suas ferramentas",
    description:
      "GitHub, Slack, Vercel e webhooks entram com OAuth ou chave — sem ficar caçando doc de cada API.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Monte o fluxo no canvas",
    description:
      "Arraste nós, defina condições e reutilize templates. Importe do n8n se já tiver algo rodando.",
    icon: Sliders,
  },
  {
    number: "03",
    title: "Publica e esquece o manual",
    description:
      "Runs agendados ou por evento, com log, retry e alerta quando precisar de intervenção humana.",
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Você configura uma vez.{" "}
            <span className="text-gradient">O resto é execução.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Três etapas diretas — do primeiro conector ao workflow em produção.
          </p>
        </motion.div>

        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-slate-900/35 p-6 sm:p-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-slate-950/50">
                  <step.icon className="h-5 w-5 text-sky-400" aria-hidden />
                </div>
                <p className="text-3xl font-bold text-brand-violet/70">{step.number}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
