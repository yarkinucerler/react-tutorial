import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <nav className="nav-social">
        <a href="#">
          <FaSquareFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </nav>
      <nav className="nav-term">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </nav>
      <p>© 2023 Movies by Octet</p>
    </footer>
  );
};

export default Footer;
