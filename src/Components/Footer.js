import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer - Only shows on desktop */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-content">
              {/* Left Side - Logo and Links */}
              <div className="footer-left">
                {/* Logo Section - First Column */}
                <div className="footer-logo-column">
                  <div className="footer-logo-section">
                    <img
                      src="/CUTMLOGO.png"
                      alt="CUTM Logo"
                      className="footer-logo"
                    />
                    <div className="footer-logo-text">
                      <div className="footer-university-name">CENTURION</div>
                      <div className="footer-university-divider"></div>
                      <div className="footer-university-name">UNIVERSITY</div>
                      <div className="footer-tagline">Shaping Lives...<br/>Empowering Communities...</div>
                    </div>
                  </div>
                </div>

                <div className="footer-grid">
                  {/* Call For Papers Section */}
                  <div className="footer-section">
                    <h3 className="footer-title">
                      <FaPaperPlane className="section-icon" />
                      Quick Links
                    </h3>
                    <ul className="footer-links">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/committee">Committee</Link>
                      </li>
                      <li>
                        <Link to="/sponsors">Sponsors</Link>
                      </li>
                      <li>
                        <Link to="/registration">Registration</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Downloads Section */}
                  <div className="footer-section">
                    <h3 className="footer-title">Author Guidance</h3>
                    <ul className="footer-links">
                      <li>
                        <Link to="/scope">Scope</Link>
                      </li>
                      <li>
                        <Link to="/imp-dates">Important Dates</Link>
                      </li>
                      <li>
                        <Link to="/paper-submission">Paper Submission</Link>
                      </li>
                      <li>
                        <Link to="/places">Place of Visit</Link>
                      </li>
                      <li>
                        <Link to="/accommodation">
                          Accommodation & Transportation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Us Section */}
                  <div className="footer-section contact-section">
                    <h3 className="footer-title">
                      <FaMapMarkerAlt className="section-icon" />
                      Contact Us
                    </h3>
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="contact-details">
                          <h4>Address</h4>
                          <p>
                            Room No: F-221, 2nd Floor, CRC-2<br />
                            Department of ECE, School of Engineering & Technology<br />
                            At: R-Sitapur, Allurinagar, Paralakhemundi<br />
                            Dist: Gajapati, Odisha, India - 761211
                          </p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaPhone />
                        </div>
                        <div className="contact-details">
                          <h4>Phone</h4>
                          <p>
                            <a href="tel:+917008242454">+91 7008242454</a> (Chair)<br />
                            <a href="tel:+919937563329">+91 9937563329</a> (Convener)
                          </p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <FaEnvelope />
                        </div>
                        <div className="contact-details">
                          <h4>Email</h4>
                          <p>
                            <a href="mailto:scopes2026@cutm.ac.in">scopes2026@cutm.ac.in</a><br />
                            <a href="mailto:debendra.sahoo@cutm.ac.in">debendra.sahoo@cutm.ac.in</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Location Map */}
              <div className="footer-right">
                <div className="location-container">
                  <h3 className="location-title">
                    <FaMapMarkerAlt className="section-icon" />
                    Location
                  </h3>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7553.683218262049!2d84.1376441!3d18.8052108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766844388834!5m2!1sen!2sin"
                      title="Conference Location"
                      className="google-map"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p className="copyright">
              © SCOPES-2027 || All rights reserved by Centurion University of
              Technology & Management, Odisha, India
            </p>
            <p className="developed-by">
              Developed by <a href="https://www.linkedin.com/in/krushayu" target="_blank" rel="noopener noreferrer" className="developer-link">Krush@yu</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer - Shows only copyright */}
      <div className="mobile-footer">
        <div className="mobile-footer-content">
          <p className="mobile-copyright">
            © SCOPES-2027 || All rights reserved by Centurion University of
            Technology & Management
          </p>
          <p className="mobile-developed-by">
            Developed by <a href="https://www.linkedin.com/in/krushayu" target="_blank" rel="noopener noreferrer" className="developer-link">Krush@yu</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
