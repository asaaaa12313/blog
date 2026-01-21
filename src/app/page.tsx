import Hero from "@/components/sections/Hero";
import PricingEmphasis from "@/components/sections/PricingEmphasis";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import FeatureDetails from "@/components/sections/FeatureDetails";
import ProgressCases from "@/components/sections/ProgressCases";
import CaseStudies from "@/components/sections/CaseStudies";
import Evidence from "@/components/sections/Evidence";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <PricingEmphasis />
      <Problem />
      <Features />
      <FeatureDetails />
      <ProgressCases />
      <CaseStudies />
      <Evidence />
      <Pricing />
    </main>
  );
}
