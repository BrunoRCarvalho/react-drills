import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: ''
    }
    this.handleDisplay = this.handleDisplay.bind(this)
  }
  handleDisplay (val) {
    this.setState({ display: val })
  }
  render () {
    return (
      <div className="App">
        <input onChange={event => this.handleDisplay(event.target.value)} />
        <h4>{ this.state.display }</h4>
      </div>
    );
  }
}

export default App;
