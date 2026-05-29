'use client'
import { useState, useEffect, useRef } from "react";


function Header({ children }) {
  return <h2 className="text-6xl text-stroke font-bold mb-4 text-green-400 text-center">{children}</h2>;
}

function PortfolioSection(){

    /**
     * 
     * TODO Portfolio Section appears ONLY when scrolled to. 
     * Scrolling goes horizontally through the portfolio.
     *          When it reaches the end, it goes to the next area
     */

   const portfolio = ["https://www.youtube.com/embed/fB5QH4GWZYc", "https://www.youtube.com/embed/h7NWtcSkfhw", "https://www.youtube.com/embed/J9K1MZADD2E"];

   const [current, setCurrent] = useState(0);

   const VideoPlayer = ({ portfolio }) => {


   }
   
    return (


    <section id="portfolio" className="z-600">
        <img
          className="absolute inset-0 w-full h-full object-cover z-600"
          src={`PortfolioOverlay.png`}
        />
        <iframe 
        className="absolute z-500 bg-green-300"
        src={portfolio[current]}
        
        />
    </section>
    );
}

export default PortfolioSection;


//TODO Add Portfolio TV Overlay and Array of embedded unlisted Youtube Videos
  // Add animations to swiping on the videos
  // https://www.youtube.com/embed/h7NWtcSkfhw
  // https://www.youtube.com/embed/J9K1MZADD2E
