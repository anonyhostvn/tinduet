import React from 'react';
import './App.css';
import BasicLayout from "../Layout/BasicLayout";
import MatchingPlace from "../container/MatchingPlace";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <MatchingPlace/>
      </BasicLayout>
    </div>
  );
}

export default App;
