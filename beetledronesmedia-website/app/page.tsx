"use client"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";




export default function Page() {
  return (
    <>
    <main>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <HeroSection id="hero" />
     <AboutSection id="about" />
     {/* <PortfolioSection id="portfolio" />
     <ContactSection id="contact" /> */}
     <footer className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <p>
            ©2026 Beetle Drones Media. <br />
            All rights reserved. <br />
            Privacy Policy | Contact
          </p>
        </footer>
     </div>
    </main>
    </>
  );
}
