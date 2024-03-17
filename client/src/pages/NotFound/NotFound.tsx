import React from "react";

import { FaRegFileExcel } from "react-icons/fa6";

import "./notFound.scss";

type Props = {};
const NotFound: React.FC<Props> = () => {
  return (
    <div className="not-found-warapper">
      <FaRegFileExcel />
      <h1>404</h1>
      <p>This Page is Not Found</p>
    </div>
  );
};
export default NotFound;
