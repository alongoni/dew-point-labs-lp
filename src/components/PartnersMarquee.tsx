import { motion } from "framer-motion";
import gnosisLogo from "@/assets/partners/gnosis.png";
import celoLogo from "@/assets/partners/celo.png";
import rootstockLogo from "@/assets/partners/rootstock.png";
import scrollLogo from "@/assets/partners/scroll.png";
import zksyncLogo from "@/assets/partners/zksync.png";
import liskLogo from "@/assets/partners/lisk.png";
import safeLogo from "@/assets/partners/safe.png";
import uniswapLogo from "@/assets/partners/uniswap.png";
import blockscoutLogo from "@/assets/partners/blockscout.png";
import chainlinkLogo from "@/assets/partners/chainlink.png";
import thegraphLogo from "@/assets/partners/thegraph.png";
import aaveLogo from "@/assets/partners/aave.png";
import compoundLogo from "@/assets/partners/compound.png";
import makerdaoLogo from "@/assets/partners/makerdao.png";
import oneinchLogo from "@/assets/partners/1inch.png";

const logos = [
  { name: "Safe", logo: safeLogo },
  { name: "Uniswap", logo: uniswapLogo },
  { name: "Gnosis", logo: gnosisLogo },
  { name: "Chainlink", logo: chainlinkLogo },
  { name: "The Graph", logo: thegraphLogo },
  { name: "Aave", logo: aaveLogo },
  { name: "Celo", logo: celoLogo },
  { name: "Blockscout", logo: blockscoutLogo },
  { name: "Compound", logo: compoundLogo },
  { name: "MakerDAO", logo: makerdaoLogo },
  { name: "1inch", logo: oneinchLogo },
  { name: "Rootstock", logo: rootstockLogo },
  { name: "Scroll", logo: scrollLogo },
  { name: "zkSync", logo: zksyncLogo },
  { name: "Lisk", logo: liskLogo },
];

const featured = [
  { name: "Safe Wallet", logo: safeLogo, url: "https://safe.global/" },
  { name: "Uniswap", logo: uniswapLogo, url: "https://app.uniswap.org/" },
  { name: "Blockscout", logo: blockscoutLogo, url: "https://www.blockscout.com/" },
];

const Row = ({ duration, reverse = false }: { duration: number; reverse?: boolean }) => (
  <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {[...logos, ...logos].map((p, i) => (
        <div
          key={`${p.name}-${i}`}
          className="flex items-center gap-3 shrink-0 px-4"
          title={p.name}
        >
          <img
            src={p.logo}
            alt={`${p.name} logo`}
            className="h-14 w-14 object-contain"
          />
          <span className="text-base font-heading text-foreground/80">
            {p.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

const PartnersMarquee = () => {
  return (
    <section aria-label="Partners" className="relative py-20 border-y border-border/40 bg-muted/30">
      <div className="container mx-auto px-6 mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">Partners</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {featured.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={`${p.name} logo`}
              className="h-16 md:h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">We built on</p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            An <span className="gradient-text">open ecosystem</span> of builders
          </h2>
        </div>
        <p className="hidden md:block max-w-sm text-sm text-muted-foreground">
          Day-to-day collaborators across L1s, L2s, foundations, DAOs and protocols.
        </p>
      </div>
      <div className="space-y-4">
        <Row duration={45} />
        <Row duration={55} reverse />
      </div>
    </section>
  );
};

export default PartnersMarquee;