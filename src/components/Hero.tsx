import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[hsl(25,92%,65%)] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(270,28%,36%)] opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[hsl(245,64%,55%)] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Protofire's R&D and Infrastructure Lab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8"
          >
            We deploy and maintain{" "}
            <span className="gradient-text">core Web3 infrastructure</span>{" "}
            for L1s, L2s, foundations, and DAOs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mb-12"
          >
            Safe Wallet and Uniswap v3 deployments across 120+ chains.
          </motion.p>

          {/* Rotating metric */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-20 flex items-center justify-center mb-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-black gradient-text">
                  {metrics[activeMetric].value}
                </span>
                <p className="text-muted-foreground text-sm mt-2 uppercase tracking-widest">
                  {metrics[activeMetric].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-full">
                Start building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
