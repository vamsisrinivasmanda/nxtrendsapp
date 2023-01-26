import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  inputChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFormData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdate = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdate),
    }
    const response = await fetch(url, options)
    // const data = await response.json()
    // console.log(response.error)
    if (username !== '' && password !== '') {
      if (response.ok === true) {
        this.submitSucess()
        this.setState({username: '', password: '', error: ''})
      } else {
        this.setState({error: "*Username and Password didn't match"})
      }
    } else if (username === '' && password === '') {
      this.setState({error: 'Enter Username and Password'})
    } else if (username === '') {
      this.setState({error: '*Enter the Username '})
    } else if (password === '') {
      this.setState({error: '*Enter the password '})
    }
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <div className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.submitFormData}>
            <label className="username" htmlFor="myinput">
              USERNAME
            </label>
            <input
              className="input-username"
              id="myinput"
              placeholder="Username"
              type="text"
              value={username}
              onChange={this.inputChange}
            />
            <label className="password" htmlFor="mypassword">
              PASSWORD
            </label>
            <input
              id="mypassword"
              className="input-password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.passwordChange}
            />

            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-msg">{error}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
