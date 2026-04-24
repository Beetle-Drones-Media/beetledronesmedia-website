import React, { useState, useEffect, useRef } from "react";


function FloatingButtons() {
    const [active, setActive] = useState(0);
    const touchStartY = useRef(null);


  return (
    <div className="fixed bottom-15 left-15 z-50 flex gap-2">
      
        
        <a href="#contact">
          <button className="btn bg-green-500/75 text-black px-4 py-2 rounded-full">Contact</button>
        </a>
        <a href="#portfolio">
      <button className="btn bg-green-500/75 text-black px-4 py-2 rounded-full">Web Samples</button>
        </a>
    </div>
  );
}


export default FloatingButtons;