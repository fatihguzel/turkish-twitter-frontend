import React from "react";

import { useFormik } from "formik";

import Link from "next/link";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { FormikHelpers } from "formik";
import { LoginDto } from "@/dtos/auth/login/login";
import { LoginSchema } from "@/schema/account/login/LoginSchema";
import { loginAction } from "@/redux/features/auth/asyncActions";
import TextFieldComponent from "@/components/TextField/TextField";
import ButtonComponent from "@/components/Button/Button";

const Login: React.FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const formik = useFormik<LoginDto>({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: async (
			values: LoginDto,
			{ setSubmitting }: FormikHelpers<LoginDto>
		) => {
			try {
				await dispatch(loginAction(values));
				router.push("/");
			} catch (error) {
				console.error("Login error:", error);
			} finally {
				setSubmitting(false);
			}
		},
	});
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
		formik;

	return (
		<div className="flex flex-row h-screen items-center">
			<div className="w-full md:w-1/2 xl:w-1/3 m-auto p-16 items-center justify-center">
				<h2 className="text-3xl font-semibold mb-6">Giriş Yap</h2>
				<form className="space-y-4 " onSubmit={handleSubmit}>
					<TextFieldComponent
						label="Email"
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						error={Boolean(touched.email && errors.email)}
						helperText={touched.email && errors.email}
					/>
					<TextFieldComponent
						label="Şifre"
						type="password"
						name="password"
						value={values.password}
						onBlur={handleBlur}
						onChange={handleChange}
						error={Boolean(touched.password && errors.password)}
						helperText={touched.password && errors.password}
					/>
					<div className="flex items-center justify-start ">
						<ButtonComponent type="submit" variant="outlined" color="primary">
							Giriş Yap
						</ButtonComponent>
					</div>
					<div className="text-sm font-medium text-gray-500">
						Kayıt olmadın mı?
						<Link
							href="/auth/register"
							className="text-blue-700 hover:underline px-1">
							Hesap Oluştur
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
