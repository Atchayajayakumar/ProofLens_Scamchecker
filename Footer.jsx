
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main section-container">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-icon">🛡️</span>
            Proof<span>Lens</span>
          </a>
          <p>Your digital world deserves better protection.</p>
          <span className="footer-status">
            <span className="live-dot"></span>
            STAY SAFE ONLINE
          </span>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#scams">Common Scams</a>
          <a href="#scanner">Scam Checker</a>
          <a href="#safety">Safety Tips</a>
        </div>

        <div className="footer-links">
          <h4>Remember</h4>
          <p>Never share your OTP or UPI PIN.</p>
          <p>Always verify suspicious requests.</p>
          <p>Think before you click.</p>
        </div>

        <div className="footer-social">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <a href="#home" aria-label="Facebook">f</a>
            <a href="#home" aria-label="X">𝕏</a>
            <a href="#home" aria-label="Instagram">◎</a>
            <a href="#home" aria-label="LinkedIn">in</a>
          </div>
          <p>Awareness is your first defence.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container footer-bottom-inner">
          <span>© {new Date().getFullYear()} ProofLens. All rights reserved.</span>
          <span>Stay Alert. Stay Smart. Stay Safe. ✦</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
