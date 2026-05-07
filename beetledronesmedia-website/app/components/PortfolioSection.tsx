'use client'
import { useState, useEffect, useRef } from "react";
import gsap from "gsap"; 

function Header({ children }) {
  return <h2 className="text-6xl text-stroke font-bold mb-4 text-green-400 text-center">{children}</h2>;
}

function PortfolioSection(){

    /**
     * 
     * TODO Portfolio Section appears ONLY when scrolled to. Scrolling goes horizontally through the portfolio.
     *          When it reaches the end, it goes to the next area
     */

   const portfolio = ["ocean-waves-california-coast.webm", "Christian-Science-Building-Montage.webm", "Drone-Venice-Beach-Muscle-Beach-Santa-Monica-California.webm"];

   const [current, setCurrent] = useState(0);

   const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  gsap.to(sectionRef.current, {
    opacity: 0,
    scrollTrigger: {
      trigger: document.body,
      start: () => `+=${window.innerHeight * 2}`,
      end: () => `+=${window.innerHeight * 3}`,
      scrub: true,
    },
  });
}, []);

   useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % portfolio.length);
    }, 5000);
    return () => clearInterval(interval);
   }, [portfolio.length]);

    const file = portfolio[current];
    const isVideo = file.endsWith(".webm") || file.endsWith(".mp4");
    return (
        
      <div ref={sectionRef} className="absolute inset-0 z-20 overflow-hidden bg-black">
    <section id="portfolio">
        <Header>Drone Portfolio</Header>
      <main className="relative">
        {isVideo ? (
          <video className="backgroundImage" autoPlay muted loop key={file}>
            <source src={`/${file}`} type="video/webm" />
          </video>
        ) : (
          <img className="backgroundImage" src={`/${file}`} alt="Portfolio" key={file} />
        )}
      </main>
    </section>
    <img
      src="/BDMPortfolioContainer.png"
      className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
      alt=""
    />
  </div>
    );
}

export default PortfolioSection;