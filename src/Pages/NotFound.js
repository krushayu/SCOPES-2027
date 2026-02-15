import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="nf-simple-wrapper">
      <div className="nf-simple-content">
        <img 
          src="https://assets-v2.lottiefiles.com/a/1903862c-1171-11ee-a446-334bf2f6733e/4glOCZQQRw.gif" 
          alt="404" 
          className="nf-simple-image"
        />
          <Link to="/" className="nf-simple-btn">Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
