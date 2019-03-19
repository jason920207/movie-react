import React, { Component, Fragment } from 'react'
import { getMovies, getMoviesByStar, getMoviesByDate } from '../api'
import MovieList from './MovieList'
import { Item, Divider, Header, Icon, Pagination } from 'semantic-ui-react'
import Star from './Star'
// import YoutubeComponent from './YoutubeComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'

class Products extends Component {
  constructor () {
    super()
    this.state = {
      movies: null,
      moviesSelect: null,
      sideMovies: null,
      bestMovies: null,
      moviesByDate: null,
      totalPages: 10,
      activePage: 1,
      moviesPerPage: 15
    }
    this.onClickTopMovie = this.onClickTopMovie.bind(this)
    this.onClickMovieByDate = this.onClickMovieByDate.bind(this)
    this.handlePaginationChange = this.handlePaginationChange.bind(this)
  }

  componentDidMount () {
    getMovies()
      .then(res => this.setState({ movies: res.data.movies, totalPages: parseInt(res.data.movies.length / this.state.moviesPerPage) + 1 }))

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

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage })
  }

  render () {
    const { movies, sideMovies, totalPages, activePage, moviesPerPage } = this.state
    if (!movies || !sideMovies) {
      return (
        <h1>Loading</h1>
      )
    }
    const indexOfLastTodo = activePage * moviesPerPage
    const indexOfFirstTodo = indexOfLastTodo - moviesPerPage
    const currentMovies = movies.slice(indexOfFirstTodo, indexOfLastTodo)

    return (
      <div className='container'>
        <Header as='h2' icon textAlign='center'>
          <Icon name='film' circular />
          <Header.Content>MOVIE</Header.Content>
        </Header>
        <div className='row'>
          <div className='col-md-9 col-sm-12'>
            { currentMovies.map((movie) => (
              <MovieList
                key={movie._id}
                movie={movie}/>
            ))
            }
            <Pagination
              totalPages={totalPages}
              activePage={activePage}
              onPageChange={this.handlePaginationChange} />
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
                  <h5>Publish Date:<Moment format="YYYY-MM-DD">{movie.publishDate}</Moment></h5>
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
