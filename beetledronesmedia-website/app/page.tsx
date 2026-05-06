"use client"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FloatingButtons from "./components/FloatingButtons";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";
import ContentSamples from "./components/ContentSamples";
import Footer from "./components/Footer";



export default function Page() {
  return (
    <>
    <main className="h-screen overflow-hidden">
      <FloatingButtons id="floating buttons" />
    <div className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col dark:bg-black">
     
     <HeroSection id="hero" />
     <AboutSection id="about" />
     {/* <ContentSamples id="content" /> */}
     <PortfolioSection id="portfolio" />
     <ContactSection id="contact" />
     <Footer id="footer"/>
     </div>
    </main>
    
    </>
  );
}
