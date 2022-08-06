import {
  SET_USER_DETAILS
} from '../ActionTypes';

let initialState = { 
  isLoading: true,
  userData: null
};

const user = (state = initialState, action) => {
switch (action.type) {

  case SET_USER_DETAILS:
    return {
      ...state,
      isLoading: false,
      userData: action.data
    }

  default:
    return state;
} 
}

export default user;