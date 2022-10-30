import { NavLink } from "react-router-dom";
import './LayoutComponent.css';
import appLogo from '../images/logoImg.png';
import { DarkMode, HomeOutlined, Login } from "@mui/icons-material";

export const Navbar = () => {
    const CustomNavbarLink = ({ to, ...props }) => {
        let activeStyle = {
          color: 'red',
          transition: 'all 0.3s',
        };
      
        return (
          <NavLink
            style={({ isActive }) =>
              isActive ? activeStyle : { textDecoration: 'none' }
            }
            to={to}
            end
            {...props}
          />
        );
      };
  return (
    <nav className="layoutNavbar">
      <ul>
        <li>
          <img src={appLogo} alt='logo' className="logo"/>
          <h1 className="logoText">C-Broker</h1>
          <CustomNavbarLink to="/" className='layoutNavbar-links'><HomeOutlined id='home' /></CustomNavbarLink>
          <CustomNavbarLink to="/blog" className='layoutNavbar-links' id='blog'>Blog</CustomNavbarLink>
          <h1 to="/courses" id='courses'>Courses</h1>
          <input type='search' placeholder='Search' id='search'/>
          <DarkMode className="layoutNavbar-links" id='mode' />
          <CustomNavbarLink to="/login" className='layoutNavbar-links'><Login id='login'/></CustomNavbarLink>
        </li>
      </ul>
    </nav>
  );
};
