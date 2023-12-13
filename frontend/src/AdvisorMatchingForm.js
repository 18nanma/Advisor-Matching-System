import React, { useState } from 'react';
import Loader from './Loader';
import './AdvisorMatching.css';

const AdvisorMatchingForm = ({handleProfData}) => {
  const [formData, setFormData] = useState({
    researchInterests: '',
    paperTitles: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the formData to your backend server
    // the commented code below is to call the Loader component
//     setIsLoading(true);
  
//   // Fetch data (simulated with a timeout here)
//     setTimeout(() => {
//         // ...fetching logic...
//         setIsLoading(false);
//         // pass the fetched data to the parent component or handle it as needed
//     }, 2000); 

  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="advisor-matching-form">
        <h1>Advisor Matching System for University Students</h1>
        <p>Please enter your research interests and paper titles in the fields below. These will be used to match you with potential advisors.</p>
        
        <textarea
          name="researchInterests"
          value={formData.researchInterests}
          onChange={handleChange}
          placeholder="Enter your research interests here"
          className="form-textarea"
        />
        
        <textarea
          name="paperTitles"
          value={formData.paperTitles}
          onChange={handleChange}
          placeholder="Enter research paper titles here"
          className="form-textarea"
        />

        <button type="submit" className="submit-btn" onClick={async () => {
          const studentData = {
            "researchInterests": formData.researchInterests,
            "paperTitles": formData.paperTitles
          }
          const response = await fetch('http://localhost:5000/api/student', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log('Success');
            handleProfData(data);
          } else {
            console.log('Error', response.status);
          }
        }}>
          Submit
        </button>
      </form>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="form-container">
          {/* ...your form elements... */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AdvisorMatchingForm;
