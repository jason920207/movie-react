import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMovies = () => {
  return axios({
    url: apiUrl + '/movies',
    method: 'get'
  })
}

export const getMovie = (id) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    method: 'get'
  })
}

export const updateFavorite = (user, data) => {
  return axios({
    url: apiUrl + '/favorite/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      'movies': data
    }
  })
}

export const updateWishlist = (user, data) => {
  return axios({
    url: apiUrl + '/wishlist/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      'movies': data
    }
  })
}

export const getUser = (user) => {
  return axios({
    url: apiUrl + '/users/' + user._id,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createComment = (user, movie, text) => {
  return axios({
    url: apiUrl + '/comments',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      comment: {
        text: text,
        movie: movie._id
      }
    }
  })
}

export const getCommentByMovie = (user, movie) => {
  return axios({
    url: apiUrl + '/comments/' + movie._id,
    method: 'GET'
  })
}

export const updateCommentLike = (user, data) => {
  return axios({
    url: apiUrl + '/commentslike/' + data._id,
    method: 'PATCH',
    data
  })
}
