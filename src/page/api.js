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
    url: apiUrl + '/commentsbymovie/' + movie._id,
    method: 'GET'
  })
}

export const updateCommentLike = (user, id, likes) => {
  return axios({
    url: apiUrl + '/commentslike/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      likes
    }
  })
}

export const updateCommentUnlike = (user, id, unlikes) => {
  return axios({
    url: apiUrl + '/commentsunlike/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      unlikes
    }
  })
}

export const getComment = (id) => {
  return axios({
    url: apiUrl + '/comments/' + id,
    method: 'GET'
  })
}

export const createMovie = (user, movie) => {
  return axios({
    contentType: false,
    url: apiUrl + '/movies',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    processData: false,
    data: movie
  })
}

export const updateMovie = (user, movie, id) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      movie
    }
  })
}

export const deleteMovie = (user, id) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getMoviesByStar = () => {
  return axios({
    url: apiUrl + '/moviesbystar',
    method: 'GET'
  })
}

export const updateAvatar = (user, avatar) => {
  return axios({
    url: apiUrl + '/avatar/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      avatar
    }
  })
}

export const getMoviesByDate = () => {
  return axios({
    url: apiUrl + '/moviesbydate',
    method: 'GET'
  })
}

export const getGames = (user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getGame = (user, id) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
