import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <img src={logo} alt="logo-png" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Broswe by Language</li>
        </ul>
      </div>
      <div className="navbarRight">
        <img src={search_icon} alt="search-icon" className="icons" />
        <p>children</p>
        <img src={bell_icon} alt="bell-icon" className="icons" />
        <div className="navbarProfile">
          <img src={profile_img} alt="bell-icon" className="profile" />
          <img src={caret_icon} alt="bell-icon" />

          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
