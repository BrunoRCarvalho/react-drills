import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      display: ''
    }
    this.displayHandler = this.displayHandler.bind(this)
    this.addTasks = this.addTasks.bind(this)
  }

  displayHandler (val) {
    this.setState({display: val})
  }

  addTasks () {
   this.setState({
     tasks: [...this.state.tasks, this.state.display],
     input: ''
   })
  }

  render () {
    let list = this.state.tasks.map(el => {
      return (
        <h1>{ el }</h1>
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={event => this.displayHandler(event.target.value)} />
        <button onClick={this.addTasks}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
