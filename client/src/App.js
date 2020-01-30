import React from 'react';
import logo from './logo.svg';
import './App.css';
import JwtInstaller from 'react-pwa-installer';

function App() {
  return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
     <JwtInstaller
        icon="https://image.flaticon.com/icons/png/512/223/223203.png"
     />
   </div>
  );
}

export default App;
