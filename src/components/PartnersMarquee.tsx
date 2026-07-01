import { motion } from "framer-motion";
import safeFeaturedLogo from "@/assets/partners/safe-wallet.svg";
import uniswapFeaturedLogo from "@/assets/partners/uniswap-horizontal.svg";
import blockscoutLogo from "@/assets/partners/blockscout.png";
import wirexLogo from "@/assets/partners/wirex.png";

const logos = [
  { name: "Cronos", logo: "https://safe.protofire.io/logos/chains/25.png" },
  { name: "RSK", logo: "https://safe.protofire.io/logos/chains/30.png" },
  { name: "Telos", logo: "https://safe.protofire.io/logos/chains/40.png" },
  { name: "Shibuya", logo: "https://safe.protofire.io/logos/chains/81.png" },
  { name: "Manta Pacific", logo: "https://safe.protofire.io/logos/chains/169.svg" },
  { name: "Mint", logo: "https://safe.protofire.io/logos/chains/185.png" },
  { name: "TAC", logo: "https://safe.protofire.io/logos/chains/239.png" },
  { name: "Boba", logo: "https://safe.protofire.io/logos/chains/288.png" },
  { name: "Filecoin", logo: "https://safe.protofire.io/logos/chains/314.png" },
  { name: "zkSync", logo: "https://safe.protofire.io/logos/chains/324.png" },
  { name: "Shiden", logo: "https://safe.protofire.io/logos/chains/336.png" },
  { name: "Shape", logo: "https://safe.protofire.io/logos/chains/360.png" },
  { name: "Status Network Hoodi", logo: "https://safe.protofire.io/logos/chains/374.png" },
  { name: "Cronos zkEVM", logo: "https://safe.protofire.io/logos/chains/388.png" },
  { name: "Astar", logo: "https://safe.protofire.io/logos/chains/592.png" },
  { name: "Flow", logo: "https://safe.protofire.io/logos/chains/747.png" },
  { name: "Autonomys", logo: "https://safe.protofire.io/logos/chains/870.png" },
  { name: "Ault Blockchain", logo: "https://assets.safe.protofire.io/chains/904/chain_logo.jpg" },
  { name: "Mode", logo: "https://safe.protofire.io/logos/chains/919.png" },
  { name: "Stable", logo: "https://safe.protofire.io/logos/chains/988.png" },
  { name: "WEMIX3.0", logo: "https://safe.protofire.io/logos/chains/1111.png" },
  { name: "Lisk", logo: "https://safe.protofire.io/logos/chains/1135.png" },
  { name: "Moonbeam", logo: "https://safe.protofire.io/logos/chains/1284.png", bg: "#000" },
  { name: "Moonriver", logo: "https://safe.protofire.io/logos/chains/1285.png" },
  { name: "Moonbase", logo: "https://safe.protofire.io/logos/chains/1287.png" },
  { name: "Sei", logo: "https://safe.protofire.io/logos/chains/1329.png" },
  { name: "Vana", logo: "https://safe.protofire.io/logos/chains/1480.png" },
  { name: "Gravity", logo: "https://assets.safe.gravity.xyz/chains/1625/chain_logo.png" },
  { name: "Reya", logo: "https://safe.protofire.io/logos/chains/1729.png" },
  { name: "Metal L2", logo: "https://safe.protofire.io/logos/chains/1750.png" },
  { name: "Soneium", logo: "https://safe.protofire.io/logos/chains/1868.png" },
  { name: "Swellchain", logo: "https://safe.protofire.io/logos/chains/1923.png" },
  { name: "Kava", logo: "https://safe.protofire.io/logos/chains/2222.png" },
  { name: "TAC Saint Petersburg", logo: "https://safe.protofire.io/logos/chains/2390.png" },
  { name: "Abstract", logo: "https://safe.protofire.io/logos/chains/2741.png" },
  { name: "Morph", logo: "https://safe.protofire.io/logos/chains/2818.png" },
  { name: "Botanix", logo: "https://safe.protofire.io/logos/chains/3636.png" },
  { name: "Citrea", logo: "https://assets.safe.citrea.xyz/chains/4114/chain_logo.png" },
  { name: "Tempo", logo: "https://assets.safe.protofire.io/chains/4217/chain_logo.png" },
  { name: "Mantle", logo: "https://safe.protofire.io/logos/chains/5000.png" },
  { name: "Superseed", logo: "https://safe.protofire.io/logos/chains/5330.png" },
  { name: "Saga", logo: "https://assets.safe.saga.xyz/chains/5464/chain_logo.png" },
  { name: "MantraChain", logo: "https://assets.safe.protofire.io/chains/5888/chain_logo.png" },
  { name: "Mizuhiki Awaji", logo: "https://assets.safe.protofire.io/chains/6497/chain_logo.png" },
  { name: "Nibiru", logo: "https://safe.protofire.io/logos/chains/6900.png" },
  { name: "ZetaChain", logo: "https://safe.protofire.io/logos/chains/7000.png" },
  { name: "Cyber", logo: "https://safe.protofire.io/logos/chains/7560.png" },
  { name: "Arena-z", logo: "https://safe.protofire.io/logos/chains/7897.png" },
  { name: "Alpen", logo: "https://assets.safe.protofire.io/chains/8150/chain_logo.png" },
  { name: "Plasma", logo: "https://safe.protofire.io/logos/chains/9746.png" },
  { name: "Immutable zkEVM", logo: "https://safe.protofire.io/logos/chains/13371.png" },
  { name: "Oasis Sapphire", logo: "https://safe.protofire.io/logos/chains/23294.png" },
  { name: "Zilliqa", logo: "https://safe.protofire.io/logos/chains/32769.png" },
  { name: "ADI Network", logo: "https://assets.safe.adifoundation.ai/chains/36900/chain_logo.jpg" },
  { name: "EDU", logo: "https://safe.protofire.io/logos/chains/41923.png" },
  { name: "Etherlink", logo: "https://safe.protofire.io/logos/chains/42793.png" },
  { name: "Zircuit", logo: "https://safe.protofire.io/logos/chains/48900.png" },
  { name: "Sophon", logo: "https://safe.protofire.io/logos/chains/50104.png" },
  { name: "Ink", logo: "https://safe.protofire.io/logos/chains/57073.png" },
  { name: "Linea", logo: "https://safe.protofire.io/logos/chains/59144.png" },
  { name: "BOB", logo: "https://safe.protofire.io/logos/chains/60808.png" },
  { name: "Berachain", logo: "https://safe.protofire.io/logos/chains/80094.jpeg" },
  { name: "Blast", logo: "https://assets.safe.protofire.io/chains/81457/chain_logo.png" },
  { name: "Chiliz", logo: "https://safe.protofire.io/logos/chains/88888.png" },
  { name: "Taiko", logo: "https://assets.safe.taiko.xyz/chains/167000/chain_logo.png" },
  { name: "Moca Chain", logo: "https://assets.safe.protofire.io/chains/222888/chain_logo.jpg" },
  { name: "Scroll", logo: "https://safe.protofire.io/logos/chains/534352.png" },
  { name: "Hoodi", logo: "https://safe.protofire.io/logos/chains/560048.png" },
  { name: "Open Campus", logo: "https://safe.protofire.io/logos/chains/656476.png" },
  { name: "Xai", logo: "https://safe.protofire.io/logos/chains/660279.png" },
  { name: "Pharos", logo: "https://assets.safe.pharosnetwork.xyz/chains/688689/chain_logo.jpg" },
  { name: "Saakuru", logo: "https://safe.protofire.io/logos/chains/7225878.png" },
  { name: "Zora", logo: "https://safe.protofire.io/logos/chains/7777777.png" },
  { name: "zkLink Nova", logo: "https://safe.protofire.io/logos/chains/810180.png" },
  { name: "Auto-EVM Autonomys", logo: "https://safe.protofire.io/logos/chains/490000.png" },
  { name: "Ethereal", logo: "https://assets.safe.ethereal.trade/chains/5064014/chain_logo.png" },
  { name: "DogeOS Chikyū", logo: "https://assets.safe.protofire.io/chains/6281971/chain_logo.png" },
  { name: "Humanity", logo: "https://assets.safe.humanity.org/chains/6985385/chain_logo.png" },
  { name: "Harmony", logo: "https://safe.protofire.io/logos/chains/1666600000.png" },
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
          {(p as any).placeholder ? (
            <div className="h-14 w-14 rounded-full shadow-md shadow-black/20 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-bold text-foreground/80 border border-border/50">
              {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
          ) : (
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              className={`h-14 w-14 rounded-full shadow-md shadow-black/20 ${(p as any).crop ? "object-cover" : "object-contain"}`}
              style={{
                ...((p as any).filter ? { filter: (p as any).filter } : {}),
                ...((p as any).bg ? { backgroundColor: (p as any).bg } : {}),
              }}
              loading="eager"
              decoding="sync"
              width={56}
              height={56}
            />
          )}
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
                <span className="text-2xl md:text-3xl font-normal tracking-tight" style={{ color: "#F50DB4" }}>
                  V3
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          <span className="gradient-text">Chains</span> we deployed on
        </h2>
      </div>
      <div className="space-y-4">
        <Row duration={280} items={logosRow1} />
        <Row duration={320} reverse items={logosRow2} />
      </div>
    </section>
  );
};

export default PartnersMarquee;
