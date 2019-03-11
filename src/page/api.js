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
