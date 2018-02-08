import React, { Component } from 'react';
import './App.css';
import HerosList from './containers/heros.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CHARACTERS</h1>
        </header>
        <HerosList />
      </div>
    );
  }
}

export default App;
