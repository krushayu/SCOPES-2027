import React, { useState, useEffect } from 'react';
import '../styles/Registration.css';
import {
  FaRocket, FaBell, FaUserCheck, FaStar,
  FaCalendarAlt, FaFireAlt, FaExclamationTriangle,
  FaClock, FaCalendarCheck, FaExternalLinkAlt
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
  { category: 'Listener / Accompany Person',          ieee: '₹2,000',  nonIeee: '₹2,000',  foreign: '$100' },
  // { category: 'Accompany Person',                    ieee: '₹1,000',  nonIeee: '₹1,000',  foreign: '$50'  },
];

const importantDates = [
  {
    phase: 'Phase 01',
    event: 'Paper Submission Open',
    date: 'May 1st, 2026',
    month: 'MAY',
    day: '01',
    year: '2026',
    // desc: 'Submission portal opens for paper submissions on Microsoft CMT.',
    start: new Date('2026-05-01'),
    end: new Date('2026-10-31'),
    icon: <FaRocket />,
    accent: '#0284c7',
  },
  {
    phase: 'Phase 02',
    event: 'Paper Submission Close',
    subEvent: 'Hard Deadline',
    isHardDeadline: true,
    oldDate: 'October 15th, 2026',
    date: 'October 31st, 2026',
    month: 'OCT',
    day: '31',
    year: '2026',
    // desc: 'Final & strict deadline for all full manuscript submissions.',
    note: 'Hard Deadline - No date will be extended.',
    start: new Date('2026-10-31'),
    end: new Date('2026-10-31'),
    icon: <FaFireAlt />,
    accent: '#ef4444',
  },
  {
    phase: 'Phase 03',
    event: 'Notification of Acceptance',
    date: 'November 20th, 2026',
    month: 'NOV',
    day: '20',
    year: '2026',
    // desc: 'Authors notified regarding acceptance/revision status via email.',
    start: new Date('2026-11-20'),
    end: new Date('2026-11-20'),
    icon: <FaBell />,
    accent: '#6366f1',
  },
  {
    phase: 'Phase 04',
    event: 'Registration & Camera Ready',
    date: 'November 30th, 2026',
    month: 'NOV',
    day: '30',
    year: '2026',
    // desc: 'Camera-ready paper upload on CMT and author registration fee payment.',
    start: new Date('2026-11-30'),
    end: new Date('2026-11-30'),
    icon: <FaUserCheck />,
    accent: '#0d9488',
  },
  {
    phase: 'Phase 05',
    event: 'Conference Dates',
    date: 'February 4th – 6th, 2027',
    month: 'FEB',
    day: '04–06',
    year: '2027',
    // desc: 'SCOPES 2027 flagship conference sessions at CUTM, Odisha.',
    start: new Date('2027-02-04'),
    end: new Date('2027-02-07'),
    icon: <FaStar />,
    accent: '#f59e0b',
  },
];

const REGISTRATION_START_DATE = new Date('2026-11-30T00:00:00');

const getTimeRemaining = (targetDate) => {
  const total = targetDate.getTime() - new Date().getTime();
  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isOpen: true };
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds, isOpen: false };
};

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ClockDial = ({ value, label, total, color, bgTrack }) => {
  const fraction = Math.min(1, Math.max(0, value / total));
  const strokeDashoffset = CIRCUMFERENCE * (1 - fraction);

  return (
    <div className="reg-clock-dial">
      <svg className="reg-clock-svg" viewBox="0 0 110 110">
        <circle
          className="reg-clock-track"
          cx="55"
          cy="55"
          r={RADIUS}
          stroke={bgTrack || "#f1f5f9"}
        />
        <circle
          className="reg-clock-meter"
          cx="55"
          cy="55"
          r={RADIUS}
          stroke={color}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="reg-clock-inner">
        <span className="reg-clock-number">{String(value).padStart(2, '0')}</span>
        <span className="reg-clock-unit">{label}</span>
      </div>
    </div>
  );
};

const GOOGLE_CAL_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("SCOPES 2027: Author Registration & Camera-Ready Submission Opens") +
  "&dates=20261130T033000Z/20261130T183000Z" +
  "&details=" +
  encodeURIComponent("Author Registration and Camera-Ready Paper Submission officially opens for IEEE SCOPES 2027 Conference at Centurion University of Technology and Management, Paralakhemundi, Odisha.") +
  "&location=" +
  encodeURIComponent("Centurion University of Technology and Management, Paralakhemundi, Odisha, India");

const getStatus = (item) => {
  const now = new Date();
  if (now > item.end)    return 'over';
  if (now >= item.start) return 'active';
  return 'upcoming';
};

