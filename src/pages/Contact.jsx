import { Link } from "react-router-dom";
import { SEO } from "../utils/seo";

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  return (
    <>
      <SEO
        path="/contact"
        title="Contact GCode Labs | Web Development Sri Lanka — WhatsApp & Email"
        description="Get in touch with GCode Labs for professional web development in Sri Lanka. Contact us via WhatsApp or email to discuss your hotel, villa, restaurant, business, or e-commerce website project."
        keywords="contact web developer Sri Lanka, hire web developer Sri Lanka, website design inquiry Sri Lanka, web development quote Sri Lanka, GCode Labs contact, WhatsApp web developer Sri Lanka"
      />
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Contact Us</h1>
          <p className="page-header-sub">
            Have questions? We're here to help. Reach out to us via WhatsApp or
            Email.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-inner contact-grid">
          {/* Left Column - Original Content */}
          <div className="contact-info-col">
            <span className="section-eyebrow">Get In Touch</span>
            <h2>Let's build something great.</h2>
            <p>
              Ready to start your project or need more information? Our team is
              always ready to assist you.
            </p>

            <div className="contact-info-points">
              <div className="info-point">
                <div className="info-point-icon">⚡</div>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>We deliver projects on time, every time.</p>
                </div>
              </div>
              <div className="info-point">
                <div className="info-point-icon">🛡️</div>
                <div>
                  <h4>Zero Risk</h4>
                  <p>Transparent quotes and no hidden fees.</p>
                </div>
              </div>
              <div className="info-point">
                <div className="info-point-icon">📍</div>
                <div>
                  <h4>Based in Sri Lanka</h4>
                  <p>Serving clients locally and globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actionable Cards */}
          <div className="contact-cards-col">
            <a
              href="https://wa.me/94775912053"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-left">
                <div className="contact-icon-ring contact-icon-ring--wa">
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="contact-card-label">Fastest Response</div>
                  <h3>Direct Messaging</h3>
                  <p>Chat with us on WhatsApp</p>
                </div>
              </div>
              <svg
                className="contact-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="mailto:contact@gcodelabs.com" className="contact-card">
              <div className="contact-card-left">
                <div className="contact-icon-ring contact-icon-ring--email">
                  <MailIcon />
                </div>
                <div>
                  <div className="contact-card-label">General Inquiries</div>
                  <h3>Corporate Email</h3>
                  <p>contact@gcodelabs.com</p>
                </div>
              </div>
              <svg
                className="contact-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
