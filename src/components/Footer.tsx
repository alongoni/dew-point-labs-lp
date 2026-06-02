import logoWhite from "@/assets/dpl-logo-white.svg";
import protofireWhite from "@/assets/protofire.svg";
import dplDrop from "@/assets/dpl-drop.svg";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Multisig", href: "#services" },
      { label: "DEX deployments", href: "#services" },
      { label: "Explorers", href: "#services" },
      { label: "Lending", href: "#services" },
      { label: "Treasury", href: "#services" },
      { label: "Custom infra", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Track record", href: "#" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Brand assets",
        href: "https://drive.google.com/drive/folders/1Jk-0dE8DcLSiPTBJ-B2hfqYgvBkcBhAQ?usp=sharing",
        external: true,
      },
      { label: "Media", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "X (Twitter)", href: "https://x.com/DewPointLabs", external: true },
      { label: "GitHub", href: "#", external: true },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 pt-20 pb-10 overflow-hidden">
      <img
        src={dplDrop}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-[14%] top-1/2 -translate-y-1/2 h-[160%] w-auto opacity-20"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <img src={logoWhite} alt="Dew Point Labs" className="h-11 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Built on expertise. Sharpened by AI.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-heading">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground/90 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-[11px] uppercase tracking-[0.18em]">Originated from</span>
            <img src={protofireWhite} alt="Protofire" className="h-5 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Dew Point Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
