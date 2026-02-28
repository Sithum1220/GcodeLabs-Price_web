import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const features = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Custom Design",
    desc: "Pixel-perfect, brand-tailored designs that make you stand out from the competition.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Responsive",
    desc: "Flawless experience on every screen — phone, tablet, and desktop.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Performance",
    desc: "Optimized for speed — your visitors never wait and Google ranks you higher.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "SEO Optimized",
    desc: "Built with SEO best practices to help customers find your business online.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "SSL Security",
    desc: "SSL certificate included — your site and every visitor is always protected.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Free Maintenance",
    desc: "Lifetime free maintenance keeps your site running like a well-oiled machine.",
  },
];

const stats = [
  { num: "10+", label: "Projects Delivered" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "2+", label: "Years of Excellence" },
  { num: "24h", label: "Support Response" },
];

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    title: "We Build Websites",
    subtitle: "That Drive Results",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    title: "Premium Solutions",
    subtitle: "For Growing Businesses",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    title: "Zero Hidden Costs",
    subtitle: "Transparent Pricing Always",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── HERO SLIDER ── */}
      <section className="hero-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentSlide ? "slide-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay" />
            <div className="slide-content">
              <span className="hero-eyebrow">
                Web Development Agency — Sri Lanka
              </span>
              <h1 className="hero-title">
                {slide.title}
                <br />
                <span className="text-blue">{slide.subtitle}</span>
              </h1>
              <p className="hero-sub">
                Premium web solutions for businesses that mean business.
                Transparent pricing, zero hidden costs, lifetime support.
              </p>
              <div className="hero-actions">
                <Link to="/pricing" className="btn btn-primary">
                  View Pricing
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="slider-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentSlide ? "indicator-active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <span className="trust-text">Trusted to build:</span>
        {[
          "E-Commerce",
          "Business Sites",
          "Landing Pages",
          "POS Systems",
          "Portfolios",
          "Booking Platforms",
        ].map((t) => (
          <span key={t} className="trust-tag">
            {t}
          </span>
        ))}
      </div>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="section section-gray">
        <div className="section-inner">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">What You Get</span>
            <h2 className="section-title">
              Everything Your Business Needs,
              <br />
              All in One Place
            </h2>
            <p className="section-sub">
              Every plan comes with the complete toolkit your business needs to
              succeed online — no compromises, no add-ons.
              <span className="text-muted"> (Terms & conditions apply)</span>
            </p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-name">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">Ready to launch your website?</h2>
          <p className="cta-banner-sub">
            Choose a plan that fits your business and get started today.
          </p>
          <div className="cta-banner-actions">
            <Link to="/pricing" className="btn btn-primary">
              See Plans & Pricing
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
