import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/configs/axiosBase";

export const loginAction = createAsyncThunk("loginAction/auth", async ({}) => {
  const res = await axiosInstance.post(
    `${process.env.REACT_APP_API_URL}/api/auth/login`,
    {}
  );
  return res.data;
});
