import { motion } from "framer-motion";

const categories = [
  {
    title: "Networks",
    items: [
      { name: "Gnosis", logo: "https://cryptologos.cc/logos/gnosis-gno-gno-logo.svg" },
      { name: "Celo", logo: "https://cryptologos.cc/logos/celo-celo-logo.svg" },
      { name: "Rootstock", logo: "https://cryptologos.cc/logos/rsk-infrastructure-framework-rif-logo.svg" },
      { name: "Scroll", logo: "https://scroll.io/static/media/Scroll_Logomark.673577c8260b63ae56867bc9af6af514.svg" },
      { name: "zkSync", logo: "https://zksync.io/favicon.svg" },
      { name: "Lisk", logo: "https://cryptologos.cc/logos/lisk-lsk-logo.svg" },
      { name: "Fuse", logo: "https://cryptologos.cc/logos/fuse-network-fuse-logo.svg" },
      { name: "Telos", logo: "https://cryptologos.cc/logos/telos-tlos-logo.svg" },
    ],
  },
  {
    title: "Foundations / DAOs",
    items: [
      { name: "Safe", logo: "https://app.safe.global/images/safe-logo-green.png" },
      { name: "Uniswap", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg" },
      { name: "Blockscout", logo: "https://raw.githubusercontent.com/blockscout/frontend/main/public/static/icon.svg" },
      { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
      { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.svg" },
    ],
  },
  {
    title: "Protocols",
    items: [
      { name: "Aave", logo: "https://cryptologos.cc/logos/aave-aave-logo.svg" },
      { name: "Compound", logo: "https://cryptologos.cc/logos/compound-comp-logo.svg" },
      { name: "MakerDAO", logo: "https://cryptologos.cc/logos/maker-mkr-logo.svg" },
      { name: "1inch", logo: "https://cryptologos.cc/logos/1inch-1inch-logo.svg" },
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
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-7 h-7 object-contain grayscale brightness-200 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                    />
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
