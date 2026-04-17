import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Ghar<span className="logo-accent">See</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#plans" className="nav-link">Plans</a>
          <a href="#menu" className="nav-link">Menu</a>
        </div>

        <div className="navbar-actions desktop-only">
          <Link to="/auth" className="btn btn-outline">Log In</Link>
          <Link to="/checkout" className="btn btn-primary">Subscribe</Link>
          <Link to="/dashboard" className="icon-btn"><User size={20} /></Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-links">
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <a href="#plans" className="nav-link" onClick={toggleMenu}>Plans</a>
          <a href="#menu" className="nav-link" onClick={toggleMenu}>Menu</a>
          <div className="mobile-actions">
            <Link to="/auth" className="btn btn-outline full-width" onClick={toggleMenu}>Log In</Link>
            <Link to="/checkout" className="btn btn-primary full-width mt-4" onClick={toggleMenu}>Subscribe</Link>
            <Link to="/dashboard" className="btn btn-secondary full-width mt-4" onClick={toggleMenu}>Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
