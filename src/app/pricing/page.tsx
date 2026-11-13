import { Footer } from "@/components/layout/Footer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Pricing } from "@/components/sections/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Planos Starter, Pro e Enterprise da DevPulse AI. Comece grátis, teste o Pro por 14 dias sem cartão e economize 20% no plano anual.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FinalCta />
      <Faq />
      <Footer />
    </>
  );
}
