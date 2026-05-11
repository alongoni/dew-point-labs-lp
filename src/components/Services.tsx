import { motion } from "framer-motion";
import { Shield, Repeat, Search, Wrench, Landmark, Link } from "lucide-react";
import safeImg from "@/assets/services/safe-wallet.jpg";
import dexImg from "@/assets/services/dex.jpg";
import explorerImg from "@/assets/services/explorer.jpg";
import customImg from "@/assets/services/custom.jpg";
import lendingImg from "@/assets/services/lending.jpg";
import treasuryImg from "@/assets/services/treasury.jpg";

const services = [
  {
    icon: Shield,
    title: "Safe Wallet Deployment & Hosting",
    image: safeImg,
    desc: "Official Safe deployer, with 100+ chains supported. Contracts, backend infrastructure, and shared or whitelabel UI.",
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Repeat,
    title: "DEX Deployment & Support",
    image: dexImg,
    desc: "A trusted Uniswap v3 deployer on 10+ chains. Pool factory, liquidity infrastructure, canonical status support.",
    tagline: "Full deployment and support packages for EVM-based networks.",
  },
  {
    icon: Search,
    title: "Block Explorer & Customization",
    image: explorerImg,
    desc: "Made with Blockscout. Contract verification, API configuration, custom frontend & backend, support for high-TPS chains.",
    tagline: "The tooling developers need when building on your chain.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    image: customImg,
    desc: "We build on top of Safe, Uniswap, Compound, AAVE, and Blockscout — custom frontends, treasury tooling, execution layers.",
    tagline: "For (mostly) every need of your network, protocol, and idea.",
  },
  {
    icon: Landmark,
    title: "Lending Deployment & Support",
    image: lendingImg,
    desc: "Based on Compound and AAVE. Permissionless borrowing & lending with dynamic interest rates and overcollateralized positions.",
    tagline: "Supporting your users in operating on your chain.",
  },
  {
    icon: Link,
    title: "On-Chain Financial Infrastructure",
    image: treasuryImg,
    desc: "On-chain treasury infrastructure built on Safe with native card integration, spending controls and operational payouts.",
    tagline: "All the needs for your on-chain treasury.",
  },
];

const cardSpans = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
];

const Services = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_hsl(var(--primary)/0.35)] ${cardSpans[i]}`}
            >
              <div className="absolute inset-0">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/10" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6 md:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/70 backdrop-blur">
                    <s.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base md:text-lg font-bold leading-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{s.desc}</p>
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
