"use client";
import RegisterView from "@/views/Account/Register/Register";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const isLogined = useSelector(
    (state: RootState) => state.auth.user.isLogined
  );
  const router = useRouter();
  useEffect(() => {
    if (isLogined) {
      router.push("/profile");
    }
  }, [isLogined]);
  return <RegisterView />;
};

export default RegisterPage;
