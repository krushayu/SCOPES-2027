import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />

      <svg
        width="500"
        height="120"
        viewBox="0 0 500 120"
        fill="none"
      >
        <style>
          {`
            @keyframes draw {
              0% {
                stroke-dashoffset: 600;
                fill-opacity: 0;
              }
              100% {
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }
            }

            .cursive-text {
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              animation: draw 2s linear forwards;
            }
          `}
        </style>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="cursive-text"
          fontSize="44"
          fontFamily="'Pacifico', cursive"
          fill="#1e293b"
          stroke="#1e293b"
          strokeWidth="1.2"
        >
          No Content
        </text>
      </svg>
    </div>
  );
};

export default NotFound;