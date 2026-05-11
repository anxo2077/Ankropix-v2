import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const stats = [
  { icon: "🎮", number: 3645, label: "Active Players" },
  { icon: "⚡", number: 99, label: "% Uptime" },
  { icon: "🌐", number: 6, label: "Server Locations" },
];

function StatCard({ icon, number, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(number / 60);

    const interval = setInterval(() => {
      current += step;
      if (current >= number) {
        current = number;
        clearInterval(interval);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="col-md-4">
      <div className="stat-card">
        <div className="stat-icon">{icon}</div>
        <div className="stat-number">{count}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="hero-title">
                <span className="hero-highlight">Premium</span> Server Hosting
              </h1>
              <p className="hero-desc">
                Experience top-tier server hosting with Ankropix. Reliable,
                high-performance, Starting at just $5/month.
              </p>
              <Link to="/services" className="btn-purple">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title">Ankropix in Numbers</h2>
          <div className="row g-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
