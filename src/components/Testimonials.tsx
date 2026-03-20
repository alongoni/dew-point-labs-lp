import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Dew Point Labs handled our Safe deployment across multiple environments with zero issues. They know the protocol inside out and communicate clearly throughout. Exactly the kind of partner you want for critical infrastructure.",
    author: "Head of Ecosystem",
    org: "L2 Network",
  },
  {
    text: "We needed Uniswap v3 live on our chain fast, with canonical status and full support. DPL delivered on all three. The process was smooth, and the team was responsive at every step.",
    author: "CTO",
    org: "L1 Foundation",
  },
  {
    text: "Most teams treat deployment as a checkbox. DPL treats it as infrastructure. There's a real difference in how they approach edge cases, and it showed.",
    author: "Technical Lead",
    org: "Protocol / DAO",
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
              <div className="flex flex-col h-full">
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-6 shrink-0" />
                <p className="text-foreground/90 leading-relaxed flex-1 mb-8">
                  "{t.text}"
                </p>
                <div className="border-t border-border/50 pt-4 mt-auto">
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">[{t.org}]</p>
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
