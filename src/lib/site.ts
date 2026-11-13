export const site = {
  name: "DevPulse AI",
  tagline: "Automação inteligente de workflows para equipes de engenharia.",
  email: "ola@devpulse.ai",
  mailto: "mailto:ola@devpulse.ai",
} as const;

export const routes = {
  home: "/",
  pricing: "/pricing",
  features: "/#features",
  howItWorks: "/#how-it-works",
  faq: "/pricing#faq",
} as const;

export const navLinks = [
  { href: routes.features, label: "Recursos" },
  { href: routes.howItWorks, label: "Como Funciona" },
  { href: routes.pricing, label: "Preços" },
] as const;

export const footerProductLinks = [
  { href: routes.features, label: "Recursos" },
  { href: routes.howItWorks, label: "Como funciona" },
  { href: routes.pricing, label: "Preços" },
] as const;

export const footerContactLinks = [
  { href: site.mailto, label: "Contato" },
  { href: routes.faq, label: "FAQ" },
] as const;
