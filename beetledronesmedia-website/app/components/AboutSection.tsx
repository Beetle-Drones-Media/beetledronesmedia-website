


function Header({ children }) {
  return <h2 className="text-6xl font-bold mb-4 text-green-400 text-center">{children}</h2>;
}


function AboutSection() {
  return (
    <section id="about" className="w-full text-6xl flex flex-col items-center py-16 text-center">
      <main>
        <Header>
            About Section
        </Header>
        <p>
          What do people search for when they need a product or service? <br />
          They google 'product or service in my area' <br />
          Most people find the first option and if they have a website, yelp page, and location <br />
          They go. That's it. <br />
          But if you don't look legitimate, they go to your competitor. <br />
          Stop missing out on converting customers based on a lackluster online presence...
        </p>
      </main>
    </section>
  );
}

export default AboutSection;