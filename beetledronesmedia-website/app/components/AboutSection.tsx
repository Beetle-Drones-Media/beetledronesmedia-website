


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
          Here at Beetle Drones Media <br />
          We just own it and make an impact.<br />
          That’s how we live, that’s what we do... <br />
          Plain and simple.
        </p>
      </main>
    </section>
  );
}

export default AboutSection;