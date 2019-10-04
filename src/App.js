import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api';


function App() {
  function handleSubmit(){
    console.log('hello word')
  }

  return (
      <div className="container">
        <img src={logo} alt="AirCBNC"/>
        <div className="content">
          <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL*</label>
            <input 
              id="email" 
              type="text" 
              placeholder="Seu melhor email" 
            />
            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
      </div>

  );
}

export default App;
