import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

type Props = {
  title?: string;
  headerType?: "standart" | "search" | "custom";
  children?: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children, headerType, title }) => {
  return (
    <div className="container">
      <Header type={headerType} title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
