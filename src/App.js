import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import AdminRoute from './auth/components/AdminRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Movies from './page/components/Movies'
import Movie from './page/components/Movie'
import Favorite from './page/components/Favorite'
import Wishlist from './page/components/Wishlist'
import Home from './page/components/homepage/Home'

import ChangeAvatar from './page/components/user/ChangeAvatar'

import DashboardNavbar from './page/components/dashboard/DashboardNavbar'
import Dashboard from './page/components/dashboard/DashboardHome'
import CreateMovieForm from './page/components/dashboard/CreateMovieForm'
import DashboardMovies from './page/components/dashboard/DashboardMovies'
import UpdateMovieForm from './page/components/dashboard/UpdateMovieForm'
import DashboardGame from './page/components/dashboard/DashboardGame'
import GameBoard from './page/components/dashboard/Gameboard'

import YelpSearch from './yelp/components/YelpSearch'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      // favorite: null,
      // wishlist: null,
      bgColor: 'light',
      navColor: 'light'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null, favorite: null, wishlist: null })

  setColor = (bg, nav) => {
    this.setState({ bgColor: bg, navColor: nav })
  }

  // setFavorite = favorite => this.setState({ favorite })
  //
  // setwishlist = wishlist => this.setState({ wishlist })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    const header = () => {
      if (user && user.isAdmin) {
        return <DashboardNavbar />
      } else {
        return <Header user={user} setColor={this.setColor} bgColor={this.state.bgColor} navColor={this.state.navColor} />
      }
    }
    //  {(user && user.isAdmin)
    //     ?  ''
    //     :  <Header user={user} setColor={this.setColor} bgColor={this.state.bgColor} navColor={this.state.navColor} />
    // })
    return (
      <React.Fragment>
        { header() }
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container-fluid">
          <Route path='/sign-up' render={() => (
            <SignUp
              alert={this.alert}
              setUser={this.setUser}/>
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert}
              setUser={this.setUser}/>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route exact path='/movies' render={() => (
            <Movies alert={this.alert} />
          )} />
          <Route path='/movies/:id' render={() => (
            <Movie alert={this.alert} user={user} setUser={this.setUser}/>
          )} />
          <AuthenticatedRoute user={user} path='/:id/favorites' render={() => (
            <Favorite user={user} setUser={this.setUser}/>
          )} />
          <AuthenticatedRoute user={user} path='/:id/wishlists' render={() => (
            <Wishlist user={user} setUser={this.setUser}/>
          )} />
          <AuthenticatedRoute user={user} path='/:id/changeAvatar' render={() => (
            <ChangeAvatar user={user} setUser={this.setUser}/>
          )} />
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/yelpsearch' render={() => (
            <YelpSearch />
          )} />
          <AdminRoute exact user={user} path='/dashboard' render={() => (
            <Dashboard user={user} setUser={this.setUser}/>
          )} />
          <AdminRoute exact user={user} path='/dashboard/createmovie' render={() => (
            <CreateMovieForm user={user} setUser={this.setUser}/>
          )} />
          <AdminRoute exact user={user} path='/dashboard/movies' render={() => (
            <DashboardMovies user={user} setUser={this.setUser}/>
          )} />
          <AdminRoute exact user={user} path='/dashboard/games' render={() => (
            <DashboardGame user={user} setUser={this.setUser}/>
          )} />
          <AdminRoute exact user={user} path='/dashboard/updatemovie/:id' render={() => (
            <UpdateMovieForm user={user} setUser={this.setUser}/>
          )} />
          <AdminRoute exact user={user} path='/dashboard/games/:id' render={() => (
            <GameBoard user={user} setUser={this.setUser}/>
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
