import React from 'react';
import '../styles/Themes.css';

const tracks = [
  {
    title: 'Signal Processing',
    subtitle: 'Track 1',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 32 Q12 12 20 32 Q28 52 36 32 Q44 12 52 32 Q58 42 64 32" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="32" cy="32" r="4" fill="#00b4d8"/>
      </svg>
    )
  },
  {
    title: 'Communication Systems',
    subtitle: 'Track 2',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="6" fill="#667eea"/>
        <path d="M32 26 Q32 10 48 10" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 26 Q32 10 16 10" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 38 Q32 54 48 54" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 38 Q32 54 16 54" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 32 Q10 32 10 16" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M38 32 Q54 32 54 16" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Natural Language Processing',
    subtitle: 'Track 3',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="48" height="32" rx="8" stroke="#f093fb" strokeWidth="2.5"/>
        <path d="M20 44 L16 56 L28 48" stroke="#f093fb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="18" y1="24" x2="46" y2="24" stroke="#f093fb" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="32" x2="38" y2="32" stroke="#f093fb" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'VLSI and Embedded System',
    subtitle: 'Track 4',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="18" width="28" height="28" rx="4" stroke="#22c55e" strokeWidth="2.5"/>
        <rect x="24" y="24" width="16" height="16" rx="2" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="2"/>
        <line x1="18" y1="26" x2="8" y2="26" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="32" x2="8" y2="32" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="38" x2="8" y2="38" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="46" y1="26" x2="56" y2="26" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="46" y1="32" x2="56" y2="32" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="46" y1="38" x2="56" y2="38" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26" y1="18" x2="26" y2="8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="32" y1="18" x2="32" y2="8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="38" y1="18" x2="38" y2="8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26" y1="46" x2="26" y2="56" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="32" y1="46" x2="32" y2="56" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="38" y1="46" x2="38" y2="56" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Power Systems',
    subtitle: 'Track 5',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 8 L24 34 H32 L28 56 L44 28 H36 L40 8 Z" stroke="#fbbf24" strokeWidth="2.5" strokeLinejoin="round" fill="#fbbf24" opacity="0.15"/>
        <path d="M36 8 L24 34 H32 L28 56 L44 28 H36 L40 8 Z" stroke="#fbbf24" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Power Electronics and Applications',
    subtitle: 'Track 6',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="#f97316" strokeWidth="2.5"/>
        <path d="M22 32 L28 26 L34 32 L40 24" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="32" r="2.5" fill="#f97316"/>
        <circle cx="40" cy="24" r="2.5" fill="#f97316"/>
      </svg>
    )
  },
  {
    title: 'ML and DL Techniques',
    subtitle: 'Track 7',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="12" r="5" stroke="#a78bfa" strokeWidth="2.5"/>
        <circle cx="12" cy="44" r="5" stroke="#a78bfa" strokeWidth="2.5"/>
        <circle cx="52" cy="44" r="5" stroke="#a78bfa" strokeWidth="2.5"/>
        <circle cx="32" cy="44" r="5" stroke="#a78bfa" strokeWidth="2.5"/>
        <line x1="32" y1="17" x2="14" y2="39" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="17" x2="50" y2="39" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="17" x2="32" y2="39" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <line x1="17" y1="44" x2="27" y2="44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <line x1="37" y1="44" x2="47" y2="44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Related Areas — Disaster & Urban Tech',
    subtitle: 'Track 8',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 L8 52 H56 Z" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" fill="#ef4444" opacity="0.1"/>
        <line x1="32" y1="24" x2="32" y2="38" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="44" r="2.5" fill="#ef4444"/>
      </svg>
    )
  },
  {
    title: 'Related Areas — Agriculture & Healthcare AI',
    subtitle: 'Track 9',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 52 Q32 30 48 18 Q36 18 28 28 Q24 14 12 14 Q20 28 32 52Z" stroke="#16a34a" strokeWidth="2.5" strokeLinejoin="round" fill="#16a34a" opacity="0.15"/>
        <path d="M32 52 Q32 30 48 18 Q36 18 28 28 Q24 14 12 14 Q20 28 32 52Z" stroke="#16a34a" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="32" y1="52" x2="32" y2="38" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
      </svg>
    )
  },
  {
    title: 'Related Areas — Phytochemical & Green Tech',
    subtitle: 'Track 10',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="28" r="14" stroke="#0d9488" strokeWidth="2.5"/>
        <path d="M24 28 Q28 20 32 28 Q36 36 40 28" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="32" y1="42" x2="32" y2="56" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="24" y1="52" x2="40" y2="52" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
];

const colors = [
  '#00b4d8', '#667eea', '#f093fb', '#22c55e', '#fbbf24',
  '#f97316', '#a78bfa', '#ef4444', '#16a34a', '#0d9488'
];

const Themes = () => {
  return (
    <div className="themes-wrapper">
      <div className="themes-hero">
        <h1 className="themes-hero-title">Conference Themes</h1>
        <p className="themes-hero-subtitle">SCOPES-2027 — Tracks of the Conference</p>
      </div>

      <div className="themes-container">
        <div className="themes-grid">
          {tracks.map((track, index) => (
            <div key={index} className="themes-card" style={{ '--accent': colors[index] }}>
              <div className="themes-card-svg">{track.svg}</div>
              <div className="themes-card-info">
                <span className="themes-card-subtitle">{track.subtitle}</span>
                <h3 className="themes-card-title">{track.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="themes-contact">
          <p>Get in Touch</p>
          <a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a>
        </div>
      </div>
    </div>
  );
};

export default Themes;
