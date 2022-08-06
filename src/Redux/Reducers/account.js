import {
  UPDATE_USER_BALANCE,
  UPDATE_USER_STATEMENT
} from '../ActionTypes';

let initialState = { 
  userBalance: null,
  statement: [],
  sortType: 'ascending',
  filterType: 'credit'
};

const account = (state = initialState, action) => {
switch (action.type) {

case UPDATE_USER_BALANCE:
  return {
    ...state,
    userBalance: action.data[0],
  }

case UPDATE_USER_STATEMENT:
  let statement = action.data.slice(-5)
  return {
    ...state,
    statement: [...statement],
  }

default:
  return state;
} 
}

export default account;