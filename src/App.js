import React from 'react';
import PeopleContextProvider from './contexts/PeopleContextProvider'

function App() {
  return (
    <div className="App">
      <h1>Playground</h1>
      <PeopleContextProvider />
    </div>
  );
}

export default App;
