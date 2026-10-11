import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  // Close the menus whenever the user navigates to another page.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setMenuOpen(false);
    setMoreOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/" className="nav-brand">Fulton Mind Matters</Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-list"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          <span className="nav-toggle-label">Menu</span>
        </button>
      </div>
      <ul id="nav-list" className={`nav-list${menuOpen ? ' open' : ''}`}>
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/new">Mental Health News</Link>
        </li>
        <li className="nav-item">
          <Link to="/health"> Support HealthCare Workers </Link>
        </li>
        <li className={`nav-item dropdown${moreOpen ? ' open' : ''}`}>
          <button
            type="button"
            className="dropdown-toggle"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen(!moreOpen)}
          >
            More Resources <span aria-hidden="true">▾</span>
          </button>
          <ul className="dropdown-content">
            <li><Link to="/shelter">Shelter</Link></li>
            <li><Link to="/family">Family Resources</Link></li>
            <li><Link to="/finicial">Financial Assistance</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        {user && (
          <li className="nav-item nav-account">
            {user.username && <span>Hi, {user.username}</span>}
            <button type="button" className="nav-logout" onClick={onLogout}>
              {user.guest ? 'Log in' : 'Log out'}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
