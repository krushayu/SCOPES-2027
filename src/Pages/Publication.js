import React from 'react';
import '../styles/Publication.css';
import { FaBook, FaExclamationTriangle } from 'react-icons/fa';

const Publication = () => {
  return (
    <div className="pub-wrapper">
      <div className="pub-hero">
        <h1 className="pub-hero-title">Publication</h1>
        <p className="pub-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="pub-container">
        <section className="pub-intro">
          <h2 className="pub-section-title">
            <FaBook className="pub-icon" />
            IEEE Xplore Publication
          </h2>
          <p className="pub-intro-text">
            All accepted and presented papers will be submitted for inclusion in IEEE Xplore Digital Library, subject to meeting IEEE Xplore's scope and quality requirements. The conference proceedings will be indexed by major indexing services including Scopus.
          </p>
        </section>

        <section className="pub-card">
          <h3 className="pub-card-title">
            <FaBook className="pub-small-icon" />
            Previous SCOPES Proceedings & SCOPES Database
          </h3>
          <p className="pub-text">
            Explore the published proceedings from previous SCOPES conferences, now available on IEEE Xplore and SCOPES Database.:
          </p>
          <div className="pub-proceedings-grid">
            <a 
              href="https://ieeexplore.ieee.org/xpl/conhome/7948575/proceeding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pub-proceedings-card"
            >
              <div className="pub-proceedings-icon">📚</div>
              <h4>SCOPES 2016</h4>
              <p>1st International Conference</p>
              <span className="pub-view-link">View on IEEE Xplore →</span>
            </a>
            <a 
              href="https://ieeexplore.ieee.org/xpl/conhome/10990332/proceeding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pub-proceedings-card"
            >
              <div className="pub-proceedings-icon">📚</div>
              <h4>SCOPES 2024</h4>
              <p>2nd International Conference</p>
              <span className="pub-view-link">View on IEEE Xplore →</span>
            </a>
          </div>
          {/* IEEE Scopes Database.. */}
          <div className="pub-proceedings-grid">
            <a 
              href="https://www.scopus.com/pages/search/publications?searchId=085caace-dd28-41f4-b1a1-ca8ed49dcab5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pub-proceedings-card"
            >
              <div className="pub-proceedings-icon">📚</div>
              <h4>SCOPES DATABASE - 2016</h4>
              <p>1st International Conference</p>
              <span className="pub-view-link">View on Scopus Database →</span>
            </a>
            <a 
              href="https://www.scopus.com/pages/search/publications?searchId=1d84eb7a-3677-48b9-98ab-982339b74761" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pub-proceedings-card"
            >
              <div className="pub-proceedings-icon">📚</div>
              <h4>SCOPES DATABASE - 2024</h4>
              <p>2nd International Conference</p>
              <span className="pub-view-link">View on Scopus Database →</span>
            </a>
          </div>
        </section>

        <section className="pub-card copyright-card">
          <h3 className="pub-card-title">
            <FaExclamationTriangle className="pub-small-icon" />
            Copyright & IEEE Policies
          </h3>
          <p className="pub-text">
            Authors must transfer copyright to IEEE for publication in IEEE Xplore. The IEEE Electronic Copyright Form (eCF) must be completed and submitted along with the camera-ready paper.
          </p>
          <div className="pub-note">
            <p><strong>Important:</strong> Papers without completed copyright forms will not be published in IEEE Xplore.</p>
          </div>
        </section>

        <section className="pub-card contact-card">
          <h3 className="pub-card-title">Publication Queries</h3>
          <p className="pub-text">
            For any queries related to publication, please contact:
          </p>
          <div className="pub-contact-info">
            <p><strong>Email:</strong> <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a></p>
            <p><strong>Subject Line:</strong> SCOPES-2027 Publication Query</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publication;
