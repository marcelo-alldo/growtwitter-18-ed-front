import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TweetType from "../../types/TweetType";
import { doGet } from "../../services/api";

const initialState: TweetType[] = []

export const getUserTweet = createAsyncThunk('user/getUserTweet', async (data: {userId: string, token: string}) => {
 
    const response = await doGet(`/tweet/${data.userId}`, data.token)

    return response
})


const userTweetSlice = createSlice({
    name: 'userTweet',
    initialState: { tweet: initialState, loading: false },
    reducers: {
      addUserTweet: (state, action: PayloadAction<TweetType>) => {
        state.tweet.push({ ...action.payload });
        return state;
      },
    },
    extraReducers(builder) {
      builder.addCase(getUserTweet.fulfilled, (state, action) => {
        console.log('PAYLOAD', action.payload);
        state.tweet = action.payload;
        state.loading = false;
        return state;
      });
      builder.addCase(getUserTweet.pending, state => {
        state.loading = true;
        return state;
      });
      builder.addCase(getUserTweet.rejected, state => {
        console.log('DEU RUIMMMMM');
        state.loading = false;
        return state;
      });
    },
  });

  export const {addUserTweet} = userTweetSlice.actions
  export default userTweetSlice.reducer






