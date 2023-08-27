import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "@/redux/features/Auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export default store;
