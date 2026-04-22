import { useState } from "react";


function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      <main>
        <nav>
          <a href="/welcome-to-the-show" className="skipButton">
            Skip
          </a>
        </nav>
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
            className={`bannerLogo${logoHovered ? " logoNoAnim" : ""}`}
            alt=" Beetle Drones Media Banner Logo for Landing Page"
            onMouseEnter={() => setLogoHovered(true)}
          />
        </a>
      </main>
    </>
  );
}

export default HeroSection;