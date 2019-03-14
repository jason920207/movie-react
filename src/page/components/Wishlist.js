import React, { Component, Fragment } from 'react'
import MovieListWithDelete from './MovieListWithDelete'

class Wishlist extends Component {
  render () {
    const { user, setUser } = this.props
    return (
      <Fragment>
        {user.wishlist.length
          ? <Fragment>{ user.wishlist.map(movie => (
            <MovieListWithDelete
              key={movie._id}
              movie={movie}
              user={user}
              isWishlist={true}
              setUser={setUser}/>
          ))}
          </Fragment>
          : <h1>No Wishlist</h1>}
      </Fragment>
    )
  }
}

export default Wishlist
