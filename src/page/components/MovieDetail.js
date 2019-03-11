import React, { Component, Fragment } from 'react'
import Moment from 'react-moment'
import { withRouter } from 'react-router-dom'
import { updateFavorite, getUser, updateWishlist } from '../api'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'

class MovieDetail extends Component {
  constructor (props) {
    super(props)
    this.state = null
    this.addFavorite = this.addFavorite.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
    this.addWishlist = this.addWishlist.bind(this)
    this.deleteWishlist = this.deleteWishlist.bind(this)
    this.likeButton = this.likeButton.bind(this)
  }

  addFavorite () {
    const { setUser, alert, history, user, movie } = this.props
    const movieInList = user.favorite.filter((movie1) => movie1._id === movie._id)
    console.log(movieInList)
    if (!movieInList.length) {
      const favorite = [...user.favorite, movie._id]
      updateFavorite(user, favorite)
        .then(() => getUser(user))
        .then(res => setUser(res.data.user))
        .then(() => alert('Add to Favorite success'))
        .then(() => history.push(`/movies/${movie._id}`))
    }
  }

  addWishlist () {
    const { setUser, alert, history, movie, user } = this.props
    const movieInList = user.wishlist.filter((movie1) => movie1._id === movie._id)
    console.log(movieInList)
    if (!movieInList.length) {
      const wishlist = [...user.wishlist, movie._id]
      updateWishlist(user, wishlist)
        .then(() => getUser(user))
        .then(res => setUser(res.data.user))
        .then(() => alert('Add to Wish List Success'))
        .then(() => history.push(`/movies/${movie._id}`))
    }
  }

  likeButton () {
    const { movie, user } = this.props
    const newfavorite = user.favorite.filter((fav) => fav._id === movie._id)
    const newwishlist = user.wishlist.filter((wish) => wish._id === movie._id)
    console.log(newfavorite)
    console.log(newwishlist)
    return (
      <Fragment>
        { newfavorite.length
          ? (<IconButton aria-label="Add to favorites" onClick={this.deleteFavorite} color="secondary">
            <FavoriteIcon />
          </IconButton>)
          : (<IconButton aria-label="Add to favorites" onClick={this.addFavorite}>
            <FavoriteIcon />
          </IconButton>)
        }
        { newwishlist.length
          ? <button className="btn btn-danger" onClick={this.deleteWishlist}>Remove From Wishlist</button>
          : <button className="btn btn-primary" onClick={this.addWishlist}>Add To Wishlist</button>
        }

      </Fragment>
    )
  }

  deleteFavorite () {
    const { movie, user, setUser, history } = this.props
    console.log('favorite')
    console.log(user)
    console.log(movie._id)
    console.log('favorite before', user.favorite)
    const newFavorite = user.favorite.filter((favmovie) => favmovie._id !== movie._id)
    console.log('favorite after', newFavorite)
    updateFavorite(user, newFavorite)
      .then(() => getUser(user))
      .then(res => setUser(res.data.user))
      .then(() => history.push(`/movies/${movie._id}`))
  }

  deleteWishlist () {
    const { movie, user, setUser, history } = this.props
    const newWishlist = user.wishlist.filter((wishlist) => wishlist._id !== movie._id)
    updateWishlist(user, newWishlist)
      .then(() => getUser(user))
      .then(res => setUser(res.data.user))
      .then(() => history.push(`/movies/${movie._id}`))
  }

  render () {
    const { movie } = this.props

    return (
      <main>
        <div className='moviedetail text-white'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-3 p-4">
                <img src={movie.imageUrl} className="img-thumbnail" alt={movie.title} />
              </div>
              <div className="col-md-9 p-4">
                <h1>{movie.title}(<Moment format="YYYY">{movie.publishDate}</Moment>)</h1>
                {this.props.user ? this.likeButton() : ''}
              </div>
            </div>
          </div>
        </div>
        <div className="container dark-grey-text mt-5">
          <div className="row wow fadeIn ">
            <div className ='col-md-8 col-sm-12 '>
              <p className="lead font-weight-bold">Description</p>
              <p>{ movie.description }</p>
              <div className ='row'>
                <div className="row d-flex justify-content-center wow fadeIn">
                  <div className="col-md-6">
                    <h4 className="my-4 h4">Additional information</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
                      voluptates,
                      quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </main>
    )
  }
}

export default withRouter(MovieDetail)
