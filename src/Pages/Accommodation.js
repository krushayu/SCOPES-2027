import React from 'react';
import '../styles/Accommodation.css';
import { FaHotel, FaBus, FaTrain } from 'react-icons/fa';

const Accommodation = () => {
  return (
    <div className="accom-wrapper">
      <div className="accom-hero">
        <h1 className="accom-hero-title">Accommodation & Transportation</h1>
        <p className="accom-hero-subtitle">Details for SCOPES 2027 Conference</p>
      </div>

      <div className="accom-container">
        {/* Accommodation Section */}
        <section className="accom-section">
          <div className="accom-section-header">
            <FaHotel className="accom-section-icon" />
            <h2>Accommodation Details</h2>
          </div>
          
          <div className="accom-card">
            <ul className="accom-list">
              <li>Accommodation facilities will be provided <strong>free of cost</strong> to registered Authors only at CUTM Parlakhemundi Campus on twin sharing basis.</li>
              <li>For accompanying persons, <strong>Rs. 2000/-</strong> per person will be charged for food and lodging. (To be paid during the Registration)</li>
              <li>Accommodation will be allocated strictly on a <strong>first come, first served basis</strong>.</li>
              <li>Paid Accommodations are also available outside the University campus on demand.</li>
            </ul>
            
            <div className="accom-form-section">
              <p>Please click the button below to fill in your details for Accommodation (Mandatory)</p>
              <a href="#accommodation-form" className="accom-btn">
                👉 Accommodation Form
              </a>
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="accom-section">
          <div className="accom-section-header">
            <FaBus className="accom-section-icon" />
            <h2>Transportation Details</h2>
          </div>
          
          <div className="accom-card">
            <p className="accom-intro">Dear Author(s),</p>
            <p>We are happy to provide transport facilities from the following railway station to the Conference Venue (Centurion University (C.U.T.M.), Paralakhemundi Campus).</p>
            <p>So interested authors are advised to follow the following schedule and fill up the Transportation form by <strong>December 10th, 2024</strong>.</p>
            <p className="accom-contact">For any query related to Transportation, please contact: <strong>Dr. Kalyan Chakravarty (9439331442)</strong></p>
            
            <h3 className="accom-subtitle">Availability of Transport (Free of Cost):</h3>
            
            <div className="accom-table-wrapper">
              <table className="accom-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>From Palasa Railway Station to C.U.T.M. Campus</th>
                    <th>From Paralakhemundi Railway Station to C.U.T.M. Campus</th>
                    <th>From the C.U.T.M. Campus to Palasa Railway Station</th>
                    <th>From the C.U.T.M. Campus to Paralakhemundi Railway Station</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>03-02-2027</td>
                    <td>7.45 P.M</td>
                    <td>7.30 P.M</td>
                    <td>NA</td>
                    <td>NA</td>
                  </tr>
                  <tr>
                    <td>04-02-2027</td>
                    <td>7.45 P.M</td>
                    <td>10.30 A.M. / 12.30 P.M. / 7.30 P.M</td>
                    <td>5.30 P.M</td>
                    <td>NA</td>
                  </tr>
                  <tr>
                    <td>05-02-2027</td>
                    <td>7.45 P.M</td>
                    <td>10.30 A.M. / 12.30 P.M. / 7.30 P.M</td>
                    <td>5.30 P.M</td>
                    <td>3.30 P.M</td>
                  </tr>
                  <tr>
                    <td>06-02-2027</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>6.00 P.M</td>
                    <td>3.30 P.M</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="accom-train-section">
              <h3 className="accom-subtitle">
                <FaTrain className="accom-train-icon" />
                Following Direct Trains are available from Bhubaneswar/Khurdha/ Visakhapatnam:
              </h3>
              <ul className="accom-train-list">
                <li><strong>18117:</strong> Rourkela- Gunupur RajyaRani Express</li>
                <li><strong>18417:</strong> Puri-Gunupur Express</li>
                <li><strong>08552:</strong> Visakhapatnam-Gunupur Express</li>
              </ul>
            </div>
            
            <div className="accom-form-section">
              <p>Please click the button below to fill in your details for Transportation (Mandatory)</p>
              <a href="#transportation-form" className="accom-btn">
                👉 Transportation Form
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accommodation;
