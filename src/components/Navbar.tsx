import { Moon, Sun } from "lucide-react";
import logoLight from "@/assets/dpl-logo-white.svg";
import logoDark from "@/assets/dpl-logo-dark.svg";
import protofireLight from "@/assets/protofire.svg";
import protofireDark from "@/assets/protofire-dark.svg";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const logo = theme === "dark" ? logoLight : logoDark;
  const protofireLogo = theme === "dark" ? protofireLight : protofireDark;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const links = [
    { href: "#services", label: "Services" },
    { href: "#track-record", label: "Track Record" },
    { href: "#partners", label: "Partners" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center"
          >
            <img src={logo} alt="Dew Point Labs" className="h-11" />
          </a>
          <div className="hidden sm:flex items-center gap-2 text-muted-foreground/70">
            <span className="text-[12px] uppercase tracking-[0.15em]">Originated from</span>
            <img src={protofireLogo} alt="Protofire" className="h-[20px]" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
