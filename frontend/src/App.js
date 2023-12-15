import React, { useState, useEffect } from 'react';
import './App.css';
import AdvisorMatchingForm from './AdvisorMatchingForm';
import Results from './Results';
import Loader from './Loader';

function App() {

  const [profData, setProfData] = useState({});
  const [showResults, showResultsPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHome, setHome] = useState(true);


  const handleProfData = (data) => {
    setProfData(data);
  }

  return (
    <div className="App">
      {!isLoading && isHome && <AdvisorMatchingForm showResultsPage={showResultsPage} handleProfData={handleProfData} setIsLoading={setIsLoading} setHome={setHome}/> }
      {!isLoading && showResults &&
      <div className='results'>
        <Results profData = {[
                        {"profname": profData[0][0]},
                        {"profname": profData[1][0]},
                        {"profname": profData[2][0]},
                        {"profname": profData[3][0]},
                        {"profname": profData[4][0]}
                        ]
                      } setHome={setHome} showResultsPage={showResultsPage} />
      </div> }
      {isLoading && <Loader /> }
    </div>
  );
}

export default App;
