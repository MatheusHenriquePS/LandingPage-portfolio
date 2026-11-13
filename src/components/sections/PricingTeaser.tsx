"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/site";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const perks = [
  "14 dias grátis, sem cartão",
  "Plano Starter para projetos solo",
  "Escala para times ilimitados",
] as const;

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Comece grátis. Escale quando o time crescer.
              </h2>
              <p className="mt-3 text-slate-400">
                Starter a partir de <span className="font-semibold text-white">R$ 0/mês</span>.
                Pro com IA avançada e SLA a partir de{" "}
                <span className="font-semibold text-white">R$ 149/mês</span>.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-brand-violet-light" aria-hidden />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button href={routes.pricing} showArrow className="mt-6 w-full sm:w-auto">
                Ver planos completos
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
