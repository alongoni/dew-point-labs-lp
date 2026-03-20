import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Chains with Safe deployed and maintained" },
  { value: "10+", label: "Chains with Uniswap v3 official deployments" },
  { value: "8+", label: "Years shipping infrastructure at Protofire" },
  { value: "$2.35B+", label: "Cumulative TVL across deployed infrastructure" },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Track Record</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Numbers that <span className="gradient-text">speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-card/30 border border-border/40 p-8 text-center group-hover:border-primary/20 transition-all duration-500 gradient-border">
                <p className="text-5xl md:text-6xl font-black mb-4 text-white">{stat.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
