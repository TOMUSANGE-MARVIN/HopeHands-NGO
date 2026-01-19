import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiHeart, FiDroplet, FiUsers, FiTarget, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import useCountUp from '../hooks/useCountUp';
import './Programs.css';

const ProgramStat = ({ value, label }) => {
  const [displayValue, ref] = useCountUp(value);
  
  return (
    <div className="program-stat" ref={ref}>
      <span className="stat-value">{displayValue}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 0,
      icon: <FiBook />,
      title: 'Education',
      tagline: 'Knowledge is the Key to Opportunity',
      description: 'Our education programs provide quality learning opportunities to underprivileged children and youth, helping them build a brighter future.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
      stats: [
        { value: '15,000+', label: 'Students Enrolled' },
        { value: '50+', label: 'Schools Supported' },
        { value: '95%', label: 'Graduation Rate' },
      ],
      initiatives: [
        'Scholarship programs for higher education',
        'After-school tutoring centers',
        'Digital literacy training',
        'Teacher training workshops',
        'School infrastructure development',
      ],
      color: 'blue',
    },
    {
      id: 1,
      icon: <FiHeart />,
      title: 'Healthcare',
      tagline: 'Health is Wealth',
      description: 'We bring essential healthcare services to underserved communities through mobile clinics, health camps, and awareness programs.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      stats: [
        { value: '100K+', label: 'Patients Treated' },
        { value: '200+', label: 'Health Camps' },
        { value: '30+', label: 'Partner Hospitals' },
      ],
      initiatives: [
        'Mobile medical units',
        'Maternal and child health programs',
        'Vaccination drives',
        'Mental health awareness',
        'Chronic disease management',
      ],
      color: 'yellow',
    },
    {
      id: 2,
      icon: <FiDroplet />,
      title: 'Clean Water',
      tagline: 'Every Drop Counts',
      description: 'Access to clean water is a basic human right. We install water purification systems and build wells in water-scarce regions.',
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&h=400&fit=crop',
      stats: [
        { value: '75+', label: 'Wells Built' },
        { value: '40K+', label: 'People Served' },
        { value: '120+', label: 'Villages Reached' },
      ],
      initiatives: [
        'Borewell installation',
        'Water purification plants',
        'Rainwater harvesting systems',
        'Sanitation awareness programs',
        'Water quality monitoring',
      ],
      color: 'blue',
    },
    {
      id: 3,
      icon: <FiUsers />,
      title: 'Women Empowerment',
      tagline: 'Empowering Women, Strengthening Communities',
      description: 'We equip women with skills, resources, and support to become financially independent and leaders in their communities.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
      stats: [
        { value: '5,000+', label: 'Women Trained' },
        { value: '300+', label: 'Businesses Started' },
        { value: '85%', label: 'Income Increase' },
      ],
      initiatives: [
        'Vocational skill training',
        'Microfinance and savings groups',
        'Leadership development',
        'Legal rights awareness',
        'Entrepreneurship support',
      ],
      color: 'yellow',
    },
  ];

  const impactStories = [
    {
      title: 'Nakato\'s Journey to Education',
      program: 'Education',
      quote: 'Thanks to HopeHands scholarship, I became the first person in my family to attend university.',
      location: 'Kampala, Uganda',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    },
    {
      title: 'A Village Transformed',
      program: 'Clean Water',
      quote: 'Our children no longer have to walk miles for water. The new well changed everything.',
      location: 'Gulu, Uganda',
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=400&h=300&fit=crop',
    },
    {
      title: 'From Patient to Volunteer',
      program: 'Healthcare',
      quote: 'After receiving treatment at a HopeHands clinic, I now volunteer to help others.',
      location: 'Mbarara, Uganda',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=800&fit=crop"
            alt="Programs hero"
            className="programs-hero-image"
          />
        </div>
        <div className="container">
          <motion.div
            className="programs-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Programs</span>
            <h1>Creating Sustainable Change</h1>
            <p>
              Our comprehensive programs address the root causes of poverty and inequality,
              empowering communities to build better futures.
            </p>
          </motion.div>
        </div>
        <div className="programs-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview section">
        <div className="container">
          <div className="programs-tabs">
            {programs.map((program, index) => (
              <button
                key={program.id}
                className={`program-tab ${activeProgram === index ? 'active' : ''} ${program.color}`}
                onClick={() => setActiveProgram(index)}
              >
                <span className="tab-icon">{program.icon}</span>
                <span className="tab-label">{program.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              className="program-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="program-detail-grid">
                <div className="program-detail-content">
                  <div className={`program-detail-icon ${programs[activeProgram].color}`}>
                    {programs[activeProgram].icon}
                  </div>
                  <h2>{programs[activeProgram].title}</h2>
                  <p className="program-tagline">{programs[activeProgram].tagline}</p>
                  <p className="program-description">{programs[activeProgram].description}</p>

                  <div className="program-stats">
                    {programs[activeProgram].stats.map((stat, index) => (
                      <ProgramStat key={index} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                </div>

                <div className="program-detail-initiatives">
                  <h4>Key Initiatives</h4>
                  <ul>
                    {programs[activeProgram].initiatives.map((initiative, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <FiCheckCircle />
                        <span>{initiative}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">
                    Support This Program <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How We Work */}
      <section className="how-we-work section bg-light texture-dots">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Our Approach</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>How We Create Impact</h2>
            </ScrollReveal>
          </div>

          <div className="approach-grid">
            {[
              {
                step: '01',
                title: 'Assess',
                description: 'We work with communities to understand their unique needs and challenges.',
              },
              {
                step: '02',
                title: 'Plan',
                description: 'Together, we design sustainable solutions that address root causes.',
              },
              {
                step: '03',
                title: 'Implement',
                description: 'Local teams lead the execution with our guidance and resources.',
              },
              {
                step: '04',
                title: 'Monitor',
                description: 'We track progress and adapt programs based on outcomes.',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" once={false}>
                <div className="approach-card">
                  <span className="approach-step">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="impact-stories section">
        <div className="container">
          <div className="section-header">
            <ScrollReveal once={false}>
              <span className="section-label">Impact Stories</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1} once={false}>
              <h2>Real Stories, Real Change</h2>
            </ScrollReveal>
          </div>

          <div className="stories-grid">
            {impactStories.map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="up" once={false}>
                <div className="story-card">
                  <div className="story-image">
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="story-content">
                    <span className="story-program">{story.program}</span>
                    <h4>{story.title}</h4>
                    <p>"{story.quote}"</p>
                    <span className="story-location">{story.location}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="get-involved section bg-blue-gradient">
        <div className="container">
          <ScrollReveal direction="scale" once={false}>
            <div className="get-involved-content">
              <FiTarget className="get-involved-icon" />
              <h2>Ready to Make an Impact?</h2>
              <p>
                Whether through donations, volunteering, or partnerships, there are many
                ways to support our programs and help transform lives.
              </p>
              <div className="get-involved-buttons">
                <Link to="/contact" className="btn btn-secondary">
                  Donate Now <FiHeart />
                </Link>
                <Link to="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Programs;
