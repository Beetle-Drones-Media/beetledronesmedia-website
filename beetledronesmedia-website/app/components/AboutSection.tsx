
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useState, useEffect, useRef } from "react";

// function Header({ children }) {
//   return <h2 className="text-6xl font-bold mb-4 text-green-400 text-center">{children}</h2>;
// }


// function AboutSection() {
// const sectionRef = useRef<HTMLElement>(null); 
    

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.from(sectionRef.current, {
    
//     opacity: 0,
//     y: 60,
//     duration: 4,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top 80%", // animate when top of section hits 80% down the viewport
//     },
//   });
// }, []);

//   return (




//     <section ref={sectionRef} id="about" className="snap-start flex-shrink-0 h-full w-full text-6xl flex flex-col items-center py-16 text-center">
//       <main>
//         <Header>
//             About Section
//         </Header>
//         <p>
//           What do people search for when they need a product or service? <br />
//           They google 'product or service in my area' <br />
//           Most people find the first option and if they have a website, yelp page, and location <br />
//           They go. That's it. <br />
//           But if you don't look legitimate, they go to your competitor. <br />
//           Stop missing out on converting customers based on a lackluster online presence...
//         </p>
//       </main>
//     </section>
//   );
// }

// export default AboutSection;


"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Header({ children }: { children: React.ReactNode }) {
  return <h2 className="text-6xl font-bold mb-4 text-green-400 text-center">{children}</h2>;
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  gsap.to(sectionRef.current, {
    opacity: 0,
    scrollTrigger: {
      trigger: document.body,
      start: () => `+=${window.innerHeight}`,      // fade starts after 1 screen of scroll
      end: () => `+=${window.innerHeight * 2}`,    // fade ends after 2 screens of scroll
      scrub: true,
    },
  });
}, []);

  return (
    <section ref={sectionRef} id="about" className="absolute inset-0 z-30 w-full text-6xl flex flex-col items-center py-16 text-center">
      <main>
        <Header>About Section</Header>
        <p>  What do people search for when they need a product or service? <br />
          They google 'product or service in my area' <br />
          Most people find the first option and if they have a website, yelp page, and location <br />
          They go. That's it. <br />
       But if you don't look legitimate, they go to your competitor. <br />
          Stop missing out on converting customers based on a lackluster online presence...</p>
      </main>
    </section>
  );
}

export default AboutSection;