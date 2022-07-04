import logo from './logo.svg';
import './App.css';
import Menu from './Componentes/Menu';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Menu>
         <ul>
          <li> Home</li>
          <li> Products</li>
          <li> Contact us</li>
        </ul>
      </Menu>

    </div>
  );
}

export default App;
