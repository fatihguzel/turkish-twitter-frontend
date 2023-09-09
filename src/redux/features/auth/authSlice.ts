import { createSlice } from "@reduxjs/toolkit";
import { authSliceDTO } from "@/dtos/slice/slice";
import { getProfileAction, loginAction, logoutAction } from "./asyncActions";
import Cookies from "js-cookie";
import toastHelper from "@/helper/toast/toastHelper";

const initialState: authSliceDTO = {
  user: {
    id: 0,
    username: "",
    email: "",
    isLogined: false,
    isBlocked: false,
    role: "",
    isConfirmed: false,
    confirmCode: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      Cookies.set("AUTH_DATA", JSON.stringify(payload?.data));
      toastHelper().toastSuccessNotify("Giriş Başarılı");
    });

    builder.addCase(loginAction.rejected, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
      toastHelper().toastErrorNotify("Giriş Başarısız");
    });

    builder.addCase(getProfileAction.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      Cookies.set("AUTH_DATA", JSON.stringify(payload?.data));
    });

    builder.addCase(getProfileAction.rejected, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
    });

    builder.addCase(logoutAction.fulfilled, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
      toastHelper().toastSuccessNotify("Çıkış Başarılı");
    });

    builder.addCase(logoutAction.rejected, (state) => {
      state.user = initialState.user;

      Cookies.remove("AUTH_DATA");
      toastHelper().toastErrorNotify("Çıkış Başarısız");
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
