import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Navbar</h2>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/user" onClick={() => setMenuOpen(false)}>User</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;