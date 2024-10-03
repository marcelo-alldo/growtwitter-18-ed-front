import { combineReducers } from '@reduxjs/toolkit';
import userTweetsSlice from './userTweetsSlice';

export default combineReducers({
  userTweet: userTweetsSlice
});
