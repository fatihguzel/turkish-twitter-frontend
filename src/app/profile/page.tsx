"use client";
import useCheckAuth from "@/hooks/useCheckAuth";
import React from "react";

const ProfilePage = () => {
  useCheckAuth({
    rootType: "private",
  });

  return <div>Profil Sayfası</div>;
};

export default ProfilePage;
