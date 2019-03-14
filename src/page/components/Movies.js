import React, { Component, Fragment } from 'react'
import { getMovies, getMoviesByStar, getMoviesByDate } from '../api'
import MovieList from './MovieList'
import { Item, Divider, Header, Icon } from 'semantic-ui-react'
import Star from './Star'
// import YoutubeComponent from './YoutubeComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

class Products extends Component {
  constructor () {
    super()
    this.state = {
      movies: null,
      sideMovies: null,
      bestMovies: null,
      moviesByDate: null
    }
    this.onClickTopMovie = this.onClickTopMovie.bind(this)
    this.onClickMovieByDate = this.onClickMovieByDate.bind(this)
  }

  componentDidMount () {
    getMovies()
      .then(res => this.setState({ movies: res.data.movies }))

    getMoviesByStar()
      .then(res => {
        this.setState({ sideMovies: res.data.movies })
        this.setState({ bestMovies: res.data.movies })
      })

    getMoviesByDate()
      .then(res => this.setState({ moviesByDate: res.data.movies }))
  }

  onClickTopMovie () {
    this.setState({ sideMovies: this.state.bestMovies })
  }

  onClickMovieByDate () {
    this.setState({ sideMovies: this.state.moviesByDate })
  }

  render () {
    const { movies, sideMovies } = this.state
    if (!movies || !sideMovies) {
      return (
        <h1>Loading</h1>
      )
    }

    return (
      <div className='container'>
        <Header as='h2' icon textAlign='center'>
          <Icon name='film' circular />
          <Header.Content>MOVIE</Header.Content>
        </Header>
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
            <a onClick={this.onClickTopMovie}><FontAwesomeIcon icon={faFilm} /> Top 10 Movie/ </a>
            <a onClick={this.onClickMovieByDate}><FontAwesomeIcon icon={faFilm} /> Sort By Date </a>
            <Divider />
            { sideMovies.map((movie) => (
              <Fragment key={movie._id}>
                <Item.Group divided unstackable>
                  <Item>
                    <Item.Image src={movie.imageUrl} />
                  </Item>
                  <h4>{movie.title}</h4>
                  <Star imdbRating={movie.imdbRating} />
                </Item.Group>
              </Fragment>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Products
