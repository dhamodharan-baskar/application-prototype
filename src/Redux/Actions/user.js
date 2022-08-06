import {
  SET_USER_DETAILS
} from '../ActionTypes'
import axios from 'axios'

export const getUserData = (userId) => {
  return (dispatch) => {
    return axios.get(`http://localhost:3001/users/1`,).then((response) => {
      if (response.data) {
        dispatch(setUserData(response.data));
      }
    })
  }
};

export const setUserData = (data) => {
return {
  type: SET_USER_DETAILS ,
  data
}
}
