import React, { Component, Fragment } from 'react'
import MovieListWithDelete from './MovieListWithDelete'

class Favorite extends Component {
  render () {
    const { user, setUser } = this.props
    return (
      <Fragment>
        {user.favorite.length
          ? <div className='container'>
            <div className='row'>
              { user.favorite.map(movie => (
                <MovieListWithDelete
                  key={movie._id}
                  movie={movie}
                  user={user}
                  isFavorite={true}
                  setUser={setUser}/>
              ))}
            </div>
          </div>
          : <h1>No Favorite</h1>}
      </Fragment>
    )
  }
}

export default Favorite
