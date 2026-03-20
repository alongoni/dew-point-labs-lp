import { motion } from "framer-motion";
import { Shield, Repeat, Search, Wrench, Landmark, Link } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Safe Wallet Deployment and Hosting",
    desc: (
      <>
        The <strong>largest official Safe deployer</strong>, with 100+ chains supported. We deploy official contracts,
        backend infrastructure, and deliver shared or whitelabel UI.{" "}
        <strong>The complete multisig setup for any chain, production-ready.</strong>
      </>
    ),
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Repeat,
    title: "DEX Deployment and Support",
    desc: (
      <>
        A <strong>trusted Uniswap v3 deployer</strong> on 10+ chains. Full pool factory, liquidity infrastructure,
        canonical status support, as <strong>part of Protofire's shared UI or as a whitelabel solution</strong>. Full
        deployment and support packages for EVM-based networks.
      </>
    ),
    tagline: "Full deployment and support packages for EVM-based networks.",
  },
  {
    icon: Search,
    title: "Block Explorer Deployment, Support and Deep Customization",
    desc: (
      <>
        Made with Blockscout.{" "}
        <strong>
          Contract verification, API configuration, custom frontend and backend features, cost-efficient support for
          high-TPS and hybrid chains.
        </strong>{" "}
        Essential tooling for users, developers and protocols on your chain.
      </>
    ),
    tagline: "The tooling developers need when building on your chain.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: (
      <>
        Not every infrastructure need fits a standard deployment. We build on top of Safe, Uniswap, Compound, AAVE, and
        Blockscout to deliver purpose-built solutions: custom frontends, protocol integrations, treasury tooling, and
        execution layers tailored to the chain's specific requirements.
      </>
    ),
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Landmark,
    title: "Lending Deployment, Management and Support",
    desc: (
      <>
        <strong>Based on Compound and AAVE solutions</strong>, we enable permissionless borrowing and lending with high
        capital efficiency.{" "}
        <strong>
          Support for dynamic interest rate models, overcollateralized positions, and seamless liquidity provisioning.
        </strong>
      </>
    ),
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
  {
    icon: Link,
    title: "On-Chain Financial Infrastructure",
    desc: (
      <>
        On-chain treasury infrastructure built on Safe, with native support for card integration.{" "}
        <strong>
          Covers multi-sig treasury setup, on-chain spending controls, and operational payouts through card solutions.
        </strong>
      </>
    ),
    tagline: "The complete multisig setup for any chain, production-ready.",
  },
];

const ServiceCard = ({
  service,
  i,
  className = "",
}: {
  service: (typeof services)[0];
  i: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.08 }}
    className={`group relative rounded-none bg-card/50 border border-border/50 p-8 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <service.icon className="h-5 w-5 text-primary/70 shrink-0" strokeWidth={1.5} />
        <h3 className="text-lg font-bold">{service.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
      {service.tagline && <p className="text-sm text-primary/70 mt-1 font-medium">{service.tagline}</p>}
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
            Infrastructure that <span className="gradient-text">just works</span>
          </h2>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(3, 6).map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
