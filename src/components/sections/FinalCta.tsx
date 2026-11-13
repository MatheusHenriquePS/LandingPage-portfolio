"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes, site } from "@/lib/site";
import { motion } from "framer-motion";
import { Check, Copy, TerminalSquare } from "lucide-react";
import { useState } from "react";

const INSTALL_COMMAND = "npx devpulse init";

const cliOutput = [
  "GitHub conectado (acme/api)",
  "3 workflows sugeridos pela IA",
  "pr-review publicado em produção",
] as const;

function InstallTerminal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1c] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">~/acme-api</span>
      </div>
      <div className="p-4 font-mono text-sm sm:p-5">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
          <code className="truncate text-slate-100">
            <span className="select-none text-brand-violet-light">$ </span>
            {INSTALL_COMMAND}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 transition-colors hover:border-white/25 hover:text-white"
            aria-label="Copiar comando de instalação"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden />
            )}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
        <ul className="mt-4 space-y-1.5 text-[13px]">
          {cliOutput.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25 }}
              className="flex items-center gap-2 text-slate-400"
            >
              <span className="text-emerald-400">✓</span>
              {line}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 lg:p-10"
        >
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-violet/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-violet-light/60 to-transparent"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-emerald-300">
                <TerminalSquare className="h-4 w-4" aria-hidden />
                setup em ~5 min
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Um comando e seu repositório{" "}
                <span className="text-gradient">já está automatizado.</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                A CLI conecta o GitHub, sugere workflows com base no seu código e publica o
                primeiro deles. Sem cartão de crédito.
              </p>
            </div>

            <InstallTerminal />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-14 grid gap-10 rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-white">
              Seu primeiro workflow pode ir pro ar{" "}
              <span className="text-gradient">hoje</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Crie a conta, escolha um template ou importe do n8n. Trial de 14 dias sem cartão.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              {["Onboarding guiado", "Docs em PT-BR", "Cancela quando quiser"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-violet-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Button href={routes.pricing} className="w-full py-3.5 text-base" showArrow>
              Criar conta gratuita
            </Button>
            <Button href={site.mailto} variant="secondary" className="w-full py-3.5 text-base">
              Falar com o time
            </Button>
            <p className="text-center text-xs text-slate-500">Seg–Sex, 9h–18h (BRT)</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
