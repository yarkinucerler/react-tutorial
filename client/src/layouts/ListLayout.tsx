import React from "react";
import Footer from "./components/Footer/Footer";
import HeaderWithSearch from "./components/HeaderWithSearch/HeaderWithSearch";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const ListLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <HeaderWithSearch />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ListLayout;
