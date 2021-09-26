import React from 'react';
import './style/App.css';

import Header from './components/Header'
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <Header title={'Magic Quadrant Chart'}/>
      <Container/>
    </div>
  );
}

export default App;
