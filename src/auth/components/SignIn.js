import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      token: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => {
        setUser(res.data.user)
        this.setState({ token: res.data.user.token })
        return res.data.user.isAdmin
      })
      .then((admin) => {
        alert(messages.signInSuccess, 'success')
        return admin
      })
      .then((admin) => {
        if (admin) {
          history.push('/dashboard')
        } else {
          history.push('/')
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={this.onSignIn}>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            required
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">Sign In</button>
                        <hr />
                        { /* <a href="index.html" className="google btn btn-user btn-block">
                          <i className="fab fa-google fa-fw"></i> Login with Google
                        </a>
                        <a href="index.html" className="facebook btn btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                        </a> */ }
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to='/sign-up' className="small">Create an Account!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
