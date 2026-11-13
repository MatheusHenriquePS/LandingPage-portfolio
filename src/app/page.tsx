import { Footer } from "@/components/layout/Footer";
import { FeatureSpotlight } from "@/components/sections/FeatureSpotlight";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { PricingTeaser } from "@/components/sections/PricingTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <HowItWorks />
      <FeatureSpotlight />
      <FeaturesBento />
      <PricingTeaser />
      <FinalCta />
      <Footer />
    </>
  );
}
