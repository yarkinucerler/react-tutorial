import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Geçerli bir e-posta adresi girin")
      .required("E-posta alanı gereklidir"),
    password: yup
      .string()
      .required("Şifre alanı gereklidir")
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(/\d/, "Şifre en az bir sayı içermelidir"),
  })
  .required();

export default schema;
