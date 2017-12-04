import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render () {
    let arrDisplay = this.state.arr.map((el) => {
      return (
        <h2>{ el }</h2>
      )
    })
    return (
      <div className='App'>
        {arrDisplay}
      </div>
    )
  }
}

export default App
