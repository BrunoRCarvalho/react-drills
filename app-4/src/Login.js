import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      Username: '',
      Password: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }
  handleUsername (val) {
    this.setState({Username: val})
  }
  handlePassword (val) {
    this.setState({Password: val})
  }
  loginButton () {
    alert('Username: ' + this.state.Username + ' Password: ' + this.state.Password)
  }

  render () {
    return (
      <div>
        <input className='username' onChange={e => this.handleUsername(e.target.value)} />
        <input className='password' onChange={e => this.handlePassword(e.target.value)} />
        <button className='login' onClick={this.loginButton}>Login</button>
      </div>
    )
  }
}

export default Login
