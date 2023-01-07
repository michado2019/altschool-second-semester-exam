import React, { useEffect, useContext } from "react";
import "./Sign.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import googleImg from "../sign/assets/googleImg.png";
import { UserContext } from "../../../App";

export default function Sign({ handleAuth }) {
  // usecontext
  const userData = useContext(UserContext);

  //Navigation
  const navigate = useNavigate();

  //useForm data
  const { inputs, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handlers
  const handleSubmit = (e) => {
   e.preventDefault()
  }
  // useEffect
  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [navigate, userData]);
  
  return (
    <div className="signWrapper">
      <Helmet>
        <title>Sign in page</title>
        <meta name="description" content="Sign in here" />
        <link rel="canonical" href="/sign" />
      </Helmet>
      <div>
        <form className="signForm" onSubmit={handleSubmit}>
          <label htmlFor="first_name" className="signForm-labels">
            First name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="signInput"
            id="first_name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
          <label htmlFor="Last_name" className="signForm-labels">
            Last name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="signInput"
            id="last_name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
          <label htmlFor="email" className="signForm-labels">
            Email
          </label>
          <input
            type="text"
            placeholder="yourname@gmail.com"
            className="signInput"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="signForm-labels">
            Password
          </label>
          <input
            type="password"
            placeholder="Choose a password"
            className="signInput"
            id="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
          />
          <button className="signInput" id="btn__submit">
            Sign up
          </button>
        </form>
        <div className="signGoogle">
          <p>Sign in here:</p>
          <Link className='signLink'>
            Sign in
          </Link>
          <img
            src={googleImg}
            alt="img"
            className="signGoogleImg"
            onClick={handleAuth}
          />
        </div>
      </div>
    </div>
  );
}