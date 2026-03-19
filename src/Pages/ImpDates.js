import React from 'react';
import '../styles/ImpDates.css';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaHourglassHalf } from 'react-icons/fa';

const ImpDates = () => {
  const currentDate = new Date();

  const dates = [
    { event: 'Paper Submission Open', date: 'April 1st, 2026', deadline: new Date('2026-08-30') },
    { event: 'Last date for paper Submission', date: 'August 30th, 2026', deadline: new Date('2026-08-30') },
    { event: 'Notification of Acceptance', date: 'October 30th, 2026', deadline: new Date('2026-10-30') },
    { event: 'Last date of Registration & Camera Ready Submission', date: 'November 30th, 2026', deadline: new Date('2026-11-30') },
    { event: 'Conference Dates', date: 'February 4th – 6th, 2027', deadline: new Date('2027-02-07') },
  ];

  const getStatus = (deadline, index) => {
    if (currentDate > deadline) return 'over';
    const upcoming = dates.find(d => currentDate <= d.deadline);
    if (upcoming && dates.indexOf(upcoming) === index) return 'active';
    return 'upcoming';
  };

  const statusConfig = {
    active:   { label: 'Active Now', icon: <FaCheckCircle />, color: '#22c55e' },
    upcoming: { label: 'Upcoming',   icon: <FaClock />,       color: '#00b4d8' },
    over:     { label: 'Closed',     icon: <FaHourglassHalf />, color: '#94a3b8' },
  };

  return (
    <div className="impd-wrapper">
      <div className="impd-hero">
        <FaCalendarAlt className="impd-hero-icon" />
        <h1>Important Dates</h1>
        <p>SCOPES 2027 — Key Deadlines & Milestones</p>
      </div>

      <div className="impd-container">
        <div className="impd-timeline">
          {dates.map((item, index) => {
            const status = getStatus(item.deadline, index);
            const cfg = statusConfig[status];
            return (
              <div className={`impd-card ${status}`} key={index}>
                <div className="impd-card-left">
                  <div className="impd-icon-wrap" style={{ background: cfg.color }}>
                    {cfg.icon}
                  </div>
                  {index < dates.length - 1 && <div className="impd-connector" />}
                </div>
                <div className="impd-card-body">
                  <div className="impd-card-top">
                    <h3 className="impd-event">{item.event}</h3>
                    <span className="impd-badge" style={{ background: cfg.color }}>
                      {cfg.label}
                    </span>
                  </div>
                  <div className="impd-date">{item.date}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="impd-note">
          <h3>⚠️ Note</h3>
          <ul>
            <li>All dates are subject to change. Please check back regularly for updates.</li>
            <li>Ensure to submit your papers and register before the deadlines to avoid any inconvenience.</li>
            <li>For any queries, contact <a href="mailto:scopes2027@cutm.ac.in"><strong>scopes2027@cutm.ac.in</strong></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImpDates;
