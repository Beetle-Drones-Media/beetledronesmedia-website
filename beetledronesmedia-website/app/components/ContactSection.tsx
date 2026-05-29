"use client";
import { useEffect, useRef } from "react";
import { SubmitContactForm } from './Server';

function Header({ children }) {
  return <h2 className="text-6xl text-stroke font-bold mb-4 text-green-500 text-center">{children}</h2>;
}

function ContactSection() {


    return(
        <section id="contact" className="absolute inset-0 z-0 overflow-y-auto">
<>
    <div className="relative z-11 flex flex-col justify-center items-center w-full bg-green-500 py-24" >
       <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={`Palm-Springs-Drone-Video-Sky-Birds-Raven-Clouds.webp`}
        />
       
        <div className="relative z-20 w-full max-w-2xl flex flex-col items-center">
            
            <Header
            className="w-full max-w-xl flex flex-col gap-8 items-center">
            Tell Us How We Can Help Your Business</Header> 
        
       
        <form action={SubmitContactForm}>
            <div className="flex gap-4 p-4 z-50">
                <input 
                className="bg-gray-200 text-black flex-1 p-4 rounded text-lg"
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                />
                <input 
                className="bg-gray-200 text-black flex-1 p-4 rounded text-lg"
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                />
            </div>
            <div className="flex gap-4 p-4">
                <input 
                className="bg-gray-200 text-black flex-1 p-4 rounded text-lg"
                name="industry" 
                placeholder="Type of Business" 
                />
            </div>
            <div className="flex gap-4 p-4">
                <textarea 
                          className="bg-gray-200 text-black w-full p-4 rounded text-lg"
                name="message" 
                placeholder="I'm listening.." 
                required 
                />
            </div>
            <div className="flex justify-center p-4">
                <button 
            className="p-4 justify-center items-center bg-black/75 text-green-500 px-8 py-3 rounded-full font-bold hover:bg-green-600 transition"
            type="submit">
                Get Results!
            </button>
            </div>
            
        </form>
        </div>
    </div>
    </>
    <div id="footer" className="flex items-center justify-center w-full">
      <footer className="flex flex-col items-center justify-center text-center font-sans p-12 dark:bg-black w-full h-full">
        <p>
          ©2026 Beetle Drones Media. <br />
          All rights reserved. <br />
          <a href="/privacypolicy" className="underline hover:text-green-500">Privacy Policy</a> | <a href="#contact" className="underline hover:text-green-500">Contact</a>
        </p>
      </footer>
    </div>

        </section>
    

    );
        
    
}

export default ContactSection;


