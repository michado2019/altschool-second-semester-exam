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
  ExpandMore,
  ExpandLess,
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
  const [menuContentsDisplay, setMenuContentsDisplay] = useState(false);
  const [userDisplay, setUserDisplay] = useState(false)

  //Handle the dropdown menu
  const handleCoursesExpand = (e) => {
    e.preventDefault();
    setExpandCourses(true);
  };
  const handleCoursesClose = (e) => {
    e.preventDefault();
    setExpandCourses(false);
  };

  //Handle menu display
  const handleDisplayMenuContents = (e) => {
    e.preventDefault();
    setMenuContentsDisplay((prev) => !prev);
  };

  //Handle signout
  const handleSignout = (e) => {
    e.preventDefault();
    auth.signOut()
  };

  const handleUser = () => {
    setUserDisplay(prev => !prev)
  }
  const handleUserHid = () => {
    setUserDisplay(false)
  }
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
              {expandCourses ? (
                <ExpandLess className="expand" />
              ) : (
                <ExpandMore className="expand" />
              )}
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
          {user ? (
            <img src={user.photoURL} alt='img' className="layoutNavbar-links" id="userImg" onMouseOver={handleUser} />
          ) : (
            <CustomNavbarLink to="/sign" className="layoutNavbar-links">
              <Login id="login" />
            </CustomNavbarLink>
          )}
          <div className="layoutNavbar-user_div" style={{display: userDisplay ? 'block' : 'none'}} onMouseLeave={handleUserHid}>
              <p>Signed in as:</p>
              <p>{user?.email}</p>
              <h2 onClick={handleSignout}>Sign out</h2>
          </div>
          {menuContentsDisplay ? (
            <CancelOutlined
              className="menuIcon"
              onClick={handleDisplayMenuContents}
            />
          ) : (
            <MenuOutlined
              className="menuIcon"
              onClick={handleDisplayMenuContents}
            />
          )}
        </li>
      </ul>
      <div
        className="displayControlled-navbar"
        style={{ display: menuContentsDisplay ? "flex" : "none" }}
      >
        <Link to="/" className="link">
          <h1 className="displayControlled-navbar_text">Home</h1>
        </Link>
        <Link to="blog" className="link">
          <h1 className="displayControlled-navbar_text">Blog</h1>
        </Link>
        <Link to="sign" className="link">
          <h1 className="displayControlled-navbar_text">Sign in</h1>
        </Link>
        <Link>
          <h1 className="displayControlled-navbar_text" onClick={handleSignout}>
            Sign out
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  // useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");

  // States
  const [openSource, setOpenSource] = useState(false);
  const [AllContributions, setAllContributions] = useState([]);

  //Handle open-source
  const handleOpenSource = () => {
    setOpenSource((prev) => !prev);
  };
  // useEffect
  useEffect(() => {
    try {
      async function getAllContributions() {
        const contributions = await getDocs(dbRef);
        setAllContributions(
          contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
      getAllContributions();
    } catch (error) {
      console.log(error);
    }
  }, [dbRef]);

  const blogs = AllContributions.map((blog) => {
    return (
      <div key={blog.id} className="sidebarBlog-title_lists">
        <h2>{blog.contributionTitle}</h2>
      </div>
    );
  });
  return (
    <div className="sidebarWrapper">
      <h2 className="sidebarTitle">Blogs:</h2>
      <div className="sidebarBlog-title_div">
        <h4 className="sidebarBlog-title_list">{blogs}</h4>
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
      <h2 className="sidebarFooterUser">Users:</h2>
    </div>
  );
};