
import React from "react";

const tips = [
  {
    icon: "🔐",
    title: "Never Share OTPs",
    description: "Keep your OTP, UPI PIN and passwords private.",
    color: "blue"
  },
  {
    icon: "🔗",
    title: "Check Every URL",
    description: "Verify the website address before clicking.",
    color: "cyan"
  },
  {
    icon: "💼",
    title: "Verify Job Offers",
    description: "Never pay fees to secure a promised job.",
    color: "orange"
  },
  {
    icon: "🔑",
    title: "Use Strong Passwords",
    description: "Use unique passwords and enable two-factor authentication.",
    color: "purple"
  }
];

function SafetyTips() {
  return (
    <section className="safety-section section-container" id="safety">
      <div className="section-heading">
        <span className="section-kicker">PROTECT YOUR DIGITAL LIFE</span>
        <h2>
          Small Steps. <span className="gradient-text">Stronger Safety.</span>
        </h2>
        <p>Build simple habits that help you stay one step ahead of scammers.</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <article className="tip-card" key={index}>
            <div className={`tip-icon ${tip.color}`}>{tip.icon}</div>
            <div className="tip-content">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
            <span className="tip-number">0{index + 1}</span>
          </article>
        ))}
      </div>

      <div className="safety-banner">
        <div className="banner-icon">🛡️</div>
        <div>
          <h3>Pause. Verify. Then Proceed.</h3>
          <p>
            If something feels suspicious, stop and verify it through an
            official source.
          </p>
        </div>
        <a href="#scanner" className="secondary-button">
          Check a Message →
        </a>
      </div>
    </section>
  );
}

export default SafetyTips;
