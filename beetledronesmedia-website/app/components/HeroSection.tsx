// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// function HeroSection() {
//   const [logoHovered, setLogoHovered] = useState(false);
//   const logoRef = useRef<HTMLImageElement>(null);

//   // useEffect(() => {
//   //   gsap.from(logoRef.current, {
//   //     opacity: 0,
//   //     y: 40,
//   //     duration: 2,
//   //     ease: "power3.out",
//   //   });
//   // }, []);
// useEffect(() => {
//   gsap.to("#about", {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top top",
//     end: "bottom top",
//     scrub: true, 
//   },
// });
// });
  

//   return (
//     <>
//          <section id="hero" className="snap-start flex-shrink-0 relative w-full h-[100vh] min-h-[400px] overflow-hidden bg-black">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           playsInline
//           poster={`/heroSplashPoster.webp`}
//         >
//           <source src={`/heroSplashVideo.webm`} type="video/webm" />
        
//         </video>
//           <a href="#about">
//           <img
//             ref={logoRef}
//             src={`/BeetleDronesBannerLogo1.png`}
//             className={`bannerLogo w-80 h-auto absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2${logoHovered ? " logoNoAnim" : ""}`}
//             alt=" Beetle Drones Media Banner Logo for Landing Page"
//             onMouseEnter={() => setLogoHovered(true)}
//           />
//         </a>
//       </section>
//     </>
//   );
// }

// export default HeroSection;


"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  gsap.to(sectionRef.current, {
    opacity: 0,
    scrollTrigger: {
      trigger: document.body,
      start: "top top",                          // fade starts immediately on scroll
      end: () => `+=${window.innerHeight}`,      // fade ends after 1 screen of scroll
      scrub: true,
    },
  });
}, []);

  return (
    <section ref={sectionRef} id="hero" className="absolute inset-0 z-40 w-full overflow-hidden bg-black">
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