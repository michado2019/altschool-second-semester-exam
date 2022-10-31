import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./LayoutComponent.css";
import appLogo from "../images/logoImg.png";
import {
  DarkMode,
  LightMode,
  HomeOutlined,
  Login,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

export const Navbar = () => {
  
  //Set state for the dropdown menu
  const [expandCourses, setExpandCourses] = useState(false);
  
  //Set state for the darkmode
  const [darkMode, setDarkMode] = useState(false);

  //Handle the darkmode
  const handleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  }
  //Handle the dropdown menu
  const handleCoursesExpand = (e) => {
    e.preventDefault();
    setExpandCourses((prev) => !prev);
  };

  const CustomNavbarLink = ({ to, ...props }) => {
    let activeStyle = {
      color: "red",
      transition: "all 0.3s",
    };

    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: "none" }
        }
        to={to}
        end
        {...props}
      />
    );
  };
  //Styles
  const coursesStyle = {
    display: expandCourses ? "block" : "none",
  }
  return (
    <nav className="layoutNavbar">
      <ul>
        <li>
          <Link to='/'>
          <img src={appLogo} alt="logo" className="logo" />
          </Link>
          <h1 className="logoText">C-Breaker</h1>
          <CustomNavbarLink to="/" className="layoutNavbar-links">
            <HomeOutlined id="home" />
          </CustomNavbarLink>
          <CustomNavbarLink to="/blog" className="layoutNavbar-links" id="blog">
            Blog
          </CustomNavbarLink>
          <div className="coursesDiv">
            <div className='expand' onClick={handleCoursesExpand}>
              <h1 to="/courses" id="courses">
                Courses
              </h1>
              {expandCourses ? <ExpandLess /> : <ExpandMore />}
            </div>
            <div id="coursesContents" style={coursesStyle}>
              <h1 className="coursesContents">HTML</h1>
              <h1 className="coursesContents">CSS</h1>
              <h1 className="coursesContents">JAVASCRIPT</h1>
            </div>
          </div>
          <form>
          <input type="search" placeholder="Search" id="search" />
          </form>
          <div onClick={handleDarkMode}>
          {
            darkMode ? 
          <LightMode className="layoutNavbar-links" id='lightMode' /> :
          <DarkMode className="layoutNavbar-links" id="darkMode" /> 
          }
          </div>
          <CustomNavbarLink to="/sign" className="layoutNavbar-links">
            <Login id="login" />
          </CustomNavbarLink>
        </li>
      </ul>
    </nav>
  );
};
