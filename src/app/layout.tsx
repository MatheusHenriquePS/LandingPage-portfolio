import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Automação de workflows com IA para devs`,
    template: `%s | ${site.name}`,
  },
  description:
    "Plataforma SaaS de automação inteligente: conecte APIs, configure IA contextual e execute workflows 24/7 com integração n8n, GitHub e Slack.",
  keywords: ["automação", "workflows", "IA", "desenvolvedores", "n8n", "SaaS", "DevOps"],
  openGraph: {
    title: `${site.name} — Inteligência Contextual para seu stack`,
    description:
      "Automatize pipelines, integre ferramentas e ganhe horas de dev toda semana.",
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
