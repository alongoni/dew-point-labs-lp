import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Chains with Safe deployed and maintained" },
  { value: "10+", label: "Chains with Uniswap v3 official deployments" },
  { value: "8+", label: "Years shipping infrastructure at Protofire" },
  { value: "$2.35B+", label: "Cumulative TVL across deployed infrastructure" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-noise-bg">
      <div className="absolute inset-0 overflow-hidden grayscale opacity-60" aria-hidden="true">
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-foreground/5 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-foreground/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-foreground/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          <div className="lg:col-span-7 text-left">
            <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Protofire&apos;s <span className="gradient-text">R&amp;D and Infrastructure Lab.</span>
            </h1>

            <p className="mb-4 max-w-2xl text-lg text-muted-foreground">
              We deploy and maintain Web3 infrastructure for L1s, L2s, foundations, and DAOs.
            </p>
            <p className="mb-12 max-w-2xl text-lg font-bold text-foreground tracking-wide">
              Safe Wallet&nbsp;&nbsp;|&nbsp;&nbsp;Uniswap V3&nbsp;&nbsp;|&nbsp;&nbsp;Blockscout
            </p>

            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="rounded-full px-8 py-6 text-base">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="lg:col-span-5 hidden lg:block" aria-hidden="true">
            {/* Reserved space for product screenshots */}
            <div className="aspect-[4/5] w-full" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-20 mt-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-border bg-background/40 backdrop-blur-sm">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "p-6 md:p-8 flex flex-col justify-between min-h-[160px]",
                i < 2 ? "border-b lg:border-b-0" : "",
                i % 2 === 0 ? "border-r" : "",
                "lg:[&:not(:last-child)]:border-r",
              ].join(" ")}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground font-heading">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
