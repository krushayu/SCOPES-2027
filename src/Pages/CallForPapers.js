import React from 'react';
import '../styles/CallForPapers.css';
import { FaFileAlt } from 'react-icons/fa';

const CallForPapers = () => {
  const tracks = [
    {
      track: 'Track 1: Signal Processing',
      themes: ['Intelligent Signal Processing', 'Speech and Audio Signal Processing', 'Signal Processing for Physically Challenged Person', 'Statistical Signal Processing', 'Computer Vision', 'Image and Signal Processing', 'Remote Sensing and Its Applications'],
      sdgs: ['3.png', '9.png', '4.png', '11_.png']
    },
    {
      track: 'Track 2: Communication Systems',
      themes: ['5G & 6G Wireless Communication', 'Cognitive Radio', 'Communication for Physically Challenged Person', 'Wearable Devices', 'AI-based Hearing Aids', 'Advanced Antennas for communication'],
      sdgs: ['3.png', '9.png', '10.png', '11_.png', '12.png']
    },
    {
      track: 'Track 3: Natural Language Processing',
      themes: ['Characters Recognition', 'NLP in Medical science', 'Machine Translation', 'Text Summarization', 'Natural Language Generation (NLG)', 'Named Entity Recognition (NER)'],
      sdgs: ['3.png', '4.png', '9.png', '10.png']
    },
    {
      track: 'Track 4: VLSI and Embedded System',
      themes: ['VLSI Design', 'VLSI Signal Processing', 'Chip Design', 'Internet of Things (IoT)', 'Embedded System for Defence, Healthcare & Agriculture', 'Resource-Constrained Systems', 'Hardware-Software Co-design', 'Robotics and Autonomous Systems'],
      sdgs: ['2.png', '3.png', '9.png', '11_.png', '12.png']
    },
    {
      track: 'Track 5: Power Systems',
      themes: ['Power System Analysis and Protection', 'AI and ML applications in Power Systems', 'Power System Planning and Operation', 'Power System Economics and Market Design', 'High Voltage Engineering', 'Power System Security', 'Electric Vehicles', 'Micro Grid Technologies'],
      sdgs: ['7.png', '8.png', '9.png', '11_.png', '13.png']
    },
    {
      track: 'Track 6: Power Electronics and Applications',
      themes: ['Advanced power electronics converters', 'AI and ML applications in Power Electronics', 'Motion control and mechatronics', 'Electrical machines modelling analysis', 'Converter-fed drives', 'Smart Grid', 'Renewable Energy Systems', 'Intelligent control in power electronics and drives', 'Power electronic converters'],
      sdgs: ['7.png', '9.png', '11_.png', '13.png']
    },
    {
      track: 'Track 7: ML and DL Techniques',
      themes: ['ML Techniques and applications', 'Deep Learning Techniques and Applications', 'Soft Computing', 'Distributed Computing', 'Cloud Computing, Big Data Analysis', 'Computational Intelligence', 'Federated Learning', 'Explainable AI', 'AI Applications in Data Science', 'Generative AI', 'Edge Computing', 'Neuromorphic Computing', 'Fog Computing', 'Quantum Computing'],
      sdgs: ['3.png', '4.png', '9.png', '11_.png', '13.png', '17.png']
    },
    {
      track: 'Track 8: Related Areas-I',
      themes: ['Disaster Management and Mitigation', 'AI Applications to Finance, Weather, Earthquake', 'Urban Planning and Smart Cities', 'Application of UAV (Unmanned Aerial Vehicle)', 'Condition Based Maintenance', 'Micro Machining', 'New Generation Fuels'],
      sdgs: ['2.png', '7.png', '9.png', '11_.png', '12.png', '13.png']
    },
    {
      track: 'Track 9: Related Areas-II',
      themes: ['AI applications to healthcare, agriculture and Allied Sciences', 'Modern Technologies in agriculture, fisheries and animal husbandry', 'Automation and robotics in agriculture', 'Smart irrigation systems', 'Drones for crop monitoring and spraying', 'Supply chain management in the dairy industry', 'Electrical Safety in Phytochemical Processing', 'AI applications to Finance, marketing, Systems and Manufacturing'],
      sdgs: ['2.png', '3.png', '6.png', '12.png', '13.png']
    },
    {
      track: 'Track 10: Related Areas-III',
      themes: ['Smart Sensors for Phytochemical Extraction/Bioactive compounds', 'Robotics and Automation for Extraction Processes', 'Power Electronics for Sustainable Phytoextraction', 'Electrical Safety in Phytochemical Processing', 'Optimization Models for Phytochemical Extraction', 'Novel Extraction Techniques for Phytochemicals', 'Scale-Up of Phytochemical Production Processes', 'Green Solvents and Recycling in Phytoextraction'],
      sdgs: ['3.png', '7.png', '8.png', '9.png', '12.png', '13.png']
    }
  ];

  return (
    <div className="cfp-wrapper">
      <div className="cfp-hero">
        <h1 className="cfp-hero-title">Call for Papers</h1>
        <p className="cfp-hero-subtitle">SCOPES-2027 Conference</p>
      </div>

      <div className="cfp-container">
        <section className="cfp-intro">
          <p className="cfp-intro-text">
            The conference, organized by Centurion University of Technology and Management (CUTM) is a premier event focusing on the latest advancements and research in the fields of Signal Processing, Communication, Power, and Embedded Systems.
          </p>
        </section>

        <section className="cfp-tracks-section">
          <h2 className="cfp-section-title">
            <FaFileAlt className="cfp-icon" />
            Tracks of the Conference, but not limited to...
          </h2>

          <div className="cfp-table-wrapper">
            <table className="cfp-table">
              <thead>
                <tr>
                  <th>Tracks</th>
                  <th>Themes</th>
                  <th>SDG</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Track">{item.track}</td>
                    <td data-label="Themes">
                      <ul className="cfp-themes-list">
                        {item.themes.map((theme, i) => (
                          <li key={i}>{theme}</li>
                        ))}
                      </ul>
                    </td>
                    <td data-label="SDG">
                      <div className="cfp-sdg-images">
                        {item.sdgs.map((sdg, i) => (
                          <img 
                            key={i}
                            src={`https://scopes24.cutm.ac.in/assets/SDG/${sdg}`}
                            alt="SDG Logo"
                            className="cfp-sdg-img"
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallForPapers;
