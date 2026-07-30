import React, { useState } from "react";
import "../styles/PaperSubmission.css";
import {
  FaFileAlt,
  FaDownload,
  FaUpload,
  FaExclamationTriangle,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PaperSubmission = () => {
  const [btnState, setBtnState] = useState("idle");

  const handleSubmit = () => {
    if (btnState === "loading") return;
    setBtnState("loading");
    setTimeout(() => {
      setBtnState("success");
      setTimeout(() => {
        window.open("https://cmt3.research.microsoft.com/SCOPES2027", "_blank");
        setBtnState("idle");
      }, 1000);
    }, 2000);
  };

  return (
    <div className="paper-wrapper">
      <div className="paper-hero">
        <h1 className="paper-hero-title">Paper Submission</h1>
        <p className="paper-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="paper-container">
        <section className="paper-section">
          <h2 className="paper-section-title">
            <FaFileAlt className="paper-icon" />
            Submission Guidelines
          </h2>
          <p className="paper-intro">
  SCOPES-2027 welcomes papers related to the conference tracks. (
  Please refer{" "}
  <Link to="/scope" className="scope-link">
    Scope of the Conference
  </Link>
  )
</p>
          <p className="paper-text">
            The following instructions should be followed to make a successful
            submission:
          </p>
        </section>

        {/* Paper Size */}
        <section className="paper-card">
          <h3 className="paper-card-title">Paper Size:</h3>
          <p>
            Please ensure pinned manuscript adheres to the specified length
            requirement of <strong>4-6 pages</strong> with abstract word count
            limit <strong>150-250 words</strong>, following the IEEE Conference
            format guidelines. 
          </p>
        </section>

        {/* Paper Template */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaDownload className="paper-small-icon" />
            Paper Template:
          </h3>
          <p>You can download the template from the provided link.</p>
          <div className="paper-template-links">
            <a href="/doc/ms_word_template.docx" className="paper-template-btn">
              <FaDownload />
              MS Word Template
            </a>
            <a href="/doc/latex_template.zip" className="paper-template-btn">
              <FaDownload />
              LaTeX Template
            </a>
            <a
              href="https://www.ieee.org/conferences/publishing/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="paper-template-btn"
            >
              <FaDownload />
              IEEE - Manuscript Templates
            </a>
          </div>
          {/* <div className="paper-note">
            <FaExclamationTriangle className="note-icon" />
            <p>
              <strong>Note:</strong> Manuscripts that do not conform to the
              formatting guidelines will be removed from further consideration
              without review.
            </p>
          </div> */}
        </section>

        {/* Paper Submission Method */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaUpload className="paper-small-icon" />
            Instructions for Paper Submission:
          </h3>
          <div className="paper-instructions">
            {/* <h4>Instructions:</h4> */}
            <ol>
              <li>Upload papers in IEEE format only.</li>
              <li>
                Remove the author details from the manuscript for double blind
                review.
              </li>
              <li>
                Select the track as per suitable theme of the conference as
                mentioned in the Author Guidelines.
              </li>
            </ol>
          </div>

          {/* CMT Submit Card */}
          <div className="cmt-card">
            <div className="cmt-card-left">
              <div className="cmt-badge">
                <span className="cmt-badge-dot"></span>
                Submission Open
              </div>

              {/* <p className="cmt-card-heading">
                Ready to Submit
                <br />
                Your Paper?
              </p> */}

              <p className="cmt-card-sub">
                Click the button below to open the Microsoft CMT submission
                portal for SCOPES-2027. Make sure your paper follows IEEE format
                before submitting.
              </p>

              <button
                className={`cmt-btn cmt-btn--${btnState}`}
                onClick={handleSubmit}
                disabled={btnState === "loading"}
              >
                {btnState === "idle" && (
                  <>
                    <FaRocket className="cmt-btn-icon" /> Submit via CMT
                  </>
                )}
                {btnState === "loading" && (
                  <>
                    <span className="cmt-ring"></span> Launching...
                  </>
                )}
                {btnState === "success" && (
                  <>
                    <FaCheckCircle className="cmt-btn-icon" /> Opening CMT!
                  </>
                )}
              </button>

              <p className="cmt-card-help">
                Having issues? Contact us{" "}
                <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>
              </p>
            </div>

            <div className="cmt-card-right">
              <p className="cmt-qr-title">Scan to Submit</p>
              <div className="cmt-qr-frame">
                <img
                  src="/assets/cmt_qr.png"
                  alt="CMT QR Code"
                  className="cmt-qr-img"
                />
              </div>
              <p className="cmt-qr-sub">Microsoft CMT Portal</p>
            </div>
          </div>
        </section>

        {/* CMT Acknowledgment */}
        <p>
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
        <br />

        {/* IEEE Policies */}
        <section className="paper-card policy-card">
          <h3 className="paper-card-title">IEEE Policies:</h3>
          <p>
            Papers are reviewed on the basis that they do not contain
            plagiarized material and have not been submitted to any other
            conference at the same time (double submission).
          </p>
        </section>

        {/* Plagiarism */}
        <section className="paper-card plagiarism-card">
          <h3 className="paper-card-title">
            <FaExclamationTriangle className="paper-small-icon" />
            Plagiarism:
          </h3>
          <p>
            Learn how to avoid plagiarism. IEEE defines plagiarism as the use of
            another's ideas, processes, results, or words without explicitly
            acknowledging the original author and source. Plagiarism in any form
            is unacceptable and is considered a serious breach of professional
            conduct, with potentially severe ethical and legal consequences
            (IEEE Publication Services and Products Board Operations Manual,
            Section 8.2.1.B.7).
          </p>
          <p>
            Follow proper citation practices noted above to avoid plagiarism.
            All papers are checked for plagiarism before review process and the{" "}
            <strong>
              plagiarism should not exceed 20% (Including references.) AI plagiarism should not exceed 20%
            </strong>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PaperSubmission;
