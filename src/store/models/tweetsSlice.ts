import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import TweetType from '../../types/TweetType';
import { doGet } from '../../services/api';

export const getTweetsFromRedux = createAsyncThunk('tweets/getTweets', async () => {
  const response = await doGet('/tweets', '');
  console.log(response);

  return [];
});

const initialState: TweetType[] = [];

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: { tweets: initialState },
  reducers: {
    addTweets: (state, action: PayloadAction<TweetType>) => {
      state.tweets.push({ ...action.payload });
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTweetsFromRedux.fulfilled, (state, action) => {
      state.tweets = action.payload;
      return state;
    });
    builder.addCase(getTweetsFromRedux.rejected, state => {
      console.log('DEU RUIM');
      return state;
    });
  },
});

export const { addTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;
