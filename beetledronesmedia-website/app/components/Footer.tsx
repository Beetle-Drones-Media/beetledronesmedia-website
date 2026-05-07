"use client";

function Footer() {
  return (
    <section id="footer" className="absolute inset-0 z-0 flex items-center justify-center">
      <footer className="flex flex-col items-center justify-center text-center font-sans p-12 dark:bg-black w-full h-full">
        <p>
          ©2026 Beetle Drones Media. <br />
          All rights reserved. <br />
          <a href="/privacypolicy" className="underline hover:text-green-500">Privacy Policy</a> | <a href="#contact" className="underline hover:text-green-500">Contact</a>
        </p>
      </footer>
    </section>
  );
}

export default Footer;