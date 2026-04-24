import { useState } from "react";


function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      <main className="relative">
        <video
          className="backgroundImage"
          autoPlay
          muted
          loop
          poster={`/heroSplashPoster.webp`}
        >
          <source src={`Palm-Springs-Drone-Video-Sky-Birds-Raven-Clouds.webm`} type="video/webm" />
        
        </video>
          <a href="/welcome-to-the-show">
          <img
            src={`/BeetleDronesBannerLogo1.png`}
            className={`bannerLogo w-80 h-auto absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2${logoHovered ? " logoNoAnim" : ""}`}
            alt=" Beetle Drones Media Banner Logo for Landing Page"
            onMouseEnter={() => setLogoHovered(true)}
          />
        </a>
      </main>
    </>
  );
}

export default HeroSection;