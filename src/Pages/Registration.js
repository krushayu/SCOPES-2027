import React from 'react';
import '../styles/Registration.css';
import {
  FaRocket, FaFileAlt, FaBell, FaUserCheck, FaStar,
  FaCalendarAlt
} from 'react-icons/fa';

const guidelines = [
  <>At least one author is required to register for the conference and oral presentation is mandatory to publish the paper in IEEE Xplore.</>,
  <>Check names, affiliations, and the sequence properly before uploading the camera-ready paper, as further changes cannot be entertained.</>,
  <>Please strictly follow the IEEE conference format: <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target="_blank" rel="noopener noreferrer">Download IEEE Conference Template (A4)</a></>,
  <>The camera-ready version must be in PDF format compiled from IEEE PDF eXpress™: <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">Click here for IEEE PDF eXpress™</a></>,
  <>Use conference ID <strong>71015</strong> when logging into PDF eXpress. After passing the paper, click on <strong>Approve</strong> option.</>,
  <>Manuscript must be <strong>4 to 6 pages</strong> in IEEE format with similarity index limited to <strong>20%</strong> (single source similarity must be less than 5%).</>,
  <>Upload camera-ready paper in both <strong>.pdf</strong> and <strong>.doc</strong> formats on the CMT portal by <strong>30th November 2026</strong>.</>,
  <>All authors must individually transfer the electronic copyright to IEEE through CMT while submitting the camera-ready paper.</>,
  <>Complete all fields in the registration form and payment details by <strong>30th November 2026</strong>.</>,
];

const fees = [
  { category: 'R&D and Industry Participants',       ieee: '₹9,000',  nonIeee: '₹10,000', foreign: '$250' },
  { category: 'Faculty Participants from Academia',  ieee: '₹8,000',  nonIeee: '₹9,000',  foreign: '$225' },
  { category: 'UG/PG Students & Research Scholars',  ieee: '₹7,000',  nonIeee: '₹8,000',  foreign: '$200' },
  { category: 'Listener',                            ieee: '₹2,000',  nonIeee: '₹2,500',  foreign: '$100' },
  { category: 'Accompany Person',                    ieee: '₹1,000',  nonIeee: '₹1,000',  foreign: '$50'  },
];

const importantDates = [
  { event: 'Paper Submission Open',                               date: 'May 1st, 2026',            start: new Date('2026-05-01'), end: new Date('2026-08-30'), icon: <FaRocket /> },
  { event: 'Last Date for Paper Submission',                      date: 'August 30th, 2026',        start: new Date('2026-08-30'), end: new Date('2026-08-30'), icon: <FaFileAlt /> },
  { event: 'Notification of Acceptance',                         date: 'October 30th, 2026',       start: new Date('2026-10-30'), end: new Date('2026-10-30'), icon: <FaBell /> },
  { event: 'Registration & Camera Ready Submission',             date: 'November 30th, 2026',      start: new Date('2026-11-30'), end: new Date('2026-11-30'), icon: <FaUserCheck /> },
  { event: 'Conference Dates',                                   date: 'February 4th – 6th, 2027', start: new Date('2027-02-04'), end: new Date('2027-02-07'), icon: <FaStar /> },
];

const statusMeta = {
  active:   { label: 'Active Now', color: '#22c55e', glow: 'rgba(34,197,94,0.2)'   },
  upcoming: { label: 'Upcoming',   color: '#6366f1', glow: 'rgba(99,102,241,0.18)' },
  over:     { label: 'Closed',     color: '#ef4444', glow: 'rgba(239,68,68,0.2)'   },
};

const getStatus = (item) => {
  const now = new Date();
  if (now > item.end)    return 'over';
  if (now >= item.start) return 'active';
  return 'upcoming';
};

