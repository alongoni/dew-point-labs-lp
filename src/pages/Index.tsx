import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import Partners from "@/components/Partners";
import PartnersMarquee from "@/components/PartnersMarquee";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PartnersMarquee />
      <div className="dark bg-background text-foreground">
        <Services />
      </div>
      <TrackRecord />
      <div className="dark bg-background text-foreground">
        <Partners />
      </div>
      <Testimonials />
      <div className="dark bg-background text-foreground">
        <CtaSection />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
