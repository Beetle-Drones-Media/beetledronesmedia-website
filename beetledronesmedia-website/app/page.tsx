// "use client"
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import FloatingButtons from "./components/FloatingButtons";
// import ContactSection from "./components/ContactSection";
// import PortfolioSection from "./components/PortfolioSection";
// import ContentSamples from "./components/ContentSamples";
// import Footer from "./components/Footer";



// export default function Page() {
//   return (
//     <>
//     <main>
//       <FloatingButtons id="floating buttons" />
//     <div className="h-full overflow-y-scroll flex flex-col dark:bg-black">
     
//      <HeroSection id="hero" />
//      <AboutSection id="about" />
//      {/* <ContentSamples id="content" /> */}
//      <PortfolioSection id="portfolio" />
//      <ContactSection id="contact" />
//      <Footer id="footer"/>
//      </div>
//     </main>
    
//     </>
//   );
// }


"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FloatingButtons from "./components/FloatingButtons";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);


export default function Page() {
  useEffect(() => {
    
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
      <>
    <FloatingButtons id="floating buttons" />
    {/* provides scroll distance only — no content */}
    <div style={{ height: "500vh" }} />
    {/* fixed layer — all sections stack here */}
    <div className="fixed inset-0">
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <PortfolioSection id="portfolio" />
      <ContactSection id="contact" />
      <Footer id="footer" />
    </div>
  </>
);
}