const Registration = () => {
  return (
    <div className="reg-wrapper">
      <div className="reg-hero">
        <h1>Registration</h1>
        {/* <p>Camera Ready Paper Submission and Registration Guidelines</p> */}
      </div>

      <div className="reg-container">

        {/* Guidelines Card */}
        <div className="reg-card">
          <h2 className="reg-card-title">Submission Guidelines</h2>
          <div className="reg-guidelines">
            {guidelines.map((item, i) => (
              <div className="reg-guideline-item" key={i}>
                <span className="reg-num">{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Roadmap */}
        <div className="reg-card">
          <h2 className="reg-card-title">
            <FaCalendarAlt className="reg-title-icon" /> Important Dates
          </h2>
          <div className="reg-dates-chain">
            {importantDates.map((item, index) => {
              const status = getStatus(item);
              const meta = statusMeta[status];
              return (
                <div className={`reg-chain-item ${status}`} key={index}>
                  <div className="reg-chain-card" style={{ '--accent': meta.color }}>
                    <div className="reg-chain-node" style={{ background: meta.color }}>
                      {item.icon}
                    </div>
                    <h3 className="reg-chain-event">{item.event}</h3>
                    <span className="reg-chain-badge" style={{ background: meta.color }}>{meta.label}</span>
                    <div className="reg-chain-date" style={{ color: meta.color }}>
                      <FaCalendarAlt style={{ fontSize: 11 }} /> {item.date}
                    </div>
                  </div>
                  {index < importantDates.length - 1 && (
                    <div className="reg-chain-line" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Section */}
        <div className="reg-payment-section">
          <h2 className="reg-card-title" style={{marginBottom: '28px'}}>Registration Payment</h2>

          <div className="reg-payment-cards">

            {/* Indian Payment */}
            <div className="reg-pay-card reg-pay-india">
              <div className="reg-pay-card-header">
                <div className="reg-pay-flag">🇮🇳</div>
                <div>
                  <div className="reg-pay-tag">Indian Delegates</div>
                </div>
              </div>
              <div className="reg-pay-divider" />
              <a
                href="https://axisbpayments.razorpay.com/CUTM-IEEEConference2026"
                target="_blank" rel="noopener noreferrer"
                className="reg-pay-btn reg-pay-btn-india"
              >
                Pay Now (Indian) →
              </a>
            </div>

            {/* Foreign Payment */}
            <div className="reg-pay-card reg-pay-foreign">
              <div className="reg-pay-card-header">
                <div className="reg-pay-flag">🌍</div>
                <div>
                  <div className="reg-pay-tag">Foreign Delegates</div>
                </div>
              </div>
              <div className="reg-pay-divider" />
              <a
                href="mailto:scopes2027@cutm.ac.in?subject=SCOPES-2027 Foreign Payment"
                className="reg-pay-btn reg-pay-btn-foreign"
              >
                Contact for Payment →
              </a>
            </div>

          </div>

          {/* Shared Contact Below Both Cards */}
          <div className="reg-pay-shared-contact">
            <div className="reg-pay-shared-item">
              <span className="reg-pay-shared-icon">📧</span>
              <div>
                <div className="reg-pay-shared-label">Email</div>
                <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>
              </div>
            </div>
            <div className="reg-pay-shared-divider" />
            {/* <div className="reg-pay-shared-item">
              <span className="reg-pay-shared-icon">📞</span>
              <div>
                <div className="reg-pay-shared-label">Phone (Chair)</div>
                <a href="tel:+917008242454">+91 7008242454</a>
              </div>
            </div> */}
            <div className="reg-pay-shared-divider" />
            <div className="reg-pay-shared-item">
              <span className="reg-pay-shared-icon">📞</span>
              <div>
                <div className="reg-pay-shared-label">Phone (Finance)</div>
                <a href="tel:+918917440019">+91 8917440019</a>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="reg-pay-instructions">
            <h4 className="reg-pay-inst-title">Payment Instructions</h4>
            <div className="reg-instruction-list">
              {[
                'Click the payment button above to complete the registration payment.',
                'Enter Author Name, Email ID, Phone Number, Category, and Institute details correctly.',
                'Select IEEE Member / Non-IEEE category carefully before payment submission.',
                'Upload payment proof or transaction details during camera-ready submission.',
                'Keep the payment receipt safely for future verification and conference registration confirmation.',
                'For any payment-related issue, contact the conference coordinator immediately.',
              ].map((text, i) => (
                <div className="reg-instruction-item" key={i}>
                  <span>{i + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fee Table */}
        <div className="reg-card">
          <h2 className="reg-card-title">Registration Fee</h2>
          <div className="reg-table-wrapper">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>IEEE Member</th>
                  <th>Non-IEEE Member</th>
                  <th>Foreign Delegates</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr key={i}>
                    <td className="reg-td-cat">{row.category}</td>
                    <td>{row.ieee}</td>
                    <td>{row.nonIeee}</td>
                    <td>{row.foreign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reg-fee-note">* Fee includes Conference Kit, Banquet, Lunch, Tea, and GST as applicable.</p>
        </div>

      </div>
    </div>
  );
};

export default Registration;
