import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Evidence from "@/components/sections/Evidence";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <Problem />
      <Features />
      <Evidence />
      <Pricing />
    </main>
  );
}
