import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TweetType from '../../types/TweetType';
import { doPost } from '../../services/api';

const initialState: { data: TweetType[] } = { data: [] };

export const postReplyFromRedux = createAsyncThunk(
  'reply/postReply',
  async ({ token, tweetId, content }: { token: string; tweetId: string; content: string }) => {
    const response = await doPost(`/replies`, { content, tweetId }, token);

    return response;
  },
);

const replySlice = createSlice({
  name: 'reply',
  initialState: { reply: initialState, loading: false },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postReplyFromRedux.fulfilled, (state, action) => {
      state.reply = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(postReplyFromRedux.pending, state => {
      state.loading = true;
      return state;
    });
    builder.addCase(postReplyFromRedux.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
      return state;
    });
  },
});

export default replySlice.reducer;
