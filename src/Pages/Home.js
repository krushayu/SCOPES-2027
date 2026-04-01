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
    { src: "/slide1.png", title: "CUTM Campus" },
    { src: "/slide2.png", title: "University Area" },
    { src: "/slide3.png", title: "Pramod Udhyan" },
  ];
  const deptImages = [
    { src: "/ece1.png", title: "ECE" },
    { src: "/ece2.png", title: "Department of ECE" },
    { src: "/slide2.png", title: "University Area" },
  ];
  const scopesImages = [
    { src: "/scope1.png", title: "Conference" },
    { src: "/scope2.png", title: "Scopes 2016" },
    { src: "/scope3.jpeg", title: "Scopes 2024" },
  ];

  useEffect(() => {
    fetch("/data/speakers.json")
      .then((res) => res.json())
      .then((data) => setSpeakers(data))
      .catch((err) => console.error("Error loading speakers:", err));
  }, []);

  // Auto-change images for About, Department, and SCOPES sections
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

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date("2027-02-04T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
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
      image: "/slide1.png",
      title: "3rd International Conference",
      subtitle: "Signal Processing, Communication, Power & Embedded Systems",
      tag: "IEEE Technical Co-Sponsored",
    },
    {
      image: "/slide2.png",
      title: "04-06 February 2027",
      subtitle: "Centurion University, Parlakhemundi",
      tag: "Hybrid Mode",
    },
    {
      image: "/slide3.png",
      title: "Call for Papers",
      subtitle: "Submit Your Research Work",
      tag: "IEEE Conference",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const conferenceInfo = [
    {
      icon: <FaCalendarAlt />,
      label: "Dates",
      value: "04-06 Feb 2027",
      color: "#FF6B6B",
      link: "/imp-dates",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Venue",
      value: "Centurion University, Paralakhemundi",
      color: "#4ECDC4",
      link: "https://maps.app.goo.gl/hVvbqeLRXWvEa9gT9",
    },
    {
      icon: <FaPaperPlane />,
      label: "Submissions",
      value: "Open Now",
      color: "#45B7D1",
      link: "/paper-submission",
    },
    {
      icon: <FaAward />,
      label: "Publication",
      value: "IEEE Xplore",
      color: "#96CEB4",
      link: "/publication",
    },
    {
      icon: <MdAppRegistration />,
      label: "Format",
      value: "Hybrid",
      color: "#DDA0DD",
      link: "/program-schedule",
    },
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
    // { title: 'Abstract Submission date', date: '01 March 2026', status: 'active' },
    { title: "Paper Submission open", date: "01 April 2026", status: "active" },
    {
      title: "Paper Submission close",
      date: "30 August 2026",
      status: "upcoming",
    },
    {
      title: "Notification of Acceptance",
      date: "30 October 2026",
      status: "upcoming",
    },
    {
      title: "Last date of registration & camera ready submission",
      date: "30 November 2026",
      status: "upcoming",
    },
    {
      title: "Conference Dates",
      date: "04-06 February 2027",
      status: "upcoming",
    },
  ];

  return (
    <div className="home-container">
      {/* Marquee Section */}
      <div className="marquee-section">
        <div className="marquee-text">
          Conference Record Number: 71015 &nbsp;&nbsp;||&nbsp;&nbsp;
          <a href="/program-schedule" className="program-schedule-link">
            Program Schedule <sup className="new-badge">(New)</sup> - Click Here
          </a>
          &nbsp;&nbsp;||&nbsp;&nbsp; Accepted papers will be submitted for
          inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
          quality requirements
        </div>
      </div>

      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="slider-container">
          {/* Countdown Timer Overlay */}
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
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.65), rgba(10, 25, 47, 0.75)), url(${slide.image})`,
              }}
            >
              <div className="slide-content">
                <div className="slide-badge">{slide.tag}</div>
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <div className="slide-actions">
                  {/* <button 
                    className="primary-btn"
                    onClick={() => window.open('/registration', '_blank')}
                  >
                    <FaFileAlt className="btn-icon" />
                    Register Now
                  </button> */}
                  <button
                    className="secondary-btn"
                    onClick={() => window.open("/paper-submission", "_blank")}
                  >
                    <FaPaperPlane className="btn-icon" />
                    Submit Paper
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <button className="slider-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            ›
          </button>

          {/* Slider Dots */}
          {/* <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div> */}
        </div>

        {/* Conference Quick Info */}
        <div className="conference-quick-info anim-fade-up" ref={infoRef}>
          <div className="info-grid">
            {conferenceInfo.map((item, index) => {
              const isExternal = item.link.startsWith("http");
              const isHash = item.link.startsWith("#");

              if (isExternal) {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-card"
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="info-icon"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="info-content">
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  </a>
                );
              }

              const CardWrapper = isHash ? "a" : Link;
              const linkProps = isHash
                ? { href: item.link }
                : { to: item.link };

              return (
                <CardWrapper
                  {...linkProps}
                  className="info-card"
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="info-icon"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
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

      {/* About the Conference Section */}
      <section className="conf-about-section anim-fade-up" ref={confAboutRef}>
        <div className="section-header">
          <h2 className="section-title">About the Conference</h2>
          <p className="section-subtitle">
            SCOPES 2027 — Bringing together researchers, engineers, and industry
            experts
          </p>
        </div>
        <div className="conf-about-body">
          {/* <div className="conf-venue-strip">
            {['Venue 1','Venue 2','Venue 3','Venue 4','Venue 5'].map((v,i) => (
              <span className="conf-venue-tag" key={i}>{v}</span>
            ))}
          </div> */}
          <div className="conf-vm-grid">
            <div className="conf-vm-card conf-vision">
              <h3>Conference Vision</h3>
              <p>
                To become a leading international platform that fosters
                innovation, interdisciplinary research, and collaboration in
                emerging technologies, driving the development of intelligent,
                sustainable, and future-ready engineering solutions aligned with
                global and industrial needs.
              </p>
            </div>
            <div className="conf-vm-card conf-mission">
              <h3>Conference Mission</h3>
              <ul>
                <li>
                  To provide a global forum for researchers, academicians, and
                  industry professionals to present and exchange cutting-edge
                  research.
                </li>
                <li>
                  To promote integration of signal processing, communication,
                  power, quantum technologies, and embedded systems.
                </li>
                <li>
                  To address real-world industrial challenges through innovative
                  and scalable solutions.
                </li>
                <li>
                  To encourage collaboration between academia and industry for
                  technology transfer and innovation.
                </li>
                <li>
                  To support the development of sustainable, intelligent, and
                  human-centric technologies aligned with IEEE’s mission of
                  advancing technology for humanity.
                </li>
                {/* <li>To empower researchers, practitioners, and students with emerging knowledge in AI/ML, BIM, IoT, and green engineering for addressing present and future infrastructure challenges.</li> */}
              </ul>
            </div>
          </div>{" "}
          <br></br>
          <ul className="conf-about-intro">
            <li>
              The IEEE International Conference on Signal Processing,
              Communication, Power and Embedded Systems (SCOPES) is a premier
              forum dedicated to advancing research and innovation in key
              engineering domains. The conference brings together researchers,
              academicians, industry experts, and students from across the globe
              to exchange ideas, present cutting-edge research, and foster
              collaborative partnerships.
            </li>
            <li>
              SCOPES focuses on both fundamental and applied aspects of signal
              processing, communication systems, power engineering, quantum
              technology, and embedded systems. It highlights emerging trends
              such as artificial intelligence, next-generation communication
              (5G/6G), smart energy systems, advanced chip design, and
              intelligent embedded solutions.
            </li>
            <li>
              The conference aims to bridge the gap between academia and
              industry by addressing real-world challenges in areas such as
              smart manufacturing, healthcare technologies, sustainable energy,
              and intelligent infrastructure. Through keynote talks, technical
              sessions, and tutorials, participants gain insights into the
              latest technological advancements and future directions.
            </li>
            <li>
              SCOPES aligns with IEEE’s mission of advancing technology for
              humanity by promoting innovation, interdisciplinary research, and
              knowledge sharing at a global level.
            </li>
 //                        <li>
 // The IEEE International Conference on Signal Processing, Communication, Power and Embedded Systems (SCOPES) is a premier global forum dedicated to advancing research and innovation in key engineering domains. The conference brings together researchers, academicians, industry professionals, and students to present cutting-edge work, exchange ideas, and foster interdisciplinary collaboration.
 //            </li>
 //                        <li>
 //       Aligned with the theme “Convergence of Intelligent Communication, Smart Power, Quantum Technologies, and Advanced Embedded Systems for Sustainable and Future-Ready Solutions,” SCOPES focuses on both theoretical advancements and practical applications. It highlights emerging areas such as artificial intelligence, next-generation communication (5G/6G), smart and sustainable energy systems, quantum technologies, advanced chip design, and intelligent embedded systems.
 //            </li>
 //                        <li>
 //   The conference aims to bridge the gap between academia and industry by addressing real-world challenges in smart manufacturing, healthcare technologies, energy sustainability, and intelligent infrastructure. Through keynote talks, technical sessions, and tutorials, participants gain insights into recent developments and future trends.
 //            </li>
 //                        <li>
 //            SCOPES aligns with IEEE’s mission of advancing technology for the benefit of humanity by promoting innovation, collaboration, and knowledge dissemination at a global level.
 //            </li>
          </ul>
          {/* <p className="conf-about-intro">
        SCOPES focuses on both fundamental and applied aspects of signal processing, communication systems, power engineering, quantum technology, and embedded systems. It highlights emerging trends such as artificial intelligence, next-generation communication (5G/6G), smart energy systems, advanced chip design, and intelligent embedded solutions.          </p>
          <p className="conf-about-intro">
        The conference aims to bridge the gap between academia and industry by addressing real-world challenges in areas such as smart manufacturing, healthcare technologies, sustainable energy, and intelligent infrastructure. Through keynote talks, technical sessions, and tutorials, participants gain insights into the latest technological advancements and future directions.          </p>
          <p className="conf-about-intro">
        SCOPES aligns with IEEE’s mission of advancing technology for humanity by promoting innovation, interdisciplinary research, and knowledge sharing at a global level.          </p>           */}
          {/* <p className="conf-about-intro">
           The IEEE International Conference on Signal Processing, Communication, Power and Embedded Systems (SCOPES) is a premier forum dedicated to advancing research and innovation in key engineering domains. The conference brings together researchers, academicians, industry experts, and students from across the globe to exchange ideas, present cutting-edge research, and foster collaborative partnerships.
          </p>  */}
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section anim-fade-up" ref={speakersRef}>
        <div className="section-header">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="section-subtitle">
            Learn from world-renowned experts and industry leaders
          </p>
        </div>

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image-wrapper">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-image"
                />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-profession">{speaker.profession}</p>
              <button
                className="speaker-see-more"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div
          className="speaker-modal-overlay"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div className="speaker-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedSpeaker(null)}
            >
              ×
            </button>
            <div className="modal-content">
              <div className="modal-left">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="modal-speaker-image"
                />
              </div>
              <div className="modal-right">
                <h2 className="modal-speaker-name">{selectedSpeaker.name}</h2>
                <p className="modal-speaker-profession">
                  {selectedSpeaker.profession}
                </p>
                <div className="modal-section">
                  <h3>About</h3>
                  <p>
                    {selectedSpeaker.about.length > 300 ? (
                      <>
                        {selectedSpeaker.about.substring(0, 300)}...
                        <button
                          className="read-more-btn"
                          onClick={(e) => {
                            e.target.previousSibling.textContent =
                              selectedSpeaker.about;
                            e.target.style.display = "none";
                          }}
                        >
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
          <h2 className="section-title">
            Centurion University of Technology and Management
          </h2>
          <p className="section-subtitle">Accredited with 'A+' Grade by NAAC</p>
        </div>
        <div className="about-content">
          <div className="about-image-slider anim-slide-left">
            <img
              key={aboutImgIndex}
              src={aboutImages[aboutImgIndex].src}
              alt="CUTM Campus"
              className="about-img"
            />
            <div className="scopes-img-title">
              {aboutImages[aboutImgIndex].title}
            </div>
          </div>
          <div className="about-text anim-slide-right">
            <p>
              ▪ Centurion University of Technology and Management (CUTM) is a
              leading state-private university in Odisha, India, with six
              constituent campuses. Promoted by visionary edupreneurs, it is
              widely recognized for skill-integrated higher education combining
              academic excellence with hands-on, industry-linked learning. A
              sister institution, Centurion University Andhra Pradesh, extends
              this vision to Vijayanagaram.{" "}
              <a
                href="https://cutm.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="cutm-inline-link"
              >
                Visit cutm.ac.in →
              </a>
            </p>
            <p>
              ▪ CUTM distinguishes itself through entrepreneurship and
              enterprise creation, with in-house labs for wood engineering,
              transformer manufacturing, apparel design, e-vehicle production,
              and waste-to-wealth units serving ITI, diploma, UG, and PG
              students.
            </p>
            <p>
              ▪ The university hosts over 50 industry-sponsored laboratories and
              social enterprises under the Gram Tarang brand, fostering
              employability, inclusive development, technology innovation, and
              vocational training.
            </p>
            <p>
              ▪ In research, 24 specialized centers focus on computational
              mathematics, medical diagnostics, aquaculture, phytopharma,
              genetics, and drone technology, supported by in-house grants for
              cutting-edge international research.
            </p>
            <p>
              ▪ Academically, CUTM offers 50+ domain and 150+ skill-based
              courses through 16 schools, with collaborations with Ashok
              Leyland, Yamaha, Godrej, HAL, Schneider Electric, Dassault
              Systemes, and Manipal Hospitals.
            </p>
            <p>
              ▪ Built on academia-industry-government collaboration, CUTM
              partners with NSDC, PMKVY, and Odisha Livelihood Mission,
              promoting inclusive education and placement-linked training for
              rural youth and differently-abled individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="department-section anim-fade-up" ref={deptRef}>
        <div className="section-header">
          <h2 className="section-title">
            Department of Electronics and Communication Engineering
          </h2>
        </div>
        <div className="department-content">
          <div className="department-text anim-slide-left">
            <p>
              Department of Electronics and Communication Engineering aims to
              produce qualified and dynamic engineers in the fast-changing area
              of Smart Devices, Mobile Emerging Technologies, Automation,
              Industrial IoT, and VLSI. The Department has sophisticated and
              modern laboratory equipment and software/tool (HFSS, CADENCE,
              MATLAB, MULTISIM, KEIL uVision, LABVIEW) for research and
              development work in the areas of Antenna and Microwave
              Engineering, Signal Processing and Communication, VLSI and
              Embedded System. The department undertakes real-time application
              projects in Smart Irrigation, Industrial IoT, Soil Moisture
              Prototype Development, Insulin Pump Prototype Development and Chip
              Design
            </p>
            {/* <p>
              The department undertakes real-time application projects in Smart
              Irrigation, Industrial IoT, Soil Moisture Prototype Development,
              Insulin Pump Prototype Development and Chip Design.
            </p> */}
          </div>
          <div className="department-image anim-slide-right">
            <img
              key={deptImgIndex}
              src={deptImages[deptImgIndex].src}
              alt="ECE Department"
              className="dept-img"
            />
            <div className="scopes-img-title">
              {deptImages[deptImgIndex].title}
            </div>
          </div>
        </div>
      </section>

      {/* SCOPES Conference Section */}
      <section
        className="scopes-conference-section anim-fade-up"
        ref={scopesRef}
      >
        <div className="section-header">
          <h2 className="section-title">SCOPES 2027</h2>
          <p className="section-subtitle">
            Signal Processing, Communication, Power & Embedded Systems
          </p>
        </div>
        <div className="scopes-content">
          <div className="scopes-image-slider anim-slide-left">
            <img
              key={scopesImgIndex}
              src={scopesImages[scopesImgIndex].src}
              alt="SCOPES Conference"
              className="scopes-img"
            />
            <div className="scopes-img-title">
              {scopesImages[scopesImgIndex].title}
            </div>
          </div>
          <div className="scopes-text anim-slide-right">
            <p>
              SCOPES-2027 is being organized by CUTM with technical
              co-sponsorship by IEEE Bhubaneswar Section and IEEE Computer
              society chapter (CH-11163). The aim of this conference is to bring
              together academicians and industry experts in the fields of Signal
              Processing, Communication System, Power System and Embedded
              Systems.
            </p>
            <p>
              The conference aims to provide a premier international forum for
              sharing knowledge and the latest research advancement. All
              submitted papers will be reviewed by experts and accepted papers
              will be submitted for inclusion into IEEE Xplore subject to
              meeting IEEE Xplore's scope and quality requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPES 2024 Gallery Strip */}
      <section className="gallery-strip-section">
        <div className="section-header">
          <h2 className="section-title">SCOPES 2024 Gallery</h2>
          <p className="section-subtitle">
            Glimpses from the previous conference
          </p>
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
                  src={`/scope${img.n}.${img.ext}`}
                  alt={`SCOPES 2024 - ${img.n}`}
                  className="gallery-strip-img"
                />
              )),
            )}
          </div>
        </div>
      </section>

      {/* IEEE Copyright Section */}
      <section
        className="ieee-copyright-section anim-zoom-in"
        ref={copyrightRef}
      >
        <h3 className="copyright-heading">IEEE Copyright Details</h3>
        <div className="copyright-list">
          <p>U.S. Government work not protected by U.S. copyright</p>
          <p>79-8-3315-0645-2/24/$31.00 ©2024 Crown</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 European Union</p>
          <p>979-8-3315-0645-2/24/$31.00 ©2024 IEEE</p>
          {/* <p>Copyright Details Coming Soon</p> */}
        </div>
      </section>

      {/* Important Dates & Registration Fees */}
      <section className="dates-fees-section anim-fade-up" ref={datesRef}>
        <div className="section-header">
          <h2 className="section-title">Important Information</h2>
          <p className="section-subtitle">Key dates and registration details</p>
        </div>

        <div className="dates-fees-grid">
          {/* Important Dates - Left Side */}
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

          {/* Registration Fees - Right Side */}
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
                    <td>₹9,000</td>
                    <td>₹10,000</td>
                    <td>$225</td>
                  </tr>
                  <tr>
                    <td>Faculty Participants from Academia</td>
                    <td>₹8,000</td>
                    <td>₹9,000</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td>UG/PG Students &amp; Research Scholars</td>
                    <td>₹7,000</td>
                    <td>₹7,500</td>
                    <td>$180</td>
                  </tr>
                  <tr>
                    <td>Listener</td>
                    <td>₹2,000</td>
                    <td>₹2,500</td>
                    <td>$100</td>
                  </tr>
                </tbody>
              </table>
              <p className="fees-note">
                * Fee includes Conference Kit, Banquet, Lunch, Tea, and GST as
                applicable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
