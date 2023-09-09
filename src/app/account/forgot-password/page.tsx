"use client";
import ForgotPasswordView from "@/views/Account/ForgotPassword/ForgotPassword";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ForgotPasswordPage = () => {
  const isLogined = useSelector(
    (state: RootState) => state.auth.user.isLogined
  );
  const router = useRouter();
  useEffect(() => {
    if (isLogined) {
      router.push("/profile");
    }
  }, [isLogined]);
  return <ForgotPasswordView />;
};

export default ForgotPasswordPage;
