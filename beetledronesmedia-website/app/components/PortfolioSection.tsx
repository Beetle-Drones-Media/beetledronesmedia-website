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



   useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % portfolio.length);
    }, 5000);
    return () => clearInterval(interval);
   }, [portfolio.length]);

    const file = portfolio[current];
    const isVideo = file.endsWith(".webm") || file.endsWith(".mp4");
    return (


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
    );
}

export default PortfolioSection;


//TODO Add Portfolio TV Overlay and Array of embedded unlisted Youtube Videos
  // Add animations to swiping on the videos