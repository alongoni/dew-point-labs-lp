import { motion } from "framer-motion";
import { Shield, Repeat, Search, Wrench, Landmark, Link } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import safeLight from "@/assets/services/safe-wallet-light.svg";
import safeDark from "@/assets/services/safe-wallet-dark.svg";
import dexLight from "@/assets/services/dex-light.svg";
import dexDark from "@/assets/services/dex-dark.svg";
import explorerLight from "@/assets/services/explorer-light.svg";
import explorerDark from "@/assets/services/explorer-dark.svg";
import customLight from "@/assets/services/custom-light.svg";
import customDark from "@/assets/services/custom-dark.svg";
import lendingLight from "@/assets/services/lending-light.svg";
import lendingDark from "@/assets/services/lending-dark.svg";
import treasuryLight from "@/assets/services/treasury-light.svg";
import treasuryDark from "@/assets/services/treasury-dark.svg";

const services = [
  {
    icon: Shield,
    title: "Safe Wallet Deployment & Hosting",
    light: safeLight,
    dark: safeDark,
    desc: "Official Safe deployer, with 100+ chains supported. Contracts, backend infrastructure, and shared or whitelabel UI.",
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Repeat,
    title: "DEX Deployment & Support",
    light: dexLight,
    dark: dexDark,
    desc: "A trusted Uniswap v3 deployer on 10+ chains. Pool factory, liquidity infrastructure, canonical status support.",
    tagline: "Full deployment and support packages for EVM-based networks.",
  },
  {
    icon: Search,
    title: "Block Explorer & Customization",
    light: explorerLight,
    dark: explorerDark,
    desc: "Made with Blockscout. Contract verification, API configuration, custom frontend & backend, support for high-TPS chains.",
    tagline: "The tooling developers need when building on your chain.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    light: customLight,
    dark: customDark,
    desc: "We build on top of Safe, Uniswap, Compound, AAVE, and Blockscout — custom frontends, treasury tooling, execution layers.",
    tagline: "For (mostly) every need of your network, protocol, and idea.",
  },
  {
    icon: Landmark,
    title: "Lending Deployment & Support",
    light: lendingLight,
    dark: lendingDark,
    desc: "Based on Compound and AAVE. Permissionless borrowing & lending with dynamic interest rates and overcollateralized positions.",
    tagline: "Supporting your users in operating on your chain.",
  },
  {
    icon: Link,
    title: "On-Chain Financial Infrastructure",
    light: treasuryLight,
    dark: treasuryDark,
    desc: "On-chain treasury infrastructure built on Safe with native card integration, spending controls and operational payouts.",
    tagline: "All the needs for your on-chain treasury.",
  },
];

const Services = () => {
  const { theme } = useTheme();
  return (
    <section id="services" className="relative py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Infrastructure that <span className="gradient-text">just works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_hsl(var(--primary)/0.35)]"
            >
              <div className="relative aspect-[400/260] overflow-hidden border-b border-border/60 bg-muted/40">
                <img
                  src={theme === "dark" ? s.dark : s.light}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-3 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/70 backdrop-blur">
                    <s.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base md:text-lg font-bold leading-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/80 font-medium">{s.tagline}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
