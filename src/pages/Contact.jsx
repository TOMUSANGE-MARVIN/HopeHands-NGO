import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiHeart, FiUsers, FiDollarSign } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['Plot 15 Kampala Road', 'Kampala, Uganda', 'East Africa'],
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+256 (414) 237-891', '+256 (700) 456-789', 'Mon-Fri, 8am-5pm EAT'],
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['info@hopehands.org', 'support@hopehands.org', 'volunteer@hopehands.org'],
    },
  ];

  const waysToHelp = [
    {
      icon: <FiDollarSign />,
      title: 'Make a Donation',
      description: 'Your financial support helps us reach more communities and create lasting impact.',
      cta: 'Donate Now',
    },
    {
      icon: <FiUsers />,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct difference in peoples lives.',
      cta: 'Apply Now',
    },
    {
      icon: <FiHeart />,
      title: 'Partner With Us',
      description: 'Organizations can partner with us to amplify their social impact and reach.',
      cta: 'Learn More',
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=800&fit=crop"
            alt="Contact us"
            className="contact-hero-image"
          />
        </div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Contact Us</span>
            <h1>Let's Create Change Together</h1>
            <p>
              Have questions or want to get involved? We'd love to hear from you.
              Reach out and let's discuss how we can make a difference together.
            </p>
          </motion.div>
        </div>
        <div className="contact-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <h4>{info.title}</h4>
                  <div className="contact-info-details">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section bg-light texture-paper">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-content">
              <ScrollReveal once={false}>
                <span className="section-label">Get In Touch</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1} once={false}>
                <h2>Send Us a Message</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2} once={false}>
                <p>
                  Whether you have a question about our programs, want to volunteer,
                  or are interested in partnering with us, fill out the form and our
                  team will get back to you within 24 hours.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} once={false}>
                <div className="contact-image">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=400&fit=crop"
                    alt="Team collaboration"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" once={false}>
              <div className="contact-form-wrapper">
                {submitted ? (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="success-icon">
                      <FiSend />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your names"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="donation">Donation Questions</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="loading">Sending...</span>
                      ) : (
                        <>
                          Send Message <FiSend />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="ways-to-help section">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Get Involved</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>Ways You Can Help</h2>
            </ScrollReveal>
          </div>

          <div className="ways-grid">
            {waysToHelp.map((way, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className="way-card">
                  <div className="way-icon">{way.icon}</div>
                  <h4>{way.title}</h4>
                  <p>{way.description}</p>
                  <button className="btn btn-outline">{way.cta}</button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section bg-blue-gradient">
        <div className="container">
          <ScrollReveal direction="scale" once={false}>
            <div className="newsletter-content">
              <h2>Stay Connected</h2>
              <p>
                Subscribe to our newsletter for updates on our programs, success stories,
                and ways you can make a difference.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
              <span className="newsletter-note">
                We respect your privacy. Unsubscribe at any time.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="HopeHands Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7570!2d32.5779397!3d0.3167746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbcf89d8e1f5%3A0x9e89c6c9a22e2e63!2sKampala%20Road%2C%20Kampala%2C%20Uganda!5e1!3m2!1sen!2s!4v1737331200000!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
