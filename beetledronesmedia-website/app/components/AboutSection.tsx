"use client";



function Header({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-6xl font-bold mb-4 text-green-400 text-center">
      {children}
    </h2>
  );
}

function AboutSection() {

  

  return (
    <section
      id="about"
      className="absolute justify-center inset-0 z-[800] w-full flex flex-col items-center py-16 text-center bg-green-500 text-3xl"
    >
       <img
          className="absolute inset-0 w-full h-full object-cover z-[700]"
          src={`BeetleDronesMediaComputer.png`}
        />

      {/* Fake Search Engine Bar */}
      <header className="text-black">WebSearch 9000</header>
      <form className="flex flex-row items-center bg-white text-black px-4 py-2 rounded-full w-[500px] shadow-md text-base gap-2">
        <input
          id="fake-search-emgine"
          className="flex-1 outline-none bg-transparent text-black placeholder-gray-400"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-1 rounded-full text-sm"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default AboutSection;

{
  /* <main>
        <Header>About Section</Header>
        <p>  What do people search for when they need your product or service? <br />
          They google 'product or service in my area' <br />
          Most people find the first option and if they have a website, yelp page, and location <br />
          They go. That's it. <br />
       But if you don't look legitimate, they go to your competitor. <br />
          Stop missing out on converting customers based on a lackluster online presence...</p>
      </main> */
}

// TODO Need to animate voice over and cursor using search engine.
// TODO write a separate About page that tells a bit about project types and history, treat it similarly to privacy policy page
// TODO 
