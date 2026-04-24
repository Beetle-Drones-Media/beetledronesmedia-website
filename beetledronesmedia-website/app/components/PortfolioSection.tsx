'use client'
import { useState, useEffect } from "react";


function PortfolioSection(){

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
        <section id="portfolio">
           <>
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
        </> 
        </section>
        
    );
}

export default PortfolioSection;