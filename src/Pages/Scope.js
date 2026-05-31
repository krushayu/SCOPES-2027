import React, { useState } from "react";
import "../styles/Scope.css";
import {
  FaSignal,
  FaNetworkWired,
  FaBolt,
  FaMicrochip,
  FaIndustry,
  FaFlask,
  FaAtom,
  FaSeedling,
} from "react-icons/fa";

// SDG images mapping for each track
const trackSDGImages = {
  0: [ // Track 1 - Advanced Signal, Image & Intelligent Systems
    { src: "/assets/sdg/track1-1.png", name: "SDG 1", alt: "track1-1" },
    { src: "/assets/sdg/track1-2.png", name: "SDG 2", alt: "track1-2" },
    { src: "/assets/sdg/track1-3.png", name: "SDG 3", alt: "track1-3" },
    { src: "/assets/sdg/track1-4.png", name: "SDG 4", alt: "track1-4" },
  ],
  1: [ // Track 2 - Next-Generation Communication Technologies
    { src: "/assets/sdg/track2-1.png", name: "SDG 5", alt: "track2-1" },
    { src: "/assets/sdg/track2-2.png", name: "SDG 6", alt: "track2-2" },
    { src: "/assets/sdg/track2-3.png", name: "SDG 7", alt: "track2-3" },
    { src: "/assets/sdg/track2-4.png", name: "SDG 8", alt: "track2-4" },
  ],
  2: [ // Track 3 - Smart Power Systems & Sustainable Energy
    { src: "/assets/sdg/track3-1.png", name: "SDG 9", alt: "track3-1" },
    { src: "/assets/sdg/track3-2.png", name: "SDG 10", alt: "track3-2" },
    { src: "/assets/sdg/track3-3.png", name: "SDG 11", alt: "track3-3" },
    { src: "/assets/sdg/track3-4.png", name: "SDG 12", alt: "track3-4" },
    { src: "/assets/sdg/track3-5.png", name: "SDG 13", alt: "track3-5" },
  ],
  3: [ // Track 4 - Embedded Systems, VLSI & Advanced Chip Design
    { src: "/assets/sdg/track4-1.png", name: "SDG 14", alt: "track4-1" },
    { src: "/assets/sdg/track4-2.png", name: "SDG 15", alt: "track4-2" },
    { src: "/assets/sdg/track4-3.png", name: "SDG 16", alt: "track4-3" },
    { src: "/assets/sdg/track4-4.png", name: "SDG 17", alt: "track4-4" },
    { src: "/assets/sdg/track4-5.png", name: "SDG 18", alt: "track4-5" },
    { src: "/assets/sdg/track4-6.png", name: "SDG 19", alt: "track4-6" },
  ],
  4: [ // Track 5 - Industry 4.0/5.0 & Intelligent Automation
    { src: "/assets/sdg/track5-1.png", name: "SDG 20", alt: "track5-1" },
    { src: "/assets/sdg/track5-2.png", name: "SDG 21", alt: "track5-2" },
    { src: "/assets/sdg/track5-3.png", name: "SDG 22", alt: "track5-3" },
    { src: "/assets/sdg/track5-4.png", name: "SDG 23", alt: "track5-4" },
    { src: "/assets/sdg/track5-5.png", name: "SDG 24", alt: "track5-5" },
  ],
  5: [ // Track 6 - Interdisciplinary & Emerging Technologies
    { src: "/assets/sdg/track6-1.png", name: "SDG 25", alt: "track6-1" },
    { src: "/assets/sdg/track6-2.png", name: "SDG 26", alt: "track6-2" },
    { src: "/assets/sdg/track6-3.png", name: "SDG 27", alt: "track6-3" },
    { src: "/assets/sdg/track6-4.png", name: "SDG 28", alt: "track6-4" },
    { src: "/assets/sdg/track6-5.png", name: "SDG 29", alt: "track6-5" },
  ],
  6: [ // Track 7 - Quantum Control, Computing & Learning
    { src: "/assets/sdg/track7-1.png", name: "SDG 30", alt: "track7-1" },
    { src: "/assets/sdg/track7-2.png", name: "SDG 31", alt: "track7-2" },
    { src: "/assets/sdg/track7-3.png", name: "SDG 32", alt: "track7-3" },
  ],
  7: [ // Track 8 - Precision Agriculture & Digital Farming
    { src: "/assets/sdg/track8-1.png", name: "SDG 33", alt: "track8-1" },
    { src: "/assets/sdg/track8-2.png", name: "SDG 34", alt: "track8-2" },
    { src: "/assets/sdg/track8-3.png", name: "SDG 35", alt: "track8-3" },
    { src: "/assets/sdg/track8-4.png", name: "SDG 36", alt: "track8-4" },
    { src: "/assets/sdg/track8-5.png", name: "SDG 37", alt: "track8-5" },
    { src: "/assets/sdg/track8-6.png", name: "SDG 38", alt: "track8-6" },
    { src: "/assets/sdg/track8-7.png", name: "SDG 39", alt: "track8-7" },

  ],
};

