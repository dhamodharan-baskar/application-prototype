import account from './account';
import user from './user';

import { combineReducers } from 'redux'

export default combineReducers({ 
  account,
  user
});