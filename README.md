# SCOPES 2027 - Conference Website

Official website for the 3rd International Conference on Signal Processing, Communication, Power & Embedded Systems (SCOPES-2027).

## Conference Details

- **Event**: SCOPES 2027
- **Dates**: February 4-6, 2027
- **Venue**: Centurion University of Technology and Management, Paralakhemundi, Odisha
- **Format**: Hybrid Conference
- **Technical Co-Sponsor**: IEEE Bhubaneswar Section & Computer Society Chapter (CH11163)

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3
- **Icons**: React Icons
- **Routing**: React Router DOM

## Project Structure

```
ieee-cutm/
├── public/
│   ├── data/
│   │   └── speakers.json
│   ├── images/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── Pages/
│   │   ├── Home.js
│   │   ├── Accommodation.js
│   │   ├── CallForPapers.js
│   │   ├── Committee.js
│   │   ├── Contact.js
│   │   ├── ImpDates.js
│   │   ├── NotFound.js
│   │   ├── PaperSubmission.js
│   │   ├── Places.js
│   │   ├── ProgramSchedule.js
│   │   ├── Publication.js
│   │   ├── Scope.js
│   │   ├── Speakers.js
│   │   ├── Sponsors.js
│   │   └── Themes.js
│   ├── styles/
│   │   └── [All CSS files]
│   ├── App.js
│   └── index.js
└── package.json
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## Deployment

### Option 1: Vercel (Recommended - Free & Auto-Build)

**Via Vercel Dashboard (No Manual Build Required):**
- Go to [vercel.com](https://vercel.com)
- Sign up/Login with GitHub
- Click "New Project"
- Import your GitHub repository
- Vercel will automatically detect React and build/deploy
- Your site will be live in 2-3 minutes!

**Via Vercel CLI:**
```bash
npm install -g vercel
vercel
```
- Vercel automatically builds and deploys

### Option 2: Netlify (Free & Auto-Build)

**Via Netlify Dashboard (No Manual Build Required):**
- Go to [netlify.com](https://netlify.com)
- Sign up/Login with GitHub
- Click "Add new site" → "Import an existing project"
- Connect your GitHub repository
- Netlify will automatically build and deploy

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```
- Netlify automatically builds and deploys

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/ieee-cutm",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Hosting (Manual Build)

1. Build:
```bash
npm run build
```

2. Upload `build` folder contents via FTP/cPanel

## Features

- Responsive design for mobile and desktop
- Dynamic speaker profiles with modal view
- Conference schedule with day-wise tabs
- Paper submission guidelines
- Accommodation and transportation details
- Committee member listings
- Sponsor information
- Interactive navigation with dropdown menus
- Countdown timer to conference date
- IEEE Xplore publication information

## Key Pages

1. **Home** - Conference overview, speakers, important dates
2. **Themes** - Conference tracks and topics
3. **Call for Papers** - Submission tracks with SDG alignment
4. **Paper Submission** - Guidelines and templates
5. **Program Schedule** - Day-wise event schedule
6. **Speakers** - Keynote speaker profiles
7. **Committee** - Organizing committee members
8. **Accommodation** - Lodging and transport details
9. **Sponsors** - Sponsorship tiers and benefits
10. **Contact** - Contact information and location map

## Contact

**Email**: scopes2026@cutm.ac.in  
**Conference Record Number**: 71015

## License

© 2027 SCOPES Conference - Centurion University of Technology and Management
