import React from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./validation";
import { useForm } from "react-hook-form";

import { FaAngleRight } from "react-icons/fa6";

import "./loginform.scss";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.setItem("isAuth", "true");
    navigate("/movie-list");
  };

  return (
    <div className="login-form-wrapper">
      <h3>Giriş Yap</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-element">
          <label htmlFor="login-email">E-posta</label>
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <p className="form-error">{errors.email?.message}</p>
        </div>
        <div className="form-element">
          <label htmlFor="login-password">Şifre</label>
          <input
            id="login-password"
            type="password"
            placeholder="Şifre"
            {...register("password")}
          />
          <p className="form-error">{errors.password?.message}</p>
        </div>
        <button type="submit">
          Giriş Yap <FaAngleRight />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
