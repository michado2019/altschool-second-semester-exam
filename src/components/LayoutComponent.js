import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../App";
import "./LayoutComponent.css";
import appLogo from "../images/logoImg.png";
import { collection, getDocs } from "@firebase/firestore";
import { DbContext } from "../App";
import {
  DarkMode,
  LightMode,
  HomeOutlined,
  Login,
  MenuOutlined,
  CancelOutlined,
  ExpandCircleDownSharp,
  ExpandLessRounded,
} from "@mui/icons-material";
import { auth } from "../firebase";
import CodingSchools from "./pages/courses/CodingSchools";

export const Navbar = (props) => {
  const user = useContext(UserContext);

  // States
  const [expandCourses, setExpandCourses] = useState(false);
  const [userDisplay, setUserDisplay] = useState(false);
  const [menu, setMenu] = useState(false);

  //Handle the dropdown menu
  const handleCoursesExpand = (e) => {
    e.preventDefault();
    setExpandCourses(true);
  };
  const handleCoursesClose = (e) => {
    e.preventDefault();
    setExpandCourses(false);
  };
  const handleMenu = () => {
    setMenu(prev => !prev)
  }

  //Handle signout
  const handleSignout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  const handleUser = () => {
    setUserDisplay((prev) => !prev);
  };
  const handleUserHid = () => {
    setUserDisplay(false);
  };
  const CustomNavbarLink = ({ to, ...props }) => {
    let activeStyle = {
      color: "rgb(167, 52, 52)",
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
          <h1 className="logoText">Codemiller</h1>
          <CustomNavbarLink to="/" className="layoutNavbar-links">
            <HomeOutlined id="home" />
          </CustomNavbarLink>
          <CustomNavbarLink to="/blog" className="layoutNavbar-links" id="blog">
            <h1>Blogs</h1>
          </CustomNavbarLink>
          <div onClick={props.toggle}>
            {props.darkMode ? (
              <LightMode className="layoutNavbar-links" id="lightMode" />
            ) : (
              <DarkMode className="layoutNavbar-links" id="darkMode" />
            )}
          </div>
          <div className="coursesDiv" onMouseLeave={handleCoursesClose}>
            <div className="expand" onMouseOver={handleCoursesExpand}>
              <h1 to="/courses" id="courses">
                Courses
              </h1>
            </div>
            <div className="coursesDisplayDiv">
              {user ? (
                <div id="coursesContents" style={style}>
                  <CodingSchools />
                </div>
              ) : (
                <div
                  style={style}
                  className="layoutNavbar-links"
                  id="loginFirst"
                >
                  Login to view courses!
                </div>
              )}
            </div>
          </div>
          <div>
            {user ? (
              <img
                src={user.photoURL}
                alt="img"
                className="layoutNavbar-links"
                id="userImg"
                onMouseOver={handleUser}
              />
            ) : (
              <CustomNavbarLink to="/sign" className="layoutNavbar-links" id="login1">
                <Login id="login" />
              </CustomNavbarLink>
            )}
          </div>
          <div
            className="layoutNavbar-user_div"
            style={{ display: userDisplay ? "block" : "none" }}
            onMouseLeave={handleUserHid}
          >
            <p>Signed in as:</p>
            <p>{user?.email}</p>
            <h2 onClick={handleSignout}>Sign out</h2>
          </div>
          {menu ? (
            <CancelOutlined
              className="menuIcon"
              onClick={handleMenu}
            />
          ) : (
            <MenuOutlined
              className="menuIcon"
              onClick={handleMenu}
            />
          )}
        </li>
        <div className="s-navbar" style={{display: menu ? 'block' : 'none'}}>
          <div className="s-navbarFlex">
          <CustomNavbarLink
            to="/blog"
            className="s-layoutNavbar-links"
            id="s-blog"
          >
            <h1>Blogs</h1>
          </CustomNavbarLink>
          <div onClick={props.toggle}>
            {props.darkMode ? (
              <LightMode className="s-layoutNavbar-links" id="s-lightMode" />
            ) : (
              <DarkMode className="s-layoutNavbar-links" id="s-darkMode" />
            )}
          </div>
          <div className="s-coursesDiv">
            <div className="s-expand" onMouseOver={handleCoursesExpand} onClick={handleCoursesClose}>
              <h1 to="/courses" id="s-courses">
                Courses
              </h1>
            </div>
            <div className="s-coursesDisplayDiv" onMouseLeave={handleCoursesClose}>
              {user ? (
                <div id="s-coursesContents" style={style}>
                  <CodingSchools />
                </div>
              ) : (
                <div
                  style={style}
                  className="s-layoutNavbar-links"
                  id="s-loginFirst"
                >
                  Login to view courses!
                </div>
              )}
            </div>
          </div>
          <div>
            {user ? (
              <img
                src={user.photoURL}
                alt="img"
                className="s-layoutNavbar-links"
                id="s-userImg"
                onMouseOver={handleUser}
              />
            ) : (
              <CustomNavbarLink to="/sign" className="s-layoutNavbar-links" >
                <Login id="s-login" />
              </CustomNavbarLink>
            )}
          </div>
          <div
            className="s-layoutNavbar-user_div"
            style={{ display: userDisplay ? "block" : "none" }}
            onMouseLeave={handleUserHid}
          >
            <p>Signed in as:</p>
            <p>{user?.email}</p>
            <h2 onClick={handleSignout}>Sign out</h2>
          </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export const Sidebar = ({sidebar}) => {
  // useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // States
  const [openSource, setOpenSource] = useState(false);
  const [AllContributions, setAllContributions] = useState([]);

  //Handle open-source
  const handleOpenSource = () => {
    setOpenSource((prev) => !prev);
  };
  
  async function getAllContributions() {
    const contributions = await getDocs(dbRef);
    setAllContributions(
      contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  // useEffect
  useEffect(() => {
    getAllContributions();
  });

  const blogs = AllContributions.map((blog) => {
    return (
      <div key={blog.id} className="sidebarBlog-title_lists">
        <h2>{blog.contributionTitle}</h2>
      </div>
    );
  });
  return (
    <div
      className="sidebarWrapper"
      style={{
        marginLeft: sidebar ? "-350px" : "0",
        transition: "all 0.3s",
        position: sidebar ? "fixed" : "",
      }}
    >
      <h2 className="sidebarTitle">Blogs:</h2>
      <div className="sidebarHid">
          <h4 className="sidebarBlog-title_list">{blogs}</h4>
        </div>
      <div className="sidebarBlog-title_div">
      </div>
      <div className="sidebarFooterDiv">
        <div onClick={handleOpenSource}>
          <h2 className="sidebarFooter-heading">Open source</h2>
          <div className="sidebarFooter">
            <div>
              {openSource ? (
                <ExpandLessRounded className="sidebarFooterExpand" />
              ) : (
                <ExpandCircleDownSharp className="sidebarFooterExpand" />
              )}
            </div>
          </div>
        </div>
        <a
          href="https://github.com/michado2019/altschool-second-semester-exam"
          className="sidebarFooterBtn"
          style={{
            visibility: openSource ? "visible" : "hidden",
            opacity: openSource ? "1" : "0",
            transition: "all 0.5s",
          }}
        >
          Github Link
        </a>
      </div>
      <div className="appUser">
      <h2 className="sidebarFooterUser">User: {user?.displayName}</h2>
      </div>
    </div>
  );
};
