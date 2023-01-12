import React, { useState, useContext, useEffect } from "react";
import AppGuide from "../../AppGuide";
import "./Contribute.css";
import { Link } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { DbContext } from "../../../App";
import { auth, signOut } from "../../../firebase";
import { UserContext } from "../../../App";

function Contribute({ contribute, setContribute, handleAuth }) {
  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // State
  const [guide, setGuide] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    contributionTitle: "",
    contributionText: "",
    contributor: "",
    email: "",
    twitter: ''
  });

  // Handlers
  const handleGuide = () => {
    setGuide((prev) => !prev);
  };
  const handleFormShow = () => {
    setShowForm((prev) => !prev);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleContributionSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (contribute) {
      await addDoc(dbRef, contribute);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // useEffect
  useEffect(() => {
    function setContribution() {
      setContribute(form);
    }
    setContribution();
  }, [setContribute, form]);
  return (
    <div className="contributeWrapper">
      <div className="contributeFlex-1">
        <div className="contributeGuide-div">
          <h2 className="contributeGuide-heading">
            Click the 'Guide' button before contributing
          </h2>
          <div className="contributeGuideFlex">
          <button
              className="homeBigBtn"
              id="homeBigBtn"
              onClick={handleGuide}
            >
              Guide
            </button>
            {user ? (
              <div className="contributeFlex-2">
                <button
                  className="contributeGoogleBtn"
                  id="contributeGoogleBtn"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="contributeFlex-2">
                <button className="contributeGoogleBtn" onClick={handleAuth}>
                  Sign with Google
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          style={{ display: guide ? "block" : "none" }}
          className="contributeGuide"
        >
          <AppGuide guide={guide} />
        </div>
      </div>
      {user ? (
        <h2 className="contributeAuthorizedUser">
          Hi, <span className="displayName">{user.displayName}</span>. You are
          now authorized to contribute!
        </h2>
      ) : (
        <h2 className="contributeAuthorizedUser">
          Sign in with google to be able to make your contribution
        </h2>
      )}
      <div className="contributeGuideDiv">
        <div className="contributeFlex-3">
          <button
            onClick={handleFormShow}
            style={{ display: user ? "block" : "none" }}
          >
            Contribute
          </button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div
          className="contributeFormDiv"
          style={{ display: showForm ? "none" : "block" }}
        >
          <form className="contributeForm" onSubmit={handleContributionSubmit} style={{display: user ? 'block' : 'none'}}>
            <label className="contributeLabel">Title:</label>
            <input
              type="text"
              placeholder="Contribution title"
              className="contributeFormInput"
              onChange={handleChange}
              name="contributionTitle"
              value={form.contributionTitle}
              required
            />
            <label className="contributeLabel">Contribution:</label>
            <textarea
              className="contributeTextarea"
              placeholder="Contribute here...."
              onChange={handleChange}
              name="contributionText"
              value={form.contributionText}
              required
            />
            <label className="contributeLabel">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="contributeFormInput"
              onChange={handleChange}
              name="email"
              value={form.email}
              required
            />
            <label className="contributeLabel">Contributor's name:</label>
            <input
              type="text"
              placeholder="Enter contributor's name"
              className="contributeFormInput"
              onChange={handleChange}
              name="contributor"
              value={form.contributor}
              required
            />
            <label className="contributeLabel">Twitter username:</label>
            <input
              type="text"
              placeholder="Enter twitter username"
              className="contributeFormInput"
              onChange={handleChange}
              name="twitter"
              value={form.twitter}
              required
            />
            <button id="contributeSubmitBtn" className="contributeFormInput">
              Contribute
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contribute;
