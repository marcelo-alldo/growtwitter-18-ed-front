import { combineReducers } from '@reduxjs/toolkit';
import tweetsSlice from './tweetsSlice';
import userTweetsSlice from './userTweetsSlice';
import loginSlice from './loginSlice';

export default combineReducers({
  tweets: tweetsSlice,
  userTweet: userTweetsSlice,
  userLogin: loginSlice,
});
