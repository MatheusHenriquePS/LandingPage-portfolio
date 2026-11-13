"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "10k+", label: "Workflows executados" },
  { value: "99.9%", label: "Uptime garantido" },
  { value: "4.9/5", label: "Avaliação dos devs" },
] as const;

export function MetricsBar() {
  return (
    <section className="border-y border-white/5 bg-slate-950/50" aria-label="Métricas">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {metrics.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center px-6 py-10 text-center sm:py-12"
          >
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{item.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
