import React, { Fragment, useEffect } from "react";

import { useLayout } from "../../contexts/layout.context";
import DefaultLayout from "../../layouts/DefaultLayout";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login: React.FC = () => {
  const { setLayout } = useLayout();

  useEffect(() => {
    setLayout(<DefaultLayout title="Movies App" />);
  }, [setLayout]);

  return <LoginForm />;
};

export default Login;
