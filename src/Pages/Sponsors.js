import React from 'react';
import '../styles/Sponsors.css';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaExternalLinkAlt, FaHandshake } from 'react-icons/fa';

const Sponsors = () => {
  return (
    <div className="sponsors-wrapper">
      <div className="sponsors-hero">
        <h1 className="sponsors-hero-title">Sponsors</h1>
        <p className="sponsors-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="sponsors-container">
        {/* Sponsor Section */}
        <section className="sponsors-card">
          <h2 className="sponsors-section-title">
            <FaHandshake className="sponsors-section-icon" />
            Our Valued Sponsor
          </h2>
          <div className="sponsors-company">
            <h3 className="sponsors-company-name">Dassault Systèmes SE</h3>
            <p className="sponsors-description">
              Dassault Systèmes SE is a French multinational software corporation which develops software for 3D product design, simulation, manufacturing and other 3D related products. Founded in 1981, it is headquartered in Vélizy-Villacoublay, France, and has 23,811 employees across 194 global offices.
            </p>
            <a href="#visit-website" className="sponsors-visit-btn" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
              Visit Website
            </a>
          </div>
        </section>

        {/* Call for Sponsorship */}
        <section className="sponsors-call-section">
          <h2 className="sponsors-call-title">
            <FaTrophy className="sponsors-call-icon" />
            Call for Sponsorship
          </h2>
          <p className="sponsors-call-intro">
            Industrial and Institutional Sponsors are welcome to support SCOPES-2027 conference under the following categories:
          </p>

          {/* Platinum Sponsor */}
          <div className="sponsors-tier platinum">
            <div className="sponsors-tier-header">
              <FaTrophy className="sponsors-tier-icon" />
              <h3>Platinum Sponsor: INR 5.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>10 Complimentary delegate passes</li>
              <li>40 minutes presentation slot</li>
              <li>Acknowledgement during Awards & Valedictory Function</li>
              <li>2 Complimentary exhibit booths at Prime Location</li>
              <li>Prominent display of logo on all printed material, backdrop and website</li>
              <li>Permission to keep the Company brochure in the registration Kit</li>
            </ul>
          </div>

          {/* Gold Sponsor */}
          <div className="sponsors-tier gold">
            <div className="sponsors-tier-header">
              <FaMedal className="sponsors-tier-icon" />
              <h3>Gold Sponsor: INR 3.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>8 Complimentary delegate passes</li>
              <li>30-minute presentation slot</li>
              <li>Acknowledgement during Valedictory Function</li>
              <li>Complimentary exhibit booth</li>
              <li>Prominent display of logo on all printed material, backdrop and website</li>
              <li>Permission to keep the Company brochure in the registration Kit</li>
            </ul>
          </div>

          {/* Silver Sponsor */}
          <div className="sponsors-tier silver">
            <div className="sponsors-tier-header">
              <FaAward className="sponsors-tier-icon" />
              <h3>Silver Sponsor: INR 2.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>5 Complimentary delegate passes</li>
              <li>20 minutes presentation slot</li>
              <li>Complimentary exhibit booth</li>
              <li>Display of logo on all printed material, backdrop and website</li>
              <li>Permission to keep the Company brochure in the registration Kit</li>
            </ul>
          </div>

          {/* Bronze Sponsor */}
          <div className="sponsors-tier bronze">
            <div className="sponsors-tier-header">
              <FaCertificate className="sponsors-tier-icon" />
              <h3>Bronze Sponsor: INR 1.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>2 Complimentary delegate passes</li>
              <li>10 minutes pre-recorded video presentation slot in one of the breakaway sessions</li>
              <li>Complimentary exhibit booth</li>
              <li>Display of logo on all printed material, backdrop and website</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sponsors-contact">
            <p>All interested sponsors, fill the Google form below or mail us at <a href="mailto:scopes2026@cutm.ac.in">scopes2026@cutm.ac.in</a></p>
            <a href="#sponsor-form" className="sponsors-form-btn">
              Call for Sponsor
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
