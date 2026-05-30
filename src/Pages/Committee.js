import React, { useEffect, useRef } from "react";
import "../styles/Committee.css";

const Committee = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05 },
    );
    pageRef.current
      ?.querySelectorAll(".comm-block, .comm-chip")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const committees = [
    {
      id: "chief-patron",
      title: "Chief Patrons",
      color: "#e11d48",
      bg: "#fff1f2",
      members: [
        "Prof. (Dr.) Mukti Kanta Mishra, President, CUTM, Odisha & AP",
        "Prof. (Dr.) D. N. Rao, Vice-President, CUTM, Odisha & AP",
        "Prof. (Dr.) Supriya Pattanayak, Vice-Chancellor, CUTM, Odisha",
      ],
    },
    {
      id: "patron",
      title: "Patrons",
      color: "#0891b2",
      bg: "#ecfeff",
      members: [
        // "Prof. Purna Mohanty, Co-founder and CEO Marquee Semiconductor",
        "Prof. (Dr.) Anita Patra, Registrar, CUTM, Odisha",
        "Prof. (Dr.) Biswajit Mishra, Pro-Vice Chancellor, CUTM, Odisha",
        "Prof. (Dr.) Ajay Kumar Nayak, Pro-Vice Chancellor, CUTM, Odisha",
      ],
    },
    // {
    //   id: "co-patron",
    //   title: "Co-Patrons",
    //   color: "#7c3aed",
    //   bg: "#f5f3ff",
    //   members: [
        
    //     // "Prof. (Dr.) Anita Patra, Registrar, CUTM, Odisha",
    //     // "Prof. Jagannath Padhi, Director, CIT, CUTM, Odisha",
    //   ],
    // },
    {
      id: "honorary-general-chair",
      title: "Honorary General Chairs",
      color: "#b45309",
      bg: "#fffbeb",
      members: [
        "Prof. (Dr.) G. S. N. Raju, Chancellor, CUTM, AP",
        "Prof. (Dr.) Ganapati Panda, Former Deputy Director, IIT Bhubaneswar, Odisha",
        "Prof. (Dr.) Okyay Kaynak, Istanbul, Turkey",
      ],
    },
    {
      id: "general-chair",
      title: "General Chairs",
      color: "#047857",
      bg: "#ecfdf5",
      members: [
        "Prof. (Dr.) Subhransu Ranjan Samantaray, IIT Bhubaneswar, Odisha",
        "Prof. (Dr.) Prafulla Kumar Panda, Dean SoET (PKD), CUTM, Odisha",
      ],
    },
    {
      id: "Conference Chair ",
      title: "Conference Chair ",
      color: "#1d4ed8",
      bg: "#eff6ff",
      members: [
        "Dr. Debendra Kumar Sahoo, Assoc. Professor, Dept. of ECE, CUTM, Odisha",
      ],
    },
    {
      id: "convener",
      title: "Convener",
      color: "#9333ea",
      bg: "#faf5ff",
      members: [
        "Prof. (Dr.) Ashok Misra, Professor, Dept. of Mathematics, CUTM, Odisha",
      ],
    },
    {
      id: "co-convener",
      title: "Co-Conveners",
      color: "#c2410c",
      bg: "#fff7ed",
      members: [
        "Prof. (Dr.) Sangram Keshari Swain, Dean (Exams & Students' Welfare), CUTM, Odisha",
        "Dr. Prabhat Kumar Patnaik, HOD, Dept. of ECE (PKD), CUTM, Odisha",
        "Prof. Satyanarayan Padhy, Academic Coordinator, SoET, CUTM, Odisha",
        "Dr. Abhishek Das, Assistant Professor, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "ieee-observer",
      title: "IEEE Observer Committee",
      color: "#0369a1",
      bg: "#f0f9ff",
      members: [
        "Prof. (Dr.) Brojo Kishore Mishra, NIST, Berhampur",
        "Dr. Pratap Ranjan Mohanty, Senior Assistant Prof., Silicon University, Odisha",
      ],
    },
    {
      id: "steering",
      title: "Steering Committee",
      color: "#0f766e",
      bg: "#f0fdfa",
      members: [
        "Prof. (Dr.) Satya Prakash Nanda, Dean (Admin.) MSSSoA, CUTM, Odisha",
        "Prof. (Dr.) B. Suresh Subramonian, Dean SoVAS, CUTM, Odisha",
        "Prof. (Dr.) Satyasis Misra, Dean SDG, CUTM, Odisha",
        "Dr. Prafulla Kumar Panda, Dean SoET, PKD, CUTM, Odisha",
        "Prof. (Dr.) Sujata Chakravarty, Dean SoET, Bhubaneswar, CUTM, Odisha",
        "Dr. Sambid Swain, Associate Dean SoF, CUTM, Odisha",
        "Prof. (Dr.) Prajna Pani, Associate Dean SoM, PKD, CUTM, Odisha",
        "Prof. (Dr.) Anil Kumar Jonnalagadda, Associate Dean ABM, CUTM, Odisha",
        "Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha",
        "Prof. (Dr.) Ashok Misra, Professor, Dept. of Mathematics, CUTM, Odisha",
        "Prof. (Dr.) Ramesh Chandra Mohanty, Professor, Dept. of Mechanical Engg., CUTM, Odisha",
        "Prof. (Dr.) Sagar Maitra, Professor, Dept. of Agronomy, MSSSoA, CUTM, Odisha",
        "Dr. Debendra Kumar Sahoo, Associate Professor, Dept. of ECE, CUTM, Odisha",
        "Prof. Satyanarayan Padhy, Academic Coordinator, SoET, PKD, CUTM, Odisha",
        "Dr. Prabhat Kumar Patnaik, HOD, Dept. of ECE, CUTM, Odisha",
      ],
    },
    {
      id: "organising",
      title: "Organising Committee",
      color: "#be185d",
      bg: "#fdf2f8",
      members: [
        "Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha",
        "Dr. Ritesh Kumar, Dean Student Affairs, PKD, CUTM, Odisha",
        "Dr. Dhawaleswar Rao, HOD, Dept. of CSE, (PKD) SoET, CUTM, Odisha",
        "Dr. Sujit Mishra, HOD, Dept. of Mechanical Engg. (PKD), CUTM, Odisha",
        "Dr. Rajib Majhi, HOD, Dept. of Civil Engg. (PKD), CUTM, Odisha",
        "Dr. Sudhansu Kumar Samal, HOD, Dept. of EEE, (BBSR), CUTM, Odisha",
        "Dr. Nihal R, Assistant Professor, MSSSoA, PKD, CUTM, Odisha",
        "Prof. Prabhat Ranjan Sahoo, Principal SoVET, CUTM, Odisha",
        "Dr. Chinmayee Dora, Associate Professor, HOD, ECE, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "technical",
      title: "Technical Programme Committee",
      color: "#6d28d9",
      bg: "#f5f3ff",
      members: [
        "Prof. (Dr.) Sukumar Mishra, Professor, IIT, Delhi, (Chair)",
        "Prof. (Dr.) Prasant Kumar Sahu, Professor, IIT, Bhubaneswar",
        "Prof. (Dr.) Saroj Kumar Meher, Associate Professor, ISI, Bangalore",
        "Prof. (Dr.) Nithin V. George, Associate Professor, IIT, Gandhi Nagar",
        "Dr. Abinash Gaya, Associate Professor, SoET, CUTM, Odisha, (Co-Chair)",
        "Prof. (Dr.) Gautam Mohanty, Associate Professor, NIT, Durgapur",
        "Dr. Rajendra Kumar Khadanga, Associate Professor, SoET, CUTM, Odisha",
        "Dr. Chandra Sekhar Dash, Associate Professor, SoET, CUTM, Odisha",
        "Dr. Abinash Rath, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Adyasha Rath, Assistant Professor, CV Raman Global University, Odisha",
        "Dr. Prangya Paramita Pradhan, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Nimay Chandra Giri, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Debendra Muduli, Assistant Professor, CV Raman Global University, Odisha",
        "Prof. Manoj Kumar Padhi, Assistant Professor, SoET, CUTM, Odisha",
        "Prof. Susanta Kumar Nayak, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Dukhishyam Sabat, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Vikash Kumar Rathore, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Aurobinda Bag, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Sasmita Kumari Nayak, Associate Professor, CSE, SoET, CUTM, Odisha",
        "Dr. Chinmayee Dora, Associate Professor, SoET, CUTM, Odisha",
        "Dr. P Anthony Sunny Dayal, Associate Professor, SoET, CUTM, AP",
      ],
    },
    {
      id: "publication",
      title: "Publication Committee",
      color: "#1e40af",
      bg: "#eff6ff",
      members: [
        "Prof. (Dr.) Girish Kumar, Professor, IIT, Bombay, (Chair)",
        "Prof. (Dr.) Sukumar Mishra, Professor, IIT, Delhi",
        "Prof. (Dr.) Ramesh Chandra Mohanty, Professor, Dept. of Mech. Engg., CUTM, Odisha",
        "Dr. Abhishek Das, Assistant Professor, SoET, CUTM, Odisha, (Co-Chair)",
        "Dr. Ashish Ranjan Dash, Associate Professor, SoET, CUTM, Odisha",
        "Dr. Ribhu Abhusan Panda, Assistant Professor, SoET, CUTM, Odisha",
        "Prof (Dr.) Susanta Kumar Biswal, Professor, SoS, CUTM, Odisha",
        "Dr. Mohammed Siddique, Associate Professor, SoS, CUTM, Odisha",
        "Dr. K Vijaya Babu, Dean R & D, CUTM, AP",
      ],
    },
    {
      id: "international-advisory",
      title: "International Advisory Committee",
      color: "#065f46",
      bg: "#ecfdf5",
      members: [
        "Prof. Patrice WIRA, University Institute of Technology of Mulhouse",
        "Prof. Ahmed Zobaa, Brunel University London, GB",
        "Prof. Huijun Gao, Harbin Institute of Technology, China",
        "Dr. Celia Shahnaz, BUET, Bangladesh",
        "Dr. Shazia Hasan, BITS Pilani, Dubai Campus",
        "Dr. Milan Biswal, New Mexico State University, USA",
        "Prof. Hyun Sung Shin, Samsung Electronics, Korea",
        "Prof. Jin Young Park, Kyungpook National University, South Korea",
        "Prof. Djaffar Ould Abdeslam, University of Haute-Alsace",
        "Prof. Florian Misoc, Kennesaw State University, Marietta",
        "Prof. Jan Michalik, University of West Bohemia",
        "Prof. Matthew Armstrong, Newcastle University, UK",
        "Prof. Andrews Samraj, Mahendra Engineering College, Malaysia",
        "Prof. Ahmed Khader Habboush, Jerash University, Jordan",
        "Prof. Gyoo-Soo Chae, Baekseok University, South Korea",
        "Prof. Akhtar Kalam, Victoria University, Australia",
        "Prof. Mohammad Alnabhan, Mu'tah University, Jordan",
        "Prof. Ahmad Abu Alaish, Jerash University, Jordan",
        "Prof. Majed Aburkaba, Tabuk University, KSA",
        "Prof. Osama Alia, Tabuk University, KSA",
        "Prof. Awad Awadelkarim, Tabuk University, KSA",
        "Prof. Izzat Al-Smadi, Texas A&M University, USA",
        "Prof. Raveendran Paramesran, Monash University, Malaysia",
      ],
    },
    {
      id: "national-advisory",
      title: "National Advisory Committee",
      color: "#9f1239",
      bg: "#fff1f2",
      members: [
        "Prof. Radhakanta Padhi, IISC, Bangalore",
        "Prof. Chandrashekhar Narayan Bhende, IIT, Bhubaneswar",
        "Prof. Prasanta Kumar Mohanty, Vice-Chancellor, CUTM, AP",
        "Prof. (Dr.) Ajay Kumar Nayak, Pro-Vice Chancellor, CUTM, Odisha",
        "Prof. Biswajit Mishra, Pro-Vice Chancellor, CUTM, Odisha",
        "Prof. Mihir N Mohanty, Siksha O Anusandhan University, India",
        "Dr. Sukant Kishoro Bisoy, C. V. Raman Global University, Odisha",
        "Prof. Khaleequr Rehman Niazi, Malaviya NIT, Jaipur",
        "Prof. Atanu Maity, IIT Kharagpur",
        "Prof. Aurobinda Routrai, IIT Kharagpur",
        "Prof. Kamalkanta Mohapatra, NIT Rourkela",
        "Prof. Sarat Kumar Patra, IIT Vadodara",
        "Prof. Subhransu Ranjan Samantaray, IIT Bhubaneswar",
        "Prof. Debiprasad Dogra, IIT Bhubaneswar",
        "Prof. G. V. Mahesh, IISc, Bangalore",
        "Prof. Bidyadhar Subudhi, IIT Goa",
        "Prof. Badri Narayana Subudhi, IIT Jammu",
        "Prof. RudraSankarDhar, NIT Mizoram",
        "Prof. K. B. Mohanty, NIT Rourkela",
        "Prof. Anup Kumar Panda, NIT Rourkela",
        "Prof. Dayal Rama Krishna Parhi, NIT Rourkela",
        "Prof. Bijayananda Patnaik, NIT Raipur",
        "Prof. R. K. Saket, IIT (BHU), Varanasi",
        "Prof. Pradeep Kumar Mallick, KIIT University",
        "Prof. Prasant Kumar Pattnaik, KIIT University, Bhubaneswar",
        "Prof. Ullash Kumar Rout, OUTR, India",
        "Prof. Pradipta Kumar Nanda, Siksha O Anusandhan University",
        "Prof. Rajesh Kumar Behera, BPUT, Odisha",
        "Prof. Ajit Kumar Panda, NIST, India",
        "Prof. Chhabi Rani Panigrahi, Rama Devi Women's University, Bhubaneswar",
        "Prof. Dipti Prasad Mukherjee, ISI, India",
        "Prof. Jyoti Prasad Patra, OUTR, India",
        "Prof. Mrutyunjaya Panda, Utkal University",
        "Prof. Durga Pasad Mohapatra, NIT Rourkela",
        "Prof. Tripti Swarnakar, IIIT Raipur",
        "Prof. Rakesh Chandra Balabantaray, IIIT, Odisha",
        "Prof. Sanjay Saxena, IIIT, Odisha",
        "Prof. Renu Sharma, SoA University, Odisha",
        "Prof. Tanmoy Roy Choudhury, NIT Rourkela",
        "Prof. Satyabrata Dash, GITAM University",
        "Prof. Manoj Kumar Debnath, SoA University",
        "Prof. Saneev Kumar Das, CUTM, Odisha",
        "Prof. Sujit Bebortta, Ravenshaw University, Odisha",
        "Prof. Manohar Mishra, SoA University, Odisha",
        "Prof. Chinmoy Panigrahi, KIIT, Odisha",
        "Prof. Harish Kumar Sahoo, VSSUT, Burla, Odisha",
        "Prof. Puspanjali Mohapatra, IIIT, Bhubaneswar",
        "Prof. Umamani Subudhi, IIIT, Bhubaneswar",
        "Prof Bharati Mishra, IIIT, Bhubaneswar",
        "Prof. Debashmita Pradhan, KIIT University",
        "Prof. V. Ravikumar Pandi, Amrita Vishwa Vidyapeetham, Kollam",
        "Prof. Suchismita Chinara, NIT Rourkela",
      ],
    },
    {
      id: "finance",
      title: "Finance Committee",
      color: "#92400e",
      bg: "#fffbeb",
      members: [
        "Mr. Debasis Panda, Comptroller of Finance, CUTM, Odisha",
        "Prof. Satyanarayan Padhy, Academic Coordinator, SoET, PKD, CUTM, Odisha",
        "Mr. Debaraj Grahacharya, Manager Finance, PKD, CUTM, Odisha",
      ],
    },
    {
      id: "publicity",
      title: "Publicity / IT Committee",
      color: "#1e3a5f",
      bg: "#f0f9ff",
      members: [
        "Mr. Sukanta Parida, CUTM, Odisha",
        "Mr. Nrusinha Das, CUTM, Odisha",
        "Prof. Sambeet Patro, CUTM, Odisha",
        "Prof. Tofan Kumar Nahak, CUTM, Odisha",
        "Mr. Prabhat Kumar Nahak, CUTM, Odisha",
        "Mr. Anil Patro, CUTM, Odisha",
      ],
    },
    {
      id: "track",
      title: "Track (Session & Event) Committee",
      color: "#5b21b6",
      bg: "#f5f3ff",
      members: [
        "Prof. (Dr.) Sandipan Pine, Associate Prof. Dept. of ECE, PKD, CUTM, Odisha",
        "Dr. Tanmaya Sankar, Associate Prof. Dept. of Agronomy, CUTM, Odisha",
        "Dr. Sujit Mishra, HOD, Dept. of Mechanical Engg. (PKD), CUTM, Odisha",
        "Prof. Manoj Kumar Padhi, Assistant Professor, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "registration",
      title: "Registration Committee",
      color: "#b91c1c",
      bg: "#fef2f2",
      members: [
        "Dr. Prangya Paramita Pradhan, Assistant Prof. Dept. of ECE, PKD, CUTM, Odisha",
        "Prof. N. Jeevaratnam, Assistant Prof. Dept. of ECE, PKD, CUTM, Odisha",
        "Prof. Lipsa Priyadarshini Singh, Assistant Prof. Dept. of CSE, PKD, CUTM, Odisha",
        "Prof. Sagarika Dash, Assistant Prof. Dept. of CSE, PKD, CUTM, Odisha",
      ],
    },
    {
      id: "souvenir",
      title: "Souvenir Committee",
      color: "#0e7490",
      bg: "#ecfeff",
      members: [
        // "Prof. (Dr.) Prajna Pani, Associate Dean SoM, PKD, CUTM, Odisha",
        "Dr. Abinash Gaya, Associate Professor, SoET, CUTM, Odisha",
        "Dr. Ribhu Abhusan Panda, Assistant Professor, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "conference-kit",
      title: "Conference Kit / Certificates / Memento",
      color: "#7c3aed",
      bg: "#f5f3ff",
      members: [
        "Prof. Gouri Kumar Sahu, Associate Prof., SoAS, PKD, CUTM, Odisha",
        "Prof. Balaji Padhi, Assistant Prof., SoAS, PKD, CUTM, Odisha",
      ],
    },
    {
      id: "venue",
      title: "Venue & Stage Monitoring Committee",
      color: "#166534",
      bg: "#f0fdf4",
      members: [
        "Dr. Girish Rath, SoM, PKD, CUTM, Odisha",
        "Dr. Prangya Paramita Pradhan, SoET, PKD, CUTM, Odisha",
        "Prof. Susanta Kumar Nayak, Assistant Professor, SoET, CUTM, Odisha",
        "Prof. B. Bikram Narayana, SoET, PKD, CUTM, Odisha",
      ],
    },
    {
      id: "accommodation",
      title: "Accommodation & Hospitality Committee",
      color: "#d97706",
      bg: "#fffbeb",
      members: [
        "Dr. Nihal R, Assistant Professor, MSSSoA, PKD, CUTM, Odisha",
        "Prof. Jagannath Padhy, CUTM, Odisha",
        "Mr. Jagannath Panda, Hostel Chief Warden, CUTM, Odisha",
        "Mr. Prasanta Panda, CUTM, Odisha",
      ],
    },
    {
      id: "transport",
      title: "Transport Committee",
      color: "#dc2626",
      bg: "#fef2f2",
      members: [
        "Dr. Kalyan Chakravarty, SoM, CUTM, Odisha",
        "Mr. Lingaraj Mohapatra, CUTM, Odisha",
        "Mr. Sanjay Kar, Transport Incharge, CUTM, Odisha",
      ],
    },
    {
      id: "cultural",
      title: "Cultural Committee",
      color: "#db2777",
      bg: "#fdf2f8",
      members: [
        "Dr. Ritesh Kumar, Dean Student Affairs, PKD, CUTM, Odisha",
        "Dr. Susanta Kumar Patnaik, Assistant Professor, SoM, PKD, CUTM, Odisha",
        "Dr. Abinash Rath, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Prangya Paramita Pradhan, Assistant Professor, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "snacks",
      title: "Snacks & Beverage Committee",
      color: "#0d9488",
      bg: "#f0fdfa",
      members: [
        "Dr. Aurobinda Bag, Assistant Professor, SoET, CUTM, Odisha",
        "Dr. Rashmi Rekha Behera, Assistant Professor, SoET, CUTM, Odisha",
        "Prof. Biswaranjan Routray, Assistant Professor, SoET, CUTM, Odisha",
        "Prof. Rajesh Kumar Misra, Assistant Professor, SoET, CUTM, Odisha",
      ],
    },
    {
      id: "ambience",
      title: "Ambience & Beautification Committee",
      color: "#7c3aed",
      bg: "#f5f3ff",
      members: [
        "Dr. Madan Mohan Rout, Assistant Prof., SoET, PKD, CUTM",
        "Dr. Krushna Chandra Sethi, Assistant Prof., SoET, PKD, CUTM",
        "Dr. Narayan Gouda, CUTM, Odisha",
      ],
    },
    {
      id: "volunteers",
      title: "Volunteers Committee",
      color: "#0284c7",
      bg: "#f0f9ff",
      members: [
        "Prof. N. Jeevaratnam, Assistant Prof. Dept. of ECE, PKD, CUTM, Odisha",
        "Prof. Jagannath Padhy, Assistant Prof. Dept. of CSE, PKD, CUTM, Odisha",
        "Dr. Sashikant Das, Assistant Prof. Dept. of MECH, PKD, CUTM, Odisha",
        "Dr. Mithlesh Kumar Mahto, Assistant Prof. Dept. of MECH, PKD, CUTM, Odisha",
        "Dr. Md Anis Ansari, Assistant Prof. Dept. of MECH, PKD, CUTM, Odisha",
      ],
    },
    {
      id: "medical",
      title: "Medical & Health Committee",
      color: "#dc2626",
      bg: "#fef2f2",
      members: ["Mr. Dilip Swain, CUTM, Odisha"],
    },
    {
      id: "sponsorship",
      title: "Sponsorship Committee",
      color: "#b45309",
      bg: "#fffbeb",
      members: [
        "Prof. (Dr.) Ajay Kumar Nayak, Pro-Vice Chancellor, CUTM, Odisha",
        "Prof. Prakash KVD, Dean HRD, CUTM, Odisha",
        "Dr. Durga Prasad Padhi, Director Administration, PKD, CUTM, Odisha",
        "Prof. (Dr.) Satya Prakash Nanda, Dean (Admin.), MSSSoA, CUTM, Odisha",
        "Prof. Babu Sankar, MD, GT TECH",
        "Prof. Mir Sadat Ali, Dean SoVET, CUTM, Odisha",
      ],
    },
  ];

  return (
    <div className="comm-container" ref={pageRef}>
      {/* Hero */}
      <div className="comm-hero">
        <p className="comm-hero-tag">SCOPES 2027</p>
        <h1 className="comm-title">Organizing Committee</h1>
        <p className="comm-subtitle">Meet the team behind the conference</p>
      </div>

      {/* Blocks */}
      <div className="comm-body">
        {committees.map((c) => {
          const initial = (name) =>
            name
              .replace(
                /^(Prof\.\s*\(Dr\.\)|Prof\.\s*Dr\.|Prof\.|Dr\.|Mr\.|Ms\.)\s*/i,
                "",
              )
              .replace(/^\(\w+\.?\)\s*/, "")
              .charAt(0)
              .toUpperCase();
          return (
            <div className="comm-block" key={c.id}>
              {/* Section Title Bar */}
              <div
                className="comm-block-header"
                style={{ borderColor: c.color }}
              >
                <span
                  className="comm-block-dot"
                  style={{ background: c.color }}
                ></span>
                <h2 className="comm-block-title" style={{ color: c.color }}>
                  {c.title}
                </h2>
                <span
                  className="comm-block-count"
                  style={{ background: c.color }}
                >
                  {c.members.length}
                </span>
              </div>
              {/* Members */}
              <div className="comm-chips">
                {c.members.map((m, i) => {
                  const comma = m.indexOf(",");
                  const name = comma !== -1 ? m.substring(0, comma).trim() : m;
                  const desig =
                    comma !== -1 ? m.substring(comma + 1).trim() : "";
                  return (
                    <div
                      className="comm-chip"
                      key={i}
                      style={{
                        animationDelay: `${i * 0.04}s`,
                        "--chip-color": c.color,
                        "--chip-bg": c.bg,
                      }}
                    >
                      <div
                        className="comm-chip-avatar"
                        style={{ background: c.color }}
                      >
                        {initial(name)}
                      </div>
                      <div className="comm-chip-info">
                        <p className="comm-chip-name">{name}</p>
                        {desig && <p className="comm-chip-desig">{desig}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Committee;
