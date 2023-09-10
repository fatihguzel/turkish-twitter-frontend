"use client";
import React from "react";
import { useFormik } from "formik";
import { Grid, Typography, Box, Container } from "@mui/material";
import PaperComponent from "@/components/Paper/Paper";
import ButtonComponent from "@/components/Button/Button";
import DividerComponent from "@/components/Divider/Divider";
import { VerifyAccountSchema } from "@/schema/account/verify/VerifyAccountSchema";
import TextFieldComponent from "@/components/TextField/TextField";
import { AppDispatch } from "@/redux/store/store";
import { useDispatch } from "react-redux";
import { verifyAccountAction } from "@/redux/features/auth/asyncActions";
import { useRouter } from "next/navigation";

const VerifyAccountView = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      confirmCode: "",
    },
    validationSchema: VerifyAccountSchema,
    onSubmit: (values) => {
      const data = values;
      dispatch(verifyAccountAction(data)).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          router.push("/account/login");
        }
      });
    },
  });

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={0}
          lg={7}
          sx={{
            backgroundImage:
              "url('/assets/account/login/aerial-background-blog-cafe.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          lg={5}
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#f5f5f5",
            height: "100vh",
          }}
        >
          <Container
            sx={{
              height: "90vh",
            }}
          >
            <PaperComponent
              elevation={2}
              className="
                flex flex-col first-letter:capitalize
                justify-center items-center
                h-full w-full
                bg-slate-50 
                text-black dark:text-white
                rounded-2xl shadow-2xl shadow-gray-400
                sm:p-12 md:p-16 lg:p-20 xl:p-24
            "
            >
              <Typography
                variant="h5"
                gutterBottom
                className="
                text-3xl font-semibold
                mb-4
                text-black
                flex flex-col justify-center items-center


            "
              >
                <span className="text-blue-500">Turkish Twitter</span>{" "}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className="
                text-2xl font-semibold
                mb-4
                text-black 
            "
              >
                Hesabı Doğrula
              </Typography>

              <DividerComponent className="my-4" />
              <form
                onSubmit={formik.handleSubmit}
                className="
              flex flex-col justify-center items-center
              w-full
              "
              >
                {" "}
                <TextFieldComponent
                  fullWidth
                  id="confirmCode"
                  name="confirmCode"
                  label="Doğrulama Kodu"
                  type="text"
                  variant="outlined"
                  className="mb-4"
                  value={formik.values.confirmCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmCode &&
                    Boolean(formik.errors.confirmCode)
                  }
                  helperText={
                    formik.touched.confirmCode && formik.errors.confirmCode
                  }
                />
                <Box mt={2} className="w-full">
                  <ButtonComponent
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="
                    text-white
                    bg-blue-500
                    hover:bg-blue-600
                    focus:ring-blue-500
                    focus:ring-offset-blue-200
                    disabled:opacity-50
                  "
                  >
                    Hesabı Doğrula
                  </ButtonComponent>
                </Box>
              </form>
            </PaperComponent>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default VerifyAccountView;
