import React from 'react';
import Header from './components/Header/Header';
import Visualiser from './components/Visualiser/Visualiser';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Visualiser />
    </React.Fragment>
  );
}

export default App;
