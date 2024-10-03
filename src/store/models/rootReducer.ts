import { combineReducers } from '@reduxjs/toolkit';
import tweetsSlice from './tweetsSlice';
import userTweetsSlice from './userTweetsSlice';

export default combineReducers({
  tweets: tweetsSlice,
  userTweet: userTweetsSlice,
});
