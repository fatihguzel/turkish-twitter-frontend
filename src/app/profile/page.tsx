"use client";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const isLogined = useSelector(
    (state: RootState) => state?.auth?.user?.isLogined
  );
  const router = useRouter();
  useEffect(() => {
    if (!isLogined) {
      router.push("/account/login");
    }
  }, [isLogined]);

  return <div>Profil Sayfası</div>;
};

export default ProfilePage;
