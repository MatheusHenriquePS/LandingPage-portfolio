import { Building2, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { routes, site } from "@/lib/site";

export type Billing = "monthly" | "yearly";

export interface Plan {
  name: string;
  icon: LucideIcon;
  tagline: string;
  price: { monthly: number | null; yearly: number | null };
  priceNote: string;
  cta: { label: string; href: string };
  featuresTitle: string;
  features: string[];
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Starter",
    icon: Rocket,
    tagline: "Para projetos solo e side projects.",
    price: { monthly: 0, yearly: 0 },
    priceNote: "para sempre",
    cta: { label: "Começar grátis", href: routes.pricing },
    featuresTitle: "Inclui:",
    features: [
      "3 workflows ativos",
      "1.000 execuções/mês",
      "GitHub, Slack e webhooks",
      "Logs dos últimos 7 dias",
    ],
  },
  {
    name: "Pro",
    icon: Sparkles,
    tagline: "Para times que querem a IA no pipeline.",
    price: { monthly: 149, yearly: 119 },
    priceNote: "por mês, por workspace",
    cta: { label: "Testar 14 dias grátis", href: routes.pricing },
    featuresTitle: "Tudo do Starter, mais:",
    features: [
      "Workflows e execuções ilimitados",
      "Revisão de PR com IA contextual",
      "Relatórios semanais de gargalos",
      "Import de templates n8n",
      "Logs por 90 dias e retry automático",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    tagline: "Para empresas com requisitos de segurança.",
    price: { monthly: null, yearly: null },
    priceNote: "contrato anual",
    cta: {
      label: "Falar com vendas",
      href: `${site.mailto}?subject=${encodeURIComponent("DevPulse AI — Enterprise")}`,
    },
    featuresTitle: "Tudo do Pro, mais:",
    features: [
      "SSO/SAML e controle de acesso",
      "Runners self-hosted na sua VPC",
      "SLA de 99,99% e suporte dedicado",
      "Auditoria e retenção customizada",
    ],
  },
];

export const pricingGuarantees = [
  "14 dias grátis, sem cartão",
  "Cancele quando quiser",
  "Dados criptografados e LGPD",
] as const;
