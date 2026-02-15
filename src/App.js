import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './mobile-responsive.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Speakers from './Pages/Speakers';
import Footer from './Components/Footer';
import ImpDates from './Pages/ImpDates';
import Contact from './Pages/Contact';
import Scope from './Pages/Scope';
import Committee from './Pages/Committee';
import Places from './Pages/Places';
import Accommodation from './Pages/Accommodation';
import PaperSubmission from './Pages/PaperSubmission';
import Sponsors from './Pages/Sponsors';
import ProgramSchedule from './Pages/ProgramSchedule';
import CallForPapers from './Pages/CallForPapers';
import Themes from './Pages/Themes';
import Publication from './Pages/Publication';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/imp-dates" element={<ImpDates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/places" element={<Places />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/program-schedule" element={<ProgramSchedule />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
