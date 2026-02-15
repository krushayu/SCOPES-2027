import React from 'react';
import '../styles/ImpDates.css';

const ImpDates = () => {
  const currentDate = new Date();
  
  const dates = [
    { event: 'Paper Submission Open', date: 'July 1st, 2024', deadline: new Date('2024-07-01') },
    { event: 'Last Date for Paper Submission', date: 'Feb 11th, 2026', deadline: new Date('2026-2-11') },
    { event: 'Notification of Acceptance', date: 'November 15th, 2026', deadline: new Date('2026-11-15') },
    { event: 'Last Date for Registration and Camera-Ready Paper Submission', date: 'November 30th, 2026', deadline: new Date('2026-11-30') },
    { event: 'Conference Dates', date: 'December 19th - 21st, 2026', deadline: new Date('2026-12-21') }
  ];

  const isDateOver = (deadline) => {
    return currentDate > deadline;
  };

  return (
    <div className="imp-dates-container">
      <h2>Important Dates</h2>
      <table>
        <thead>
          <tr>
            <th>Events</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((item, index) => (
            <tr key={index} className={isDateOver(item.deadline) ? 'date-over' : ''}>
              <td>{item.event}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="note">
        <h3>Note:</h3>
        <ul>
          <li>All dates are subject to change. Please check back regularly for updates.</li>
          <li>Ensure to submit your papers and register before the deadlines to avoid any inconvenience.</li>
          <li>For any queries regarding the important dates, please contact to <a href="mailto:ieee@cutm.ac.in"><strong>ieee@cutm.ac.in</strong></a></li>
        </ul>
      </div>
    </div>
  );
};

export default ImpDates;