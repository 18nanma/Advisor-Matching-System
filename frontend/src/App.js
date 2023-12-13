import React, { useState, useEffect } from 'react';
import './App.css';
import AdvisorMatchingForm from './AdvisorMatchingForm';
import Results from './Results';

function App() {

  const [profData, setProfData] = useState(true);

  const handleProfData = (data) => {
    setProfData(data);
  }

  return (
    <div className="App">
      <AdvisorMatchingForm setProfData={setProfData} handleProfData={handleProfData}/> 
      {profData?
      <div className='results'>
        <Results profData = {[
  {"profname": profData[0]},
  {"profname": profData[1]},
  {"profname": profData[2]},
  {"profname": profData[3]},
  {"profname": profData[4]}
]
} />
      </div> : <p>No results Found</p>}
    </div>
  );
}

export default App;
