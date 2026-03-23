import { motion } from "framer-motion";

// Simple inline SVG data URIs for each partner (monogram style)
const makeSvgLogo = (letter: string, color: string = "#888") =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="${color}" stroke-width="1.5"/><text x="20" y="25" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="${color}">${letter}</text></svg>`
  )}`;

const categories = [
  {
    title: "Networks",
    items: [
      { name: "Gnosis", logo: makeSvgLogo("G", "#3e6957") },
      { name: "Celo", logo: makeSvgLogo("C", "#35d07f") },
      { name: "Rootstock", logo: makeSvgLogo("R", "#ff9100") },
      { name: "Scroll", logo: makeSvgLogo("S", "#edcca2") },
      { name: "zkSync", logo: makeSvgLogo("zk", "#4e529a") },
      { name: "Lisk", logo: makeSvgLogo("L", "#0d47a1") },
      { name: "Fuse", logo: makeSvgLogo("F", "#b4f9ba") },
      { name: "Telos", logo: makeSvgLogo("T", "#571aff") },
    ],
  },
  {
    title: "Foundations / DAOs",
    items: [
      { name: "Safe", logo: makeSvgLogo("S", "#12ff80") },
      { name: "Uniswap", logo: makeSvgLogo("U", "#ff007a") },
      { name: "Blockscout", logo: makeSvgLogo("B", "#5c34a2") },
      { name: "Chainlink", logo: makeSvgLogo("CL", "#375bd2") },
      { name: "The Graph", logo: makeSvgLogo("TG", "#6747ed") },
    ],
  },
  {
    title: "Protocols",
    items: [
      { name: "Aave", logo: makeSvgLogo("A", "#b6509e") },
      { name: "Compound", logo: makeSvgLogo("C", "#00d395") },
      { name: "MakerDAO", logo: makeSvgLogo("M", "#1aaa9b") },
      { name: "1inch", logo: makeSvgLogo("1", "#d82122") },
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
