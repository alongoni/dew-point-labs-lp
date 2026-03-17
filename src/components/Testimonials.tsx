import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-8 w-8 text-primary/30 mx-auto mb-8" />

          <div className="h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8 italic">
                  "{testimonials[active].text}"
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground/70">{testimonials[active].author}</span>
                  {" · "}
                  {testimonials[active].org}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
