import React from "react";
import "../styles/Sponsors.css";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaHandshake,
} from "react-icons/fa";

const Sponsors = () => {
  return (
    <div className="sponsors-wrapper">
      <div className="sponsors-hero">
        <h1 className="sponsors-hero-title">Sponsors</h1>

      </div>
      
      <div className="sponsors-container">
        {/* Call for Sponsorship */}
        <section className="sponsors-call-section">
          <h2 className="sponsors-call-title">
            <FaTrophy className="sponsors-call-icon" />
            Call for Sponsorship
          </h2>
          <p className="sponsors-call-intro">
            Industrial and Institutional Sponsors are welcome to support
            SCOPES-2027 conference under the following categories:
          </p>

          {/* Platinum Sponsor */}
          <div className="sponsors-tier platinum">
            <div className="sponsors-tier-header">
              <FaTrophy className="sponsors-tier-icon" />
              <h3>Platinum Sponsor: INR 3.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>10 Complimentary delegate passes</li>
              <li>40 minutes presentation slot</li>
              <li>Acknowledgement during Awards & Valedictory Function</li>
              <li>2 Complimentary exhibit booths at Prime Location</li>
              <li>
                Prominent display of logo on all printed material, backdrop and
                website
              </li>
              <li>
                Permission to keep the Company brochure in the registration Kit
              </li>
            </ul>
          </div>

          {/* Gold Sponsor */}
          <div className="sponsors-tier gold">
            <div className="sponsors-tier-header">
              <FaMedal className="sponsors-tier-icon" />
              <h3>Gold Sponsor: INR 2.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>8 Complimentary delegate passes</li>
              <li>30-minute presentation slot</li>
              <li>Acknowledgement during Valedictory Function</li>
              <li>Complimentary exhibit booth</li>
              <li>
                Prominent display of logo on all printed material, backdrop and
                website
              </li>
              <li>
                Permission to keep the Company brochure in the registration Kit
              </li>
            </ul>
          </div>

          {/* Silver Sponsor */}
          <div className="sponsors-tier silver">
            <div className="sponsors-tier-header">
              <FaAward className="sponsors-tier-icon" />
              <h3>Silver Sponsor: INR 1.0L</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>5 Complimentary delegate passes</li>
              <li>20 minutes presentation slot</li>
              <li>Complimentary exhibit booth</li>
              <li>
                Display of logo on all printed material, backdrop and website
              </li>
              <li>
                Permission to keep the Company brochure in the registration Kit
              </li>
            </ul>
          </div>

          {/* Bronze Sponsor */}
          <div className="sponsors-tier bronze">
            <div className="sponsors-tier-header">
              <FaCertificate className="sponsors-tier-icon" />
              <h3>Bronze Sponsor: INR 50K</h3>
            </div>
            <ul className="sponsors-benefits">
              <li>2 Complimentary delegate passes</li>
              <li>
                10 minutes pre-recorded video presentation slot in one of the
                breakaway sessions
              </li>
              <li>Complimentary exhibit booth</li>
              <li>
                Display of logo on all printed material, backdrop and website
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sponsors-contact">
            <p>
              All interested sponsors, fill the Google form below or mail us at{" "}
              <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>
            </p>
            <button
              onClick={() => window.open('mailto:scopes2027@cutm.ac.in', '_blank')}
              className="sponsors-form-btn"
            >
              Call for Sponsor
            </button>
          </div>
        </section>

        {/* Sponsor Section */}
        <section className="sponsors-card">
          <h2 className="sponsors-section-title">
            <FaHandshake className="sponsors-section-icon" />
            Our Valued Sponsor
          </h2>
          <div className="sponsors-company">
            <div className="sponsors-company-header">
              <img
                src="#"
                alt="GreenLeaf Logo"
                className="sponsors-company-logo"
              />
              <h3 className="sponsors-company-name">GreenLeaf Sponsors</h3>
            </div>
            <p className="sponsors-description">
              Details Adding soon...
            </p>
            <button
              onClick={() => {}}
              className="sponsors-visit-btn"
            >
              <FaExternalLinkAlt />
              Visit More..
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
