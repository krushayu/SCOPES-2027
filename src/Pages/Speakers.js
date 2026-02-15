import React, { useState, useEffect } from 'react';
import '../styles/Speakers.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [expandedAbout, setExpandedAbout] = useState(false);

  useEffect(() => {
    fetch('/data/speakers.json')
      .then(res => res.json())
      .then(data => setSpeakers(data))
      .catch(err => console.error('Error loading speakers:', err));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="speakers-page">
      {/* Speakers Grid */}
      <section className="speakers-grid-section">
        <div className="speakers-container">
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div className="speaker-grid-card" key={speaker.id}>
                <div className="speaker-card-inner">
                  <div className="speaker-card-front">
                    <div className="speaker-img-container">
                      <img src={speaker.image} alt={speaker.name} className="speaker-img" />
                      <div className="speaker-overlay">
                        <button 
                          className="view-details-btn"
                          onClick={() => {
                            setSelectedSpeaker(speaker);
                            setExpandedAbout(false);
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="speaker-info">
                      <h3 className="speaker-grid-name">{speaker.name}</h3>
                      <p className="speaker-grid-profession">{speaker.profession}</p>
                      <div className="speaker-talk-preview">
                        <FaQuoteLeft className="quote-icon" />
                        <p className="talk-title-preview">{speaker.talkTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Detail Modal */}
      {selectedSpeaker && (
        <div className="speaker-detail-modal" onClick={() => setSelectedSpeaker(null)}>
          <div className="speaker-detail-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedSpeaker(null)}>
              ×
            </button>
            <div className="modal-grid">
              <div className="modal-left-section">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-speaker-img" />
              </div>
              <div className="modal-right-section">
                <h2 className="modal-name">{selectedSpeaker.name}</h2>
                <p className="modal-profession">{selectedSpeaker.profession}</p>
                
                <div className="modal-detail-section">
                  <h3>About</h3>
                  <p>
                    {expandedAbout ? selectedSpeaker.about : truncateText(selectedSpeaker.about, 300)}
                    {selectedSpeaker.about.length > 300 && (
                      <button 
                        className="read-more-btn"
                        onClick={() => setExpandedAbout(!expandedAbout)}
                      >
                        {expandedAbout ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>
                
                <div className="modal-detail-section">
                  <h3>Talk Title</h3>
                  <p className="modal-talk-title">{selectedSpeaker.talkTitle}</p>
                </div>
                
                <div className="modal-detail-section">
                  <h3>Abstract</h3>
                  <p>{selectedSpeaker.abstract}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
