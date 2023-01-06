import React, { useEffect, useState } from "react";
import "./Sign.css";
import { Helmet } from "react-helmet-async";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  //Navigation
  const navigate = useNavigate();

  //Set states
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  //useForm data
  const { inputs, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Set useEffect for user
  useEffect(() => {
    setUser(inputs);
  }, [inputs]);

  //Handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(inputs);
    
    if (user) {
      setCurrentUser(user);
    }
   
  };
  return (
    <div className="signWrapper">
      <Helmet>
        <title>Sign in page</title>
        <meta name="description" content="Sign in here" />
        <link rel="canonical" href="/sign" />
      </Helmet>
      <div className="currentUser" >
        <h1 className="currentUser-name">{`Welcome, ${currentUser.firstName} ${currentUser.lastName}!`}</h1>
        <button className="currentUser-btn" onClick={() => navigate("/")}>
          Click to go home and explore our courses
        </button>
      </div>
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
        <button className="signInput" id="btn__submit">
          Sign in
        </button>
      </form>
    </div>
  );
}