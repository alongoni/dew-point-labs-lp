import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden noise-overlay">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[400px] rounded-full bg-[hsl(var(--gradient-purple))] opacity-[0.07] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[hsl(var(--gradient-blue))] opacity-[0.05] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 mb-10"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
              Protofire's R&D and Infrastructure Lab
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.25rem] font-black leading-[1] tracking-tight mb-8"
            style={{ lineHeight: '0.95' }}
          >
            Protofire's{" "}
            <span className="gradient-text">R&D and Infrastructure Lab</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            We deploy and maintain Web3 infrastructure for L1s, L2s, foundations, and
            DAOs. Safe Wallet and Uniswap v3 deployments across 110+ chains, with
            AI-assisted workflows that improve delivery speed and accuracy.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-7 py-6 rounded-full">
                <ArrowUpRight className="mr-1.5 h-5 w-5" />
                Tell us about your project!
              </Button>
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Accepting new foundational partners
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
