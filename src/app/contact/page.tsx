"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const whatsappNumber = "254711970432";

export default function ContactPage() {
  const [showFormHint, setShowFormHint] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Check that all fields have been completed
    if (!name || !email || !subject || !message) {
      setShowFormHint(true);
      return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setShowFormHint(true);
      return;
    }

    setShowFormHint(false);

    // Prepare WhatsApp message
    const whatsappMessage = [
      "Hello Alin, I would like to get in touch.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="alin-contact-page">
      <div className="alin-container">

        {/* Contact heading */}
        <header className="alin-contact-header">
          <span className="alin-contact-eyebrow">CONTACT ALIN</span>

          <h1>
            Let's Talk.
            <br />
            <span>We're Here for You.</span>
          </h1>

          <p>
            Have a question, need a demo, or ready to integrate?
            Reach out — our team is ready to help you move forward.
          </p>
        </header>

        {/* Contact content */}
        <div className="alin-contact-grid">

          {/* Contact information */}
          <section className="alin-contact-info">
            <div className="alin-contact-info-heading">
              <span className="alin-contact-section-label">
                GET CONNECTED
              </span>

              <h2>Get in Touch</h2>

              <p>
                Whether you are exploring Alin or need assistance,
                we would love to hear from you.
              </p>
            </div>

            {/* Phone */}
            <a
              href="tel:+254711234567"
              className="alin-contact-info-item"
            >
              <span className="alin-contact-info-icon">
                <Phone size={21} />
              </span>

              <span className="alin-contact-info-details">
                <span className="alin-contact-info-label">Phone</span>
                <strong>+254 711 234 567</strong>
              </span>

              <ArrowUpRight
                size={18}
                className="alin-contact-info-arrow"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@alinshop.africa"
              className="alin-contact-info-item"
            >
              <span className="alin-contact-info-icon">
                <Mail size={21} />
              </span>

              <span className="alin-contact-info-details">
                <span className="alin-contact-info-label">Email</span>
                <strong>hello@alinshop.africa</strong>
              </span>

              <ArrowUpRight
                size={18}
                className="alin-contact-info-arrow"
              />
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=UniCity+Mall+Kenyatta+University+Thika+Road+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="alin-contact-info-item"
            >
              <span className="alin-contact-info-icon">
                <MapPin size={21} />
              </span>

              <span className="alin-contact-info-details">
                <span className="alin-contact-info-label">Location</span>

                <strong>
                  UniCity Mall, 2nd Floor
                  <br />
                  Next to Kenyatta University, Thika Road
                  <br />
                  Nairobi, Kenya.
                </strong>
              </span>

              <ArrowUpRight
                size={18}
                className="alin-contact-info-arrow"
              />
            </a>
          </section>

          {/* Contact form */}
          <section className="alin-contact-form-wrapper">
            <div className="alin-contact-form-heading">
              <span>WE'D LOVE TO HEAR FROM YOU</span>

              <h2>Send us a message</h2>

              <p>
                Fill in the form below. Your message will open in
                WhatsApp, ready for you to send.
              </p>
            </div>

            <form
              className="alin-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="alin-contact-form-row">

                {/* Full name */}
                <div className="alin-contact-field">
                  <label htmlFor="contact-name">Full Name</label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    onChange={() => setShowFormHint(false)}
                  />
                </div>

                {/* Email */}
                <div className="alin-contact-field">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    onChange={() => setShowFormHint(false)}
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="alin-contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  onChange={() => setShowFormHint(false)}
                />
              </div>

              {/* Message */}
              <div className="alin-contact-field">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  onChange={() => setShowFormHint(false)}
                />
              </div>

              {/* Validation message */}
              {showFormHint && (
                <p
                  className="alin-contact-form-hint"
                  role="alert"
                >
                  Please complete all fields and enter a valid email address.
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="alin-btn alin-btn-primary alin-contact-submit"
              >
                <Send size={17} />
                Send via WhatsApp
                <ArrowUpRight size={17} />
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
}
