import React, { useState } from 'react';
import '../styles/Committee.css';
import { FaChevronDown, FaUsers } from 'react-icons/fa';

const Committee = () => {
  const [openSection, setOpenSection] = useState('chief-patron');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const committees = [
    {
      id: 'chief-patron',
      title: 'Chief Patron',
      color: '#FF6B6B',
      members: [
        'Prof. (Dr.) Mukti Kanta Mishra, President, CUTM, Odisha & AP',
        'Prof. D. N. Rao, Vice-President, CUTM, Odisha & AP'
      ]
    },
    {
      id: 'patron',
      title: 'Patron',
      color: '#4ECDC4',
      members: [
        'Prof. (Dr.) Supriya Pattanayak, Vice-Chancellor, CUTM, Odisha',
        'Prof. Purna Mohanty, Co-founder and CEO Marquee Semiconductor'
      ]
    },
    {
      id: 'honorary-general-chair',
      title: 'Honorary General Chair',
      color: '#45B7D1',
      members: [
        'Prof. (Dr.) G. S. N. Raju, Chancellor, CUTM, AP',
        'Prof. (Dr.) Ganapati Panda, Former Deputy Director, IIT Bhubaneswar, Odisha',
        'Prof. (Dr.) Okyay Kaynak, Istanbul, Turkey'
      ]
    },
    {
      id: 'general-chair',
      title: 'General Chair',
      color: '#96CEB4',
      members: [
        'Prof. (Dr.) Anita Patra, Registrar, CUTM, Odisha',
        'Prof. (Dr.) Subhransu Ranjan Samantaray, IIT Bhubaneswar, Odisha'
      ]
    },
    {
      id: 'program-chair',
      title: 'Program Chair',
      color: '#FFEAA7',
      members: [
        'Dr. Prafulla Kumar Panda, Dean SoET (PKD), CUTM, Odisha',
        'Dr. Debendra Kumar Sahoo, Assoc. Professor, Dept. of ECE, CUTM, Odisha'
      ]
    },
    {
      id: 'convener',
      title: 'Convener',
      color: '#DDA0DD',
      members: [
        'Prof. (Dr.) Ashok Misra, Professor, Dept. of Mathematics, CUTM, Odisha'
      ]
    },
    {
      id: 'co-convener',
      title: 'Co-Convener',
      color: '#F8B500',
      members: [
        'Prof. (Dr.) Sangram Keshari Swain, Dean (Exams & Students\' Welfare), CUTM, Odisha',
        'Prof. Prabhat Kumar Patnaik, HOD, Dept. of ECE (PKD), CUTM, Odisha',
        'Prof. Satyanarayan Padhy, Academic Co-ordinator, SoET, CUTM, Odisha'
      ]
    },
    {
      id: 'ieee-observer',
      title: 'IEEE Observer Committee',
      color: '#00B4D8',
      members: [
        'Prof. (Dr.) Brojo Kishore Mishra, NIST, Berhampur',
        'Prof. (Dr.) Ranjeeta Patel, KIIT, Bhubaneswar'
      ]
    },
    {
      id: 'steering',
      title: 'Steering Committee',
      color: '#4895EF',
      members: [
        'Prof. (Dr.) Satya Prakash Nanda, Dean (Admin.) MSSSoA, CUTM, Odisha',
        'Prof. (Dr.) M. Devender Reddy, Dean (Acad.),MSSSoA CUTM, Odisha',
        'Prof. (Dr.) Rajkishore Swain, Dean SoVAS, CUTM, Odisha',
        'Prof. (Dr.) Satyasis Misra, Dean SDG, CUTM, Odisha',
        'Dr. Prafulla Kumar Panda, Dean SoET, PKD, CUTM, Odisha',
        'Prof. (Dr.) Sujata Chakravarty, Dean SoET, Bhubaneswar, CUTM, Odisha',
        'Dr. Sambid Swain, Associate Dean SoF, CUTM, Odisha',
        'Prof. (Dr.) Prajna Pani,Associate Dean SoM, PKD, CUTM, Odisha',
        'Prof. (Dr.) Anil Kumar Jonnalagadda, Associate Dean ABM, CUTM, Odisha',
        'Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha',
        'Prof. (Dr.) Ashok Misra, Professor, Dept. of Mathematics, CUTM, Odisha',
        'Prof. (Dr.) Ramesh Chandra Mohanty, Professor, Dept. of Mech. Engg.,CUTM, Odisha',
        'Prof. (Dr.) Susanta Kumar Biswal, Professor, Dept. of Chemistry,CUTM, Odisha',
        'Prof. (Dr.) Sagar Maitra, Professor, Dept. of Agronomy, MSSSoA, CUTM, Odisha',
        'Dr. Debendra Kumar Sahoo, Assoc. Professor, Dept. of ECE, CUTM, Odisha',
        'Prof. (Dr.) Harish Chandra Mohanta, HoD, Dept. of ECE, Bhubaneswar,CUTM, Odisha',
        'Prof. Satyanarayan Padhy, Academic Coordinator, SoET, PKD, CUTM, Odisha',
        'Dr. Gouri Kumar Sahoo, Coordinator, SoAS, PKD, CUTM, Odisha',
        'Prof. Prabhat Kumar Patnaik, Asst. Professor, Dept. of ECE, CUTM, Odisha'
      ]
    },
    {
      id: 'organising',
      title: 'Organising Committee',
      color: '#F72585',
      members: [
        'Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha',
        'Dr. Ritesh Kumar, Dean Student Affairs, PKD, CUTM, Odisha',
        'Dr. Harish Chandra Mohanta, HoD, Dept. of ECE, (BBSR), CUTM, Odisha',
        'Dr. Sujit Mishra, HOD, Dept. of Mechanical Engg. (PKD), CUTM, Odisha',
        'Dr. Rajib Majhi, HOD, Dept. of Civil Engg. (PKD), CUTM, Odisha',
        'Dr. Sudhansu Kumar Samal, HoD, Dept. of EEE, (BBSR), CUTM, Odisha',
        'Prof. Debendra Kumar Maharana, HOD, Dept. of CSE (PKD), CUTM, Odisha'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Committee',
      color: '#7209B7',
      members: [
        'Prof. (Dr.) Girish Kumar, Professor, IIT, Bombay',
        'Prof. (Dr.) Sukumar Mishra, Professor, IIT, Delhi',
        'Prof. (Dr.) Prasant Kumar Sahu, Professor, IIT, Bhubaneswar',
        'Prof. (Dr.) Saroj Kumar Meher, Associate Professor, ISI, Bangalore',
        'Prof. (Dr.) Nithin V. George, Associate Professor, IIT, Gandhi Nagar',
        'Prof. (Dr.) Gautam Mohanty, Associate Professor, NIT, Durgapur',
        'Prof. (Dr.) Ramesh Chandra Mohanty, Professor, SoET, CUTM, Odisha',
        'Prof. Ashirbad Khuntia, Assistant Professor, SoET, CUTM, Odisha',
        'Prof. Sourav Chakraborty, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Ashish Ranjan Dash, Associate Professor, SoET, CUTM, Odisha',
        'Dr. Rajendra Kumar Khadanga, Associate Professor, SoET, CUTM, Odisha',
        'Dr. Chandra Sekhar Dash, Associate Professor, SoET, CUTM, Odisha',
        'Dr. Abhishek Das, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Abinash Rath, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Adyasha Rath, Assistant Professor, CV Raman Global University, Odisha',
        'Dr. Prangya Paramita Pradhan, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Nimay Chandra Giri, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Debendra Muduli, Assistant Professor, CV Raman Global University, Odisha'
      ]
    },
    {
      id: 'publication',
      title: 'Publication Committee',
      color: '#3A0CA3',
      members: [
        'Prof. (Dr.) Girish Kumar, Professor, IIT, Bombay',
        'Prof. (Dr.) Sukumar Mishra, Professor, IIT, Delhi',
        'Prof. (Dr.) Ramesh Chandra Mohanty, Professor, Dept. of Mech. Engg.,CUTM, Odisha',
        'Dr. Abhishek Das, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Abinash Rath, Assistant Professor, SoET, CUTM, Odisha',
        'Prof. Ashirbad Khuntia, Assistant Professor, SoET, CUTM, Odisha',
        'Prof. Sourav Chakraborty, Assistant Professor, SoET, CUTM, Odisha',
        'Dr. Prangya Paramita Pradhan, Assistant Professor, SoET, CUTM, Odisha'
      ]
    },
    {
      id: 'international-advisory',
      title: 'International Advisory Committee',
      color: '#06D6A0',
      members: [
        'Prof. Patrice WIRA, University Institute of Technology of Mulhouse',
        'Prof. Ahmed Zobaa, Brunel University London: Uxbridge, Middlesex, GB',
        'Prof. Huijun Gao, Harbin Institute of Technology, China',
        'Dr. Celia Shahnaz, BUET, Bangladesh',
        'Dr. Shazia Hasan, BITS Pilani, Dubai Campus',
        'Dr. Milan Biswal, New Mexico State University, USA',
        'Prof. Hyun Sung Shin, Samsung Electronics, Hwaseong, Korea',
        'Prof. Jin Young Park, Kyungpook National University, South Korea',
        'Prof. Djaffar Ould Abdeslam, Chez University of Haute-Alsace',
        'Prof. Florian Misoc, Kennesaw State University, Marietta',
        'Prof. Jan Michalik, University of West Bohemia',
        'Prof. Matthew Armstrong, Newcastle University, UK',
        'Prof. Andrews Samraj, Mahendra Engineering College, Malaysia',
        'Prof. Ahmed Khader Habboush, Jerash University, Jerash, Jordan',
        'Prof. Gyoo-Soo Chae, Baekseok University, South Korea',
        'Prof. Akhtar Kalam, Victoria University, Australia',
        'Prof. Mohammad Alnabhan, Mu\'tah University, Jordan',
        'Prof. Ahmad Abu Alaish, Jerash University, Jordan',
        'Prof. Majed Aburkaba, Tabuk Univeristy, KSA',
        'Prof. Osama Alia, Tabuk Univeristy, KSA',
        'Prof. Awad Awadelkarim, Tabuk Univeristy, KSA',
        'Prof. Izzat Al-Smadi, Texas A&M University, USA',
        'Prof. Raveendran Paramesran, Monash University, Malaysia'
      ]
    },
    {
      id: 'national-advisory',
      title: 'National Advisory Committee',
      color: '#EF476F',
      members: [
        'Prof. Radhakanta Padhi, IISC, Bangalore',
        'Prof. Chandrashekhar Narayan Bhende, IIT, Bhubaneswar',
        'Prof. Prasanta Kumar Mohanty, Vice-Chancellor, CUTM, AP',
        'Prof. Ajay Kumar Nayak, Pro-Vice Chancellor, CUTM, Odisha',
        'Prof. Biswajit Mishra, Pro-Vice Chancellor, CUTM, Odisha',
        'Prof. Mihir N Mohanty, Siksha O Anusandhan, (Deemed to be University), India',
        'Dr. Sukant Kishoro Bisoy, C. V. Raman Global University, Odisha, India',
        'Prof. Khaleequr Rehman Niazi, Malaviya National Institute of Technology, Jaipur',
        'Prof. Atanu Maity, IIT Kharagpur, India',
        'Prof. Aurobinda Routrai, IIT Kharagpur, India',
        'Prof. Kamalkanta Mohapatra, NIT Rourkela, India',
        'Prof. Sarat Kumar Patra, IIT Vadodara, India',
        'Prof. Subhransu Ranjan Samantaray, IIT Bhubaneswar, India',
        'Prof. Debiprasad Dogra, IIT Bhubaneswar, India',
        'Prof. G. V. Mahesh, Indian Institute of Science, Bangalore, India',
        'Prof. Bidyadhar Subudhi, IIT Goa, India',
        'Prof. Badri Narayana Subudhi, IIT Jammu, India',
        'Prof. RudraSankarDhar, NIT Mizoram, India',
        'Prof. K. B. Mohanty, NIT Rourkela, India',
        'Prof. Anup Kumar Panda, NIT Rourkela, India',
        'Prof. Dayal Rama Krishna Parhi, NIT Rourkela, India',
        'Prof. Bijayananda Patnaik, NIT Raipur, India',
        'Prof. R. K. Saket, Indian Institute of Technology (BHU), Varanasi',
        'Prof. Pradeep Kumar Mallick, KIIT University, India',
        'Prof. Prasant Kumar Pattnaik, KIIT Deemed University, Bhubaneswar, India',
        'Prof. Ullash Kumar Rout, Odisha University Of Technology And Research, India',
        'Prof. Pradipta Kumar Nanda, Siksha O Anusandhan, (Deemed to be University), India',
        'Prof. Rajesh Kumar Behera, Biju Patnaik University of Technology, Odisha',
        'Prof. Ajit Kumar Panda, National Institute of Science & Technology, India',
        'Prof. Chhabi Rani Panigrahi, Rama Devi Women\'s University, Bhubaneswar, India',
        'Prof. Dipti Prasad Mukherjee, India Statistical Institute, India',
        'Prof. Jyoti Prasad Patra, Odisha University Of Technology And Research, India',
        'Prof. Mrutyunjaya Panda, Utkal University, India',
        'Prof. Durga Pasad Mohapatra, NIT Roukela, Odisha, India',
        'Prof. Tripti Swarnakar, IIIT Raipur',
        'Prof. Rakesh Chandra Balabantaray, IIIT, Odisha, India',
        'Prof. Sanjay Saxena, IIIT, Odisha, India',
        'Prof. Renu Sharma, SoA University, Odisha, India',
        'Prof. Tanmoy Roy Choudhury, NIT Rourkela, Odisha, India',
        'Prof. Satyabrata Dash, GITAM University, India',
        'Prof. Manoj Kumar Debnath, SoA University',
        'Prof. Saneev Kumar Das, CUTM, Odisha, India',
        'Prof. Sujit Bebortta, Ravenshaw University, Odisha, India',
        'Prof. Manohar Mishra, SoA University, Odisha, India',
        'Prof. Chinmoy Panigrahi, KIIT, Odisha, India',
        'Prof. Harish Kumar Sahoo, VSSUT, Burla, Odisha, India',
        'Prof. Puspanjali Mohapatra, IIIT, Bhubaneswar, India',
        'Prof. Umamani Subudhi, IIIT, Bhubaneswar, India',
        'Prof Bharati Mishra, IIIT, Bhubaneswar, India',
        'Prof. Debashmita Pradhan, KIIT University, India',
        'Prof. V. Ravikumar Pandi, Amrita Vishwa Vidyapeetham, Kollam, India',
        'Prof. Suchismita Chinara, NIT Rourkela, India'
      ]
    },
    {
      id: 'finance',
      title: 'Finance Committee',
      color: '#FFB703',
      members: [
        'Mr. Debasis Panda, Comptroller of Finance, CUTM, Odisha',
        'Prof. Satyanarayan Padhy, Academic Coordinator, SoET, PKD, CUTM, Odisha',
        'Prof. Prabhat Ranjan Sahoo, Principal SoVET, CUTM, Odisha',
        'Mr. Debaraj Grahacharya, Manager Finance, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'publicity',
      title: 'Publicity/IT Committee',
      color: '#023047',
      members: [
        'Mr. Sukanta Parida, CUTM, Odisha',
        'Dr. K. C. Sethi, CUTM, Odisha',
        'Mr. Nrusinha Das, CUTM, Odisha',
        'Prof. Sambeet Patra, CUTM, Odisha',
        'Prof. Tofan Kumar Nahak, CUTM, Odisha',
        'Mr. Prabhat Kumar Nahak, CUTM, Odisha',
        'Mr. Anil Patro, CUTM, Odisha'
      ]
    },
    {
      id: 'track',
      title: 'Track (Session and Event) Committee',
      color: '#8338EC',
      members: [
        'Prof. Sandipan Pine, Assoc. Prof. Dept. of ECE, PKD, CUTM, Odisha',
        'Dr. Tanmaya Sankar, Assoc. Prof. Dept. of Agronomy, CUTM, Odisha',
        'Prof. Rajesh Kumar Misra, Asst. Prof. Dept. of ECE, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'registration',
      title: 'Registration Committee',
      color: '#FB5607',
      members: [
        'Dr. Prangya Paramita Pradhan, Asst. Prof. Dept. of ECE, PKD, CUTM, Odisha',
        'Dr. Rajib Majhi, Asst. Prof. Dept. of Civil Engg, PKD, CUTM, Odisha',
        'Prof. N. Jeevaratnam, Asst. Prof. Dept. of ECE, PKD, CUTM, Odisha',
        'Prof. Subhrashree Pritichhanda, Asst. Prof. Dept. of EEE, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'souvenir',
      title: 'Souvenir Committee',
      color: '#FF006E',
      members: [
        'Prof. (Dr.) Prajna Pani, Associate Dean SoM, PKD, CUTM, Odisha',
        'Prof. (Dr.) Sagar Maitra, HOD, Dept. of Agronomy, CUTM, Odisha'
      ]
    },
    {
      id: 'conference-kit',
      title: 'Conference Kit/Certificates/Memento/Sewall Committee',
      color: '#8B5CF6',
      members: [
        'Prof. Gouri Kumar Sahu, Assoc. Prof., SoAS, PKD, CUTM, Odisha',
        'Prof. Balaji Padhi, Asst. Prof., SoAS, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'venue',
      title: 'Venue and Stage Monitoring Committee',
      color: '#10B981',
      members: [
        'Dr. Girish Rath, SoM, PKD, CUTM, Odisha',
        'Dr. Prangya Paramita Pradhan, SoET, PKD, CUTM, Odisha',
        'Prof. Dwiti Sundar Rout, MSSSoA, CUTM, Odisha',
        'Dr. Ashirbachan Mahapatra,MSSSoA, CUTM, Odisha',
        'Prof. Upasana Sahoo, CUTM, Odisha'
      ]
    },
    {
      id: 'accommodation',
      title: 'Accommodation and Hospitality Committee',
      color: '#F59E0B',
      members: [
        'Dr. Sambid Swain, Assoc. Dean SoF, CUTM, Odisha',
        'Prof. Jagannath Padhy, CUTM, Odisha',
        'Mr. Jagannath Panda, Hostel Chief Warden, CUTM, Odisha',
        'Mr. Prasanta Panda, CUTM, Odisha'
      ]
    },
    {
      id: 'transport',
      title: 'Transport Committee',
      color: '#EF4444',
      members: [
        'Dr. Kalyan Chakravarty,SoM, CUTM, Odisha',
        'Mr. Lingaraj Mohapatra,Transport Incharge, CUTM, Odisha'
      ]
    },
    {
      id: 'cultural',
      title: 'Cultural Committee',
      color: '#EC4899',
      members: [
        'Dr. Ritesh Kumar, Dean Student Affairs, PKD, CUTM, Odisha',
        'Dr. Susanta Kumar Patnaik, Asst. Professor, SoM, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'snacks',
      title: 'Snacks and Beverage Committee',
      color: '#14B8A6',
      members: [
        'Dr. Sambid Swain, Assoc. Dean SoF, CUTM, Odisha',
        'Mr. Santosh Pradhan, CUTM, Odisha',
        'Mr. Rajendra Panda, CUTM, Odisha'
      ]
    },
    {
      id: 'ambience',
      title: 'Ambience and Beautification Committee',
      color: '#8B5CF6',
      members: [
        'Dr. Susanta Kumar Patnaik, Asst. Professor, SoM, PKD, CUTM, Odisha',
        'Dr. Narayan Gouda, CUTM, Odisha'
      ]
    },
    {
      id: 'volunteers',
      title: 'Volunteers Committee',
      color: '#06B6D4',
      members: [
        'Dr. Ritesh Kumar, Dean Student Affairs, PKD, CUTM, Odisha',
        'Dr. Susanta Kumar Patnaik, Asst. Professor, SoM, PKD, CUTM, Odisha'
      ]
    },
    {
      id: 'medical',
      title: 'Medical and Health Committee',
      color: '#DC2626',
      members: [
        'Mr. Dilip Swain, CUTM, Odisha'
      ]
    },
    {
      id: 'sponsorship',
      title: 'Sponsorship Committee',
      color: '#7C3AED',
      members: [
        'Prof. (Dr.) Ajay Kumar Nayak, CUTM, Odisha',
        'Prof. Prakash KVD, Dean HRD, CUTM, Odisha',
        'Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha',
        'Prof. (Dr.) Satya Prakash Nanda, Dean(Admin.),MSSSoA, CUTM, Odisha',
        'Prof. Babu Sankar, MD, GT TECH'
      ]
    }
  ];

  return (
    <div className="comm-container">
      <div className="comm-hero">
        <FaUsers className="comm-hero-icon" />
        <h1 className="comm-title">Committee Members</h1>
        <p className="comm-subtitle">SCOPES 2027 Organizing Team</p>
      </div>

      <div className="comm-content">
        {committees.map((committee) => (
          <div className="comm-section" key={committee.id}>
            <div 
              className="comm-header"
              onClick={() => toggleSection(committee.id)}
              style={{ borderLeftColor: committee.color }}
            >
              <div className="comm-header-left">
                <div className="comm-color-dot" style={{ backgroundColor: committee.color }}></div>
                <h2 className="comm-section-title">{committee.title}</h2>
                <span className="comm-count">({committee.members.length})</span>
              </div>
              <FaChevronDown className={`comm-chevron ${openSection === committee.id ? 'open' : ''}`} />
            </div>
            
            {openSection === committee.id && (
              <div className="comm-members">
                {committee.members.map((member, index) => (
                  <div className="comm-member" key={index}>
                    <div className="comm-member-bullet" style={{ backgroundColor: committee.color }}></div>
                    <p className="comm-member-name">{member}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
