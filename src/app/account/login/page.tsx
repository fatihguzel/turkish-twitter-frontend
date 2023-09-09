"use client";
import LoginView from "@/views/Account/Login/Login";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const isLogined = useSelector(
    (state: RootState) => state?.auth?.user?.isLogined
  );
  const router = useRouter();
  useEffect(() => {
    if (isLogined) {
      router.push("/profile");
    }
  }, [isLogined]);

  return <LoginView />;
};

export default LoginPage;
