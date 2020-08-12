import React from 'react';

import FirstRectangleContainer from './components/firstRectangle/firstRectangleContainer/firstRectangleContainer'
import SecondRectangleContainer from './components/secondRectangle/secondRectangleContainer/secondRectangleContainer'
import ThirdRectangleContainer from './components/thidrRectangle/thirdRectangleContainer/thirdRectangleContainer'
import FourthRectangleContainer from './components/fourthRectangle/fourthRectangleContainer/fourthRectangleContainer'
import FifthRectangleContainer from './components/fifthRectangle/fifthRectangleContainer/fifthRectangleContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstRectangleContainer />
      <SecondRectangleContainer />
      <ThirdRectangleContainer />
      <FourthRectangleContainer />
      <FifthRectangleContainer />
    </div>
  );
}

export default App;
