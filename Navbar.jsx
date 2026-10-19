
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="brand-icon">🛡️</span>
        Proof<span>Lens</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#scams" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#scanner" onClick={() => setMenuOpen(false)}>Scam Checker</a>
        <a href="#safety" onClick={() => setMenuOpen(false)}>Safety Tips</a>
        <a
          href="#scanner"
          className="nav-button"
          onClick={() => setMenuOpen(false)}
        >
          Scan Now ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