const tracks = [
  {
    icon: <FaSignal />,
    title: "Advanced Signal, Image & Intelligent Systems",
    color: "#e74c3c",
    topics: [
      "AI/ML and deep learning for signal, speech, image, and video processing",
      "Image enhancement, restoration, segmentation, and recognition",
      "Computer vision and pattern recognition",
      "Medical image and biomedical signal analytics",
      "Multimodal signal and data understanding",
      "Integrated sensing and communication (ISAC)",
      "Intelligent perception systems for autonomous applications",
      "Neuromorphic and bio-inspired signal processing",
      "Edge AI for real-time intelligent systems",
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: "Next-Generation Communication Technologies",
    color: "#2980b9",
    topics: [
      "5G-Advanced and 6G communication systems",
      "Semantic and intelligent communications",
      "Internet of Things (IoT) and wireless sensor networks",
      "Non-terrestrial and satellite communication systems",
      "Advanced antenna and microwave technologies",
      "Optical and high-speed communication systems",
      "Secure, reliable, and energy-efficient communication networks",
      "Network virtualization and software-defined networking",
    ],
  },
  {
    icon: <FaBolt />,
    title: "Smart Power Systems & Sustainable Energy",
    color: "#f39c12",
    topics: [
      "Smart grids and digital energy systems",
      "Renewable energy integration and energy storage technologies",
      "Electric vehicles and charging infrastructure",
      "Distributed energy resources and microgrids",
      "Advanced power electronic converters and drives",
      "High-voltage engineering and insulation diagnostics",
      "Power system protection, monitoring, and control",
      "Energy management and sustainable power technologies",
    ],
  },
  {
    icon: <FaMicrochip />,
    title: "Embedded Systems, VLSI & Advanced Chip Design",
    color: "#27ae60",
    topics: [
      "ASIC, FPGA, and System-on-Chip (SoC) design",
      "Low-power and high-performance VLSI systems",
      "Mixed-signal and RF integrated circuits",
      "AI accelerators and neuromorphic chip design",
      "Physical design and hardware security",
      "Embedded and real-time systems",
      "Quantum computing hardware and architectures",
      "Biochips and lab-on-chip technologies",
    ],
  },
  {
    icon: <FaIndustry />,
    title: "Industry 4.0/5.0 & Intelligent Automation",
    color: "#8e44ad",
    topics: [
      "Cyber-physical systems and digital twins",
      "Smart manufacturing and industrial automation",
      "Robotics and autonomous systems",
      "Industrial IoT and edge intelligence",
      "Predictive maintenance and industrial analytics",
      "Human-machine collaboration and intelligent control",
      "UAVs, underwater vehicles, and autonomous platforms",
      "Intelligent sensing for industrial applications",
    ],
  },
  {
    icon: <FaFlask />,
    title: "Interdisciplinary & Emerging Technologies",
    color: "#00897b",
    topics: [
      "Smart cities and intelligent infrastructure",
      "Intelligent healthcare and assistive technologies",
      "Geospatial analytics and remote sensing applications",
      "Earth observation and space technologies",
      "Disaster mitigation and management technologies",
      "Human-centric and sustainable technologies",
      "Industry-academia collaboration and technology transfer",
      "AI and ML applications in engineering systems",
    ],
  },
  {
    icon: <FaAtom />,
    title: "Quantum Control, Computing & Learning",
    color: "#6c5ce7",
    topics: [
      "Quantum computing and quantum algorithms",
      "Quantum machine learning",
      "Quantum control and estimation",
      "Quantum sensing and metrology",
      "Quantum communication and networking",
      "Quantum cryptography and post-quantum security",
      "Quantum applications in engineering and science",
      "Computational complexity in quantum systems",
    ],
  },
  {
    icon: <FaSeedling />,
    title: "Precision Agriculture & Digital Farming Technologies",
    color: "#2ecc71",
    topics: [
      "Sensor-based precision crop management",
      "Remote sensing, UAVs, and geospatial analytics in agriculture",
      "AI, machine learning, and big data for smart agriculture",
      "IoT, robotics, and automation in farming systems",
      "Precision horticulture and protected cultivation",
      "Precision livestock, dairy, poultry, and aquaculture systems",
      "Digital agriculture and decision support systems",
      "Climate-smart agriculture and natural resource management",
      "Socio-economic and policy aspects of precision agriculture",
    ],
  },
];

const Scope = () => {
  const [active, setActive] = useState(0);
  const currentSDGs = trackSDGImages[active] || [];

  return (
    <div className="scope-wrapper">
      <div className="scope-hero">
        <h1>Scope of the Conference</h1>
        <p>SCOPES 2027 — Major Technical Tracks</p>
      </div>

      <div className="scope-content">
        <div className="scope-intro">
          <p>
            The 3rd IEEE International Conference on Signal Processing,
            Communication, Power, and Embedded Systems (SCOPES) aims to address
            the rapidly evolving technological landscape driven by digital
            transformation, intelligent automation, and next-generation hardware
            innovations. The conference focuses on cutting-edge research
            integrating advanced chip design, intelligent systems, communication
            technologies, sustainable energy solutions, and scalable industrial
            applications, fostering strong collaboration between academia,
            research organizations, and industry. <br />With the emergence of
            transformative technologies such as AI-enabled hardware, 5G/6G
            communication, edge intelligence, quantum computing, cyber-physical
            systems, and bio-inspired computing, SCOPES provides a
            multidisciplinary platform to discuss innovative solutions for
            modern challenges in healthcare, smart manufacturing, sustainable
            energy, intelligent transportation, agriculture, and smart
            infrastructure.
          </p>
        </div>
        
        <div>
          <h2>
            The conference invites original research contributions in the following tracks, but not limited to...
          </h2>
        </div>
        <br />

        <div className="scope-layout">
          {/* Left — Track List */}
          <div className="scope-tabs">
            {tracks.map((track, i) => (
              <button
                key={i}
                className={`scope-tab ${active === i ? "active" : ""}`}
                style={{ "--c": track.color }}
                onClick={() => setActive(i)}
              >
                <span className="scope-tab-icon">{track.icon}</span>
                <span className="scope-tab-label">{track.title}</span>
              </button>
            ))}
          </div>

          {/* Right — Topics Panel with SDGs */}
          <div className="scope-panel" style={{ "--c": tracks[active].color }}>
            <div className="scope-panel-header">
              <div className="scope-panel-icon">{tracks[active].icon}</div>
              <h2>{tracks[active].title}</h2>
            </div>

            {/* Topics and SDGs Side by Side */}
            <div className="scope-panel-content">
              {/* Left Side - Topics List */}
              <div className="scope-panel-topics">
                <ul className="scope-panel-list">
                  {tracks[active].topics.map((topic, i) => (
                    <li key={i}>
                      <span className="scope-panel-dot" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - SDG Images (6 per track) */}
              <div className="scope-panel-sdgs">
                {/* <h4 className="sdg-section-title">
                  <span>🎯</span> Aligned with UN SDGs
                </h4> */}
                <div className="sdg-grid">
                  {currentSDGs.map((sdg, idx) => (
                    <div key={idx} className="sdg-card">
                      <img 
                        src={sdg.src} 
                        alt={sdg.alt}
                        className="sdg-img"
                        loading="lazy"
                      />
                      {/* <span className="sdg-name">{sdg.name}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;