const Registration = () => {
  const [countdown, setCountdown] = useState(() => getTimeRemaining(REGISTRATION_START_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining(REGISTRATION_START_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [isPreviewOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('preview') === 'open' || params.get('reg') === 'open';
    }
    return false;
  });

  const isRegistrationOpen = countdown.isOpen || isPreviewOpen;

  return (
    <div className="reg-wrapper">
      <div className="reg-hero">
        <h1>Registration</h1>
        <p>
          {isRegistrationOpen
            ? 'Camera Ready Paper Submission and Registration Guidelines'
            : 'Author Registration will officially open on November 30, 2026'}
        </p>
      </div>

      <div className="reg-container">

        {/* Countdown Banner: Shown when Registration is not yet open (Light Mode Attractive Clock) */}
        {!isRegistrationOpen && (
          <div className="reg-countdown-card">
            <div className="reg-countdown-badge">
              <span className="reg-cd-live-dot" /> Registration Opens In
            </div>
            <h2 className="reg-countdown-heading">Author Registration Countdown</h2>
            <p className="reg-countdown-sub">
              Author Registration & Camera-Ready paper submission will officially open on <strong>November 30, 2026</strong>.
            </p>

            {/* Clock-like Circular Progress Countdown */}
            <div className="reg-clock-container">
              <ClockDial
                value={countdown.days}
                label="Days"
                total={60}
                color="#0284c7"
                bgTrack="#e0f2fe"
              />
              <span className="reg-clock-colon">:</span>
              <ClockDial
                value={countdown.hours}
                label="Hours"
                total={24}
                color="#6366f1"
                bgTrack="#e0e7ff"
              />
              <span className="reg-clock-colon">:</span>
              <ClockDial
                value={countdown.minutes}
                label="Minutes"
                total={60}
                color="#0d9488"
                bgTrack="#ccfbf1"
              />
              <span className="reg-clock-colon">:</span>
              <ClockDial
                value={countdown.seconds}
                label="Seconds"
                total={60}
                color="#ef4444"
                bgTrack="#fee2e2"
              />
            </div>

            {/* Conference Timeline Stepper inside Countdown */}
            <div className="reg-cd-milestones">
              <div className="reg-cd-step completed">
                <span className="reg-cd-step-dot">✓</span>
                <span>Submission Open</span>
              </div>
              <div className="reg-cd-step-line active"></div>
              <div className="reg-cd-step current">
                <span className="reg-cd-step-dot">🔥</span>
                <span>Hard Deadline (Oct 31)</span>
              </div>
              <div className="reg-cd-step-line"></div>
              <div className="reg-cd-step upcoming">
                <span className="reg-cd-step-dot">3</span>
                <span>Notification (Nov 20)</span>
              </div>
              <div className="reg-cd-step-line"></div>
              <div className="reg-cd-step target">
                <span className="reg-cd-step-dot">🔒</span>
                <span>Registration (Nov 30)</span>
              </div>
            </div>

            {/* Footer with Notice and Add to Calendar action */}
            <div className="reg-countdown-footer">
              <div className="reg-countdown-notice">
                <FaClock className="reg-cd-notice-icon" />
                <span>Registration guidelines, fee details, and payment links will be unlocked automatically on November 30, 2026.</span>
              </div>
              <a
                href={GOOGLE_CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="reg-cd-cal-btn"
                title="Add event to Google Calendar"
              >
                <FaCalendarCheck /> Add to Calendar <FaExternalLinkAlt style={{ fontSize: 10, marginLeft: 2 }} />
              </a>
            </div>
          </div>
        )}

        {/* Registration Guidelines: Only visible once Registration Opens */}
        {isRegistrationOpen && (
          <div className="reg-card">
            <h2 className="reg-card-title">Registration Guidelines</h2>
            <div className="reg-guidelines">
              {guidelines.map((item, i) => (
                <div className="reg-guideline-item" key={i}>
                  <span className="reg-num">{i + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Dates Showcase (Always visible) */}
        <div id="reg-dates-section" className="reg-card reg-dates-section">
          <div className="reg-dates-header">
            <div>
              <h2 className="reg-card-title reg-dates-title">
                <FaCalendarAlt className="reg-title-icon" /> Important Dates
              </h2>
              {/* <p className="reg-dates-subtitle">
                Key milestones and deadlines for SCOPES 2027. Authors must adhere to the hard deadlines.
              </p> */}
            </div>
            {/* <div className="reg-dates-legend">
              <span className="reg-legend-item"><span className="reg-legend-dot active" /> Active</span>
              <span className="reg-legend-item"><span className="reg-legend-dot upcoming" /> Upcoming</span>
              <span className="reg-legend-item"><span className="reg-legend-dot hard" /> Hard Deadline</span>
            </div> */}
          </div>

          <div className="reg-dates-grid">
            {importantDates.map((item, index) => {
              const status = getStatus(item);
              const isHard = item.isHardDeadline;

              return (
                <div
                  key={index}
                  className={`reg-date-tile ${isHard ? 'is-hard-deadline' : ''} status-${status}`}
                  style={{ '--tile-accent': item.accent }}
                >
                  <div className="reg-tile-accent-line" />

                  {/* Top Bar with Phase & Badge */}
                  <div className="reg-tile-top">
                    <span className="reg-tile-phase">{item.phase}</span>
                    {isHard ? (
                      <span className="reg-tile-badge hard-badge">
                        <FaFireAlt className="reg-badge-icon pulse" /> Hard Deadline
                      </span>
                    ) : status === 'active' ? (
                      <span className="reg-tile-badge active-badge">
                        <span className="reg-badge-dot" /> Active Now
                      </span>
                    ) : status === 'over' ? (
                      <span className="reg-tile-badge closed-badge">Closed</span>
                    ) : (
                      <span className="reg-tile-badge upcoming-badge">Upcoming</span>
                    )}
                  </div>

                  {/* Main Date Display: Calendar Block + Title */}
                  <div className="reg-tile-main">
                    <div className="reg-cal-block">
                      <div className="reg-cal-top">{item.month}</div>
                      <div className="reg-cal-num">{item.day}</div>
                      <div className="reg-cal-year">{item.year}</div>
                    </div>

                    <div className="reg-tile-content">
                      <div className="reg-tile-icon" style={{ color: item.accent, background: `${item.accent}15` }}>
                        {item.icon}
                      </div>
                      <h3 className="reg-tile-title">{item.event}</h3>
                      {item.subEvent && (
                        <span className="reg-tile-subevent">{item.subEvent}</span>
                      )}
                    </div>
                  </div>

                  {/* Date details or Hard deadline special callout */}
                  {isHard ? (
                    <div className="reg-hard-box">
                      <div className="reg-hard-dates-row">
                        <span className="reg-hard-old">{item.oldDate}</span>
                        <span className="reg-hard-arrow">➔</span>
                        <span className="reg-hard-new">{item.date}</span>
                        <span className="reg-hard-tag">Extended</span>
                      </div>
                      <div className="reg-hard-warning">
                        <FaExclamationTriangle className="reg-hard-warn-icon" />
                        <span>{item.note}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="reg-tile-info">
                      <div className="reg-tile-full-date">
                        <FaCalendarAlt className="reg-cal-mini-icon" />
                        <span>{item.date}</span>
                      </div>
                      {/* <p className="reg-tile-desc">{item.desc}</p> */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Section & Fee Table (Only visible when Registration Opens) */}
        {isRegistrationOpen && (
          <>
            <div id="reg-payment-section" className="reg-payment-section">
              <h2 className="reg-card-title" style={{marginBottom: '28px'}}>Registration Payment Links</h2>

              <div className="reg-payment-cards">

                {/* Indian Payment */}
                <div className="reg-pay-card reg-pay-india">
                  <div className="reg-pay-card-header">
                    <div className="reg-pay-flag">🇮🇳</div>
                    <div>
                      <div className="reg-pay-tag">For Indian Authors</div>
                    </div>
                  </div>
                  <div className="reg-pay-divider" />
                  <a
                    href="https://rzp.io/rzp/cutm-scopes2027"
                    target="_blank" rel="noopener noreferrer"
                    className="reg-pay-btn reg-pay-btn-india"
                  >
                    Pay Now →
                  </a>
                </div>

                {/* Foreign Payment */}
                <div className="reg-pay-card reg-pay-foreign">
                  <div className="reg-pay-card-header">
                    <div className="reg-pay-flag">🌍</div>
                    <div>
                      <div className="reg-pay-tag">For Internatonal Authors</div>
                    </div>
                  </div>
                  <div className="reg-pay-divider" />
                  <a
                    href="https://axisbpayments.razorpay.com/CUTM-IEEEConference2026"
                    target="_blank" rel="noopener noreferrer"
                    className="reg-pay-btn reg-pay-btn-foreign"
                  >
                    Pay Now →
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
                <div className="reg-pay-shared-item">
                  <span className="reg-pay-shared-icon">👤</span>
                  <div>
                    <div className="reg-pay-shared-label">Contact</div>
                    <span>Prof. Satyanarayan Padhy</span>
                  </div>
                </div>
                <div className="reg-pay-shared-divider" />
                <div className="reg-pay-shared-item">
                  <span className="reg-pay-shared-icon">📞</span>
                  <div>
                    <div className="reg-pay-shared-label">Phone</div>
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
                    'For any payment-related issue, contact Prof. Satyanarayan Padhy immediately.',
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
            <div id="reg-fee-section" className="reg-card">
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
          </>
        )}

      </div>
    </div>
  );
};

export default Registration;
