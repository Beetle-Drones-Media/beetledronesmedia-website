import { useState } from "react";


function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
         <main className="relative w-full h-[100vh] min-h-[400px] overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          poster={`/heroSplashPoster.webp`}
        >
          <source src={`heroSplashVideo.webm`} type="video/webm" />
        
        </video>
          <a href="#about">
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