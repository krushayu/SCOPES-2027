import React, { useState } from 'react';
import '../styles/Scope.css';
import { FaSignal, FaNetworkWired, FaBolt, FaMicrochip, FaIndustry, FaFlask } from 'react-icons/fa';

const tracks = [
  {
    icon: <FaSignal />,
    title: 'Advanced Signal Processing & Intelligent Systems',
    color: '#e74c3c',
    topics: [
      'AI/ML and deep learning for real-time signal processing',
      'Integrated sensing and communication (ISAC)',
      'Intelligent perception systems for autonomous applications',
      'Neuromorphic and bio-inspired signal processing'
    ]
  },
  {
    icon: <FaNetworkWired />,
    title: 'Next-Generation Communication Technologies',
    color: '#2980b9',
    topics: [
      '5G-Advanced and emerging 6G communication systems',
      'Semantic and intelligent communication',
      'IoT, non-terrestrial networks, and satellite communication',
      'Secure and energy-efficient communication systems'
    ]
  },
  {
    icon: <FaBolt />,
    title: 'Smart Power Systems & Sustainable Energy',
    color: '#f39c12',
    topics: [
      'Smart grids, digital energy systems, and microgrids',
      'Renewable energy integration and storage technologies',
      'Electric vehicles and advanced power electronics',
      'Green and energy-efficient system design'
    ]
  },
  {
    icon: <FaMicrochip />,
    title: 'Embedded Systems, VLSI & Advanced Chip Design',
    color: '#27ae60',
    topics: [
      'VLSI, FPGA, and ASIC design methodologies',
      'System-on-Chip (SoC) and heterogeneous integration',
      'Biochips and lab-on-chip technologies for healthcare and diagnostics',
      'Quantum computing hardware and quantum chip design',
      'Neuromorphic chips and AI accelerators',
      'Low-power, high-performance and secure chip design'
    ]
  },
  {
    icon: <FaIndustry />,
    title: 'Industry 4.0/5.0 & Intelligent Automation',
    color: '#8e44ad',
    topics: [
      'Cyber-physical systems and digital twins',
      'Smart manufacturing, robotics, and automation',
      'Edge AI and industrial IoT applications',
      'Predictive maintenance and industrial analytics'
    ]
  },
  {
    icon: <FaFlask />,
    title: 'Interdisciplinary & Emerging Technologies',
    color: '#00897b',
    topics: [
      'Quantum communication and post-quantum security',
      'Human-centric and sustainable technologies',
      'Smart cities, intelligent healthcare, and infrastructure systems',
      'Technology transfer and industry-academia collaboration'
    ]
  }
];

const conclusion = "The conference focuses on future-ready technologies and industry-driven innovations, particularly highlighting the convergence of advanced chip design (biochips, quantum chips, AI accelerators) with communication, power, and embedded systems. It aims to promote scalable, sustainable, and intelligent solutions that meet the demands of next-generation industries and global technological advancement.";

const Scope = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="scope-wrapper">
      <div className="scope-hero">
        <h1>Scope of the Conference</h1>
        <p>SCOPES 2027 — Major Technical Tracks</p>
      </div>

      <div className="scope-content">
        <div className="scope-intro">
          <p>
The 3rd IEEE International Conference on Signal Processing, Communication, Power and Embedded Systems (SCOPES) aims to address the rapidly evolving technological landscape shaped by digital transformation, intelligent automation, and next-generation hardware innovations. The conference emphasizes cutting-edge research that integrates advanced chip design, intelligent systems, and scalable industrial solutions, fostering strong collaboration between academia and industry.
With the emergence of transformative technologies such as AI-enabled hardware, 5G-Advanced/6G communication, edge intelligence, quantum computing, and bio-inspired chip design, the conference provides a platform to explore solutions for modern industrial challenges including smart manufacturing, healthcare technologies, energy sustainability, and intelligent infrastructure.          </p>
        </div>

        <div className="scope-layout">
          {/* Left — Track List */}
          <div className="scope-tabs">
            {tracks.map((track, i) => (
              <button
                key={i}
                className={`scope-tab ${active === i ? 'active' : ''}`}
                style={{ '--c': track.color }}
                onClick={() => setActive(i)}
              >
                <span className="scope-tab-icon">{track.icon}</span>
                <span className="scope-tab-label">{track.title}</span>
              </button>
            ))}
          </div>

          {/* Right — Topics Panel */}
          <div className="scope-panel" style={{ '--c': tracks[active].color }}>
            <div className="scope-panel-header">
              <div className="scope-panel-icon">{tracks[active].icon}</div>
              <h2>{tracks[active].title}</h2>
            </div>
            <ul className="scope-panel-list">
              {tracks[active].topics.map((topic, i) => (
                <li key={i}>
                  <span className="scope-panel-dot" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scope-conclusion">
          <h3>Conclusion</h3>
          <p>{conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default Scope;
