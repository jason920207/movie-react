import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (

      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form className="user" onSubmit={this.onSignUp}>
                    <div className="form-group">
                      <input
                        required
                        name="email"
                        className="form-control form-control-user"
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          required
                          className="form-control form-control-user"
                          name="password"
                          value={password}
                          type="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          required
                          className="form-control form-control-user"
                          name="passwordConfirmation"
                          value={passwordConfirmation}
                          type="password"
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">Sign Up</button>
                    <hr />
                    <a href="index.html" className="btn google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="index.html" className="btn facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link to='/sign-in' className="small">Already have an account? Login!</Link>
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

export default withRouter(SignUp)
