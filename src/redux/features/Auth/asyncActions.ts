import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/configs/axiosBase";
import { loginProps } from "../../../views/Login/Models/loginModel";

export const loginAction = createAsyncThunk(
  "loginAction/auth",
  async (loginData: loginProps) => {
    const res = await axiosInstance.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      loginData
    );
    return res.data;
  }
);
