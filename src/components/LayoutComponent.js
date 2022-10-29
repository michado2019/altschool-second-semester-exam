import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const CustomNavbarLink = ({ to, ...props }) => {
    let activeStyle = {
      color: "#212121a",
      fontWeight: "bold",
      border: "2px solid red",
      borderRadius: "50%",
    };
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { color: "#212121a", fontWeight: "bold" }
        }
        to={to}
        end
        {...props}
      />
    );
  };
  return (
    <nav>
      <ul>
        <li>
          <CustomNavbarLink to="/">Home</CustomNavbarLink>
        </li>
      </ul>
    </nav>
  );
};
