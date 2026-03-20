import { motion } from "framer-motion";
import { Shield, Repeat, Search, Link, Wrench } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Safe Wallet Deployment & Hosting",
    desc: "The largest official Safe deployer, with 100+ chains supported. We deploy contracts, backend infrastructure, and deliver shared or whitelabel UI.",
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Repeat,
    title: "Uniswap v3 Deployment & Hosting",
    desc: "A trusted Uniswap v3 deployer on 10+ chains. Full pool factory, liquidity infrastructure, canonical status support, as part of Protofire's shared UI or as a whitelabel solution.",
    tagline: "Full deployment and support packages for EVM-based networks.",
  },
  {
    icon: Search,
    title: "Blockscout Deployment & Hosting",
    desc: "Contract verification, API configuration, custom frontend and backend features, non-EVM support for high-TPS and hybrid chains.",
    tagline: "The tooling developers need when building on your chain.",
  },
  {
    icon: Link,
    title: "Hyperlink Bridge",
    desc: "Cross-chain asset transfers built for production environments. Hyperlink is DPL's bridging infrastructure layer: audited, configurable, and deployable as a whitelabel solution on any EVM-compatible network.",
    tagline: "",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: "Not every infrastructure need fits a standard deployment. We build on top of Safe, Uniswap v3, and Blockscout to deliver purpose-built solutions: custom frontends, protocol integrations, treasury tooling, and execution layers tailored to the chain's specific requirements.",
    tagline: "",
  },
];

const ServiceCard = ({ service, i, className = "" }: { service: typeof services[0]; i: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.08 }}
    className={`group relative rounded-xl bg-card/50 border border-border/50 p-8 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative z-10 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <service.icon className="h-5 w-5 text-primary/70 shrink-0" strokeWidth={1.5} />
        <h3 className="text-lg font-bold">{service.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
      {service.tagline && (
        <p className="text-sm text-primary/70 mt-1 font-medium">{service.tagline}</p>
      )}
    </div>
  </motion.div>
);

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

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>

        {/* Row 2: Custom Solutions 2/3 + Hyperlink Bridge 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard service={services[4]} i={4} className="md:col-span-2" />
          <ServiceCard service={services[3]} i={3} />
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
