import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo-link">
            <img src={logoImg} alt="GharSe Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-desc mt-4">
            Simple, hygienic, ghar-jaisa food delivered straight to your doorstep. Experience the taste of home anywhere.
          </p>
          <div className="social-links mt-4">
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#plans">Our Plans</a></li>
            <li><a href="#menu">Daily Menu</a></li>
            <li><Link to="/auth">Login / Signup</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <ul>
            <li><Phone size={16} /> +91 90000 00000</li>
            <li><Mail size={16} /> hello@gharse.in</li>
            <li><MapPin size={16} /> Pune, Maharashtra</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} GharSe. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
