'use client'
import { useState, useEffect } from "react";


function Header({ children }) {
  return <h2 className="text-6xl font-bold mb-4 text-green-400 text-center">{children}</h2>;
}

function PortfolioSection(){

    /**
     * 
     * TODO Portfolio Section appears ONLY when scrolled to. Scrolling goes horizontally through the portfolio.
     *          When it reaches the end, it goes to the next area
     */

   const portfolio = ["ocean-waves-california-coast.webm", "Christian-Science-Building-Montage.webm", "Drone-Venice-Beach-Muscle-Beach-Santa-Monica-California.webm"];

   const [current, setCurrent] = useState(0);
   
   useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % portfolio.length);
    }, 5000);
    return () => clearInterval(interval);
   }, [portfolio.length]);

    const file = portfolio[current];
    const isVideo = file.endsWith(".webm") || file.endsWith(".mp4");
    return (
        
      <div className="relative w-full h-[100vh] overflow-hidden bg-black">
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