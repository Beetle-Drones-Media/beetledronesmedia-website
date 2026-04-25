'use client'
import { useState, useEffect } from "react";


function PortfolioSection(){

    /**
     * 
     * TODO Portfolio Section appears ONLY when scrolled to. Scrolling goes horizontally through the portfolio.
     *          When it reaches the end, it goes to the next area
     */

   const portfolio = ["BeetleDronesBannerLogo1.png", "heroSplashPoster.webp", "heroSplashVideo.webm", "Palm-Springs-Drone-Video-Sky-Birds-Raven-Couds.webm"];

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
        <>
        <div className="relative w-full h-[100vh] min-h-[400px] overflow-hidden bg-black">

        
        <section id="portfolio">
           
         <main 
         
          className="relative">
            {isVideo ? (
            <video
            className="backgroundImage"
            autoPlay
            muted
            loop
            key={file}
          >
            <source src={ `/${file}` } type="video/webm" />
            </video>
            ) : (
        <img
          className="backgroundImage"
          src={`/${file}`}
          alt="Portfolio"
          key={file}
        />
            )}
        </main>
         
        </section>
        </div>
        </>
    );
}

export default PortfolioSection;