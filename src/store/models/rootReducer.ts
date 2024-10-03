import { combineReducers } from '@reduxjs/toolkit';
import tweetsSlice from './tweetsSlice';

export default combineReducers({
  tweets: tweetsSlice,
});
