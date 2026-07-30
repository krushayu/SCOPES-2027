import React from 'react';
import '../styles/Contact.css';
import {
  FaMapMarkerAlt, FaLocationArrow, FaQuestionCircle, FaBullhorn, FaCogs,
  FaBook, FaFileAlt, FaPhone, FaEnvelope, FaBuilding, FaUserTie
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  const queryContacts = [
    { icon: <FaBullhorn />, reason: 'Publicity & Sponsorship', name: 'Prof. (Dr.) Sangram Keshari Swain', desig: "Dean (Exams & Students' Welfare), CUTM, Odisha", phone: '+91 9937093949', accent: '#6366f1' },
    { icon: <FaCogs />,    reason: 'Administration',           name: 'Dr. Prabhat Kumar Patnaik',          desig: 'HOD, Dept. of ECE & EEE (PKD), CUTM, Odisha', phone: '+91 7008701920', accent: '#0ea5e9' },
    { icon: <FaBook />,    reason: 'Publication',              name: 'Prof. Satyanarayan Padhy',            desig: 'Associate Dean, SoET, CUTM, Odisha',           phone: '+91 8917440019', accent: '#10b981' },
    { icon: <FaFileAlt />, reason: 'Paper Submission',         name: 'Dr. Abhishek Das',                   desig: 'Assistant Professor, SoET, CUTM, Odisha',      phone: '+91 7008809932', accent: '#f59e0b' },
  ];

  const generalContacts = [
    { name: 'Dr. Debendra Kumar Sahoo', role: 'Organizing Chair', desig: 'Associate Professor, Dept. of ECE, CUTM, Odisha', phone: '+91 7008242454', email: 'debendra.sahoo@cutm.ac.in', accent: '#00629B' },
    { name: 'Dr. Ashok Misra',          role: 'Convener', desig: 'Professor, Dept. of Mathematics, CUTM, Odisha',  phone: '+91 9937563329', email: 'ashok.misra@cutm.ac.in',    accent: '#00b4d8' },
  ];

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
          <div className="ct-address-badge">
            <FaBuilding className="ct-address-badge-icon" />
            Office Address
          </div>
          <h2 className="ct-address-title">SCOPES-2027</h2>

          <div className="ct-address-rows">
            <div className="ct-addr-row">
              <FaMapMarkerAlt className="ct-addr-icon" />
              <span>Room No: F-221, 2nd Floor, CRC-2<br />Dept. of ECE, School of Engineering &amp; Technology<br />Centurion University of Technology &amp; Management<br />R-Sitapur, Allurinagar, Paralakhemundi<br />Dist: Gajapati, Odisha — 761211</span>
            </div>
            
            <div className="ct-addr-row">
              <FaEnvelope className="ct-addr-icon" />
              <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>
            </div>
          </div>

          {/* <div className="ct-address-actions">
            <a href="mailto:scopes2027@cutm.ac.in" className="ct-action-btn ct-action-email">
              <MdEmail /> Email Us
            </a>
            <a href="tel:+917008242454" className="ct-action-btn ct-action-call">
              <MdPhone /> Call Us
            </a>
          </div> */}
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
            <span>Centurion University of Technology &amp; Management, Paralakhemundi, Odisha</span>
          </div>
          <div className="ct-map-footer">
            <FaQuestionCircle className="ct-map-pin" style={{color: '#00b4d8'}} />
            <span>If any website related issue? <a href="https://krushayu.in/contact" target="_blank" rel="noreferrer">Click Here</a></span>
          </div>
        </div>
      </div>

      {/* ── General Contact (Chair & Convener) ── */}
      
      {/* ── Specific Query Section ── */}
      <div className="ct-section ct-query-section">
        <div className="ct-section-header">
          <div className="ct-section-label">
            <FaQuestionCircle className="ct-sl-icon" />
            Query Related Contacts
          </div>
          <h2 className="ct-section-title">For Specific Queries</h2>
          <p className="ct-section-sub">Reach out to the right person for your query</p>
        </div>
        <div className="ct-query-grid">
          {queryContacts.map((c, i) => (
            <div className="ct-query-card" key={i} style={{'--accent': c.accent}}>
              <div className="ct-query-icon-wrap">
                <div className="ct-query-icon" style={{background: c.accent}}>{c.icon}</div>
              </div>
              <div className="ct-query-reason">{c.reason}</div>
              <h3 className="ct-query-name">{c.name}</h3>
              <p className="ct-query-desig">{c.desig}</p>
              <a href={`tel:${c.phone}`} className="ct-query-phone">
                <FaPhone className="ct-query-phone-icon" /> {c.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

<div className="ct-section ct-general-section">
        <div className="ct-section-header">
          <div className="ct-section-label">
            <FaUserTie className="ct-sl-icon" />
            For More Query or Information
          </div>
          <h2 className="ct-section-title">For Detailed Information</h2>
          <p className="ct-section-sub">Reach out directly to the conference Chair &amp; Convener</p>
        </div>
        <div className="ct-general-grid">
          {generalContacts.map((c, i) => (
            <div className="ct-general-card" key={i} style={{'--accent': c.accent}}>
              <div className="ct-general-top">
                <div className="ct-general-avatar" style={{background: c.accent}}>
                  {c.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, '').split(' ').filter(w => w).map(w => w[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div className="ct-general-role" style={{color: c.accent}}>{c.role}</div>
                  <h3 className="ct-general-name">{c.name}</h3>
                  <p className="ct-general-desig">{c.desig}</p>
                </div>
              </div>
              <div className="ct-general-divider" />
              <div className="ct-general-contacts">
                <a href={`tel:${c.phone}`} className="ct-general-contact-row">
                  <span className="ct-general-contact-icon" style={{background: c.accent + '18', color: c.accent}}><FaPhone /></span>
                  {c.phone}
                </a>
                {/* <a href={`mailto:${c.email}`} className="ct-general-contact-row">
                  <span className="ct-general-contact-icon" style={{background: c.accent + '18', color: c.accent}}><FaEnvelope /></span>
                  {c.email}
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
