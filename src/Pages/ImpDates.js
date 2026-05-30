import React from 'react';
import '../styles/ImpDates.css';
import { FaRocket, FaFileAlt, FaBell, FaUserCheck, FaStar } from 'react-icons/fa';

const ImpDates = () => {
  const now = new Date();

  const dates = [
    {
      event: 'Paper Submission Open',
      date: 'May 1st, 2026',
      desc: 'Portal opens for manuscript submissions across all tracks.',
      start: new Date('2026-05-01'), end: new Date('2026-08-30'),
      icon: <FaRocket />,
    },
    {
      event: 'Last Date for Paper Submission',
      date: 'August 30th, 2026',
      desc: 'Final deadline to submit your full paper via Microsoft CMT.',
      start: new Date('2026-08-30'), end: new Date('2026-08-30'),
      icon: <FaFileAlt />,
    },
    {
      event: 'Notification of Acceptance',
      date: 'October 30th, 2026',
      desc: 'Authors will be notified about acceptance or rejection.',
      start: new Date('2026-10-30'), end: new Date('2026-10-30'),
      icon: <FaBell />,
    },
    {
      event: 'Registration & Camera Ready',
      date: 'November 30th, 2026',
      desc: 'Last date for registration and camera-ready paper submission.',
      start: new Date('2026-11-30'), end: new Date('2026-11-30'),
      icon: <FaUserCheck />,
    },
    {
      event: 'Conference Dates',
      date: 'February 4th – 6th, 2027',
      desc: 'SCOPES 2027 at Centurion University, Paralakhemundi, Odisha.',
      start: new Date('2027-02-04'), end: new Date('2027-02-07'),
      icon: <FaStar />,
    },
  ];

  const getStatus = (item) => {
    if (now > item.end)    return 'over';
    if (now >= item.start) return 'active';
    return 'upcoming';
  };

  const statusMeta = {
    active:   { label: 'Active Now', color: '#22c55e', glow: 'rgba(34,197,94,0.25)' },
    upcoming: { label: 'Upcoming',   color: '#00b4d8', glow: 'rgba(0,180,216,0.2)' },
    over:     { label: 'Closed',     color: '#94a3b8', glow: 'rgba(148,163,184,0.15)' },
  };

  return (
    <div className="impd-wrapper">

      {/* Hero */}
      <div className="impd-hero">
        <h1>Important Dates</h1>
        <p>SCOPES 2027 — Key Deadlines & Milestones</p>
      </div>

      <div className="impd-container">

        {/* Roadmap */}
        <div className="impd-roadmap">

          {/* Center spine */}
          <div className="impd-spine"></div>

          {dates.map((item, index) => {
            const status = getStatus(item);
            const meta = statusMeta[status];
            const isLeft = index % 2 === 0;

            return (
              <div className={`impd-row ${isLeft ? 'left' : 'right'} ${status}`} key={index}>

                {/* Card */}
                <div className="impd-rm-card" style={{ '--glow': meta.glow, '--accent': meta.color }}>
                  <div className="impd-rm-card-inner">
                    <div className="impd-rm-top">
                      <span className="impd-rm-badge" style={{ background: meta.color }}>
                        {meta.label}
                      </span>
                      <span className="impd-rm-num">0{index + 1}</span>
                    </div>
                    <h3 className="impd-rm-event">{item.event}</h3>
                    <p className="impd-rm-desc">{item.desc}</p>
                    <div className="impd-rm-date" style={{ color: meta.color }}>
                      📅 {item.date}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="impd-node" style={{ background: meta.color, boxShadow: `0 0 0 5px ${meta.glow}, 0 0 0 10px ${meta.glow}` }}>
                  <span className="impd-node-icon">{item.icon}</span>
                </div>

                {/* Spacer for opposite side */}
                <div className="impd-spacer"></div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="impd-note">
          <h3>⚠️ Note</h3>
          <ul>
            <li>Ensure to submit your papers and register before the deadlines to avoid any inconvenience.</li>
            <li>For any queries, contact <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ImpDates;
