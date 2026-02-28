import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-col">
            <img src="/logo.png" alt="GCode Labs" className="footer-logo" />
            <p className="footer-desc">
              Strategic web development and digital infrastructure for modern
              enterprises. We deliver robust, scalable, and high-performance
              solutions.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Corporate</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/pricing" className="footer-link">
                Pricing Packages
              </Link>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Legal</h4>
            <div className="footer-links">
              <span className="footer-link" style={{ cursor: "not-allowed" }}>
                Privacy Policy
              </span>
              <span className="footer-link" style={{ cursor: "not-allowed" }}>
                Terms of Service
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {currentYear} GCode Labs. All rights reserved.
          </span>
          <span>Galle, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
