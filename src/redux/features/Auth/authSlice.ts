import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "./asyncActions";

import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/components/helper/Toast/toastHelper";

const initialState = {
  token: null,
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { type, payload }) => {
      state.token = payload.data;
      state.isAuth = true;
      toastSuccessNotify("Giriş Yapıldı!");
    });

    builder.addCase(loginAction.rejected, (state, { type, payload }) => {
      toastErrorNotify(`${payload}`);
      state.isAuth = false;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
