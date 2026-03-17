import { motion } from "framer-motion";

const categories = [
  {
    title: "Networks",
    logos: ["Gnosis", "Celo", "Rootstock", "Scroll", "zkSync", "Lisk", "Fuse", "Telos"],
  },
  {
    title: "Foundations / DAOs",
    logos: ["Safe", "Uniswap", "Blockscout", "Chainlink", "The Graph"],
  },
  {
    title: "Protocols",
    logos: ["Aave", "Compound", "MakerDAO", "1inch"],
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
              <div className="flex flex-wrap gap-4">
                {cat.logos.map((name) => (
                  <div
                    key={name}
                    className="rounded-lg bg-card/40 border border-border/40 px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-300"
                  >
                    {name}
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
