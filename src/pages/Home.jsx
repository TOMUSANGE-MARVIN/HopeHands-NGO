import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiDroplet, FiUsers, FiArrowRight, FiCheck, FiPlay } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import useCountUp from '../hooks/useCountUp';
import './Home.css';

const StatCard = ({ number, label, delay }) => {
  const [displayNumber, ref] = useCountUp(number);
  
  return (
    <ScrollReveal delay={delay} direction="up" once={false}>
      <div className="stat-card" ref={ref}>
        <span className="stat-number">{displayNumber}</span>
        <span className="stat-label">{label}</span>
      </div>
    </ScrollReveal>
  );
};

const ImpactStat = ({ value, label, delay }) => {
  const [displayValue, ref] = useCountUp(value);
  
  return (
    <ScrollReveal delay={delay} once={false}>
      <div className="impact-stat" ref={ref}>
        <div className="impact-stat-bar" style={{ '--width': value }}></div>
        <div className="impact-stat-info">
          <span className="impact-stat-label">{label}</span>
          <span className="impact-stat-value">{displayValue}</span>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Home = () => {
  const [badgeNumber, badgeRef] = useCountUp('15+');
  
  const stats = [
    { number: '50K+', label: 'Lives Impacted' },
    { number: '120+', label: 'Communities Served' },
    { number: '15+', label: 'Years of Service' },
    { number: '200+', label: 'Dedicated Volunteers' },
  ];

  const programs = [
    {
      icon: <FiBook />,
      title: 'Education',
      description: 'Providing quality education and scholarships to underprivileged children.',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop',
    },
    {
      icon: <FiHeart />,
      title: 'Healthcare',
      description: 'Free medical camps and healthcare facilities for rural communities.',
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop',
    },
    {
      icon: <FiDroplet />,
      title: 'Clean Water',
      description: 'Building wells and water purification systems for clean drinking water.',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=400&h=300&fit=crop',
    },
    {
      icon: <FiUsers />,
      title: 'Women Empowerment',
      description: 'Skill development and entrepreneurship programs for women.',
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    },
  ];

  const testimonials = [
    {
      quote: "HopeHands changed my life. Thanks to their scholarship program, I'm now a software engineer helping my community.",
      author: 'Amina Nakato',
      role: 'Program Beneficiary',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      quote: "The clean water initiative brought hope to our village. Our children no longer fall sick from waterborne diseases.",
      author: 'Joseph Okello',
      role: 'Community Leader',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
  ];

  return (
    <div className="home">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
          >
            <source
              src="/hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-label">Together We Can Make a Difference</span>
            <h1 className="hero-title">
              Empowering <span className="highlight-blue">Communities</span>,
              <br />
              Transforming <span className="highlight-gold">Lives</span>
            </h1>
            <p className="hero-description">
              Join us in our mission to create sustainable change through education,
              healthcare, and community development programs that impact thousands of lives.
            </p>
            <div className="hero-buttons">
              <Link to="/programs" className="btn btn-secondary">
                Our Programs <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Get Involved
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-frame hero-image-background">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=500&fit=crop"
                  alt="Community support"
                  className="hero-image"
                />
              </div>
              <div className="hero-image-frame hero-image-foreground">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&h=500&fit=crop"
                  alt="Children smiling"
                  className="hero-image"
                />
              </div>
              
              <div className="hero-floating-card card-1 animate-float">
                <FiHeart className="floating-icon" />
                <span>50K+ Lives Changed</span>
              </div>
              <div className="hero-floating-card card-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <FiUsers className="floating-icon" />
                <span>200+ Volunteers</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                number={stat.number} 
                label={stat.label} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section texture-paper">
        <div className="container">
          <div className="about-preview-grid">
            <ScrollReveal direction="left" once={false} className="about-preview-image">
              <div className="image-stack">
                <div className="image-main">
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&h=600&fit=crop"
                    alt="Volunteers helping community"
                  />
                </div>
                <div className="image-accent">
                  <img
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop"
                    alt="Donation hands"
                  />
                </div>
                <div className="experience-badge" ref={badgeRef}>
                  <span className="badge-number">{badgeNumber}</span>
                  <span className="badge-text">Years of Service</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="about-preview-content">
              <ScrollReveal direction="right" once={false}>
                <span className="section-label">About Us</span>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.1} once={false}>
                <h2 className="section-title">Driven by Compassion, Guided by Purpose</h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2} once={false}>
                <p className="about-text">
                  Founded in 2010, HopeHands has been at the forefront of community development,
                  touching over 50,000 lives across 120+ communities in Uganda and East Africa. Our holistic approach
                  combines education, healthcare, and sustainable development to create lasting change.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3} once={false}>
                <ul className="about-features">
                  <li><FiCheck /> Transparent fund utilization</li>
                  <li><FiCheck /> Community-driven programs</li>
                  <li><FiCheck /> Sustainable impact focus</li>
                  <li><FiCheck /> Dedicated volunteer network</li>
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4} once={false}>
                <Link to="/about" className="btn btn-primary">
                  Learn More <FiArrowRight />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section section bg-light texture-grid">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">What We Do</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2 className="section-title">Our Programs</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} once={false}>
              <p className="section-subtitle">
                We focus on four key areas that create sustainable change and
                empower communities to thrive.
              </p>
            </ScrollReveal>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className={`program-card ${program.color}`}>
                  <div className="program-image">
                    <img src={program.image} alt={program.title} />
                  </div>
                  <div className="program-content">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <Link to="/programs" className="program-link">
                      Learn More <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section section">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-content">
              <ScrollReveal once={false}>
                <span className="section-label">Our Impact</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1} once={false}>
                <h2 className="section-title">Creating Ripples of Change</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2} once={false}>
                <p className="impact-text">
                  Every donation, every volunteer hour, every act of kindness creates
                  a ripple effect that transforms entire communities. See how your
                  support makes a real difference.
                </p>
              </ScrollReveal>

              <div className="impact-stats">
                <ImpactStat value="85%" label="Education Access" delay={0.3} />
                <ImpactStat value="92%" label="Healthcare Reach" delay={0.4} />
                <ImpactStat value="78%" label="Clean Water Access" delay={0.5} />
              </div>
            </div>

            <ScrollReveal direction="right" className="impact-visual" once={false}>
              <div className="impact-image-grid">
                <div className="impact-img impact-img-1">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop"
                    alt="Community gathering"
                  />
                </div>
                <div className="impact-img impact-img-2">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=400&fit=crop"
                    alt="Helping hands"
                  />
                </div>
                <div className="impact-img impact-img-3">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd59a93f9f16?w=400&h=250&fit=crop"
                    alt="Children learning"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section bg-light">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Gallery</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2 className="section-title">Moments That Matter</h2>
            </ScrollReveal>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="scale" once={false}>
                <div className="gallery-item">
                  <img src={image} alt={`Gallery image ${index + 1}`} />
                  <div className="gallery-overlay">
                    <FiPlay className="gallery-play-icon" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section bg-blue-gradient">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', color: 'var(--yellow-300)' }}>
                Testimonials
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2 className="section-title" style={{ color: 'white' }}>Stories of Hope</h2>
            </ScrollReveal>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up" once={false}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M12 20C12 14.4772 16.4772 10 22 10V14C18.6863 14 16 16.6863 16 20H20V30H10V20H12ZM28 20C28 14.4772 32.4772 10 38 10V14C34.6863 14 32 16.6863 32 20H36V30H26V20H28Z" fill="var(--yellow-400)"/>
                    </svg>
                  </div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="author-info">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section texture-wave">
        <div className="container">
          <ScrollReveal direction="scale" once={false}>
            <div className="cta-card">
              <div className="cta-image">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop"
                  alt="Join us"
                />
              </div>
              <div className="cta-content">
                <h2>Ready to Make a Difference?</h2>
                <p>
                  Join thousands of supporters who are helping us create lasting change
                  in communities around the world.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-secondary">
                    Donate Now <FiHeart />
                  </Link>
                  <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--blue-600)', color: 'var(--blue-700)' }}>
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
