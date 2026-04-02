import React from 'react';
import '../styles/Registration.css';

const guidelines = [
  <>At least one author is required to register for the conference and oral presentation is mandatory to publish the paper in IEEE Xplore.</>,
  <>Check names, affiliations, and the sequence properly before uploading the camera-ready paper, as further changes cannot be entertained.</>,
  <>Please strictly follow the IEEE conference format: <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target="_blank" rel="noopener noreferrer">Download IEEE Conference Template (A4)</a></>,
  <>The camera-ready version must be in PDF format compiled from IEEE PDF eXpress™: <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">Click here for IEEE PDF eXpress™</a></>,
  <>Use conference ID <strong>71015X</strong> when logging into PDF eXpress. After passing the paper, click on <strong>Approve</strong> option.</>,
  <>Manuscript must be <strong>4 to 6 pages</strong> in IEEE format with similarity index limited to <strong>20%</strong> (single source similarity must be less than 5%).</>,
  <>Upload camera-ready paper in both <strong>.pdf</strong> and <strong>.doc</strong> formats on the CMT portal by <strong>30th November 2026</strong>.</>,
  <>All authors must individually transfer the electronic copyright to IEEE through CMT while submitting the camera-ready paper.</>,
  <>Complete all fields in the registration form and payment details by <strong>30th November 2026</strong>.</>,
];

const fees = [
  { category: 'R&D and Industry Participants', ieee: '₹9,000', nonIeee: '₹10,000', foreign: '$225' },
  { category: 'Faculty Participants from Academia', ieee: '₹8,000', nonIeee: '₹9,000', foreign: '$200' },
  { category: 'UG/PG Students & Research Scholars', ieee: '₹7,000', nonIeee: '₹7,500', foreign: '$180' },
  { category: 'Listener', ieee: '₹2,000', nonIeee: '₹2,500', foreign: '$100' },
];

const Registration = () => {
  return (
    <div className="reg-wrapper">
      <div className="reg-hero">
        <h1>Registration</h1>
        <p>Camera Ready Paper Submission and Registration Guidelines</p>
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

          <div className="reg-cta">
            <a href="#" target="_blank" rel="noopener noreferrer" className="reg-btn">
              👉 Register Here
            </a>
          </div>

          <div className="reg-contact-note">
            For queries, contact: <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a> 
          </div>
        </div>

        {/* Fee Table Card */}
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
