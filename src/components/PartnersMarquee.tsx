import { motion } from "framer-motion";
import gnosisLogo from "@/assets/partners/gnosis.png";
import celoLogo from "@/assets/partners/celo.png";
import rootstockLogo from "@/assets/partners/rootstock.png";
import scrollLogo from "@/assets/partners/scroll.png";
import zksyncLogo from "@/assets/partners/zksync.png";
import liskLogo from "@/assets/partners/lisk.png";
import safeLogo from "@/assets/partners/safe.png";
import uniswapLogo from "@/assets/partners/uniswap.png";
import safeFeaturedLogo from "@/assets/partners/safe-wallet.svg";
import uniswapFeaturedLogo from "@/assets/partners/uniswap-horizontal.svg";
import blockscoutLogo from "@/assets/partners/blockscout.png";
import chainlinkLogo from "@/assets/partners/chainlink.png";
import thegraphLogo from "@/assets/partners/thegraph.png";
import aaveLogo from "@/assets/partners/aave.png";
import compoundLogo from "@/assets/partners/compound.png";
import makerdaoLogo from "@/assets/partners/makerdao.png";
import oneinchLogo from "@/assets/partners/1inch.png";
import wirexLogo from "@/assets/partners/wirex.png";

const logos = [
  { name: "Safe", logo: safeLogo },
  { name: "Uniswap V3", logo: uniswapLogo },
  { name: "Gnosis", logo: gnosisLogo },
  { name: "Chainlink", logo: chainlinkLogo },
  { name: "The Graph", logo: thegraphLogo },
  { name: "Aave", logo: aaveLogo },
  { name: "Celo", logo: celoLogo },
  { name: "Compound", logo: compoundLogo },
  { name: "MakerDAO", logo: makerdaoLogo },
  { name: "1inch", logo: oneinchLogo },
  { name: "Rootstock", logo: rootstockLogo },
  { name: "Scroll", logo: scrollLogo },
  { name: "zkSync", logo: zksyncLogo },
  { name: "Lisk", logo: liskLogo },
];

const featured = [
  { name: "Safe Wallet", logo: safeFeaturedLogo, url: "https://safe.global/", heightClass: "h-10 md:h-12" },
  { name: "Uniswap", logo: uniswapFeaturedLogo, url: "https://app.uniswap.org/", heightClass: "h-10 md:h-12" },
  { name: "Blockscout", logo: blockscoutLogo, url: "https://www.blockscout.com/", heightClass: "h-8 md:h-10" },
  { name: "Wirex", logo: wirexLogo, url: "https://wirexapp.com/", heightClass: "h-5 md:h-6", filter: "invert(1)" },
];

const half = Math.ceil(logos.length / 2);
const logosRow1 = logos.slice(0, half);
const logosRow2 = logos.slice(half);

const Row = ({ duration, reverse = false, items }: { duration: number; reverse?: boolean; items: typeof logos }) => (
  <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {[...items, ...items, ...items, ...items].map((p, i) => (
        <div
          key={`${p.name}-${i}`}
          className="flex items-center gap-3 shrink-0 px-4"
          title={p.name}
        >
          <img
            src={p.logo}
            alt={`${p.name} logo`}
            className="h-14 w-14 object-contain rounded-full shadow-md shadow-black/20"
            style={(p as any).filter ? { filter: (p as any).filter } : undefined}
            loading="eager"
            decoding="sync"
            width={56}
            height={56}
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
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-center">
          <span className="gradient-text">Partners</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {featured.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className={`${p.heightClass} w-auto object-contain`}
                style={(p as any).filter ? { filter: (p as any).filter } : undefined}
                loading="eager"
                decoding="sync"
              />
              {p.name === "Uniswap" && (
                <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "#F50DB4" }}>
                  V3
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">We built on</p>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          An <span className="gradient-text">open ecosystem</span> of builders
        </h2>
      </div>
      <div className="space-y-4">
        <Row duration={45} items={logosRow1} />
        <Row duration={55} reverse items={logosRow2} />
      </div>
    </section>
  );
};

export default PartnersMarquee;