import React, { useState } from 'react';
import './AdvisorMatchingForm.css';

const AdvisorMatchingForm = () => {
  const [interests, setInterests] = useState({
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterests({
      ...interests,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(interests);
    // Here you would typically send the interests to your backend server
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="advisor-matching-form">
        <h1>Advisor Matching System for University Students</h1>
        <p>Please enter your research interests in the fields below. These will be used to match you with potential advisors.</p>
        {[...Array(5)].map((_, index) => (
          <input
            key={`interest${index + 1}`}
            type="text"
            name={`interest${index + 1}`}
            value={interests[`interest${index + 1}`]}
            onChange={handleChange}
            placeholder={`Enter research interest #${index + 1}`}
            className="form-input"
          />
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvisorMatchingForm;
