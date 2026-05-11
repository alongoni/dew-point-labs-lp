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
      <Services />
      <TrackRecord />
      <Partners />
      <Testimonials />
      <CtaSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
