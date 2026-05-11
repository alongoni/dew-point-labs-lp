import logoLight from "@/assets/dpl-logo-white.svg";
import logoDark from "@/assets/dpl-logo-dark.svg";
import protofireLight from "@/assets/protofire.svg";
import protofireDark from "@/assets/protofire-dark.svg";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoLight : logoDark;
  const protofireLogo = theme === "dark" ? protofireLight : protofireDark;
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Dew Point Labs" className="h-11" />
            <p className="text-md text-muted-foreground font-heading">Built on expertise. Sharpened by AI.</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <span className="text-[12px] uppercase tracking-[0.15em]">Originated from</span>
              <img src={protofireLogo} alt="Protofire" className="h-5" />
              <span>· 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://drive.google.com/drive/folders/1Jk-0dE8DcLSiPTBJ-B2hfqYgvBkcBhAQ?usp=sharing"
              target="_blank"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Brand Assets
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Media
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Contact
            </a>
            <a
              href="https://x.com/DewPointLabs"
              target="_blank"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
