import React, { Component } from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <Clock now={new Date()} />
    );
  }
}

export default App;
