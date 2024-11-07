import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPost } from '../../services/api';

interface LoginType {
  email: string;
  password: string;
}

interface UserSliceType {
  token: string;
  id: string;
}

const initialState: UserSliceType = { token: '', id: '' };

export const userLogin = createAsyncThunk('users/userLogin', async (data: LoginType) => {
  try {
    const response = await doPost('/auth', { email: data.email, password: data.password }, '');

    if (response.success) {
      return response;
    }

    return response;
  } catch (error) {
    return error;
  }
});

const loginSlice = createSlice({
  name: 'userLogin',
  initialState: { user: initialState, loading: false },
  reducers: {
    logoutUser: state => {
      state.user = initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      if (action.payload?.data?.token) {
        state.user.token = action.payload.data.token;
        state.user.id = action.payload.data.id;
      } else {
        console.error('Erro de autenticação:', action.payload?.msg || 'Erro desconhecido');
      }
      state.loading = false;
    });

    builder.addCase(userLogin.rejected, state => {
      console.log('DEU RUIM');
      state.loading = false;
    });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
