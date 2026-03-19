import React from 'react';
import '../styles/Registration.css';

const Registration = () => {
  return (
    <div className="reg-wrapper">
      <div className="reg-hero">
        <h1>Registration</h1>
        <p>Camera Ready Paper Submission and Registration Guidelines</p>
      </div>

      <div className="reg-container">

        {/* Guidelines */}
        <div className="reg-card">
          <h2 className="reg-section-title">Submission Guidelines</h2>
          <ul className="reg-list">
            <li>At least one author is required to register for the conference and oral presentation is mandatory to publish the paper in IEEE Xplore.</li>
            <li>Check names, affiliations, and the sequence properly before uploading the camera-ready paper, as further changes cannot be entertained.</li>
            <li>Please strictly follow the IEEE conference format available on the link: <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">Click here to Download the IEEE Conference Template (A4)</a></li>
            <li>The camera-ready manuscript must comply with all reviewers' comments and should be in IEEE format. The camera-ready version must be in PDF format compiled from IEEE PDF eXpress™. <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">Click here for IEEE PDF eXpress™</a></li>
            <li>Use conference ID <strong>64467X</strong> when logging into PDF eXpress. After passing the paper through PDF eXpress, click on <strong>Approve</strong> option in PDF eXpress.</li>
            <li>The camera-ready manuscript must comply with all the requirements of IEEE format, including <strong>4 to 6 pages</strong> and a similarity index limited to <strong>20% with reference</strong> (Single source similarity must be less than 5%).</li>
            <li>Upload the camera-ready paper in both <strong>.pdf</strong> and <strong>.doc</strong> formats on the CMT portal by <strong>30th November 2026</strong>.</li>
            <li>All authors must individually transfer the electronic copyright to IEEE through CMT while submitting the camera-ready paper.</li>
            <li>Please complete filling up all the fields in the registration form and payment details in the below link (Mandatory) by <strong>30th November 2026</strong>.</li>
          </ul>

          <div className="reg-cta">
            <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="reg-btn">
              👉 Register Here
            </a>
          </div>

          <div className="reg-contact-note">
            For any queries related to Registration, please contact our registration support team at{' '}
            <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>{' '}
            or Call at <a href="tel:8917440019">8917440019</a>
          </div>
        </div>

        {/* Fee Table */}
        <div className="reg-card">
          <h2 className="reg-section-title">Registration Fee</h2>
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
                <tr>
                  <td>R&amp;D and Industry Participants</td>
                  <td>INR 9,000</td>
                  <td>INR 10,000</td>
                  <td>USD 225</td>
                </tr>
                <tr>
                  <td>Faculty Participants from Academia</td>
                  <td>INR 7,000</td>
                  <td>INR 8,000</td>
                  <td>USD 200</td>
                </tr>
                <tr>
                  <td>UG/PG Students &amp; Research Scholars</td>
                  <td>INR 5,500</td>
                  <td>INR 6,500</td>
                  <td>USD 180</td>
                </tr>
                <tr>
                  <td>Listener</td>
                  <td>INR 2,000</td>
                  <td>INR 2,500</td>
                  <td>USD 100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="reg-fee-note">* Registration fee includes Conference Kit, Banquet, Lunch, Tea, and GST as applicable.</p>
        </div>

      </div>
    </div>
  );
};

export default Registration;
