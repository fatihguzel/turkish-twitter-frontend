import axiosBase from "@/config/axiosBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authTypes } from "@/types/apiTypes";
import { LoginDto } from "@/dtos/auth/login/login";

const loginAction = createAsyncThunk(
  "loginAction/auth",
  async (data: LoginDto) => {
    const res = await axiosBase.post(`${authTypes.LOGIN}`, {
      ...data,
    });

    return res?.data;
  }
);

const logoutAction = createAsyncThunk("logoutAction/auth", async () => {
  const res = await axiosBase.get(`${authTypes.LOGOUT}`);

  return res?.data;
});

const getProfileAction = createAsyncThunk("getProfileAction/auth", async () => {
  const res = await axiosBase.get(`${authTypes.GET_PROFILE}`);

  return res?.data;
});

export { loginAction, getProfileAction, logoutAction };
