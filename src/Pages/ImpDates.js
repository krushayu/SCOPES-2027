import React from 'react';
import '../styles/ImpDates.css';

const ImpDates = () => {
  const currentDate = new Date();
  
  const dates = [
    { event: 'Paper Submission Open', date: 'April 4th, 2026', deadline: new Date('2026-04-01') },
    // { event: 'Last Date for Paper Submission', date: 'Feb 11th, 2026', deadline: new Date('2026-2-11') },
    { event: 'Notification of Acceptance', date: 'October 10th, 2026', deadline: new Date('2026-10-10') },
    { event: 'Registaration open date', date: 'November 2nd, 2026', deadline: new Date('2026-11-02') },
    { event: 'Conference Dates', date: 'February 4th - 6th, 2027', deadline: new Date('2027-02-07') }
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
          <li>For any queries regarding the important dates, please contact to <a href="mailto:scopes2027@cutm.ac.in"><strong>scopes2027@cutm.ac.in</strong></a></li>
        </ul>
      </div>
    </div>
  );
};

export default ImpDates;