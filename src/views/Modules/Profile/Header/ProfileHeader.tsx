import AvatarComponent from "@/components/Avatar/Avatar";
import ListComponent from "@/components/List/List";
import ListItemComponent from "@/components/List/ListItem";
import { RootState } from "@/redux/store/store";
import { Grid, ListItemText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const user = useSelector((state: RootState) => state?.auth?.user);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="flex justify-center items-center"
      >
        <AvatarComponent
          sx={{
            width: "100px",
            height: "100px",
            fontSize: "3rem",
            backgroundColor: "#3f51b5",
            color: "#fff",
          }}
        >
          {user?.username?.charAt(0).toUpperCase()}
        </AvatarComponent>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ListComponent>
          <ListItemComponent>
            <ListItemText primary="Kullanıcı Adı" secondary={user?.username} />
          </ListItemComponent>

          <ListItemComponent>
            <ListItemText primary="Email" secondary={user?.email} />
          </ListItemComponent>
          <ListItemComponent>
            <ListItemText
              primary="Biografi"
              secondary={
                user?.biography
                  ? user?.biography
                  : "Biografi bilgisi bulunmuyor."
              }
            />
          </ListItemComponent>
        </ListComponent>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
