import React, { useState } from 'react';
import '../styles/ProgramSchedule.css';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ProgramSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [presentationType, setPresentationType] = useState('online');

  const scheduleData = {
    day1: [
      { time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }
    ],
    day2: [
      { time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }
    ],
    day3: [
      { time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }
    ]
  };

  const getCurrentSchedule = () => {
    if (activeDay === 1) return scheduleData.day1;
    if (activeDay === 2) return scheduleData.day2;
    return scheduleData.day3;
  };

  const getDateForDay = (day) => {
    const dates = ['04-02-2027', '05-02-2027', '06-02-2027'];
    return dates[day - 1];
  };

  return (
    <div className="schedule-wrapper">
      <div className="schedule-hero">
        <h1 className="schedule-hero-title">Program Schedule</h1>
        <p className="schedule-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="schedule-container">
        <section className="schedule-section">
          <h2 className="schedule-section-title">
            <FaCalendarAlt className="schedule-icon" />
            Day-wise Programs
          </h2>

          <div className="schedule-tabs">
            <button className={`schedule-tab ${activeDay === 1 ? 'active' : ''}`} onClick={() => setActiveDay(1)}>
              Day 1
            </button>
            <button className={`schedule-tab ${activeDay === 2 ? 'active' : ''}`} onClick={() => setActiveDay(2)}>
              Day 2
            </button>
            <button className={`schedule-tab ${activeDay === 3 ? 'active' : ''}`} onClick={() => setActiveDay(3)}>
              Day 3
            </button>
          </div>

          <div className="schedule-card">
            <div className="schedule-day-header">
              <h3>Day {activeDay}</h3>
              <p className="schedule-date">Date: {getDateForDay(activeDay)}</p>
            </div>

            <div className="schedule-table-wrapper">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th><FaClock /> Time</th>
                    <th>Program</th>
                    <th><FaMapMarkerAlt /> Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentSchedule().map((item, index) => (
                    <tr key={index}>
                      <td className="schedule-time">{item.time}</td>
                      <td className="schedule-program">{item.program}</td>
                      <td className="schedule-venue">{item.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="schedule-presentation-section">
          <h2 className="schedule-section-title">Parallel Technical Oral Presentation Schedule</h2>
          <p className="schedule-presentation-intro">Select Online or Offline to view the Presentation Schedule:</p>
          
          <div className="schedule-presentation-tabs">
            <button 
              className={`schedule-presentation-tab ${presentationType === 'online' ? 'active' : ''}`}
              onClick={() => setPresentationType('online')}
            >
              Online
            </button>
            <button 
              className={`schedule-presentation-tab ${presentationType === 'offline' ? 'active' : ''}`}
              onClick={() => setPresentationType('offline')}
            >
              Offline
            </button>
          </div>

          <div className="schedule-presentation-content">
            <p>Presentation schedule for {presentationType} sessions will be updated soon.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramSchedule;
