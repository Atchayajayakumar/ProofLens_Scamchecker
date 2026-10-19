
import React from "react";

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="live-dot"></span>
          STAY ALERT · STAY SAFE
        </div>

        <h1>
          Think Before
          <br />
          You <span className="gradient-text">Click.</span>
          <br />
          Stay Scam Free.
        </h1>

        <p>
          Your digital safety starts here. Detect fake messages,
          suspicious links, UPI fraud and fake job offers before
          they put your personal information at risk.
        </p>

        <div className="hero-actions">
          <a href="#scanner" className="primary-button">
            ⌕ Scan a Message <span>→</span>
          </a>
          <a href="#scams" className="secondary-button">
            Explore Scams
          </a>
        </div>

        <div className="trust-line">
          <span>🔒</span> Your safety matters. Think smart, stay secure.
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        <div className="security-glow"></div>

        <div className="security-shield">
          <div className="shield-inner">
            <span>🔐</span>
          </div>
        </div>

        <div className="floating-tag tag-one">
          <span>🏦</span> Bank Fraud
        </div>
        <div className="floating-tag tag-two">
          <span>💼</span> Fake Job
        </div>
        <div className="floating-tag tag-three">
          <span>💳</span> UPI Scam
        </div>
        <div className="floating-tag tag-four">
          <span>🎣</span> Phishing
        </div>

        <div className="visual-caption">
          <span className="live-dot"></span>
          DIGITAL THREAT AWARENESS
        </div>
      </div>
    </section>
  );
}

export default Hero;
