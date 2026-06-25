import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PartnersMarquee from "@/components/PartnersMarquee";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import dplDrop from "@/assets/dpl-drop.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PartnersMarquee />
      <div className="dark bg-background text-foreground">
        <Services />
      </div>
      <Testimonials />
      <div className="dark bg-background text-foreground relative overflow-hidden">
        <img
          src={dplDrop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-[10%] top-1/2 -translate-y-1/2 h-[140%] w-auto opacity-25 z-0"
        />
        <div className="relative z-10">
          <CtaSection />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
