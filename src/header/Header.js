import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <li className="nav-item active">
      <Link className="nav-link" to="/change-password">Change Password</Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/sign-out">Sign Out</Link>
    </li>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <li className="nav-item active">
      <Link className="nav-link" to="/sign-up">Sign Up</Link>
    </li>
    <li className="nav-item active">
      <Link to="/sign-in" className="nav-link">Sign In</Link>
    </li>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <li className="nav-item active">
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li className="nav-item active">
      <Link to="/movies" className="nav-link">Movies</Link>
    </li>
  </React.Fragment>
)

class Header extends Component {
  constructor () {
    super()
    this.state = null
  }

  render () {
    const { user, bgColor, navColor } = this.props
    return (
      <header className="main-header">
        { user && <span>Welcome, {user.email}</span>}
        <Navbar bg={bgColor} variant={navColor} expand="lg">
          <Link to='/'><Navbar.Brand>Movie-React</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              { alwaysOptions }
            </Nav>
            {/* (<Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-success">Search</Button>
             </Form> */}
            <Nav className="ml-auto">
              { user ? authenticatedOptions : unauthenticatedOptions }
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span><FontAwesomeIcon icon={faCogs} /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <h6>navbar color</h6>
                <hr />
                <button className='btn btn-dark btn-circle btn-lg' onClick={() => this.props.setColor('dark', 'dark')}></button>
                <button className='btn btn-primary btn-circle btn-lg' onClick={() => this.props.setColor('primary', 'dark')}></button>
                <button className='btn btn-light btn-circle btn-lg' onClick={() => this.props.setColor('light', 'light')}></button>
              </Dropdown.Menu>

            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </header>)
  }
}

export default Header
