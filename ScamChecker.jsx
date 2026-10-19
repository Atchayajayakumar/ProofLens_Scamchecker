
import React, { useState } from "react";

function ScamChecker() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  function scanMessage() {
    if (!message.trim()) {
      setResult({
        error: "Please enter a message, link or suspicious offer to scan."
      });
      return;
    }

    const text = message.toLowerCase();

    const patterns = [
      {
        words: ["otp", "one time password", "verification code"],
        reason: "Requests an OTP or verification code",
        points: 30
      },
      {
        words: [
          "urgent",
          "immediately",
          "act now",
          "account blocked",
          "suspended"
        ],
        reason: "Uses urgent or threatening language",
        points: 20
      },
      {
        words: [
          "click here",
          "verify now",
          "login now",
          "http://",
          "bit.ly",
          "tinyurl"
        ],
        reason: "Contains a potentially suspicious link or call to action",
        points: 25
      },
      {
        words: [
          "prize",
          "lottery",
          "won",
          "winner",
          "claim reward",
          "free gift"
        ],
        reason: "Promises a prize or unexpected reward",
        points: 20
      },
      {
        words: [
          "pay registration fee",
          "processing fee",
          "pay to get job",
          "job fee"
        ],
        reason: "Requests an upfront job or processing fee",
        points: 35
      },
      {
        words: [
          "bank details",
          "cvv",
          "upi pin",
          "password",
          "share your pin"
        ],
        reason: "Requests sensitive financial or account information",
        points: 35
      },
      {
        words: [
          "double your money",
          "guaranteed return",
          "easy money",
          "investment guaranteed"
        ],
        reason: "Promises unrealistic financial returns",
        points: 30
      }
    ];

    const flags = patterns.filter((pattern) =>
      pattern.words.some((word) => text.includes(word))
    );

    let score = flags.reduce((total, flag) => total + flag.points, 0);
    score = Math.min(score, 100);

    let level = "Low Risk";
    let color = "low";

    if (score >= 60) {
      level = "High Risk";
      color = "high";
    } else if (score >= 30) {
      level = "Medium Risk";
      color = "medium";
    }

    setResult({
      score,
      level,
      color,
      flags: flags.map((flag) => flag.reason)
    });
  }

  return (
    <section className="scanner-section section-container" id="scanner">
      <div className="section-heading">
        <span className="section-kicker">SMART MESSAGE ANALYSIS</span>
        <h2>
          Don't Guess. <span className="gradient-text">Scan It.</span>
        </h2>
        <p>
          Paste a suspicious message and check for common scam warning signs.
        </p>
      </div>

      <div className="scanner-box">
        <div className="scanner-input-area">
          <div className="scanner-title">
            <div className="scanner-icon">⌕</div>
            <div>
              <h3>Message Scanner</h3>
              <p>Analyze a suspicious message, link or offer.</p>
            </div>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: Congratulations! You won a prize. Click here to claim now..."
            rows="6"
            aria-label="Message to scan"
          />

          <div className="scanner-actions">
            <button className="primary-button scan-button" onClick={scanMessage}>
              ⌕ Scan Now <span>→</span>
            </button>

            <button
              className="clear-button"
              onClick={() => {
                setMessage("");
                setResult(null);
              }}
            >
              Clear
            </button>
          </div>

          <p className="privacy-note">
            🔒 Demo scanner · Your text is analyzed in this browser.
          </p>
        </div>

        <div className="analysis-panel">
          {!result ? (
            <div className="empty-analysis">
              <div className="empty-shield">🛡️</div>
              <h3>Your Safety Report</h3>
              <p>
                Your risk score and detected warning signs will appear here
                after you scan a message.
              </p>
              <div className="analysis-placeholder">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : result.error ? (
            <div className="empty-analysis">
              <div className="empty-shield">✍️</div>
              <h3>Message Required</h3>
              <p>{result.error}</p>
            </div>
          ) : (
            <div className={`result-content ${result.color}`}>
              <span className="section-kicker">SCAN RESULTS</span>

              <div className="risk-score-row">
                <div
                  className="risk-ring"
                  style={{
                    "--risk": `${result.score}%`
                  }}
                >
                  <div className="risk-ring-inner">
                    <strong>{result.score}%</strong>
                    <span>Risk Score</span>
                  </div>
                </div>

                <div className="risk-summary">
                  <span className={`risk-badge ${result.color}`}>
                    {result.level}
                  </span>
                  <h3>
                    {result.score >= 60
                      ? "Stay Alert!"
                      : result.score >= 30
                      ? "Be Cautious"
                      : "Keep Checking"}
                  </h3>
                  <p>
                    {result.score >= 60
                      ? "Several warning signs were detected."
                      : result.score >= 30
                      ? "Some suspicious patterns were detected."
                      : "Few common warning signs were detected."}
                  </p>
                </div>
              </div>

              <div className="red-flags">
                <h4>⚠ Red-Flag Analysis</h4>

                {result.flags.length > 0 ? (
                  result.flags.map((flag, index) => (
                    <div className="flag-item" key={index}>
                      <span className="flag-icon">!</span>
                      {flag}
                    </div>
                  ))
                ) : (
                  <div className="flag-item safe-flag">
                    <span className="flag-icon">✓</span>
                    No listed warning keywords detected.
                  </div>
                )}
              </div>

              <p className="result-disclaimer">
                This is a basic keyword-based demo, not a verified fraud
                detector. A low score does not guarantee safety.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ScamChecker;
