

"use client";
import { useState, useEffect, useRef } from "react";


function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);


  return (
    <section id="hero" className="absolute inset-0 z-40 w-full overflow-hidden bg-black">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted playsInline poster="/heroSplashPoster.webp">
        <source src="/heroSplashVideo.webm" type="video/webm" />
      </video>
      <a href="#about">
        <img
          src="/BeetleDronesBannerLogo1.png"
          className={`bannerLogo w-80 h-auto absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2${logoHovered ? " logoNoAnim" : ""}`}
          alt="Beetle Drones Media Banner Logo"
          onMouseEnter={() => setLogoHovered(true)}
        />
      </a>
    </section>
  );
}

export default HeroSection;