import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz mail adresi!").required("Zorunlu Alan"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .max(20, "Şifre en fazla 20 karakter olmalıdır.")
    .required("Zorunlu Alan"),
});
