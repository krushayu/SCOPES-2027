import React from 'react';
import '../styles/Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics-page">

      <div className="analytics-uni-header">
        <img src="/CUTMLOGO.png" alt="CUTM Logo" className="analytics-uni-logo" />
        <div className="analytics-uni-text">
          <h2>Centurion University of Technology and Management</h2>
          <p>Paralakhemundi, Odisha, India</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card wide">
          <h3>🌍 Country-wise Visitors</h3>
          <div className="flag-counter-center">
            <a href="http://s05.flagcounter.com/more/xLj1">
              <img
                src="https://s05.flagcounter.com/count2/xLj1/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_20/viewers_0/labels_1/pageviews_1/flags_1/percent_1/"
                alt="Flag Counter"
                style={{ border: 0 }}
              />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Analytics;
