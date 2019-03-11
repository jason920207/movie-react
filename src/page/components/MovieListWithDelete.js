import React, { Component, Fragment } from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateWishlist, updateFavorite, getUser } from '../api'

class ListWithDelete extends Component {
  constructor (props) {
    super(props)
    this.state = null
    this.onDelete = this.onDelete.bind(this)
  }

  onDelete () {
    const { isFavorite, isWishlist, movie, user, setUser } = this.props
    if (isFavorite) {
      console.log('favorite')
      console.log(user)
      console.log(movie._id)
      console.log('favorite before', user.favorite)
      const newFavorite = user.favorite.filter((favmovie) => favmovie._id !== movie._id)
      console.log('favorite after', newFavorite)
      updateFavorite(user, newFavorite)
        .then(() => getUser(user))
        .then(res => setUser(res.data.user))
        .then(() => console.log('success'))
    }

    if (isWishlist) {
      console.log('wishlist')
      console.log(movie._id)
      console.log('favorite before', user)
      const newWishlist = user.wishlist.filter((wishlist) => wishlist._id !== movie._id)
      updateWishlist(user, newWishlist)
        .then(() => getUser(user))
        .then(res => setUser(res.data.user))
        .then(() => console.log('success'))
    }
  }

  render () {
    const { movie } = this.props
    return (
      <Fragment>
        <div className="col-md-6 col-sm-12">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={movie.imageUrl} className="card-img pt-2 pl-2" alt={movie.title} />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="col-md-1">
                <button className='btn btn-danger' onClick={this.onDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ListWithDelete
