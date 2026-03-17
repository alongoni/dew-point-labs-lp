import logo from "@/assets/dpl-logo-white.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Dew Point Labs" className="h-10 opacity-60" />
            <p className="text-sm text-muted-foreground">
              Built on expertise. Sharpened by AI.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Dew Point Labs, originated from Protofire. 2026.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Brand Kit</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Media</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Contact</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
