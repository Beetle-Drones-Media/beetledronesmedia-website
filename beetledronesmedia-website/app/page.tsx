
"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FloatingButtons from "./components/FloatingButtons";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, TextPlugin);


export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);


    // Hero
    gsap.to("#hero", {
      scale: 5, opacity: 0,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: true,
      },
    });

    // About section
    gsap.to("#about", {
      opacity: 0,
      scrollTrigger: {
        trigger: document.body,
        start: () => `+=${window.innerHeight * 1.9}`,
        end: () => `+=${window.innerHeight * 2}`,
        scrub: true,
      },
    });

    // About search input text animation — needs id on the input (see Step 2)
    gsap.to("#fake-search-emgine", {
      duration: 2,
      text: "drone videography near me",
      ease: "none",
      delay: 0.5,
    });

    // // Portfolio
    // gsap.to("#portfolio", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: document.body,
    //     start: () => `+=${window.innerHeight * 3.9}`,
    //     end: () => `+=${window.innerHeight * 4}`,
    //     scrub: true,
    //   },
    // });

    gsap.fromTo("#portfolio",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: document.body,
      start: () => `+=${window.innerHeight * 3.9}`,
      end: () => `+=${window.innerHeight * 4}`,
      scrub: true,
    },
  }
);

// Contact
    gsap.to("#contact", {
      scrollTrigger: {
        trigger: document.body,
        start: () => `+=${window.innerHeight * 5.9}`,
        end: () => `+=${window.innerHeight * 6}`,
        scrub: true,
      },
    });


    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill()); // proper cleanup
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
      {/* <ContentSamples id="content" /> */}
      <ContactSection id="contact" />
    </div>
  </>
);
}