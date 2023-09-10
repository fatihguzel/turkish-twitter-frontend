import CardComponent from "@/components/Card/Card";
import React from "react";
import ProfileHeader from "./Header/ProfileHeader";
import { Container } from "@mui/material";
import ProfileBody from "./Body/ProfileBody";

const ProfileView = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "2.5rem",
      }}
    >
      <CardComponent
        className="
            w-full
            min-h-screen
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            "
      >
        <CardComponent
          className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
        >
          <ProfileHeader />
        </CardComponent>

        <CardComponent
          className="
            w-full
            mt-5
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
        >
          <ProfileBody />
        </CardComponent>
      </CardComponent>
    </Container>
  );
};

export default ProfileView;
