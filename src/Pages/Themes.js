import React from 'react';
import '../styles/Themes.css';
import { GiArchiveResearch } from 'react-icons/gi';

const Themes = () => {
  const tracks = [
    {
      title: 'Track 1: Signal Processing',
      themes: ['Intelligent Signal Processing', 'Speech and Audio Signal Processing', 'Signal Processing for Physically Challenged Person', 'Statistical Signal Processing', 'Computer Vision', 'Image and Signal Processing', 'Remote Sensing and Its Applications']
    },
    {
      title: 'Track 2: Communication Systems',
      themes: ['5G & 6G Wireless Communication', 'Cognitive Radio', 'Communication for Physically Challenged Person', 'Wearable Devices', 'AI-based Hearing Aids', 'Advanced Antennas for communication']
    },
    {
      title: 'Track 3: Natural Language Processing',
      themes: ['Characters Recognition', 'NLP in Medical science', 'Machine Translation', 'Text Summarization', 'Natural Language Generation (NLG)', 'Named Entity Recognition (NER)']
    },
    {
      title: 'Track 4: VLSI and Embedded System',
      themes: ['VLSI Design', 'VLSI Signal Processing', 'Chip Design', 'Internet of Things (IoT)', 'Embedded System for Defence, Healthcare & Agriculture', 'Resource-Constrained Systems', 'Hardware-Software Co-design', 'Robotics and Autonomous Systems']
    },
    {
      title: 'Track 5: Power Systems',
      themes: ['Power System Analysis and Protection', 'AI and ML applications in Power Systems', 'Power System Planning and Operation', 'Power System Economics and Market Design', 'High Voltage Engineering', 'Power System Security', 'Electric Vehicles', 'Micro Grid Technologies']
    },
    {
      title: 'Track 6: Power Electronics and Applications',
      themes: ['Advanced power electronics converters', 'AI and ML applications in Power Electronics', 'Motion control and mechatronics', 'Electrical machines modelling analysis', 'Converter-fed drives', 'Smart Grid', 'Renewable Energy Systems', 'Intelligent control in power electronics and drives', 'Power electronic converters']
    },
    {
      title: 'Track 7: ML and DL Techniques',
      themes: ['ML Techniques and applications', 'Deep Learning Techniques and Applications', 'Soft Computing', 'Distributed Computing', 'Cloud Computing, Big Data Analysis', 'Computational Intelligence', 'Federated Learning', 'Explainable AI', 'AI Applications in Data Science', 'Generative AI', 'Edge Computing', 'Neuromorphic Computing', 'Fog Computing', 'Quantum Computing']
    },
    {
      title: 'Track 8: Related Areas-I',
      themes: ['Disaster Management and Mitigation', 'AI Applications to Finance, Weather, Earthquake', 'Urban Planning and Smart Cities', 'Application of UAV (Unmanned Aerial Vehicle)', 'Condition Based Maintenance', 'Micro Machining', 'New Generation Fuels']
    },
    {
      title: 'Track 9: Related Areas-II',
      themes: ['AI applications to healthcare, agriculture and Allied Sciences', 'Modern Technologies in agriculture, fisheries and animal husbandry', 'Automation and robotics in agriculture', 'Smart irrigation systems', 'Drones for crop monitoring and spraying', 'Supply chain management in the dairy industry', 'Electrical Safety in Phytochemical Processing', 'AI applications to Finance, marketing, Systems and Manufacturing']
    },
    {
      title: 'Track 10: Related Areas-III',
      themes: ['Smart Sensors for Phytochemical Extraction/Bioactive compounds', 'Robotics and Automation for Extraction Processes', 'Power Electronics for Sustainable Phytoextraction', 'Electrical Safety in Phytochemical Processing', 'Optimization Models for Phytochemical Extraction', 'Novel Extraction Techniques for Phytochemicals', 'Scale-Up of Phytochemical Production Processes', 'Green Solvents and Recycling in Phytoextraction']
    }
  ];

  return (
    <div className="themes-wrapper">
      <div className="themes-hero">
        <h1 className="themes-hero-title">Conference Themes</h1>
        <p className="themes-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="themes-container">
        <section className="themes-intro">
          <h2 className="themes-section-title">
            <GiArchiveResearch className="themes-icon" />
            Tracks of the Conference
          </h2>
          <p className="themes-intro-text">
            The conference welcomes submissions across multiple tracks covering cutting-edge research in Signal Processing, Communication, Power, and Embedded Systems. Explore our diverse themes below:
          </p>
        </section>

        <div className="themes-grid">
          {tracks.map((track, index) => (
            <div key={index} className="themes-card">
              <h3 className="themes-card-title">{track.title}</h3>
              <ul className="themes-list">
                {track.themes.map((theme, i) => (
                  <li key={i}>{theme}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
