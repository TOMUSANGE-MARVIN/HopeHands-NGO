import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { BsTwitterX } from 'react-icons/bs';
import ScrollReveal from './ScrollReveal';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <ScrollReveal direction="left" once={false}>
              <div className="footer-brand">
                <Link to="/" className="footer-logo">
                <div className="logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="20" cy="28" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <span>HopeHands</span>
              </Link>
              <p className="footer-description">
                Empowering communities through sustainable development, education, and healthcare initiatives since 2010.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" className="social-link" aria-label="X (Twitter)"><BsTwitterX /></a>
                <a href="#" className="social-link" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} once={false}>
              <div className="footer-links">
                <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} once={false}>
              <div className="footer-links">
                <h4>Programs</h4>
              <ul>
                <li><Link to="/programs">Education</Link></li>
                <li><Link to="/programs">Healthcare</Link></li>
                <li><Link to="/programs">Clean Water</Link></li>
                <li><Link to="/programs">Women Empowerment</Link></li>
              </ul>
            </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} once={false}>
              <div className="footer-contact">
                <h4>Contact Us</h4>
              <ul>
                <li>
                  <FiMapPin />
                  <span>Plot 15 Kampala Road, Kampala, Uganda</span>
                </li>
                <li>
                  <FiPhone />
                  <span>+256 (414) 237-891</span>
                </li>
                <li>
                  <FiMail />
                  <span>info@hopehands.org</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} HopeHands. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
