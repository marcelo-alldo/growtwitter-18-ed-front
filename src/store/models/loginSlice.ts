import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPost } from '../../services/api';

interface LoginSliceType {
  email: string;
  password: string;
}

const initialState: string = '';

export const userLogin = createAsyncThunk('users/userLogin', async (data: LoginSliceType) => {
  try {
    const response = await doPost('/auth', { email: data.email, password: data.password }, '');

    if (response.success) {
      return response.data.token;
    }

    return response;
  } catch (error) {
    return error;
  }
});

const loginSlice = createSlice({
  name: 'userLogin',
  initialState: { token: initialState, loading: false },
  reducers: {
    logoutUser: state => {
      state.token = initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(userLogin.pending, state => {
      state.loading = true;
      return state;
    });
    builder.addCase(userLogin.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
      return state;
    });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
