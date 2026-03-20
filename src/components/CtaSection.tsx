import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-card" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute inset-0 border border-border/50 rounded-2xl" />

          <div className="relative z-10 p-12 md:p-20 text-center min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Need something{" "}
              <span className="gradient-text">built right?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              We handle Safe, Uniswap v3, explorers, and custom infrastructure requests. If it runs on a chain and it needs to work, let's talk.
            </p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-full">
                Start building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
