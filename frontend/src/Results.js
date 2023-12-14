import React from 'react';
import './Results.css';
import Illini from './I_symbol.jpg';

const Results = ({ profData, setHome, showResultsPage }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setHome(true);  
    showResultsPage(false);
  };

  return (
    <div className="results-container">
      <img src={Illini} alt="Descriptive Alt Text" className="form-image" />
      <h1>The top 5 professors that would be a great fit as your advisors are:</h1>
      <div className="cards-container">
        {profData.map((prof, index) => (
          <div key={index} className="prof-card">
            <p>{prof.profname}</p>
          </div>
        ))}
      </div>
      <button className="more-info-btn" onClick={handleSubmit} >Go Back Home</button>
    </div>
  );
};

export default Results;
