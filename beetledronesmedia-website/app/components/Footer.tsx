




function Footer () {
    return (
        <section id="footer">
            <div className="p-12 items-centered text-center">
                <footer className="flex flex-col flex-1 p-12 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                    {/* <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    poster={`/heroSplashPoster.webp`}
                    >
          <source src={`heroSplashVideo.webm`} type="video/webm" />
                    </video> */}
          <p>
            ©2026 Beetle Drones Media. <br />
            All rights reserved. <br />
           <a href="/privacypolicy" className="underline hover:text-green-500">Privacy Policy</a> | <a href="#contact" className="underline hover:text-green-500">Contact</a>
          </p>
            </footer> 
            </div>
            
        </section>
       
    )
}

export default Footer;