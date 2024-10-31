import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as jwt from 'jsonwebtoken';

interface LoginSliceType {
  token: string;
  email: string;
  id: string;
}

const initalState: LoginSliceType = {
  email: '',
  id: '',
  token: ''
}

const loginSlice = createSlice({
  name: 'userLogin',
  initalState,
  reducers: {
    addLoginUser: (state, action: PayloadAction<LoginSliceType>) => {
      state = action.payload;
    },
    logoutUser: (state) => {
      state = ''
    } 

  }
})