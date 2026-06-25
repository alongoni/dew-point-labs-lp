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
  avatar: string;
}[] = [
  {
    service: "Stable",
    segments: [
      { text: "Protofire has been a " },
      { text: "solid partner for Stable", bold: true },
      { text: " across both protocol work and product development. The team is reliable, detail oriented, and easy to work with, which has made it easier for us to " },
      { text: "move quickly where needed", bold: true },
      { text: ", especially as we scale core infrastructure." },
    ],
    author: "Brian Mehler, CEO",
    org: "Stable",
    handle: "@Stable",
    url: "https://x.com/Stable",
    avatar: "https://unavatar.io/x/Stable",
  },
  {
    service: "Mantra",
    segments: [
      { text: "Protofire has delivered " },
      { text: "awesome quality of code, on schedule", bold: true },
      { text: ", and been amazing at post-launch bug fixes. Protofire has " },
      { text: "amazing quality engineers and PMs", bold: true },
      { text: " who followed our requests and helped us throughout the whole development and deployment process." },
    ],
    author: "James Birney, CPO & Interim-COO",
    org: "Mantra",
    handle: "@MANTRA_Chain",
    url: "https://x.com/MANTRA_Chain",
    avatar: "https://unavatar.io/x/MANTRA_Chain",
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
            What our <span className="gradient-text">customers</span> say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <img
                    src={t.avatar}
                    alt={`${t.author} avatar`}
                    className="h-10 w-10 rounded-full shrink-0 object-cover border border-border/60"
                    loading="lazy"
                  />
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
