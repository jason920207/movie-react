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
