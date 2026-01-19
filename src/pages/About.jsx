import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FiHeart />,
      title: 'Compassion',
      description: 'We approach every challenge with empathy and understanding.',
    },
    {
      icon: <FiUsers />,
      title: 'Community',
      description: 'We believe in the power of collective action and local leadership.',
    },
    {
      icon: <FiGlobe />,
      title: 'Sustainability',
      description: 'Our programs are designed for long-term impact and self-sufficiency.',
    },
    {
      icon: <FiAward />,
      title: 'Integrity',
      description: 'We maintain the highest standards of transparency and accountability.',
    },
  ];

  const team = [
    {
      name: 'Dr. Grace Nalwanga',
      role: 'Founder & Executive Director',
      bio: 'With 20+ years in humanitarian work, Grace founded HopeHands to create sustainable change across East Africa.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
    },
    {
      name: 'David Okumu',
      role: 'Director of Programs',
      bio: 'David oversees all field operations and ensures program effectiveness across communities in Uganda and neighboring countries.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
    {
      name: 'Rebecca Achieng',
      role: 'Head of Partnerships',
      bio: 'Rebecca builds strategic relationships with donors, governments, and partner organizations across East Africa.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
    },
    {
      name: 'Samuel Mwangi',
      role: 'Community Engagement Lead',
      bio: 'Samuel works directly with communities to understand their needs and priorities, ensuring culturally appropriate solutions.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    },
  ];

  const milestones = [
    { year: '2010', event: 'HopeHands founded in Kampala with a mission to serve underprivileged communities' },
    { year: '2013', event: 'Launched first education program serving 500 students across Uganda' },
    { year: '2016', event: 'Expanded to healthcare with mobile medical units in rural areas' },
    { year: '2019', event: 'Clean water initiative reached 50 villages in Uganda and Kenya' },
    { year: '2022', event: 'Women empowerment program launched across 5 East African countries' },
    { year: '2024', event: 'Celebrated impacting 50,000+ lives across East Africa' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=800&fit=crop"
            alt="Team collaboration"
            className="about-hero-image"
          />
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
            <h1>Our Story of Hope and Impact</h1>
            <p>
              For over 15 years, HopeHands has been dedicated to empowering communities
              and transforming lives through sustainable development programs across Uganda and East Africa.
            </p>
          </motion.div>
        </div>
        <div className="about-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mv-grid">
            <ScrollReveal direction="left" once={false}>
              <div className="mv-card mission">
                <div className="mv-image">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                    alt="Children learning"
                  />
                </div>
                <div className="mv-content">
                  <div className="mv-icon">
                    <FiTarget />
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To empower underserved communities through sustainable education,
                    healthcare, and livelihood programs that create lasting positive change
                    and foster self-reliance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" once={false}>
              <div className="mv-card vision">
                <div className="mv-image">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
                    alt="Community empowerment"
                  />
                </div>
                <div className="mv-content">
                  <div className="mv-icon">
                    <FiEye />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    A world where every individual has access to quality education,
                    healthcare, and opportunities to thrive, regardless of their
                    socioeconomic background.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section bg-light texture-paper">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <ScrollReveal once={false}>
                <span className="section-label">Our Journey</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1} once={false}>
                <h2>From a Small Dream to Global Impact</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2} once={false}>
                <p>
                  HopeHands began in 2010 when our founder, Dr. Grace Nalwanga, witnessed
                  the profound impact that education could have on transforming lives in
                  underserved communities. What started as a small tutoring program for
                  30 children in a rural village in Uganda has grown into a comprehensive
                  development organization serving over 120 communities across East Africa.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3} once={false}>
                <p>
                  Today, we operate programs in education, healthcare, clean water access,
                  and women's empowerment. Our approach is rooted in community partnership
                  we work alongside local leaders to design and implement solutions that
                  address each community's unique needs and challenges.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" className="story-image" once={false}>
              <div className="story-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=500&h=600&fit=crop"
                  alt="Founder with community"
                />
                <div className="story-accent-image">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=250&h=250&fit=crop"
                    alt="Community gathering"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Our Values</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>What Guides Us</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} once={false}>
              <p className="section-subtitle">
                Our core values shape everything we do and how we serve communities.
              </p>
            </ScrollReveal>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section bg-blue-gradient">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', color: 'var(--yellow-300)' }}>
                Milestones
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2 style={{ color: 'white' }}>Our Journey Through the Years</h2>
            </ScrollReveal>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
                once={false}
              >
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <p>{milestone.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section texture-grid">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Our Team</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>Meet the Leaders</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} once={false}>
              <p className="section-subtitle">
                Dedicated professionals working tirelessly to make a difference.
              </p>
            </ScrollReveal>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className="team-card">
                  <div className="team-avatar">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section section bg-light">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Partners</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>Trusted By</h2>
            </ScrollReveal>
          </div>

          <ScrollReveal once={false}>
            <div className="partners-grid">
              {['UNICEF', 'WHO', 'Red Cross', 'African Union', 'World Bank', 'UN Women'].map((partner, i) => (
                <div key={i} className="partner-logo">
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery section">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Our Work</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>Making a Difference</h2>
            </ScrollReveal>
          </div>

          <div className="about-gallery-grid">
            <ScrollReveal delay={0.1} once={false}>
              <div className="gallery-img gallery-img-1">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
                  alt="Education program"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} once={false}>
              <div className="gallery-img gallery-img-2">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=500&fit=crop"
                  alt="Healthcare initiative"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} once={false}>
              <div className="gallery-img gallery-img-3">
                <img
                  src="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=400&h=300&fit=crop"
                  alt="Clean water project"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} once={false}>
              <div className="gallery-img gallery-img-4">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=350&fit=crop"
                  alt="Women empowerment"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
