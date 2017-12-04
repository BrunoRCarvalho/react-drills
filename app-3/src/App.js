import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
    this.displayHandler = this.displayHandler.bind(this)
  }
  displayHandler (val) {
    this.setState({ display: val })
  }

  render () {
    const arrayDisplay = this.state.arr.map(el => {
      if (el.startsWith(this.state.display)) {
        return (
          <h2>{ el }</h2>
        )
      }
    })
    return (
      <div className="App">
        <input onChange={(el) => this.displayHandler(el.target.value)}/>
        { arrayDisplay }
      </div>
    );
  }
}

export default App;
