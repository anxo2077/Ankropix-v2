import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const services = [
  {
    icon: "🎮",
    title: "Minecraft Server Hosting",
    description:
      "Experience the ultimate Minecraft server hosting with our powerful and reliable infrastructure. Whether you're running a small server for friends or a large community, we've got you covered.",
  },
  {
    icon: "🤖",
    title: "Discord Bot Hosting",
    description:
      "Keep your Discord bots online 24/7 with our reliable bot hosting service. Perfect for music bots, moderation bots, and custom applications.",
  },
  {
    icon: "☁️",
    title: "VPS Hosting",
    description:
      "Full control with our Virtual Private Servers. Perfect for advanced users who need flexibility and customization options.",
  },
];

function Services() {
  return (
    <>
      <div className="page-header">
        <h1>Services</h1>
        <p>
          Explore the wide range of services offered by Ankropix to enhance your
          gaming experience.
        </p>
      </div>

      <section className="container mb-5" style={{ maxWidth: "900px" }}>
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/pricing" className="btn-purple">
                View Plans
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Services;
