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

// const conclusion = "The conference focuses on future-ready technologies and industry-driven innovations, particularly highlighting the convergence of advanced chip design (biochips, quantum chips, AI accelerators) with communication, power, and embedded systems. It aims to promote scalable, sustainable, and intelligent solutions that meet the demands of next-generation industries and global technological advancement.";

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
            The 3rd IEEE International Conference on Signal Processing,
            Communication, Power, and Embedded Systems (SCOPES) aims to address
            the rapidly evolving technological landscape driven by digital
            transformation, intelligent automation, and next-generation hardware
            innovations. The conference focuses on cutting-edge research
            integrating advanced chip design, intelligent systems, communication
            technologies, sustainable energy solutions, and scalable industrial
            applications, fostering strong collaboration between academia,
            research organizations, and industry. With the emergence of
            transformative technologies such as AI-enabled hardware, 5G/6G
            communication, edge intelligence, quantum computing, cyber-physical
            systems, and bio-inspired computing, SCOPES provides a
            multidisciplinary platform to discuss innovative solutions for
            modern challenges in healthcare, smart manufacturing, sustainable
            energy, intelligent transportation, agriculture, and smart
            infrastructure.{" "}
          </p>
        </div>
        <div>
          <h2> The conference invites original research contributions in the following tracks, but not limited to..</h2>
        </div>
        <br></br>

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

          {/* Right — Topics Panel */}
          <div className="scope-panel" style={{ "--c": tracks[active].color }}>
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

        {/* <div className="scope-conclusion">
          <h3>Conclusion</h3>
          <p>{conclusion}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Scope;
