import { Link } from "react-router-dom";
import { SEO } from "../utils/seo";

const sharedFeatures = [
  "Fully Responsive Design (Mobile, Tablet & Desktop)",
  "Contact Forms / WhatsApp Integration",
  "Social Media Links Integration",
  "SEO Optimized Structure",
  "Fast Loading Performance",
  "Location Map Integration",
  "Free Domain Name (.com) & Premium Managed Hosting",
  "Free SSL Certificate",
  "Free Lifetime 5 Business Email Addresses",
  "Google Analytics Setup",
  "Lifetime Free Maintenance*",
  "Free Professional Business Card Design",
  "Free Google Business Profile Setup",
];

const plans = [
  {
    name: "Starter Plan",
    target: "Best for small businesses or promoting a single product.",
    originalPrice: "25,000",
    price: "20,000",
    savings: "5,000",
    discount: "20% OFF",
    pages: "1 Page Website",
    delivery: "4 Days",
    renewal_price: "15,000",
    popular: false,
  },
  {
    name: "Standard Plan",
    target: "Ideal for most businesses wanting a solid online presence.",
    originalPrice: "35,000",
    price: "28,000",
    savings: "7,000",
    discount: "20% OFF",
    pages: "Up to 5 Pages",
    delivery: "7 Days",
    renewal_price: "20,000",
    popular: true,
  },
  {
    name: "Premium Plan",
    target: "For serious businesses needing detailed pages and features.",
    originalPrice: "50,000",
    price: "42,000",
    savings: "8,000",
    discount: "16% OFF",
    pages: "Up to 10 Pages",
    delivery: "14 Days",
    renewal_price: "28,000",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        path="/pricing"
        title="Web Design Pricing Sri Lanka | GCode Labs — Packages from Rs. 20,000"
        description="GCode Labs offers transparent web design packages in Sri Lanka. Starter plan from Rs. 20,000 (was Rs. 25,000), Standard from Rs. 28,000 (was Rs. 35,000), Premium from Rs. 42,000 (was Rs. 50,000). Includes free domain, hosting, SSL, and lifetime maintenance."
        keywords="web design price Sri Lanka, website cost Sri Lanka, affordable web design Sri Lanka, website packages Sri Lanka, WordPress price Sri Lanka, hotel website cost, villa website price, restaurant website cost, business website pricing Sri Lanka, GCode Labs pricing"
      />
      {/* ── HEADER ── */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Pricing Plans</h1>
          <p className="page-header-sub">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="pricing-section section-inner">
        <div className="plans-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className="plan-card-wrapper">
              {plan.popular && (
                <div className="plan-popular-label">⭐ Most Popular</div>
              )}
              <div
                className={`plan-card ${
                  plan.popular ? "plan-card--popular" : ""
                }`}
              >
                <div className="plan-card-header">
                  <div className="plan-header-top">
                    <div className="plan-pages-chip">{plan.pages}</div>
                    {plan.discount && (
                      <div className="plan-discount-badge">{plan.discount}</div>
                    )}
                  </div>
                  <h2 className="plan-name">{plan.name}</h2>
                  <p className="plan-target">{plan.target}</p>
                  {plan.savings && (
                    <div className="plan-offer-banner">
                      🔥 Limited Time Offer
                    </div>
                  )}
                </div>

                <div className="plan-card-body">
                  <div className="plan-price-block">
                    {plan.originalPrice && (
                      <div className="plan-price-original">
                        <span className="price-cur-original">Rs.</span>
                        <span className="price-amt-original">
                          {plan.originalPrice}
                        </span>
                        <span className="price-was-label">Regular Price</span>
                      </div>
                    )}
                    <div className="plan-price">
                      <span className="price-cur">Rs.</span>
                      <span className="price-amt">{plan.price}</span>
                    </div>
                    {plan.savings && (
                      <div className="plan-savings-chip">
                        ✓ You Have save Rs. {plan.savings}!
                      </div>
                    )}
                    <p className="price-note">One-time development fee</p>
                  </div>

                  <div className="plan-meta-row">
                    <div className="plan-meta-item">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      Delivered in {plan.delivery}
                    </div>
                    <div className="plan-meta-item">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      Rs. {plan.renewal_price}/year renewal
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`btn btn-block ${
                      plan.popular ? "btn-primary" : "btn-outline"
                    } btn-plan`}
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── SHARED FEATURES TABLE ── */}
        <div className="all-plans-features">
          <div className="all-plans-header">
            <span className="section-eyebrow">All Plans Include</span>
            <h3>We provide all the features your business needs.</h3>
            <p>
              Every plan includes everything required to build, launch, and
              maintain a professional website.
              <br />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginTop: "6px",
                  display: "inline-block",
                }}
              >
                Terms &amp; conditions apply*
              </span>
            </p>
          </div>
          <div className="all-features-grid">
            {sharedFeatures.map((feat, i) => (
              <div key={i} className="all-feature-item">
                <svg
                  className="all-check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="maintenance-terms">
          <div className="maintenance-terms-header">Terms &amp; Conditions</div>
          <p>
            * <strong>Lifetime Free Maintenance</strong> covers routine content
            updates, minor text/image changes, and standard upkeep to keep your
            site running smoothly. Major redesigns, new feature development, or
            significant structural changes are quoted separately.
          </p>
        </div>
      </section>

      {/* ── CUSTOM SOLUTIONS ── */}
      <section className="custom-section">
        <div className="section-inner custom-inner">
          <div className="custom-content">
            <span className="section-eyebrow">Custom Solutions</span>
            <h2>E-Commerce &amp; POS Systems</h2>
            <p>
              Looking for a custom E-Commerce platform or a Point of Sale (POS)
              system? We build tailored systems based on your exact store
              requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>

          <div className="custom-cards">
            {[
              { title: "Payment Gateway Integration" },
              { title: "Inventory Management" },
              { title: "Custom Dashboards" },
            ].map((feature, i) => (
              <div key={i} className="custom-feat-card">
                <div className="custom-feat-icon">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
