import React, { Component, Fragment } from 'react'
import { getMovie } from '../api'
import MovieDetail from './MovieDetail'
import { withRouter } from 'react-router-dom'

class Movie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: null
    }
  }

  componentDidMount () {
    getMovie(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data.movie }))
  }

  render () {
    const { movie } = this.state
    if (!movie) {
      return (
        <h1>Loading ...</h1>
      )
    }

    return (
      <Fragment>
        <MovieDetail movie={movie}/>
      </Fragment>
    )
  }
}

export default withRouter(Movie)
