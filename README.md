# SCOPES 2027 — Official Conference Website

> 3rd International Conference on Signal Processing, Communication, Power & Embedded Systems

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org)
[![Deployed on Render](https://img.shields.io/badge/Deployed-Render-46E3B7?logo=render)](https://render.com)

---

## Conference Details

| Field | Info |
|-------|------|
| Event | SCOPES 2027 |
| Edition | 3rd International Conference |
| Dates | February 4–6, 2027 |
| Venue | Centurion University of Technology and Management, Paralakhemundi, Odisha |
| Format | Hybrid (Online + Offline) |
| Technical Co-Sponsor | IEEE Bhubaneswar Section & Computer Society Chapter (CH11163) |
| Conference Record No. | 71015 |
| Contact | scopes2027@cutm.ac.in |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 19 |
| Styling | CSS3 |
| Routing | React Router DOM |
| Icons | React Icons |
| Charts | Recharts |
| Deployment | Render |

---

## Features

- Responsive design — mobile & desktop
- Scroll animations (fade-up, slide-left, slide-right, zoom-in, staircase)
- Dynamic keynote speaker profiles with modal view
- Day-wise conference program schedule
- Paper submission guidelines & templates
- Accommodation and transportation details
- Organizing committee with staircase entrance animation
- Sponsorship tiers and benefits
- Countdown timer to conference date
- IEEE Xplore publication information
- Interactive navbar with dropdown menus

---

## Project Structure

```
ieee-cutm/
├── public/
│   ├── data/
│   │   └── speakers.json
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Navbar.js / Navbar.css
│   │   └── Footer.js / Footer.css
│   ├── Pages/
│   │   ├── Home.js
│   │   ├── CallForPapers.js
│   │   ├── Committee.js
│   │   ├── Contact.js
│   │   ├── ImpDates.js
│   │   ├── PaperSubmission.js
│   │   ├── Places.js
│   │   ├── ProgramSchedule.js
│   │   ├── Publication.js
│   │   ├── Registration.js
│   │   ├── Scope.js
│   │   ├── Speakers.js
│   │   ├── Sponsors.js
│   │   ├── Themes.js
│   │   └── NotFound.js
│   ├── styles/
│   │   └── [All CSS files]
│   ├── App.js
│   └── index.js
├── .gitignore
└── package.json
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/krushayu/SCOPES-2027.git
cd ieee-cutm

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

---

## Deployment (Render)

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Deploy — Render auto-deploys on every push to `main`

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Overview, speakers, countdown, important dates |
| `/themes` | Themes | Conference tracks and topics |
| `/call-for-papers` | Call for Papers | Submission tracks |
| `/paper-submission` | Paper Submission | Guidelines and templates |
| `/program-schedule` | Program Schedule | Day-wise event schedule |
| `/speakers` | Speakers | Keynote speaker profiles |
| `/committee` | Committee | Organizing committee members |
| `/accommodation` | Accommodation | Lodging and transport details |
| `/registration` | Registration | Registration guidelines and fees |
| `/sponsors` | Sponsors | Sponsorship tiers and benefits |
| `/contact` | Contact | Contact info and location map |

---

## License

© 2027 SCOPES Conference — Centurion University of Technology and Management, Odisha, India

---

*Designed & Developed by [krush@yu](https://www.linkedin.com/in/krushayu)*
