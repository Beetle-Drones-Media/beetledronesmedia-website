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
          <source src={`heroSplashVideo.webm`} type="video/webm" />
        
        </video>
          <a href="/welcome-to-the-show">
          <img
            src={`/BeetleDronesBannerLogo1.png`}
            className={`bannerLogo w-80 h-auto absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2${logoHovered ? " logoNoAnim" : ""}`}
            alt=" Beetle Drones Media Banner Logo for Landing Page"
            onMouseEnter={() => setLogoHovered(true)}
            // style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
        </a>
      </main>
    </>
  );
}

export default HeroSection;