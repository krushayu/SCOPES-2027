import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaDownload, FaChevronRight, FaUniversity, FaInfoCircle, FaChevronDown, FaTrophy } from 'react-icons/fa';
import { MdPeople, MdLibraryBooks, MdContactMail } from 'react-icons/md';
import { GiSpeaker, GiCalendar, GiArchiveResearch } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          !event.target.closest('.mobile-toggle') && 
          !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '/', icon: <FaInfoCircle />, isRoute: true },
    { label: 'Themes', href: '/themes', icon: <GiArchiveResearch />, isRoute: true },
    { label: 'Speakers', href: '/speakers', icon: <GiSpeaker />, isRoute: true },
    { label: 'Dates', href: '/imp-dates', icon: <GiCalendar />, isRoute: true },
    { label: 'Accommodation', href: '/accommodation', icon: <FaUniversity />, isRoute: true },
    { label: 'Committee', href: '/committee', icon: <MdPeople />, isRoute: true},
    { label: 'Sponsors', href: '/sponsors', icon: <FaTrophy />, isRoute: true },
    { label: 'Contact', href: '/contact', icon: <MdContactMail />, isRoute: true }
  ];

  const callForPapersItems = [
    { label: 'Call for Papers', href: '/call-for-papers', isRoute: true },
    { label: 'Scope of the Conference', href: '/scope', isRoute: true },
    { label: 'Important Dates', href: '/imp-dates', isRoute: true },
    { label: 'Publication', href: '/publication', isRoute: true },
    { label: 'Program Schedule', href: '/program-schedule', isRoute: true },
    { label: 'Paper Submission', href: '/paper-submission', isRoute: true },
    { label: 'Place of Visit', href: '/places', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="conference-header">
            <div className="conference-header-content">
              {/* Left Logo */}
              <div className="header-logo left-header-logo">
                <img src="/CUTMLOGO.png" alt="CUTM Logo" className="header-logo-img" />
                <div className="header-logo-text">
                  <div className="university-name">CENTURION</div>
                  <div className="university-divider"></div>
                  <div className="university-name">UNIVERSITY</div>
                  <div className="header-tagline">Shaping Lives...<br/>Empowering Communities...</div>
                </div>
              </div>
              
              {/* Conference Details */}
              <div className="conference-title">
                <div className="conference-badge">3rd International Conference</div>
                <h1>Signal Processing, Communication, Power & Embedded Systems SCOPES - 2027</h1>
                <div className="conference-info">
                  <div className="info-item">
                    <span className="info-icon">📅</span>
                    <span className="info-text">4th - 6th February 2027</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span className="info-text">Centurion University, Parlakhemundi, Odisha</span>
                  </div>
                </div>
                <div className="sponsor-tag">
                  <span className="tag-icon">⚡</span>
                  Technical Co-Sponsored by IEEE Bhubaneswar Section & Compueter Society Chapter (CH11163)
                </div>
              </div>
              
              {/* Right Logo */}
              <div className="header-logo right-header-logo">
                <img src="/LOGO.png" alt="IEEE Logo" className="header-logo-img" />
                <div className="header-logo-text">
                  <div className="university-name">IEEE</div>
                  <div className="university-divider"></div>
                  <div className="university-name">BHUBANESWAR SECTION</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-container">
            <div className="nav-content">
              <ul className="nav-menu">
                {navItems.slice(0, 4).map((item, index) => (
                  <li className="nav-item" key={index}>
                    {item.isRoute ? (
                      <Link to={item.href} className="nav-link">
                        <span className="link-icon">{item.icon}</span>
                        <span className="link-text">{item.label}</span>
                        <span className="link-underline"></span>
                      </Link>
                    ) : (
                      <a href={item.href} className="nav-link">
                        <span className="link-icon">{item.icon}</span>
                        <span className="link-text">{item.label}</span>
                        <span className="link-underline"></span>
                      </a>
                    )}
                  </li>
                ))}
                
                {/* Call for Papers Dropdown - After Speakers */}
                <li className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <a href="#call-for-papers" className="nav-link">
                    <span className="link-icon"><MdLibraryBooks /></span>
                    <span className="link-text">Call for Papers</span>
                    <FaChevronDown className="dropdown-icon" />
                    <span className="link-underline"></span>
                  </a>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    {callForPapersItems.map((item, index) => (
                      <li key={index}>
                        {item.isRoute ? (
                          <Link to={item.href} className="dropdown-link">{item.label}</Link>
                        ) : (
                          <a href={item.href} className="dropdown-link">{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                
                {navItems.slice(4).map((item, index) => (
                  <li className="nav-item" key={index + 4}>
                    {item.isRoute ? (
                      <Link to={item.href} className="nav-link">
                        <span className="link-icon">{item.icon}</span>
                        <span className="link-text">{item.label}</span>
                        <span className="link-underline"></span>
                      </Link>
                    ) : (
                      <a href={item.href} className="nav-link">
                        <span className="link-icon">{item.icon}</span>
                        <span className="link-text">{item.label}</span>
                        <span className="link-underline"></span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="nav-cta">
                <button className="brochure-btn" onClick={() => window.location.href='#brochure'}>
                  <FaDownload className="btn-icon" />
                  <span>Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header - COMPLETELY DIFFERENT DESIGN */}
        <div className="mobile-header">
          <div className="mobile-top-bar">
            <div className="mobile-logos">
              <div className="mobile-logo-item">
                <img src="/CUTMLOGO.png" alt="CUTM Logo" className="mobile-logo-img" />
                <div className="mobile-logo-text">
                  <div className="mobile-university-name">CENTURION</div>
                  <div className="mobile-university-divider"></div>
                  <div className="mobile-university-name">UNIVERSITY</div>
                  <div className="mobile-tagline-text">Shaping Lives...<br/>Empowering Communities...</div>
                </div>
              </div>
              <div className="mobile-conference-title">
                <div className="mobile-badge">3rd International Conference on</div>
                <div className="mobile-tagline">Signal Processing, Communication, Power & Embedded Systems</div>
              </div>
              <div className="mobile-logo-item">
                <img src="/LOGO.png" alt="IEEE Logo" className="mobile-logo-img" />
                <div className="mobile-logo-text">
                  <div className="mobile-university-name">IEEE</div>
                  <div className="mobile-university-divider"></div>
                  <div className="mobile-university-name">BHUBANESWAR</div>
                </div>
              </div>
            </div>
            
            <button 
              className={`mobile-toggle ${isOpen ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
            <br></br>  
          <div className="mobile-bottom-bar">
            <div className="mobile-info-strip">
              <div className="mobile-info-item">
                <span className="mobile-info-icon">📅</span>
                <span className="mobile-info-text">Feb 4th-6th, 2027</span>
              </div>
              <div className="mobile-info-item">
                <span className="mobile-info-icon">📍</span>
                <span className="mobile-info-text">CUTM, PKD, Odisha</span>
              </div>
              <div className="mobile-info-item">
                <span className="mobile-info-icon">⚡</span>
                <span className="mobile-info-text">IEEE Co-Sponsored</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <div className="menu-logo-item">
              <img src="/CUTMLOGO.png" alt="CUTM" className="menu-logo-img" />
              <div className="menu-logo-text-wrapper">
                <div className="menu-university-name">CENTURION</div>
                <div className="menu-university-divider"></div>
                <div className="menu-university-name">UNIVERSITY</div>
                {/* <div className="menu-tagline-text">Shaping Lives...<br/>Empowering Communities...</div> */}
              </div>
            </div>
            <div className="menu-logo-item">
              <div className="menu-logo-text">
                <span className="menu-logo-main">SCOPES</span>
                <span className="menu-logo-year">2027</span>
              </div>
            </div>
            <div className="menu-logo-item">
              <img src="/LOGO.png" alt="IEEE" className="menu-logo-img" />
              <div className="menu-logo-text-wrapper">
                <div className="menu-university-name">IEEE</div>
                <div className="menu-university-divider"></div>
                <div className="menu-university-name">BHUBANESWAR SECTION</div>
              </div>
            </div>
          </div>
          <button 
            className="mobile-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="mobile-menu-content">
          <div className="mobile-conference-info">
            <h3>3rd International Conference on</h3>
            <p>Signal Processing, Communication, Power & Embedded Systems</p>
            <div className="mobile-date">
              <span className="date-icon">📅</span>
              4th - 6st February 2027
            </div>
            <div className="mobile-venue">
              <span className="venue-icon">📍</span>
              Centurion University, Pkd, Odisha
            </div>
          </div>
          
          <div className="mobile-menu-divider">
            <span>Navigation</span>
          </div>
          
          <ul className="mobile-nav-menu">
            {navItems.slice(0, 4).map((item, index) => (
              <li className="mobile-nav-item" key={index}>
                {item.isRoute ? (
                  <Link 
                    to={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    <div className="mobile-link-content">
                      <span className="mobile-link-icon-wrapper">{item.icon}</span>
                      <span className="mobile-link-text">{item.label}</span>
                    </div>
                    <FaChevronRight className="mobile-link-arrow" />
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    <div className="mobile-link-content">
                      <span className="mobile-link-icon-wrapper">{item.icon}</span>
                      <span className="mobile-link-text">{item.label}</span>
                    </div>
                    <FaChevronRight className="mobile-link-arrow" />
                  </a>
                )}
              </li>
            ))}
            
            {/* Call for Papers Mobile Dropdown */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-link" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
                <div className="mobile-link-content">
                  <span className="mobile-link-icon-wrapper"><MdLibraryBooks /></span>
                  <span className="mobile-link-text">Call for Papers</span>
                </div>
                <FaChevronDown className={`mobile-dropdown-arrow ${mobileDropdownOpen ? 'open' : ''}`} />
              </div>
              {mobileDropdownOpen && (
                <ul className="mobile-submenu">
                  {callForPapersItems.map((item, index) => (
                    <li key={index}>
                      {item.isRoute ? (
                        <Link to={item.href} onClick={() => setIsOpen(false)} className="mobile-submenu-link">
                          {item.label}
                        </Link>
                      ) : (
                        <a href={item.href} onClick={() => setIsOpen(false)} className="mobile-submenu-link">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            {navItems.slice(4).map((item, index) => (
              <li className="mobile-nav-item" key={index + 4}>
                {item.isRoute ? (
                  <Link 
                    to={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    <div className="mobile-link-content">
                      <span className="mobile-link-icon-wrapper">{item.icon}</span>
                      <span className="mobile-link-text">{item.label}</span>
                    </div>
                    <FaChevronRight className="mobile-link-arrow" />
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    <div className="mobile-link-content">
                      <span className="mobile-link-icon-wrapper">{item.icon}</span>
                      <span className="mobile-link-text">{item.label}</span>
                    </div>
                    <FaChevronRight className="mobile-link-arrow" />
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mobile-cta-section">
            <button 
              className="mobile-brochure-btn"
              onClick={() => {setIsOpen(false); window.location.href='#brochure';}}
            >
              <FaDownload className="mobile-btn-icon" />
              Download Conference Brochure
            </button>
            <a 
              href="#paper submit" 
              className="mobile-register-btn"
              onClick={() => setIsOpen(false)}
            >
              Submit Paper
            </a>
          </div>
          
          {/* <div className="mobile-footer">
            <p className="mobile-copyright">
              © SCOPES 2026 • Centurion University
            </p>
          </div> */}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
