import { useState } from "react";
import Footer from "../components/Footer";

const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[\s\S]{10,500}$/;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Name must be 2-50 letters only.";
    }
    if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!messageRegex.test(form.message.trim())) {
      newErrors.message = "Message must be between 10 and 500 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  }

  return (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the Ankropix team for any inquiries or support.</p>
      </div>

      <section className="container mb-5" style={{ maxWidth: "600px" }}>
        {submitted && (
          <div className="success-msg">
            ✅ Message sent! We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="you@example.com"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="contact-input"
              rows={5}
              placeholder="Write your message here..."
              style={{ resize: "vertical", minHeight: "120px" }}
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button type="submit" className="btn-purple">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
