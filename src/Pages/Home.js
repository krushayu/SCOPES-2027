import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import {
  FaCalendarAlt,
  FaPaperPlane,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";

const useScrollAnim = (threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("anim-visible");
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [aboutImgIndex, setAboutImgIndex] = useState(0);
  const [deptImgIndex, setDeptImgIndex] = useState(0);
  const [scopesImgIndex, setScopesImgIndex] = useState(0);

  const aboutImages = [
    { src: "/assets/slide1.png", title: "CUTM Campus" },
    { src: "/assets/slide2.png", title: "University Area" },
    { src: "/assets/promod_udyan.jpg", title: "Pramod Udhyan" },
  ];
  const deptImages = [
    { src: "/assets/ece1.png", title: "ECE" },
    { src: "/assets/slide2.png", title: "University Area" }
  ];
  const scopesImages = [
    { src: "/assets/soet1.jpg", title: "SoET Drone Performance" },
    { src: "/assets/soet2.jpg", title: "SoET Building" },
    { src: "/assets/soet3.jpg", title: "SoET Building" },
  ];

  useEffect(() => {
    fetch("/speaker_data/speakers.json")
      .then((res) => res.json())
      .then((data) => setSpeakers(data))
      .catch((err) => console.error("Error loading speakers:", err));
  }, []);

  useEffect(() => {
    const aboutInterval = setInterval(() => {
      setAboutImgIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    const deptInterval = setInterval(() => {
      setDeptImgIndex((prev) => (prev + 1) % deptImages.length);
    }, 3000);
    const scopesInterval = setInterval(() => {
      setScopesImgIndex((prev) => (prev + 1) % scopesImages.length);
    }, 3000);
    return () => {
      clearInterval(aboutInterval);
      clearInterval(deptInterval);
      clearInterval(scopesInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const targetDate = new Date("2027-02-04T00:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: "/assets/slide4.JPG",
      overlay: "rgba(0,0,0,0.3)",
      title: <>3<sup>rd</sup> International Conference</>,
      on: "on",
      subtitle: "Signal Processing, Communication, Power & Embedded Systems",
    },
    {
      image: "/assets/slide1.png",
      overlay: "rgba(0,0,0,0.2)",
      title: "Centurion University of Technology and Management, Paralakhemundi, Odisha",
      subtitle: <>4<sup>th</sup>-6<sup>th</sup> February 2027</>,
      tag: "Hybrid Mode",
    },
    {
      image: "/assets/slide5.JPG",
      overlay: "rgba(0,0,0,0.3)",
      subtitle: "",
      tag: "IEEE Conference",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const conferenceInfo = [
{ icon: <FaCalendarAlt />, label: "Dates", value: <>4<sup>th</sup>-6<sup>th</sup> Feb 2027</>, color: "#FF6B6B", link: "/imp-dates" },    { icon: <FaMapMarkerAlt />, label: "Venue", value: "Centurion University of Technology and Management, Paralakhemundi", color: "#4ECDC4", link: "https://maps.app.goo.gl/hVvbqeLRXWvEa9gT9" },
    { icon: <FaPaperPlane />, label: "Submit Paper", value: "Open Now", color: "#45B7D1", link: "/paper-submission" },
    { icon: <FaAward />, label: "Publication", value: "IEEE Xplore", color: "#96CEB4", link: "/publication" },
    { icon: <MdAppRegistration />, label: "Mode", value: "Hybrid", color: "#DDA0DD", link: "/program-schedule" },
  ];

  const infoRef = useScrollAnim();
  const confAboutRef = useScrollAnim();
  const speakersRef = useScrollAnim();
  const aboutRef = useScrollAnim();
  const deptRef = useScrollAnim();
  const scopesRef = useScrollAnim();
  const copyrightRef = useScrollAnim();
  const datesRef = useScrollAnim();

  const importantDates = [
    { title: "Paper Submission open",   date: "01 May 2026",         start: new Date('2026-05-01'), end: new Date('2026-08-30') },
    { title: "Paper Submission close",  date: "30 August 2026",      start: new Date('2026-08-30'), end: new Date('2026-08-30') },
    { title: "Notification of Acceptance", date: "30 October 2026",  start: new Date('2026-10-30'), end: new Date('2026-10-30') },
    { title: "Start date of registration & camera ready submission", date: "01 November 2026", start: new Date('2026-11-01'), end: new Date('2026-11-30') },
    { title: "Conference Dates",        date: "04-06 February 2027", start: new Date('2027-02-04'), end: new Date('2027-02-07') },
  ].map((d) => {
    const now = new Date();
    if (now > d.end)    return { ...d, status: 'over' };
    if (now >= d.start) return { ...d, status: 'active' };
    return { ...d, status: 'upcoming' };
  });

  return (
    <div className="home-container">
      {/* Marquee Section */}
      <div className="marquee-section">
        <div className="marquee-text">
          Conference Record Number: 71015 &nbsp;&nbsp;||&nbsp;&nbsp;
          Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements
        </div>
      </div>

      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="slider-container">
          <div className="countdown-overlay">
            <h3 className="countdown-title">Conference Starts In</h3>
            <div className="countdown-boxes">
              <div className="countdown-box">
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-slide ${index === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `linear-gradient(${slide.overlay}, ${slide.overlay}), url(${slide.image})`,
              }}
            >
              <div className="slide-content">
                {slide.tag && <div className="slide-badge">{slide.tag}</div>}
                <h1 className="slide-title">{slide.title}</h1>
                {slide.on && <h2 className="slide-on">{slide.on}</h2>}
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                {/* <div className="slide-actions">
                  <button
                    className="secondary-btn"
                    onClick={() => window.open("/paper-submission", "_blank")}
                  >
                    <FaPaperPlane className="btn-icon" />
                    Submit Paper
                  </button>
                </div> */}
              </div>
            </div>
          ))}

          <button className="slider-btn prev" onClick={prevSlide}>‹</button>
          <button className="slider-btn next" onClick={nextSlide}>›</button>
        </div>

        {/* Conference Quick Info */}
        <div className="conference-quick-info anim-fade-up" ref={infoRef}>
          <div className="info-grid">
            {conferenceInfo.map((item, index) => {
              const isExternal = item.link.startsWith("http");
              const isHash = item.link.startsWith("#");

              if (isExternal) {
                return (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="info-card" key={index} style={{ textDecoration: "none" }}>
                    <div className="info-icon" style={{ backgroundColor: item.color }}>{item.icon}</div>
                    <div className="info-content">
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  </a>
                );
              }

              const CardWrapper = isHash ? "a" : Link;
              const linkProps = isHash ? { href: item.link } : { to: item.link };

              return (
                <CardWrapper {...linkProps} className="info-card" key={index} style={{ textDecoration: "none" }}>
                  <div className="info-icon" style={{ backgroundColor: item.color }}>{item.icon}</div>
                  <div className="info-content">
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keynote Speakers Scrolling Strip */}
      <section className="speakers-section anim-fade-up" ref={speakersRef}>
        <div className="section-header">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="section-subtitle">Learn from World-renowned Experts and Industry Leaders</p>
        </div>
        <div className="speakers-strip-wrapper">
          <div className="speakers-strip-track">
            {[...speakers, ...speakers].map((speaker, i) => (
              <div className="speaker-card" key={i}>
                <div className="speaker-image-wrapper">
                  <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                </div>
                <div className="speaker-card-divider"></div>
                <h3 className="speaker-name">{speaker.name}</h3>
                <div className="speaker-card-divider2"></div>
                <p className="speaker-profession">{speaker.profession}</p>
                <button className="speaker-see-more" onClick={() => setSelectedSpeaker(speaker)}>
                  See More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="conf-about-section anim-fade-up" ref={confAboutRef}>
        <div className="section-header">
          <h2 className="section-title">SCOPES-2027</h2>
          <p className="section-subtitle">Bringing Together Researchers, Engineers, and Industry Experts</p>
        </div>
        <div className="conf-about-body">
          <div className="conf-vm-grid">
            <div className="conf-vm-card conf-vision">
              <h3>Vision</h3>
              <p>
                To become a leading international platform that fosters innovation, interdisciplinary research, and collaboration in emerging technologies, driving the development of intelligent, sustainable, and future-ready engineering solutions aligned with global and industrial needs.
              </p>
            </div>
            <div className="conf-vm-card conf-mission">
              <h3>Mission</h3>
              <ul>
                <li>To provide a global forum for researchers, academicians, and industry professionals to present and exchange cutting-edge research.</li>
                <li>To promote integration of signal processing, communication, power, quantum technologies, and embedded systems.</li>
                <li>To address real-world industrial challenges through innovative and scalable solutions.</li>
                <li>To encourage collaboration between academia and industry for technology transfer and innovation.</li>
                <li>To support the development of sustainable, intelligent, and human-centric technologies aligned with IEEE's mission of advancing technology for humanity.</li>
              </ul>
            </div>
          </div>
          <br />
          <ul className="conf-about-intro">
            <li>The IEEE International Conference on Signal Processing, Communication, Power and Embedded Systems (SCOPES) is a premier forum dedicated to advancing research and innovation in key engineering domains. The conference brings together researchers, academicians, industry experts, and students from across the globe to exchange ideas, present cutting-edge research, and foster collaborative partnerships.</li>
            <li>SCOPES focuses on both fundamental and applied aspects of signal processing, communication systems, power engineering, quantum technology, and embedded systems. It highlights emerging trends such as artificial intelligence, next-generation communication (5G/6G), smart energy systems, advanced chip design, and intelligent embedded solutions.</li>
            <li>The conference aims to bridge the gap between academia and industry by addressing real-world challenges in areas such as smart manufacturing, healthcare technologies, sustainable energy, and intelligent infrastructure. Through keynote talks, technical sessions, and tutorials, participants gain insights into the latest technological advancements and future directions.</li>
            <li>SCOPES aligns with IEEE's mission of advancing technology for humanity by promoting innovation, interdisciplinary research, and knowledge sharing at a global level.</li>
          </ul>
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div className="speaker-modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="speaker-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSpeaker(null)}>×</button>
            <div className="modal-content">
              <div className="modal-left">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-speaker-image" />
              </div>
              <div className="modal-right">
                <h2 className="modal-speaker-name">{selectedSpeaker.name}</h2>
                <p className="modal-speaker-profession">{selectedSpeaker.profession}</p>
                <div className="modal-section">
                  <h3>About</h3>
                  <p>
                    {selectedSpeaker.about.length > 300 ? (
                      <>
                        {selectedSpeaker.about.substring(0, 300)}...
                        <button className="read-more-btn" onClick={(e) => { e.target.previousSibling.textContent = selectedSpeaker.about; e.target.style.display = "none"; }}>
                          Read More
                        </button>
                      </>
                    ) : (
                      selectedSpeaker.about
                    )}
                  </p>
                </div>
                <div className="modal-section">
                  <h3>Talk Title</h3>
                  <p className="talk-title">{selectedSpeaker.talkTitle}</p>
                </div>
                <div className="modal-section">
                  <h3>Abstract</h3>
                  <p>{selectedSpeaker.abstract}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About University Section */}
      <section className="about-university-section anim-fade-up" ref={aboutRef}>
        <div className="section-header">
          <h2 className="section-title">Centurion University of Technology and Management, Odisha</h2>
          <p className="section-subtitle">Accredited with 'A+' Grade by NAAC</p>
        </div>
        <div className="about-content">
          <div className="about-image-slider anim-slide-left">
            <img key={aboutImgIndex} src={aboutImages[aboutImgIndex].src} alt="CUTM Campus" className="about-img" />
            <div className="scopes-img-title">{aboutImages[aboutImgIndex].title}</div>
          </div>
          <div className="about-text anim-slide-right">
          <p>▪ Centurion University of Technology & Management (CUTM) is a State-notified Skill University, accredited A+ by NAAC, the only Skill University in India to hold this distinction. Recognised as a “Centre of Excellence” by the Ministry of Skill Development & Entrepreneurship (MoSDE), Government of India, Centurion is also approved by DGCA as a Drone Pilot Training Institute and has been accorded Section-1 University status by the Department of Education and Training, Government of Australia. The Outlook, in its rankings for 2024 and 2025, ranked Centurion University as the No.1 Skill University in India and among the Top-10 Private State Universities nationally, two years consecutively.<a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer" className="cutm-inline-link">Visit cutm.ac.in →</a></p>
          <p>▪ The University has received national and international recognition for its pioneering model of integrating skill development into higher education, which earned the University citations by name in the United Nations General Assembly debate in education, UNESCO, the World Bank, NITI Aayog, and the British Council, among others, affirming its role as a model institution for inclusive, impactful, and transformative education.</p>
          <p>▪ Centurion University has also been awarded the “Green Gown Award International 2025 – Highly Commendable Nature Positive” by the Environmental Association for Universities and Colleges (EAUC) in partnership with the International Association of Universities and the UN Environmental Program, thus confirming the commitment towards ecological sustainability.</p>
          <p>▪ Centurion University’s mission is to integrate skill, education, and enterprise to create meaningful livelihoods and social transformation. Through Gram Tarang Training & Employability Services (GTETS) - our social enterprise and the first NSDC partner - we have skilled over 850,000 youth from below-poverty-line and indigenous communities, including differently-abled individuals, helping them secure dignified employment and sustainable livelihoods.</p>
          </div>
        </div>
      </section>

      {/* About School of Engineering and Technology (SoET) */}
      <section className="scopes-conference-section anim-fade-up" ref={scopesRef}>
        <div className="section-header">
          <h2 className="section-title">School of Engineering and Technology, Paralakhemundi</h2>
          {/* <p className="section-subtitle">SoET - Centurion University of Technology and Management</p> */}
        </div>
        <div className="scopes-content">
          <div className="scopes-text anim-slide-left">
            <p> Established in 1997 at Paralakhemundi and expanded to Bhubaneswar in 2008, the School of Engineering and Technology at Centurion University of Technology and Management (CUTM), Odisha, has been committed to excellence in engineering education, research, innovation, and skill development. Since its inception, the School has nurtured competent, socially responsible, and globally competitive engineers equipped to address contemporary technological challenges and contribute effectively to industry, academia, and society.</p>
            <p> SoET is equipped with state-of-the-art laboratories, innovation centers, and research facilities that foster hands-on learning and industry-ready skill development. The school maintains strong collaborations with leading industries and research organizations to ensure curriculum relevance and placement excellence.</p>
            {/* <p>▪ With a focus on interdisciplinary research, entrepreneurship, and societal impact, SoET actively contributes to national and international conferences, publications, and funded research projects, making it a vibrant center for academic and technological advancement.</p> */}
          </div>
          <div className="scopes-image-slider anim-slide-right">
            <img key={scopesImgIndex} src={scopesImages[scopesImgIndex].src} alt="SoET" className="scopes-img" />
            <div className="scopes-img-title">{scopesImages[scopesImgIndex].title}</div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="department-section anim-fade-up" ref={deptRef}>
        <div className="section-header">
          <h2 className="section-title">Department of Electronics and Communication Engineering, Paralakhemundi</h2>
        </div>
        <div className="department-content">
          <div className="department-image anim-slide-left">
            <img key={deptImgIndex} src={deptImages[deptImgIndex].src} alt="ECE Department" className="dept-img" />
            <div className="scopes-img-title">{deptImages[deptImgIndex].title}</div>
          </div>
          <div className="department-text anim-slide-right">
            <p>Department of Electronics and Communication Engineering aims to produce qualified and dynamic engineers in the fast-changing area of Smart Devices, Mobile Emerging Technologies, Automation, Industrial IoT, and VLSI. The Department has sophisticated and modern laboratory equipment and software/tool (HFSS, CADENCE, MATLAB, MULTISIM, KEIL uVision, LABVIEW) for research and development work in the areas of Antenna and Microwave Engineering, Signal Processing and Communication, VLSI and Embedded System. The department undertakes real-time application projects in Smart Irrigation, Industrial IoT, Soil Moisture Prototype Development, Insulin Pump Prototype Development and Chip Design</p>
          </div>
        </div>
      </section>

      {/* SCOPES Conference Section */}
      {/* <section className="scopes-conference-section anim-fade-up" ref={scopesRef}>
        <div className="section-header">
          <h2 className="section-title">SCOPES 2027</h2>
          <p className="section-subtitle">Signal Processing, Communication, Power & Embedded Systems</p>
        </div>
        <div className="scopes-content">
          <div className="scopes-image-slider anim-slide-left">
            <img key={scopesImgIndex} src={scopesImages[scopesImgIndex].src} alt="SCOPES Conference" className="scopes-img" />
            <div className="scopes-img-title">{scopesImages[scopesImgIndex].title}</div>
          </div>
          <div className="scopes-text anim-slide-right">
            <p>SCOPES-2027 is being organized by CUTM with technical co-sponsorship by IEEE Bhubaneswar Section and IEEE Computer society chapter (CH-11163). The aim of this conference is to bring together academicians and industry experts in the fields of Signal Processing, Communication System, Power System and Embedded Systems.</p>
            <p>The conference aims to provide a premier international forum for sharing knowledge and the latest research advancement. All submitted papers will be reviewed by experts and accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.</p>
          </div>
        </div>
      </section> */}

      {/* SCOPES 2016 Gallery Strip */}
      <section className="gallery-strip-section">
        <div className="section-header">
          <h2 className="section-title">SCOPES-2024 Gallery</h2>
          <p className="section-subtitle">Glimpses from the previous conference</p>
        </div>
        <div className="gallery-strip-wrapper">
          <div className="gallery-strip-track">
            {[...Array(2)].flatMap((_, si) =>
              [
                { n: 1, ext: "png" },
                { n: 2, ext: "png" },
                { n: 3, ext: "jpeg" },
                { n: 4, ext: "jpeg" },
                { n: 5, ext: "jpeg" },
                { n: 6, ext: "jpeg" },
                { n: 7, ext: "jpeg" },
                { n: 8, ext: "jpeg" },
                { n: 9, ext: "jpeg" },
                // { n: 10, ext: "jpeg" },
                // { n: 11, ext: "jpeg" },
                // { n: 12, ext: "jpeg" },
                // { n : 13, ext: "jpeg" },
                // { n : 14, ext: "jpeg" },
                // { n : 15, ext: "jpeg" },
                // { n : 16, ext: "jpeg" },
                // { n : 18, exy: "jpg" },
                // { n : 19, ext: "jpeg" },

                
              ].map((img, i) => (
                <img
                  key={`${si}-${i}`}
                  src={`/scopes-prev/scopes2024/scope${img.n}.${img.ext}`}
                  alt={`SCOPES 2024 - ${img.n}`}
                  className="gallery-strip-img"
                />
              )),
            )}
          </div>
        </div>
      </section>

{/* SCOPES 2024 Gallery Strip */}
      <section className="gallery-strip-section">
        <div className="section-header">
          <h2 className="section-title">SCOPES-2016 Gallery</h2>
          <p className="section-subtitle">Glimpses from the previous conference</p>
        </div>
        <div className="gallery-strip-wrapper">
          <div className="gallery-strip-track">
            {[...Array(2)].flatMap((_, si) =>
              [
                { n: 1, ext: "png" },
                { n: 2, ext: "png" },
                { n: 3, ext: "jpeg" },
                { n: 4, ext: "jpeg" },
                { n: 5, ext: "jpeg" },
                { n: 6, ext: "jpeg" },
                { n: 7, ext: "jpeg" },
                { n: 8, ext: "jpeg" },
                { n: 9, ext: "jpeg" },
                
              ].map((img, i) => (
                <img
                  key={`${si}-${i}`}
                  src={`/scopes-prev/scopes2024/scope${img.n}.${img.ext}`}
                  alt={`SCOPES 2016 - ${img.n}`}
                  className="gallery-strip-img"
                />
              )),
            )}
          </div>
        </div>
      </section>


      {/* IEEE Copyright Section */}
      <section className="ieee-copyright-section anim-zoom-in" ref={copyrightRef}>
        <h3 className="copyright-heading">IEEE Copyright Details</h3>
        <div className="copyright-list">
          <p>U.S. Government work not protected by U.S. copyright</p>
          <p>79-8-3315-0645-2/24/$31.00 ©2024 Crown</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 European Union</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 IEEE</p>
        </div>
      </section>

      {/* Important Dates & Registration Fees */}
      <section className="dates-fees-section anim-fade-up" ref={datesRef}>
        <div className="section-header">
          <h2 className="section-title">Important Information</h2>
          <p className="section-subtitle">Key dates and registration details</p>
        </div>
        <div className="dates-fees-grid">
          <div className="dates-column anim-slide-left">
            <h3 className="column-title">Important Dates</h3>
            <div className="dates-list">
              {importantDates.map((date, index) => (
                <div className={`date-item ${date.status}`} key={index}>
                  <div className="date-dot"></div>
                  <div className="date-content">
                    <h4 className="date-title">{date.title}</h4>
                    <div className="date-value">{date.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fees-column anim-slide-right">
            <h3 className="column-title">Registration Fees</h3>
            <div className="fees-table-wrapper">
              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>IEEE Member</th>
                    <th>Non-IEEE Member</th>
                    <th>Foreign Delegates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R&amp;D and Industry Participants</td>
                    <td>₹9,000</td><td>₹10,000</td><td>$250</td>
                  </tr>
                  <tr>
                    <td>Faculty Participants from Academia</td>
                    <td>₹8,000</td><td>₹9,000</td><td>$225</td>
                  </tr>
                  <tr>
                    <td>UG/PG Students &amp; Research Scholars</td>
                    <td>₹7,000</td><td>₹8,000</td><td>$200</td>
                  </tr>
                  <tr>
                    <td>Listener / Accompany Person</td>
                    <td>₹2,000</td><td>₹2,000</td><td>$100</td>
                  </tr>
                  {/* <tr>
                    <td>Accompany</td>
                    <td>₹1,000</td><td>₹1,000</td><td>$50</td>
                  </tr> */}
                </tbody>
              </table>
              <p className="fees-note">* Fee includes Conference Kit, Banquet, Lunch, Tea, and GST as applicable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
