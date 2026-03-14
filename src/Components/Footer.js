import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, onValue, runTransaction, onDisconnect, push, remove, set } from "firebase/database";
import { db } from "../firebase";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaCircle,
} from "react-icons/fa";

const Footer = () => {
  const [onlineCount, setOnlineCount] = useState(0);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    // --- Online Users (real-time) using .info/connected ---
    const connectedRef = ref(db, '.info/connected');
    const onlineRef = ref(db, 'onlineUsers');
    let userRef = null;

    const unsubConnected = onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        userRef = push(onlineRef);
        set(userRef, true);
        onDisconnect(userRef).remove();
      }
    });

    const unsubOnline = onValue(onlineRef, (snap) => {
      const count = snap.exists() ? Object.keys(snap.val()).length : 0;
      setOnlineCount(count);
      const timeKey = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      push(ref(db, 'onlineHistory'), { time: timeKey, count });
    });

    // --- Total Visitors + Country tracking ---
    const totalRef = ref(db, 'totalVisitors');
    const alreadyCounted = localStorage.getItem('v2counted') === new Date().toDateString();

    if (!alreadyCounted) {
      runTransaction(totalRef, (current) => (current || 0) + 1);
      localStorage.setItem('v2counted', new Date().toDateString());

      const getCountry = async () => {
        const apis = [
          () => fetch('https://ipwho.is/').then(r => r.json()).then(d => d.country_code ? d.country : null),
          () => fetch('https://ipapi.co/json/').then(r => r.json()).then(d => d.country_name),
          () => fetch('https://freeipapi.com/api/json').then(r => r.json()).then(d => d.countryName),
        ];
        for (const api of apis) {
          try {
            const country = await api();
            if (country && country.length > 1 && country !== 'Unknown') return country;
          } catch {}
        }
        return null;
      };

      getCountry().then(country => {
        if (country) {
          const key = country.replace(/[.#$[\]\s]/g, '_');
          runTransaction(ref(db, `countryVisits/${key}`), (c) => (c || 0) + 1);
        }
      });
    }

    const unsubTotal = onValue(totalRef, (snap) => {
      setTotalCount(snap.val() || 0);
    });

    return () => {
      unsubConnected();
      unsubOnline();
      unsubTotal();
      if (userRef) remove(userRef);
    };
  }, []);

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
                          Accommodation
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
                            Department of ECE, School of Engineering & Technology,<br />
                            Centurion University of Technology and Management,
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
                            <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a><br />
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
            <div className="visitor-counters">
              <div className="visitor-counter">
                <FaCircle className="online-dot" />
                <span>{onlineCount} user{onlineCount !== 1 ? 's' : ''} online now</span>
              </div>
              <div className="visitor-divider">|</div>
              <div className="visitor-counter">
                <span className="total-label">Total Visitors:</span>
                <span className="visitor-number">{totalCount !== null ? totalCount.toLocaleString() : '...'}</span>
              </div>
              <div className="visitor-divider">|</div>
              <Link to="/analytics" className="analytics-btn">View More</Link>
            </div>
            <p className="developed-by">
              Design & Developed by <a href="https://www.linkedin.com/in/krushayu" target="_blank" rel="noopener noreferrer" className="developer-link">krush@yu</a>
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
          <div className="visitor-counters">
            <div className="visitor-counter">
              <FaCircle className="online-dot" />
              <span>{onlineCount} user{onlineCount !== 1 ? 's' : ''} online now</span>
            </div>
            <div className="visitor-divider">|</div>
            <div className="visitor-counter">
              <span className="total-label">Total Visitors:</span>
              <span className="visitor-number">{totalCount !== null ? totalCount.toLocaleString() : '...'}</span>
            </div>
            <div className="visitor-divider">|</div>
            <Link to="/analytics" className="analytics-btn">View More</Link>
          </div>
          <p className="mobile-developed-by">
            Design & Developed by <a href="https://www.linkedin.com/in/krushayu" target="_blank" rel="noopener noreferrer" className="developer-link">Krush@yu</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
