import React from 'react';
import '../styles/PaperSubmission.css';
import { FaFileAlt, FaDownload, FaUpload, FaExclamationTriangle } from 'react-icons/fa';

const PaperSubmission = () => {
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
            SCOPES-2027 welcomes papers related to the conference tracks. For further information, please refer to the Call for Papers.
          </p>
          <p className="paper-text">The following instructions should be followed to make a successful submission:</p>
        </section>

        {/* Paper Size */}
        <section className="paper-card">
          <h3 className="paper-card-title">Paper Size:</h3>
          <p>
            Please ensure pinned manuscript adheres to the specified length requirement of <strong>4-6 pages</strong> with Abstract word count limit <strong>150-250 words</strong>, following the IEEE Conference format guidelines. You can download the template from the provided link:
          </p>
        </section>

        {/* Paper Template */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaDownload className="paper-small-icon" />
            Paper Template:
          </h3>
          <div className="paper-template-links">
            <a href="/ms_word_template.docx" className="paper-template-btn">
              <FaDownload />
              MS Word Template
            </a>
            <a href="latex_template.zip" className="paper-template-btn">
              <FaDownload />
              LaTeX Template
            </a>
            <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer" className="paper-template-btn">
              <FaDownload />
              IEEE - Manuscript Templates
            </a>
          </div>
          <div className="paper-note">
            <FaExclamationTriangle className="note-icon" />
            <p><strong>Note:</strong> Manuscripts that do not conform to the formatting guidelines will be removed from further consideration without review.</p>
          </div>
        </section>

        {/* Paper Submission Method */}
        <section className="paper-card">
          <h3 className="paper-card-title">
            <FaUpload className="paper-small-icon" />
            Paper Submission Method:
          </h3>
          <p>
            The online paper submission system opens from <strong>November 2nd, 2026</strong>. Please read over the paper kit for formatting instructions. Papers should be submitted via Microsoft CMT Link
          </p>
          
          <div className="paper-instructions">
            <h4>Instructions:</h4>
            <ol>
              <li>Upload papers in IEEE format only.</li>
              <li>Remove the author details from the manuscript for double blind review.</li>
              <li>Select the track as per suitable theme of the conference as mentioned in the Author Guidelines.</li>
            </ol>
          </div>

          <div className="paper-submit-section">
            <a href="#cmt-link" className="paper-submit-btn">
              <FaUpload />
              Submit Paper via CMT
            </a>
          </div>

          <div className="paper-help">
            <p>In case of any uploading issue, email us at <a href="mailto:scopes2026@cutm.ac.in">scopes2026@cutm.ac.in</a></p>
          </div>
        </section>

        {/* IEEE Policies */}
        <section className="paper-card policy-card">
          <h3 className="paper-card-title">IEEE Policies:</h3>
          <p>
            Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission).
          </p>
        </section>

        {/* Plagiarism */}
        <section className="paper-card plagiarism-card">
          <h3 className="paper-card-title">
            <FaExclamationTriangle className="paper-small-icon" />
            Plagiarism:
          </h3>
          <p>
            Learn how to avoid plagiarism. IEEE defines plagiarism as the use of another's ideas, processes, results, or words without explicitly acknowledging the original author and source. Plagiarism in any form is unacceptable and is considered a serious breach of professional conduct, with potentially severe ethical and legal consequences (IEEE Publication Services and Products Board Operations Manual, Section 8.2.1.B.7).
          </p>
          <p>
            Follow proper citation practices noted above to avoid plagiarism. All papers are checked for plagiarism before review process and the <strong>plagiarism should not exceed 20%</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PaperSubmission;
