import apiUrl from '../apiConfig'
import axios from 'axios'

export const postLocation = (data) => {
  return axios({
    url: apiUrl + '/searchtheater',
    method: 'POST',
    data: {
      location: data
    }
  })
}
