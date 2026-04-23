import React, { useState, useEffect, useRef } from "react";


function FloatingButtons() {
    const [active, setActive] = useState(0);
    const touchStartY = useRef(null);


  return (
    <div className="fixed bottom-15 left-15 z-50 flex gap-2">
      <button className="btn bg-green-500/75 text-black px-4 py-2 rounded-full">Contact</button>
      <button className="btn bg-green-500/75 text-black px-4 py-2 rounded-full">Web Samples</button>
    </div>
  );
}


export default FloatingButtons;