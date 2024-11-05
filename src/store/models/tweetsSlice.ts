import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import TweetType from '../../types/TweetType';
import { doGet } from '../../services/api';

const initialState: TweetType[] = [];

export const getTweetsFromRedux = createAsyncThunk('tweets/getTweets', async (token: string) => {
  const response = await doGet('/tweet', token);

  return response;
});

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: { tweets: initialState, loading: false },
  reducers: {
    addTweets: (state, action: PayloadAction<TweetType>) => {
      state.tweets.push({ ...action.payload });
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTweetsFromRedux.fulfilled, (state, action) => {
      state.tweets = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getTweetsFromRedux.pending, state => {
      state.loading = true;
      return state;
    });
    builder.addCase(getTweetsFromRedux.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
      return state;
    });
  },
});

export const { addTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
