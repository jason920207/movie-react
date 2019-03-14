import React, { Component } from 'react'
import { getMovies } from '../../api'
import HomeMovieList from './HomeMovieList'

class Movies extends Component {
  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    getMovies()
      .then(res => this.setState({ movies: res.data.movies }))
  }

  render () {
    const { movies } = this.state
    if (!movies) {
      return (
        <h1>Loading</h1>
      )
    }

    return (
      <div className='row'>
        { movies.map((movie) => (
          <HomeMovieList
            key={movie._id}
            movie={movie}/>
        ))
        }
      </div>
    )
  }
}

export default Movies
