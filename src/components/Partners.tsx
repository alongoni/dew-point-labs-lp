import { motion } from "framer-motion";

import gnosisLogo from "@/assets/partners/gnosis.png";
import celoLogo from "@/assets/partners/celo.png";
import rootstockLogo from "@/assets/partners/rootstock.png";
import scrollLogo from "@/assets/partners/scroll.png";
import zksyncLogo from "@/assets/partners/zksync.png";
import liskLogo from "@/assets/partners/lisk.png";
import fuseLogo from "@/assets/partners/fuse.png";
import telosLogo from "@/assets/partners/telos.png";
import safeLogo from "@/assets/partners/safe.png";
import uniswapLogo from "@/assets/partners/uniswap.png";
import blockscoutLogo from "@/assets/partners/blockscout.png";
import chainlinkLogo from "@/assets/partners/chainlink.png";
import thegraphLogo from "@/assets/partners/thegraph.png";
import aaveLogo from "@/assets/partners/aave.png";
import compoundLogo from "@/assets/partners/compound.png";
import makerdaoLogo from "@/assets/partners/makerdao.png";
import oneinchLogo from "@/assets/partners/1inch.png";

const categories = [
  {
    title: "Networks",
    items: [
      { name: "Gnosis", logo: gnosisLogo },
      { name: "Celo", logo: celoLogo },
      { name: "Rootstock", logo: rootstockLogo },
      { name: "Scroll", logo: scrollLogo },
      { name: "zkSync", logo: zksyncLogo },
      { name: "Lisk", logo: liskLogo },
      { name: "Fuse", logo: fuseLogo },
      { name: "Telos", logo: telosLogo },
    ],
  },
  {
    title: "Foundations / DAOs",
    items: [
      { name: "Safe", logo: safeLogo },
      { name: "Uniswap", logo: uniswapLogo },
      { name: "Blockscout", logo: blockscoutLogo },
      { name: "Chainlink", logo: chainlinkLogo },
      { name: "The Graph", logo: thegraphLogo },
    ],
  },
  {
    title: "Protocols",
    items: [
      { name: "Aave", logo: aaveLogo },
      { name: "Compound", logo: compoundLogo },
      { name: "MakerDAO", logo: makerdaoLogo },
      { name: "1inch", logo: oneinchLogo },
    ],
  },
];

const Partners = () => {
  return (
    <section id="partners" className="relative py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Who we work with</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Trusted by <span className="gradient-text">ecosystems</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">{cat.title}</p>
              <div className="flex flex-wrap gap-6 items-center">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-none bg-card/40 border border-border/40 px-6 py-4 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="w-8 h-8 object-contain grayscale brightness-150 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-heading">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
