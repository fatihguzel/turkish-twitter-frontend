import ButtonComponent from "@/components/Button/Button";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  Hidden,
  Grid, // Hidden bileşeni için import ekledik
} from "@mui/material";
import React, { useState } from "react";
import { navItems } from "./models/navbar";
import IconComponent from "@/components/Icon/Icon";
import Link from "next/link";
import { AppDispatch } from "@/redux/store/store";
import { useDispatch } from "react-redux";
import {
  getProfileAction,
  logoutAction,
} from "@/redux/features/auth/asyncActions";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const logoutHandler = () => {
    dispatch(logoutAction()).then(() => {
      dispatch(getProfileAction());
    });
  };

  return (
    <>
      <AppBar
        position="static"
        className="
          bg-gray-800
          text-white
          shadow-lg
        "
      >
        <Toolbar>
          <Hidden smDown>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h6">Logo</Typography>
              </Grid>
              <Grid item xs={10}>
                <Grid container justifyContent="flex-end">
                  {navItems.map((item) => (
                    <>
                      {item?.name === "Logout" ? (
                        <ButtonComponent
                          variant="text"
                          color="inherit"
                          className="flex flex-row gap-x-2"
                          onClick={logoutHandler}
                        >
                          <IconComponent icon={item?.icon} />
                          <Typography>{item?.name}</Typography>
                        </ButtonComponent>
                      ) : (
                        <Link href={item?.route}>
                          <ButtonComponent
                            variant="text"
                            color="inherit"
                            className="flex flex-row gap-x-2"
                          >
                            <IconComponent icon={item?.icon} />
                            <Typography>{item?.name}</Typography>
                          </ButtonComponent>
                        </Link>
                      )}
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ ml: "auto" }}
            >
              {/* <MenuIcon /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="white"
                  d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
                />
              </svg>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              width: "30%",
              "@media (max-width: 600px)": {
                width: "50%", // Düşük çözünürlüklerde tam genişlikte açılması için
                flex: 1,
              },
              flex: "none",
            },
          }}
        >
          <List>
            {navItems.map((item) => (
              <>
                {item?.name === "Logout" ? (
                  <ButtonComponent
                    variant="text"
                    color="inherit"
                    className="flex flex-row gap-x-2"
                    onClick={logoutHandler}
                  >
                    <IconComponent icon={item?.icon} />
                    <Typography>{item?.name}</Typography>
                  </ButtonComponent>
                ) : (
                  <Link href={item?.route}>
                    <ButtonComponent
                      variant="text"
                      color="inherit"
                      className="flex flex-row gap-x-2"
                    >
                      <IconComponent icon={item?.icon} />
                      <Typography>{item?.name}</Typography>
                    </ButtonComponent>
                  </Link>
                )}
              </>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
