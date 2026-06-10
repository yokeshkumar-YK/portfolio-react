import { useState } from "react";
import { supabase } from "../../lib/supabase";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setErrorMsg("");

    const { error } = await supabase
      .from("contacts")
      .insert([formData]);

    setLoading(false);

    if (error) {
      console.error("Supabase Error:", error);
      setErrorMsg("Failed to send message. Please try again.");
      return;
    }

    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}

        {errorMsg && (
          <p className="error-message">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;