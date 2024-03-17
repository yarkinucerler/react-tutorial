import React from "react";

import FavoriteCounter from "../../../components/FavoriteCounter/FavoriteCounter";
import classNames from "classnames";

type Props = {
  title?: string;
  type?: "standart" | "search" | "custom";
};

const Header = ({ title, type = "standart" }: Props) => {
  return (
    <header className={classNames("header", type)}>
      <h1 className="page-title">{title}</h1>
      {type === "custom" && <FavoriteCounter />}
    </header>
  );
};

export default Header;
