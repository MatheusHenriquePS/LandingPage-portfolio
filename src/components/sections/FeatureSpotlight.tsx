"use client";

import { LaptopMockup } from "@/components/sections/LaptopMockup";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileCode2, LayoutList, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SpotlightItem {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  iconClass: string;
  tagClass: string;
  glowClass: string;
}

const items: SpotlightItem[] = [
  {
    title: "O canvas te guia passo a passo",
    description:
      "Triggers, condições e ações visuais. Você enxerga o fluxo inteiro antes de colocar no ar.",
    tag: "Editor",
    icon: LayoutList,
    iconClass: "from-violet-500 to-fuchsia-500 shadow-violet-500/40",
    tagClass: "border-violet-400/20 bg-violet-400/10 text-violet-300",
    glowClass: "group-hover:border-violet-400/30 group-hover:shadow-violet-500/10",
  },
  {
    title: "Logs e alertas no lugar certo",
    description:
      "Cada execução fica registrada. Se algo quebrar, o Slack avisa — sem você ficar refreshando painel.",
    tag: "Observabilidade",
    icon: LineChart,
    iconClass: "from-sky-500 to-blue-600 shadow-sky-500/40",
    tagClass: "border-sky-400/20 bg-sky-400/10 text-sky-300",
    glowClass: "group-hover:border-sky-400/30 group-hover:shadow-sky-500/10",
  },
  {
    title: "Exemplos prontos para o seu stack",
    description:
      "Templates para GitHub, Vercel e webhooks. Copia, ajusta duas variáveis e publica.",
    tag: "Templates",
    icon: FileCode2,
    iconClass: "from-emerald-500 to-teal-600 shadow-emerald-500/40",
    tagClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    glowClass: "group-hover:border-emerald-400/30 group-hover:shadow-emerald-500/10",
  },
];

export function FeatureSpotlight() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0c1222] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                Do canvas ao ar{" "}
                <span className="text-gradient">em menos de um minuto</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">
                Sem YAML que ninguém mantém, sem script escondido na máquina de alguém. Você monta
                no editor, testa com um clique e a DevPulse roda e monitora por você.
              </p>
            </motion.div>

            <ul className="mt-10 space-y-3">
              {items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <div
                    className={cn(
                      "relative flex gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-4 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl sm:p-5",
                      item.glowClass,
                    )}
                  >
                    <span
                      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-1 ring-inset ring-white/20",
                        item.iconClass,
                      )}
                    >
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                        <p className="font-semibold text-white">{item.title}</p>
                        <span
                          className={cn(
                            "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            item.tagClass,
                          )}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <Button href={routes.pricing} showArrow className="px-6 py-3.5">
                Quero montar meu fluxo
              </Button>
            </motion.div>
          </div>

          <LaptopMockup />
        </div>
      </div>
    </section>
  );
}
