import React from 'react';
import '../styles/Scope.css';
import { FaSignal, FaNetworkWired, FaBolt, FaMicrochip, FaAtom } from 'react-icons/fa';

const Scope = () => {
  const tracks = [
    {
      icon: <FaSignal />,
      title: 'Signal Processing',
      color: '#FF6B6B',
      topics: [
        'Digital, adaptive, and statistical signal processing',
        'Image, video, and speech processing',
        'Biomedical signal processing',
        'AI and machine learning for signal analysis',
        'Pattern recognition and computer vision',
        'Radar and remote sensing'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'Communication and Computer Networks',
      color: '#4ECDC4',
      topics: [
        'Wireless and mobile communications (5G/6G)',
        'Optical, satellite, and underwater communications',
        'Internet of Things (IoT) and sensor networks',
        'Software-defined networking (SDN) and NFV',
        'Network security and cryptography',
        'Edge, fog, and cloud communication systems'
      ]
    },
    {
      icon: <FaBolt />,
      title: 'Power and Energy Systems',
      color: '#FFD93D',
      topics: [
        'Smart grids and microgrids',
        'Renewable energy integration',
        'Power electronics and electric drives',
        'Energy storage and management systems',
        'Electric vehicles and charging infrastructure',
        'Power system protection, control, and reliability'
      ]
    },
    {
      icon: <FaMicrochip />,
      title: 'Embedded Systems and Intelligent Platforms',
      color: '#6BCF7F',
      topics: [
        'Embedded system architecture and design',
        'Real-time and cyber-physical systems',
        'VLSI, FPGA, and SoC design',
        'Robotics and automation',
        'IoT-enabled embedded platforms',
        'AI-enabled embedded and edge computing'
      ]
    },
    {
      icon: <FaAtom />,
      title: 'Quantum Technologies',
      color: '#A78BFA',
      topics: [
        'Quantum computing and algorithms',
        'Quantum communication and quantum networks',
        'Quantum signal processing',
        'Quantum cryptography and security',
        'Quantum sensors and metrology',
        'Hybrid classical–quantum systems'
      ]
    }
  ];

  return (
    <div className="scope-con-container">
      <div className="scope-con-hero">
        <h1 className="scope-con-title">Scope of the Conference</h1>
        <div className="scope-con-underline"></div>
      </div>

      <div className="scope-con-content">
        <div className="scope-con-intro">
          <p>
            The International Conference on Signal Processing, Communication, Power and Embedded Systems provides an international platform for researchers, academicians, industry professionals, and students to present and discuss recent advances, practical challenges, and emerging trends in signal processing, communication systems, power and energy technologies, embedded systems, and quantum technologies.
          </p>
          <p>
            The conference emphasizes interdisciplinary research that integrates intelligent computation, advanced communication networks, sustainable power systems, embedded intelligence, and next-generation quantum-enabled solutions. It encourages original, high-quality contributions addressing both theoretical foundations and real-world applications.
          </p>
        </div>

        <h2 className="scope-con-tracks-title">Major Technical Tracks</h2>
        <p className="scope-con-tracks-subtitle">Include (but are not limited to):</p>

        <div className="scope-con-tracks-grid">
          {tracks.map((track, index) => (
            <div className="scope-con-track-card" key={index}>
              <div className="scope-con-track-header" style={{ backgroundColor: track.color }}>
                <div className="scope-con-track-icon">{track.icon}</div>
                <h3 className="scope-con-track-title">{track.title}</h3>
              </div>
              <ul className="scope-con-track-list">
                {track.topics.map((topic, idx) => (
                  <li key={idx} className="scope-con-track-item">{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scope;
