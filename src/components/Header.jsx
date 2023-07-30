import React from "react";
import "../styles/header.scss";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

const Header = ({ setSidebarModal }) => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        src={logo}
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      />
      <div className="right-header">
        <div className="header-search">
          <FiSearch size={18} />
          <input type="text" placeholder="Search" />
        </div>
        <CgMenu
          onClick={() => setSidebarModal(true)}
          className="hamburger"
          size={28}
          color="white"
        />
      </div>
    </div>
  );
};

export default Header;
