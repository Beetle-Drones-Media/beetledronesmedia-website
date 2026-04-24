'use client'


function PortfolioSection(){

   const portfolio = ["BeetleDronesBannerLogo1.png", "heroSplashPoster.webp", "heroSplashVideo.webm", "Palm-Springs-Drone-Video-Sky-Birds-Raven-Couds.webm"];

   const portfolioCarousel = () => {
    for(let i = 0; i < portfolio.length; i++) {
        return portfolio[i];
    }
    return;
   } 

    return (
        <>
         <main className="relative">
            <video
            className="backgroundImage"
            autoPlay
            muted
            loop
          >
                <source src={ { portfolioCarousel(portfolio) } } type="video/webm" />
            </video>
        </main>
        </>
    );
}

export default PortfolioSection;