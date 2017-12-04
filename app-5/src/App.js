import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Image newImage={'https://http.cat/409'} />
      </div>
    );
  }
}

export default App;
