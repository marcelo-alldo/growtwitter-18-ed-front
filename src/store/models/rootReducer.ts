import { combineReducers } from '@reduxjs/toolkit';
import tweetsSlice from './tweetsSlice';
import userTweetsSlice from './userTweetsSlice';
import loginSlice from './loginSlice';
import replySlice from './replySlice';

export default combineReducers({
  tweets: tweetsSlice,
  userTweet: userTweetsSlice,
  userLogin: loginSlice,
  reply: replySlice,
});
