import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Basic Plan",
    price: "$5/month",
    features: ["1 GB RAM", "10 GB Storage", "Basic Support"],
  },
  {
    name: "Pro Plan",
    price: "$15/month",
    features: ["4 GB RAM", "50 GB Storage", "Priority Support"],
  },
];

function Pricing() {
  return (
    <>
      <div className="page-header">
        <h1>Our Pricing</h1>
        <p>Choose the perfect plan for your gaming needs.</p>
      </div>

      <section className="container mb-5" style={{ maxWidth: "800px" }}>
        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.name} className="col-md-6">
              <div className="pricing-card">
                <h2>{plan.name}</h2>
                <p className="pricing-price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-purple">
                  GET STARTED
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Pricing;
