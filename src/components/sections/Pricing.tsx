"use client";

import { Container } from "@/components/ui/Container";
import { type Billing, type Plan, plans, pricingGuarantees } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, ShieldCheck, Undo2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const guaranteeIcons: LucideIcon[] = [CreditCard, Undo2, ShieldCheck];

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR");
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (billing: Billing) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Ciclo de cobrança"
      className="relative inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1"
    >
      {(["monthly", "yearly"] as const).map((option) => {
        const active = billing === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option)}
            className={cn(
              "relative z-10 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active ? "text-white" : "text-slate-400 hover:text-slate-200",
            )}
          >
            {active && (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-violet to-brand-electric shadow-lg shadow-brand-violet/30"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {option === "monthly" ? "Mensal" : "Anual"}
            {option === "yearly" && (
              <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                −20%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, billing, index }: { plan: Plan; billing: Billing; index: number }) {
  const price = plan.price[billing];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        "relative rounded-3xl",
        plan.highlighted
          ? "bg-gradient-to-b from-brand-violet-light via-brand-violet/60 to-brand-electric/40 p-px shadow-2xl shadow-brand-violet/20 lg:-my-4"
          : "border border-white/10",
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-violet to-brand-electric px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-brand-violet/40">
          Mais popular
        </span>
      )}

      <div
        className={cn(
          "flex h-full flex-col rounded-3xl p-6 sm:p-8",
          plan.highlighted ? "bg-[#0d1326] lg:py-12" : "bg-slate-900/50",
        )}
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              plan.highlighted
                ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/40"
                : "border border-white/10 bg-white/[0.04] text-slate-300",
            )}
          >
            <plan.icon className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
        </div>
        <p className="mt-3 text-sm text-slate-400">{plan.tagline}</p>

        <div className="mt-6 flex h-14 items-end gap-2">
          {price === null ? (
            <span className="text-4xl font-bold tracking-tight text-white">Sob consulta</span>
          ) : (
            <>
              <span className="pb-1.5 text-lg font-semibold text-slate-400">R$</span>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={price}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "text-5xl font-bold tracking-tight",
                    plan.highlighted ? "text-gradient" : "text-white",
                  )}
                >
                  {formatPrice(price)}
                </motion.span>
              </AnimatePresence>
            </>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-500">
          {billing === "yearly" && price !== null && price > 0 ? (
            <>
              por mês · <span className="text-emerald-300">cobrado anualmente</span>
            </>
          ) : (
            plan.priceNote
          )}
        </p>

        <Link
          href={plan.cta.href}
          className={cn(
            "mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
            plan.highlighted
              ? "bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-lg shadow-brand-violet/30 hover:brightness-110"
              : "border border-white/15 bg-white/[0.04] text-slate-100 hover:border-white/30 hover:bg-white/[0.08]",
          )}
        >
          {plan.cta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-8 border-t border-white/[0.06] pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {plan.featuresTitle}
          </p>
          <ul className="mt-4 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                <span
                  className={cn(
                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                    plan.highlighted
                      ? "bg-brand-violet/25 text-brand-violet-light"
                      : "bg-white/[0.06] text-slate-400",
                  )}
                >
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="plans" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-violet/10 blur-[140px]"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Comece grátis. <span className="text-gradient">Escale quando crescer.</span>
          </h1>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Planos simples, sem taxa de setup e sem surpresa na fatura.
          </p>
          <div className="mt-8">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} index={i} />
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {pricingGuarantees.map((label, i) => {
            const Icon = guaranteeIcons[i];
            return (
              <li key={label} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon className="h-4 w-4 text-brand-violet-light" aria-hidden />
                {label}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
