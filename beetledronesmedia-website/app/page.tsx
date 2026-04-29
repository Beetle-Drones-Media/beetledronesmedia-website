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
    <main>
    <div className="flex flex-col flex-1 dark:bg-black">
     <FloatingButtons id="floating buttons" />
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
