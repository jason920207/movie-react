import React, { Component } from 'react'
import { getMovies } from '../api'
import MovieList from './MovieList'

class Products extends Component {
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-sm-12'>
            { movies.map((movie) => (
              <MovieList
                key={movie._id}
                movie={movie}/>
            ))
            }
          </div>
          <div className='col-md-3'>
            sssadfafdsf
          </div>
        </div>
      </div>
    )
  }
}

export default Products
