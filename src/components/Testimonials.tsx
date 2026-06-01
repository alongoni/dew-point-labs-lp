import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Segment = { text: string; bold?: boolean };

const testimonials: {
  service: string;
  segments: Segment[];
  author: string;
  org: string;
  handle: string;
  url: string;
}[] = [
  {
    service: "Multisig",
    segments: [
      { text: "Dew Point Labs handled our Safe deployment across multiple environments with " },
      { text: "zero issues", bold: true },
      { text: ". They know the protocol inside out and communicate clearly throughout. " },
      { text: "Exactly the kind of partner you want for critical infrastructure.", bold: true },
    ],
    author: "Head of Ecosystem",
    org: "L2 Network",
    handle: "@l2network",
    url: "https://x.com/",
  },
  {
    service: "DEX",
    segments: [
      { text: "We needed Uniswap v3 live on our chain fast, with canonical status and full support. " },
      { text: "DPL delivered on all three.", bold: true },
      { text: " The process was smooth, and the team was responsive at every step." },
    ],
    author: "CTO",
    org: "L1 Foundation",
    handle: "@l1foundation",
    url: "https://x.com/",
  },
  {
    service: "Explorer",
    segments: [
      { text: "Most teams treat deployment as a checkbox. " },
      { text: "DPL treats it as infrastructure.", bold: true },
      { text: " There's a real difference in how they approach edge cases, and it showed." },
    ],
    author: "Technical Lead",
    org: "Protocol / DAO",
    handle: "@protocol",
    url: "https://x.com/",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            What our <span className="gradient-text">partners</span> say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-none bg-card border border-border/50 p-8 flex flex-col font-heading"
            >
              <span className="absolute top-6 right-6 text-xs font-black uppercase tracking-[0.18em] text-foreground">
                {t.service}
              </span>
              <div className="flex flex-col h-full">
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-6 shrink-0" />
                <p className="text-foreground/90 leading-relaxed flex-1 mb-8">
                  &ldquo;
                  {t.segments.map((s, idx) =>
                    s.bold ? (
                      <strong key={idx} className="font-bold text-foreground">{s.text}</strong>
                    ) : (
                      <span key={idx}>{s.text}</span>
                    )
                  )}
                  &rdquo;
                </p>
                <div className="border-t border-border/50 pt-4 mt-auto flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0 overflow-hidden border border-border/60">
                    <span className="text-sm font-bold text-foreground">
                      {t.author
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold uppercase tracking-widest text-foreground truncate">{t.author}</p>
                    <p className="text-xs text-muted-foreground truncate">[{t.org}]</p>
                  </div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.author} on X`}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.7 22H1.44l8.03-9.17L1 2h7.02l4.84 6.4L18.244 2Zm-2.4 18h1.9L7.27 4H5.26l10.584 16Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
