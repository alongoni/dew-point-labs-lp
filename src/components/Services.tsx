import { motion } from "framer-motion";
import { Shield, Repeat, Search, Link, Wrench } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Shield,
    title: "Safe Wallet Deployment & Hosting",
    desc: "The largest official Safe deployer, with 100+ chains supported. We deploy contracts, backend infrastructure, and deliver shared or whitelabel UI.",
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    num: "02",
    icon: Repeat,
    title: "Uniswap v3 Deployment & Hosting",
    desc: "A trusted Uniswap v3 deployer on 10+ chains. Full pool factory, liquidity infrastructure, canonical status support, as part of Protofire's shared UI or as a whitelabel solution.",
    tagline: "Full deployment and support packages for EVM-based networks.",
  },
  {
    num: "03",
    icon: Search,
    title: "Blockscout Deployment & Hosting",
    desc: "Contract verification, API configuration, custom frontend and backend features, non-EVM support for high-TPS and hybrid chains.",
    tagline: "The tooling developers need when building on your chain.",
  },
  {
    num: "04",
    icon: Link,
    title: "Hyperlink Bridge",
    desc: "Cross-chain asset transfers built for production environments. Hyperlink is DPL's bridging infrastructure layer: audited, configurable, and deployable as a whitelabel solution on any EVM-compatible network.",
    tagline: "",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Custom Solutions",
    desc: "Not every infrastructure need fits a standard deployment. We build on top of Safe, Uniswap v3, and Blockscout to deliver purpose-built solutions: custom frontends, protocol integrations, treasury tooling, and execution layers tailored to the chain's specific requirements.",
    tagline: "",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Infrastructure that{" "}
            <span className="gradient-text">just works</span>
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl bg-card/50 border border-border/50 p-8 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 md:w-72 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground">{service.num}</span>
                  <service.icon className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  {service.tagline && (
                    <p className="text-sm text-primary/70 mt-3 font-medium">{service.tagline}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-20 max-w-2xl mx-auto text-lg"
        >
          We integrate intelligent tooling into infrastructure workflows without compromising on reliability or security.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
