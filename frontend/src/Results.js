import React from 'react';
import './Results.css';

const Results = ({ profData }) => {
  return (
    <div className="results-container">
      <h2>The top 5 professors that would be a great fit as your advisors are:</h2>
      <div className="cards-container">
        {profData.map((prof, index) => (
          <div key={index} className="prof-card">
            <p>{prof.profname}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
