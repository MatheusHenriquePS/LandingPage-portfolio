"use client";

import { DemoModal } from "@/components/sections/DemoModal";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/site";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="pointer-events-none object-cover object-[25%_70%] brightness-[0.55] saturate-[0.8]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/65"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f172a] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_60%_30%,#000_30%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-10 h-[600px] w-[700px] rounded-full bg-brand-violet/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-40 h-[400px] w-[500px] rounded-full bg-brand-electric/10 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.15fr)] lg:gap-6 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.h1
            {...fadeUp(0.08)}
            className="text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.85rem] xl:text-[3.4rem]"
          >
            <span className="whitespace-nowrap">Seu time codando.</span>{" "}
            <span className="text-gradient block pb-1">A IA cuidando do resto.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0"
          >
            A primeira plataforma de automação com IA que conecta seu código, APIs e
            infraestrutura de forma inteligente.
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="mx-auto mt-8 max-w-md rounded-md border border-white/15 border-l-2 border-l-brand-violet-light bg-white/[0.06] px-5 py-3.5 text-left backdrop-blur-md lg:mx-0"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-200">
              Plano DevPulse Pro
            </p>
            <p className="mt-1 text-slate-200">
              A partir de{" "}
              <span className="text-3xl font-bold text-gradient">R$ 149</span>{" "}
              <span className="text-sm text-slate-400">/mês</span>
              <span className="ml-2 text-sm text-slate-400">· 14 dias grátis</span>
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.28)}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href={routes.pricing} showArrow className="rounded-md px-6 py-3.5 text-base">
              Teste Gratuito
            </Button>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.05] px-6 py-3.5 text-base font-semibold text-slate-100 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden />
              Ver Demonstração
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-r from-brand-electric/30 to-brand-violet/40 blur-[90px]"
            aria-hidden
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-devices.png"
              alt="Painel da DevPulse AI no notebook e no celular, com workflow de GitHub, IA e Slack"
              width={1476}
              height={1083}
              quality={90}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="relative h-auto w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>
      </div>

      <DemoModal open={demoOpen} onClose={closeDemo} />
    </section>
  );
}
