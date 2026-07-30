import React from 'react';
import '../styles/Contact.css';
import {
  // FaPhone, FaEnvelope,FaUsers,
  FaMapMarkerAlt, FaLocationArrow,FaQuestionCircle
} from 'react-icons/fa';
import { MdEmail, MdPhone,
  // MdLocationOn
} from 'react-icons/md';

const Contact = () => {
  // const organizers = [
  //   { name: 'Dr. Debendra Kumar Sahoo',          phone: '+91 7008242454', email: 'debendra.sahoo@cutm.ac.in',  designation: 'Assoc. Prof., Dept of ECE',  color: '#6366f1' },
  //   { name: 'Dr. Ashok Misra',                   phone: '+91 9937563329', email: 'ashok.misra@cutm.ac.in',     designation: 'Prof., Dept of Mathematics',  color: '#0ea5e9' },
  //   { name: 'Prof. Prabhat Kumar Patnaik',        phone: '+91 7008701920', email: 'prabhat.patnaik@cutm.ac.in', designation: 'Asst. Prof., Dept of ECE',    color: '#10b981' },
  //   { name: 'Prof. Satyanarayan Padhy',           phone: '+91 8917440019', email: 'snpadhy@cutm.ac.in',         designation: 'Asst. Prof., Dept of ECE',    color: '#f59e0b' },
  //   { name: 'Prof. (Dr.) Sangram Keshari Swain', phone: '+91 9937093949', email: 'sangram@cutm.ac.in',         designation: 'Prof., Dept of CSE',          color: '#ef4444' },
  //   { name: 'Dr. Abhishek Das',                  phone: '+91 7008809932', email: 'abhishek.das@cutm.ac.in',    designation: 'Asst. Prof., Dept of CSE',    color: '#8b5cf6' },
  // ];

  return (
    <div className="ct-wrapper">

      {/* ── Hero ── */}
      <div className="ct-hero">
        <div className="ct-hero-content">
          <h1>Contact Us</h1>
          <p>Reach out to the SCOPES 2027 organizing team for any queries</p>
        </div>
      </div>

      {/* ── Address + Map ── */}
      <div className="ct-section ct-info-map">
        <div className="ct-address-block">
          <div className="ct-section-label">
            <FaLocationArrow className="ct-sl-icon" />
            Office Address
          </div>
          <h2 className="ct-address-title">SCOPES-2027</h2>
          <p className="ct-address-text">
            Room No: F-221, 2nd Floor, CRC-2<br />
            Department of ECE, School of Engineering & Technology<br />
            Centurion University of Technology & Management<br />
            R-Sitapur, Allurinagar, Paralakhemundi<br />
            Dist: Gajapati, Odisha - 761211<br />
            Phone: +91 7008242454(Chair)<br />
            +91 9937563329 (Convener)
          </p>
          <div className="ct-address-actions">
            <a href="mailto:scopes2027@cutm.ac.in" className="ct-action-btn ct-action-email">
              <MdEmail /> Email Us
            </a>
            <a href="tel:+917008242454" className="ct-action-btn ct-action-call">
              <MdPhone /> Call Us
            </a>
          </div>
        </div>

        <div className="ct-map-block">
          <div className="ct-map-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7553.683218262049!2d84.1376441!3d18.8052108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766844388834!5m2!1sen!2sin"
              title="CUTM Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="ct-map-footer">
            <FaMapMarkerAlt className="ct-map-pin" />
            <span>Centurion University of Technology & Management, Paralakhemundi, Odisha</span>
          </div>
          <div className="ct-map-footer">
            <FaQuestionCircle className="ct-map-pin" />
            <span>If any website related issue? <a href="https://krushayu.in/contact" target="_blank">Click Here</a></span>
          </div>
        </div>
      </div>

      {/* ── Organizing Committee ── */}
      {/* <div className="ct-section ct-committee-section">
        <div className="ct-section-header">
          <div className="ct-section-label">
            <FaUsers className="ct-sl-icon" />
            Meet the Team
          </div>
          <h2 className="ct-section-title">Organizing Committee</h2>
          <p className="ct-section-sub">Reach out directly to our organizing members</p>
        </div>

        <div className="ct-members-grid">
          {organizers.map((o, i) => (
            <div className="ct-member-card" key={i} style={{ '--accent': o.color }}>
              <div className="ct-member-top">
                <div className="ct-avatar" style={{ background: o.color }}>
                  {o.name.split(' ').slice(-1)[0].charAt(0)}
                </div>
                <div className="ct-member-meta">
                  <h3>{o.name}</h3>
                  <span className="ct-member-desig">{o.designation}</span>
                </div>
              </div>
              <div className="ct-member-divider"></div>
              <div className="ct-member-contacts">
                <a href={`tel:${o.phone}`} className="ct-contact-row">
                  <span className="ct-contact-icon" style={{ background: o.color + '18', color: o.color }}>
                    <FaPhone />
                  </span>
                  <span>{o.phone}</span>
                </a>
                <a href={`mailto:${o.email}`} className="ct-contact-row">
                  <span className="ct-contact-icon" style={{ background: o.color + '18', color: o.color }}>
                    <FaEnvelope />
                  </span>
                  <span>{o.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}

    </div>
  );
};

export default Contact;
