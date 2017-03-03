import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Destination from './Destination';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card text="250" />
        <Destination />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
