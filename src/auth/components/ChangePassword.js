import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">Change Your Password?</h1>
                      </div>
                      <form className='user' onSubmit={this.onChangePassword}>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            required
                            name="oldPassword"
                            value={oldPassword}
                            type="password"
                            placeholder="Old Password"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            required
                            name="newPassword"
                            value={newPassword}
                            type="password"
                            placeholder="New Password"
                            onChange={this.handleChange}
                          />
                        </div>
                        <button type="submit" className='btn btn-primary btn-user btn-block'>Change Password</button>
                      </form>
                      <hr />
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

export default withRouter(ChangePassword)
