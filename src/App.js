import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Task1 from './components/Task1/Task1'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <GeneralInfo/>
        <Task1/>
        <Task2 />
        <Task3 />
      </div>
    </div>
  );
}

export default App;
