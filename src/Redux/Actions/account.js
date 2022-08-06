import {
UPDATE_USER_BALANCE,
UPDATE_USER_STATEMENT
} from '../ActionTypes'
import axios from 'axios'

export const getUserBalance = (userId) => {
return (dispatch) => {
return axios.get(`http://localhost:3001/users/${userId}/balances`,).then((response) => {
if (response.data) {
  dispatch(setUserBalance(response.data));
}
})
}
};

export const setUserBalance = (data) => {
return {
type: UPDATE_USER_BALANCE ,
data
}
}

export const getUserStatement = (userId) => {
return (dispatch) => {
return axios.get(`http://localhost:3001/users/${userId}/statement`,).then((response) => {
  if (response.data) {
    dispatch(setUserStatement(response.data));
  }
})
}
};

export const setUserStatement = (data) => {
return {
type: UPDATE_USER_STATEMENT ,
data
}
}