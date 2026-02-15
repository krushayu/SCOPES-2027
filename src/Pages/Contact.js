import '../styles/Contact.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUser, 
  FaCalendarAlt, 
  FaClock, 
  FaBuilding,

} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = () => {
  const organizers = [
    {
      role: 'Organizing Chair',
      name: 'Dr. Debendra Kumar Sahoo',
      phone: '+91 7008242454',
      email: 'debendra.sahoo@cutm.ac.in',
      designation: 'Professor, Dept of ECE'
    },
    {
      role: 'Convener',
      name: 'Dr. Ashok Misra',
      phone: '+91 9937563329',
      email: 'ashok.misra@cutm.ac.in',
      designation: 'Professor, Dept of ECE'
    },
    {
      role: 'Co-Convener',
      name: 'Prof. Prabhat Kumar Patnaik',
      phone: '+91 7008701920',
      email: 'prabhat.patnaik@cutm.ac.in',
      designation: 'Associate Professor, Dept of ECE'
    },
    {
      role: 'Co-Convener',
      name: 'Prof. Satyanarayan Padhy',
      phone: '+91 8917440019',
      email: 'snpadhy@cutm.ac.in',
      designation: 'Associate Professor, Dept of ECE'
    },
    {
      role: 'Co-Convener',
      name: 'Prof. (Dr.) Sangram Keshari Swain',
      phone: '+91 9937093949',
      email: 'sangram@cutm.ac.in',
      designation: 'Professor, Dept of ECE'
    }
  ];

  const conferenceInfo = [
    { icon: <FaCalendarAlt />, label: 'Conference Dates', value: '4th - 6th February 2027' },
    { icon: <FaClock />, label: 'Venue Timings', value: '09:00 AM - 05:00 PM' },
    { icon: <FaBuilding />, label: 'Conference Hall', value: 'CRC-2, Room No: F-221' }
  ];

  return (
    <div className="contact-wrapper">
      {/* <div className="contact-header">
        <div className="header-content">
          <div className="header-badge">GET IN TOUCH</div>
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">
            We're here to help and answer any questions you might have about SCOPES 2026
          </p>
        </div>
        <div className="header-pattern"></div>
      </div> */}

      <div className="contact-main">
        {/* Conference Information Cards */}
        <div className="info-cards">
          {conferenceInfo.map((item, index) => (
            <div className="info-card" key={index}>
              <div className="info-card-icon">{item.icon}</div>
              <div className="info-card-content">
                <div className="info-card-label">{item.label}</div>
                <div className="info-card-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Grid */}
        <div className="contact-grid">
          {/* Left Column - Office & Map */}
          <div className="contact-left">
            {/* SCOPES Office Card */}
            <div className="office-card">
              <h2 className="section-title">
                <FaBuilding className="section-icon" />
                SCOPES Office
              </h2>
              
              <div className="office-details">
                <div className="detail-row">
                  <div className="detail-icon">
                    <MdLocationOn />
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Address</span>
                    <p>Room No: F-221, 2nd Floor, CRC-2<br />
                    Department of ECE, School of Engineering & Technology<br />
                    At: R-Sitapur, Allurinagar, Paralakhemundi<br />
                    Dist: Gajapati, Odisha, India - 761211</p>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">
                    <MdPhone />
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Phone</span>
                    <p>
                      <a href="tel:+917008242454">+91 7008242454</a> (Organizing Chair)<br />
                      <a href="tel:+919937563329">+91 9937563329</a> (Convener)
                    </p>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">
                    <MdEmail />
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Email</span>
                    <p>
                      <a href="mailto:scopes2026@cutm.ac.in">scopes2026@cutm.ac.in</a> (Primary)<br />
                      <a href="mailto:debendra.sahoo@cutm.ac.in">debendra.sahoo@cutm.ac.in</a> (Chair)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="quick-contact">
                <a href="mailto:scopes2026@cutm.ac.in" className="contact-btn email-btn">
                  <MdEmail />
                  Email Us
                </a>
                <a href="tel:+917008242454" className="contact-btn phone-btn">
                  <MdPhone />
                  Call Us
                </a>
              </div>
            </div>

            {/* Location Map Card */}
            <div className="map-card">
              <h2 className="section-title">
                <FaMapMarkerAlt className="section-icon" />
                Conference Location
              </h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7553.683218262049!2d84.1376441!3d18.8052108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766844388834!5m2!1sen!2sin"
                  title="CUTM Location"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-address">
                <FaMapMarkerAlt className="address-icon" />
                <span>Centurion University of Technology & Management, Parlakhemundi, Odisha</span>
              </div>
            </div>
          </div>

          {/* Right Column - Organizing Committee */}
          <div className="contact-right">
            <div className="committee-card">
              <h2 className="section-title">
                <FaUser className="section-icon" />
                Organizing Committee
              </h2>
              
              <div className="committee-list">
                {organizers.map((organizer, index) => (
                  <div className="committee-member" key={index}>
                    <div className="member-header">
                      <div className="member-role-badge">{organizer.role}</div>
                      <div className="member-dot"></div>
                    </div>
                    <h3 className="member-name">{organizer.name}</h3>
                    <p className="member-designation">{organizer.designation}</p>
                    <div className="member-contact">
                      <div className="member-contact-item">
                        <FaPhone className="contact-icon-sm" />
                        <a href={`tel:${organizer.phone}`}>{organizer.phone}</a>
                      </div>
                      <div className="member-contact-item">
                        <FaEnvelope className="contact-icon-sm" />
                        <a href={`mailto:${organizer.email}`}>{organizer.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;