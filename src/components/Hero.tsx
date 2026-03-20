import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "100+", label: "Safe deployments" },
  { value: "10+", label: "Uniswap v3 chains" },
  { value: "20+", label: "Ecosystem partners" },
  { value: "8+", label: "Years in production" },
];

const Hero = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-24">
        <div className="max-w-4xl text-left">
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
            Protofire&apos;s <span className="gradient-text">R&amp;D and Infrastructure Lab.</span>
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            We deploy and maintain Web3 infrastructure for L1s, L2s, foundations, and DAOs. Safe Wallet and Uniswap v3
            deployments across 110+ chains, with AI-assisted workflows that improve delivery speed and accuracy.
          </p>

          <div className="mb-12 flex h-20 items-left justify-start">
            <div className="text-center">
              <p className="text-5xl md:text-6xl mb-4 text-white tabular-nums">{metrics[activeMetric].value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {metrics[activeMetric].label}
              </p>
            </div>
          </div>

          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="rounded-full px-8 py-6 text-base">
              Tell us about your project!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
