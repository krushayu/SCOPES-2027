import React, { useState } from 'react';
import '../styles/ProgramSchedule.css';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ProgramSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [presentationType, setPresentationType] = useState('online');

  const scheduleData = {
    day1: [
      { time: '8:30 am – 10:30 am', program: 'Registration', venue: 'New Admin Block' },
      { time: '10:30 am – 11:30 am', program: 'Inaugural Session', venue: 'Auditorium' },
      { time: '11:30 am – 11:40 am', program: 'Tea Break', venue: 'Auditorium' },
      { time: '11:40 am – 12:40 pm', program: 'Key Note-1 (OFFLINE)\nDr. P. S. R. Srinivasa Sastry\nFounder & Former Director, DSP, DRDO, Hyderabad\nTopic: Technological Advances and their impact on Modern Society', venue: 'Auditorium' },
      { time: '12:40 pm – 1:40 pm', program: 'Key Note-2 (OFFLINE)\nProf. (Dr.) Naeem Hannoon\nUniversity of Teknologi MARA, Sheh Aalm, Malaysia\nTopic: Advanced Automation of Substations-latest trends', venue: 'Auditorium' },
      { time: '1:40 pm – 2:30 pm', program: 'Working Lunch', venue: '' },
      { time: '2:30 pm – 3:30 pm', program: 'Key Note-3 (ONLINE)\nDr. Raffaele Scuderi\nIndustry Process Consultant Specialist at Dassault Systems\nTopic: 5G Coverage and Channel Simulation in a Complex Industrial Environment\n\nPlenary Session (OFFLINE)\nProf. Subhransu Ranjan Samantaray\nProfessor, IIT, Bhubaneswar & Vice-President/Chairman, IEEE Bhubaneswar Subsection', venue: 'Auditorium\n\nSeminar Hall-1' },
      { time: '3:30 pm – 4:00 pm', program: 'High Tea', venue: '' },
      { time: '4:00 pm – 6:00 pm', program: 'Technical Session-1', venue: 'Parallel Paper Presentations in 10 different Venues' },
      { time: '7:00 pm – 8:00 pm', program: 'Cultural Program', venue: 'Auditorium' },
      { time: '8:00 pm – 9:00 pm', program: 'Dinner', venue: '' }
    ],
    day2: [
      { time: '8:30 am – 9:30 am', program: 'Registration', venue: 'New Admin Block' },
      { time: '9:30 am – 10:15 am', program: 'Key Note-4 (OFFLINE)\nMs. Renuka Srinivasan\nDirector SIMULIA India - Dassault Systems\nTopic: Design of Simulation Driven antenna systems for enhanced performance and efficiency.', venue: 'Auditorium' },
      { time: '10:15 am – 11:15 am', program: 'Key Note-5 (OFFLINE)\nProf. (Dr.) Ganapati Panda\nFormer Deputy Director, IIT, Bhubaneswar\nTopic: Recent Advances in Signal Processing and Communication', venue: 'Auditorium' },
      { time: '11:15 am – 11:30 am', program: 'Tea Break', venue: '' },
      { time: '11:30 am – 1:30 pm', program: 'Technical Session-2', venue: 'Parallel Paper Presentations in 10 different Venues' },
      { time: '1:30 pm – 2:30 pm', program: 'Working Lunch', venue: '' },
      { time: '2:30 pm – 3:30 pm', program: 'Key Note-6 (ONLINE)\nMr. Sunil Sabat\nPrincipal Program Manager, Microsoft Corporations\nTopic: Design of data driven modern electronics systems in the era of cloud and AI', venue: 'Auditorium' },
      { time: '3:30 pm – 3:45 pm', program: 'High Tea', venue: '' },
      { time: '3:45 pm – 6:00 pm', program: 'Local Site Visit', venue: 'Parallel Paper Presentations in 10 different Venues' },
      { time: '7:00 pm – 8:00 pm', program: 'Cultural Program followed by Gala Dinner', venue: 'Tribal Village' }
    ],
    day3: [
      { time: '8:30 am – 10:00 am', program: 'Registration', venue: 'New Admin Block' },
      { time: '10:00 am – 11:00 am', program: 'Key Note-7 (OFFLINE)\nDr. Jagannath Nayak\nDirector, DRDO, Hyderabad\nTopic: The Future Battlefield: Decoding the Invisible War', venue: 'Auditorium' },
      { time: '11:00 am – 11:15 am', program: 'Tea Break', venue: '' },
      { time: '11:15 am – 12:15 pm', program: 'Key Note-8 (ONLINE)\nMr. Purna Chandra Mohanty\nCEO Marquee Semiconductor\nTopic: The Art of Custom Silicon Design - India\'s need of the hour.', venue: 'Auditorium' },
      { time: '12:15 pm – 1:30 pm', program: 'Technical Session-3 (If Required)', venue: 'Parallel Paper Presentations in 10 different Venues' },
      { time: '1:30 pm – 2:30 pm', program: 'Working Lunch', venue: '' },
      { time: '2:30 pm – 3:30 pm', program: 'Valedictory Session', venue: 'Auditorium' },
      { time: '3:30 pm – 4:00 pm', program: 'High Tea', venue: 'Auditorium' }
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
