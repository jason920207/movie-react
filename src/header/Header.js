import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faUser, faHeart, faListAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { Icon } from 'semantic-ui-react'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = null
  }

  authenticatedOptions = () => (
    <React.Fragment>
      <li className="nav-item active">
        <Link className="nav-link" to="/change-password"><Icon name='address card'/>Change Password</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/sign-out"><Icon name='sign-out'/>Sign Out</Link>
      </li>
    </React.Fragment>
  )

  userOptions = (user) => (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <span><FontAwesomeIcon icon={faUser} /></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey='1'><Link to={`/${user._id}/changeAvatar`}><FontAwesomeIcon icon={faUser} /> Avatar</Link></Dropdown.Item>
        <Dropdown.Item eventKey='2'><Link to={`/${user._id}/favorites`}><FontAwesomeIcon icon={faHeart} /> Favorite</Link></Dropdown.Item>
        <Dropdown.Item eventKey='3'><Link to={`/${user._id}/wishlists`}><FontAwesomeIcon icon={faListAlt} /> Wishlist</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

  unauthenticatedOptions = (
    <React.Fragment>
      <li className="nav-item active">
        <Link className="nav-link" to="/sign-up"><Icon name='edit'/>Sign Up</Link>
      </li>
      <li className="nav-item active">
        <Link to="/sign-in" className="nav-link"><Icon name='sign-in'/>Sign In</Link>
      </li>
    </React.Fragment>
  )

  alwaysOptions = (
    <React.Fragment>
      <li className="nav-item active">
        <Link to="/" className="nav-link"><Icon name='home'/>Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/movies" className="nav-link"><Icon name='film'/>Movies</Link>
      </li>
      <li className="nav-item active">
        <Link to="/yelpsearch" className="nav-link"><Icon name='film'/>Search Theater</Link>
      </li>
    </React.Fragment>
  )

  render () {
    const { user, bgColor, navColor } = this.props
    const { authenticatedOptions, unauthenticatedOptions, alwaysOptions, userOptions } = this
    return (
      <header className="main-header mb-3">
        <Navbar bg={bgColor} variant={navColor} expand="lg">
          <Link to='/'><Navbar.Brand>React-IMBa</Navbar.Brand></Link>
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
              { user ? authenticatedOptions(user) : unauthenticatedOptions }
            </Nav>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              { user ? userOptions(user) : '' }
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
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>)
  }
}

export default Header
