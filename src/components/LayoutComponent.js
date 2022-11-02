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
  MenuOutlined,
  CancelOutlined,
} from "@mui/icons-material";

export const Navbar = (props) => {
  //Set state for the dropdown menu
  const [expandCourses, setExpandCourses] = useState(false);
  const [menuContentsDisplay, setMenuContentsDisplay] = useState(false);

  //Handle the dropdown menu
  const handleCoursesExpand = (e) => {
    e.preventDefault();
    setExpandCourses((prev) => !prev);
  };

  //Handle menu display
  const handleDisplayMenuContents = (e) => {
    e.preventDefault();
    setMenuContentsDisplay((prev) => !prev);
  }
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
  const style = {
    display: expandCourses ? "block" : "none",
  };
  return (
    <nav className="layoutNavbar">
      <ul>
        <li>
          <Link to="/">
            <img src={appLogo} alt="logo" className="logo" />
          </Link>
          <h1 className="logoText">C-Breaker</h1>
          <CustomNavbarLink to="/" className="layoutNavbar-links">
            <HomeOutlined id="home" />
          </CustomNavbarLink>
          <CustomNavbarLink to="/blog" className="layoutNavbar-links" id="blog">
            Blog
          </CustomNavbarLink>
          <div onClick={props.toggle}>
            {props.darkMode ? (
              <LightMode className="layoutNavbar-links" id="lightMode" />
            ) : (
              <DarkMode className="layoutNavbar-links" id="darkMode" />
            )}
          </div>
          <div className="coursesDiv">
            <div className="expand" onClick={handleCoursesExpand}>
              <h1 to="/courses" id="courses">
                Courses
              </h1>
              {expandCourses ? <ExpandLess /> : <ExpandMore />}
            </div>
            <div id="coursesContents" style={style}>
              <CustomNavbarLink
                to="/courses/html"
                className="layoutNavbar-links"
                id="coursesLinks1"
              >
                <h1 className="coursesContents">HTML</h1>
              </CustomNavbarLink>
              <CustomNavbarLink
                to="/courses/css"
                className="layoutNavbar-links"
                id="coursesLinks2"
              >
                <h1 className="coursesContents">CSS</h1>
              </CustomNavbarLink>
              <CustomNavbarLink
                to="/courses/javascript"
                className="layoutNavbar-links"
                id="coursesLinks3"
              >
                <h1 className="coursesContents">JAVASCRIPT</h1>
              </CustomNavbarLink>
            </div>
          </div>
          <CustomNavbarLink to="/sign" className="layoutNavbar-links">
            <Login id="login" />
          </CustomNavbarLink>
          {
            menuContentsDisplay ? 
          <CancelOutlined className="menuIcon" onClick={handleDisplayMenuContents}/> :
          <MenuOutlined className="menuIcon" onClick={handleDisplayMenuContents} /> 
          }
        </li>
      </ul>
      <div className="displayControlled-navbar" style={{display: menuContentsDisplay ? 'flex' : 'none'}}>
        <Link to="/" className="link">
          <h1 className="displayControlled-navbar_text">Home</h1>
        </Link>
        <Link to="blog" className="link">
          <h1 className="displayControlled-navbar_text">Blog</h1>
        </Link>
        <Link to="sign" className="link">
          <h1 className="displayControlled-navbar_text">Sign in</h1>
        </Link>
      </div>
    </nav>
  );
};
