import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about the Ankropix team and our mission.</p>
      </div>

      <section className="container mb-5" style={{ maxWidth: "800px" }}>
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            At Ankropix, our mission is to provide gamers with the best server
            hosting experience. We are dedicated to delivering reliable,
            high-performance servers that enhance your gaming adventures.
          </p>

          <h2>Our Team</h2>
          <p>
            Our team is composed of passionate gamers and experienced IT
            professionals who understand the needs of the gaming community. We
            work tirelessly to ensure our services exceed your expectations.
          </p>

          <h2>Our Values</h2>
          <p>
            We believe in transparency, customer satisfaction, and continuous
            improvement. We are committed to providing top-notch support and
            innovative solutions to help you get the most out of your gaming
            experience.
          </p>

          <div className="text-center mt-4">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="btn-purple"
            >
              Our Discord
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
