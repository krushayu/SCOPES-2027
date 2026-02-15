import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaCalendarAlt, FaPaperPlane, FaAward, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
// import { RiCalendarEventFill } from 'react-icons/ri';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [aboutImgIndex, setAboutImgIndex] = useState(0);
  const [deptImgIndex, setDeptImgIndex] = useState(0);
  const [scopesImgIndex, setScopesImgIndex] = useState(0);

  const aboutImages = ['/slide1.png', '/slide2.png', '/slide3.png'];
  const deptImages = ['/ece1.png', '/ece2.png', '/slide2.png'];
  const scopesImages = ['/scope1.png', '/scope2.png', '/slide2.png'];
  
 
  useEffect(() => {
    fetch('/data/speakers.json')
      .then(res => res.json())
      .then(data => setSpeakers(data))
      .catch(err => console.error('Error loading speakers:', err));
  }, []);
  
  // Auto-change images for About, Department, and SCOPES sections
  useEffect(() => {
    const aboutInterval = setInterval(() => {
      setAboutImgIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    const deptInterval = setInterval(() => {
      setDeptImgIndex((prev) => (prev + 1) % deptImages.length);
    }, 3000);
    const scopesInterval = setInterval(() => {
      setScopesImgIndex((prev) => (prev + 1) % scopesImages.length);
    }, 3000);
    return () => {
      clearInterval(aboutInterval);
      clearInterval(deptInterval);
      clearInterval(scopesInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date('2027-02-04T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const slides = [
    {
      image: '/slide1.png',
      title: '3rd International Conference',
      subtitle: 'Signal Processing, Communication, Power & Embedded Systems',
      tag: 'IEEE Technical Co-Sponsored'
    },
    {
      image: '/slide2.png',
      title: '04-06 February 2027',
      subtitle: 'Centurion University, Parlakhemundi',
      tag: 'Hybrid Conference'
    },
    {
      image: '/slide3.png',
      title: 'Call for Papers',
      subtitle: 'Submit Your Research Work',
      tag: 'IEEE Xplore Indexed'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const conferenceInfo = [
    { icon: <FaCalendarAlt />, label: 'Dates', value: '04-06 Feb 2027', color: '#FF6B6B', link: '/imp-dates' },
    { icon: <FaMapMarkerAlt />, label: 'Venue', value: 'Centurion University, Paralakhemundi', color: '#4ECDC4', link: 'https://maps.app.goo.gl/hVvbqeLRXWvEa9gT9' },
    { icon: <FaPaperPlane />, label: 'Submissions', value: 'Open Now', color: '#45B7D1', link: '/paper-submission' },
    { icon: <FaAward />, label: 'Publication', value: 'IEEE Xplore', color: '#96CEB4', link: '/publication' },
    { icon: <MdEventNote />, label: 'Format', value: 'Hybrid', color: '#DDA0DD', link: '/program-schedule' }
  ];

  const importantDates = [
    { title: 'Abstract Submission date', date: '01 March 2026', status: 'active' },
    { title: 'Full Papar Submission date', date: '01 April 2026', status: 'upcoming' },
    { title: 'Notification of Acceptance date', date: '10 October 2026', status: 'upcoming' },
    { title: 'Final Paper Submission date', date: '02 November 2026', status: 'upcoming' },
  ];

  return (
    <div className="home-container">
      {/* Marquee Section */}
      <div className="marquee-section">
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee className="marquee-text" behavior="scroll" direction="left">
          Conference Record Number: 71015 || 
          <a 
            href="/program-schedule" 
            className="program-schedule-link"
          >
            Program Schedule <sup className="new-badge">(New)</sup> - Click Here
          </a> || 
          Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements
        </marquee>
      </div>

      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="slider-container">
          {/* Countdown Timer Overlay */}
          <div className="countdown-overlay">
            <h3 className="countdown-title">Conference Starts In</h3>
            <div className="countdown-boxes">
              <div className="countdown-box">
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
          
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${slide.image})` }}
            >
              <div className="slide-content">
                <div className="slide-badge">{slide.tag}</div>
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <div className="slide-actions">
                  {/* <button 
                    className="primary-btn"
                    onClick={() => window.open('/registration', '_blank')}
                  >
                    <FaFileAlt className="btn-icon" />
                    Register Now
                  </button> */}
                  <button 
                    className="secondary-btn"
                    onClick={() => window.open('/submission', '_blank')}
                  >
                    <FaPaperPlane className="btn-icon" />
                    Submit Paper
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <button className="slider-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            ›
          </button>
          
          {/* Slider Dots */}
          {/* <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div> */}
        </div>

        {/* Conference Quick Info */}
        <div className="conference-quick-info">
          <div className="info-grid">
            {conferenceInfo.map((item, index) => {
              const isExternal = item.link.startsWith('http');
              const isHash = item.link.startsWith('#');
              
              if (isExternal) {
                return (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="info-card" key={index} style={{ textDecoration: 'none' }}>
                    <div className="info-icon" style={{ backgroundColor: item.color }}>
                      {item.icon}
                    </div>
                    <div className="info-content">
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  </a>
                );
              }
              
              const CardWrapper = isHash ? 'a' : Link;
              const linkProps = isHash ? { href: item.link } : { to: item.link };
              
              return (
                <CardWrapper {...linkProps} className="info-card" key={index} style={{ textDecoration: 'none' }}>
                  <div className="info-icon" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <div className="info-content">
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="section-header">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="section-subtitle">Learn from world-renowned experts and industry leaders</p>
        </div>
        
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image-wrapper">
                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-profession">{speaker.profession}</p>
              <button 
                className="speaker-see-more"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div className="speaker-modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="speaker-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSpeaker(null)}>×</button>
            <div className="modal-content">
              <div className="modal-left">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-speaker-image" />
              </div>
              <div className="modal-right">
                <h2 className="modal-speaker-name">{selectedSpeaker.name}</h2>
                <p className="modal-speaker-profession">{selectedSpeaker.profession}</p>
                <div className="modal-section">
                  <h3>About</h3>
                  <p>{selectedSpeaker.about.length > 300 ? (
                    <>
                      {selectedSpeaker.about.substring(0, 300)}...
                      <button 
                        className="read-more-btn"
                        onClick={(e) => {
                          e.target.previousSibling.textContent = selectedSpeaker.about;
                          e.target.style.display = 'none';
                        }}
                      >
                        Read More
                      </button>
                    </>
                  ) : selectedSpeaker.about}</p>
                </div>
                <div className="modal-section">
                  <h3>Talk Title</h3>
                  <p className="talk-title">{selectedSpeaker.talkTitle}</p>
                </div>
                <div className="modal-section">
                  <h3>Abstract</h3>
                  <p>{selectedSpeaker.abstract}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About University Section */}
      <section className="about-university-section">
        <div className="section-header">
          <h2 className="section-title">Centurion University of Technology and Management</h2>
          <p className="section-subtitle">Accredited with 'A+' Grade by NAAC</p>
        </div>
        <div className="about-content">
          <div className="about-image-slider">
            <img key={aboutImgIndex} src={aboutImages[aboutImgIndex]} alt="CUTM Campus" className="about-img" />
          </div>
          <div className="about-text">
            <p>
              Centurion University of Technology and Management (CUTM) is the first private University in Odisha established through the CUTM Act 4 of the Odisha State Legislative Assembly in 2010. It has been recognized as Grade-A+ University by National Assessment and Accreditation Council (NAAC), Ministry of HRD and 12 B status by the University Grants Commission (UGC).
            </p>
            <p>
              This University is duly recognized as a pioneer in 'Skill Integrated Higher Education'. Its unique model lays specific emphasis on creating sustainable livelihoods on a national scale in challenging geographies through education that results in employability and sparks entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="department-section">
        <div className="section-header">
          <h2 className="section-title">Department of Electronics and Communication Engineering</h2>
        </div>
        <div className="department-content">
          <div className="department-text">
            <p>
              It aims to produce qualified and dynamic engineers in the fast-changing area of Smart Devices, Mobile emerging technologies, automation, Industrial IoT, and VLSI. The Department has sophisticated and modern laboratory equipment and software/tool (HFSS, CADENCE, MATLAB, MULTISIM, KEIL uVision, LABVIEW) for research and development work.
            </p>
            <p>
              The department undertakes real-time application projects in Smart Irrigation, Industrial IoT, Soil Moisture Prototype Development, Insulin Pump Prototype Development and Chip Design.
            </p>
          </div>
          <div className="department-image">
            <img key={deptImgIndex} src={deptImages[deptImgIndex]} alt="ECE Department" className="dept-img" />
          </div>
        </div>
      </section>

      {/* SCOPES Conference Section */}
      <section className="scopes-conference-section">
        <div className="section-header">
          <h2 className="section-title">SCOPES 2027</h2>
          <p className="section-subtitle">Signal Processing, Communication, Power & Embedded Systems</p>
        </div>
        <div className="scopes-content">
          <div className="scopes-image-slider">
            <img key={scopesImgIndex} src={scopesImages[scopesImgIndex]} alt="SCOPES Conference" className="scopes-img" />
          </div>
          <div className="scopes-text">
            <p>
              SCOPES-2027 is being organized by CUTM with technical co-sponsorship by IEEE Kolkata Section and Bhubaneswar Sub-Section. The aim of this conference is to bring together academicians and industry experts in the fields of Signal Processing, Communication System, Power System and Embedded Systems.
            </p>
            <p>
              The conference aims to provide a premier international forum for sharing knowledge and the latest research advancement. All submitted papers will be reviewed by experts and accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.
            </p>
          </div>
        </div>
      </section>

      {/* IEEE Copyright Section */}
      <section className="ieee-copyright-section">
        <h3 className="copyright-heading">IEEE Copyright Details</h3>
        <div className="copyright-list">
          {/* <p>U.S. Government work not protected by U.S. copyright</p>
          <p>79-8-3315-0645-2/24/$31.00 ©2024 Crown</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 European Union</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 IEEE</p> */}
          <p>Copyright Details Coming Soon</p>
        </div>
      </section>


      {/* Conference Highlights */}
      <section className="highlights-section">
        <div className="section-header">
          <h2 className="section-title">Conference Highlights</h2>
          <p className="section-subtitle">Join the premier event in signal processing and embedded systems</p>
        </div>
        
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <FaAward />
              </div>
            </div>
            <h3>IEEE Xplore Publication</h3>
            <p>All accepted papers will be submitted for inclusion in IEEE Xplore Digital Library</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <FaUserFriends />
              </div>
            </div>
            <h3>Expert Speakers</h3>
            <p>Learn from renowned researchers and industry experts from around the globe</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <FaCalendarAlt />
              </div>
            </div>
            <h3>Networking Opportunities</h3>
            <p>Connect with professionals, researchers, and industry leaders</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                <MdEventNote />
              </div>
            </div>
            <h3>Hybrid Conference</h3>
            <p>Participate both online and in-person with flexible attendance options</p>
          </div>
        </div>
      </section>
      
      {/* Important Dates & Registration Fees */}
      <section className="dates-fees-section">
        <div className="section-header">
          <h2 className="section-title">Important Information</h2>
          <p className="section-subtitle">Key dates and registration details</p>
        </div>
        
        <div className="dates-fees-grid">
          {/* Important Dates - Left Side */}
          <div className="dates-column">
            <h3 className="column-title">Important Dates</h3>
            <div className="dates-list">
              {importantDates.map((date, index) => (
                <div className={`date-item ${date.status}`} key={index}>
                  <div className="date-dot"></div>
                  <div className="date-content">
                    <h4 className="date-title">{date.title}</h4>
                    <div className="date-value">{date.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Fees - Right Side */}
          <div className="fees-column">
            <h3 className="column-title">Registration Fees</h3>
            <div className="fees-table-wrapper">
              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Early Bird</th>
                    <th>Regular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Industry Practitioner</td>
                    <td>₹10,000</td>
                    <td>₹11,000</td>
                  </tr>
                  <tr>
                    <td>Academician</td>
                    <td>₹6,000</td>
                    <td>₹6,500</td>
                  </tr>
                  <tr>
                    <td>Students</td>
                    <td>₹4,000</td>
                    <td>₹4,500</td>
                  </tr>
                  <tr>
                    <td>Attendee</td>
                    <td colSpan="2">₹2,500</td>
                  </tr>
                  <tr>
                    <td>Foreign Delegates</td>
                    <td>USD 200</td>
                    <td>USD 250</td>
                  </tr>
                </tbody>
              </table>
              <button className="register-btn">Register Now</button>
              <p className="fees-note">* Registration is mandatory. Fee includes Conference Kit, Banquet, Lunch (3), Tea (5), and GST.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Be Part of SCOPES 2027?</h2>
          <p>Join leading researchers and industry professionals in this premier conference</p>
          <div className="cta-buttons">
            <button className="cta-primary-btn">
              <FaPaperPlane className="btn-icon" />
              Submit Your Paper
            </button>
            <button className="cta-secondary-btn">
              <FaUserFriends className="btn-icon" />
              Register as Attendee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
