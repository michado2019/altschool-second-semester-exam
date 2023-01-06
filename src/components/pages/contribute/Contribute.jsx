import React, { useState, useContext, useEffect } from "react";
import AppGuide from "../../AppGuide";
import "./Contribute.css";
import { Link } from "react-router-dom";
import {addDoc, collection} from '@firebase/firestore'
import { DbContext } from "../../../App";

function Contribute({ contribute, setContribute }) {

   //useContext
   const db = useContext(DbContext)
   const dbRef = collection(db, 'contribution')
   
  // State
  const [guide, setGuide] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    contributionTitle: "",
    contributionText: "",
    email: "",
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

  const handleContributionSubmit = async(e) => {
    e.preventDefault();
    if(contribute){
     await addDoc(dbRef, contribute)
    }
  };

  // useEffect
  useEffect(() => {
    function setContribution(){
      setContribute(form);
    }
      setContribution()
  }, [setContribute, form])
  
  return (
    <div className="contributeWrapper">
      <div className="contributeFlex-1">
        <div className="contributeGuide-div">
          <h2 className="contributeGuide-heading">
            Click the 'Guide' button to read the guide before contributing
          </h2>
          <div className="contributeGuideFlex">
            <button className="homeBigBtn" onClick={handleGuide}>
              Guide
            </button>
            <div className="contributeFlex-2">
              <button className="contributeGoogleBtn">Sign with Google</button>
            </div>
          </div>
        </div>
        <div
          style={{ display: guide ? "block" : "none" }}
          className="contributeGuide"
        >
          <AppGuide guide={guide} />
        </div>
      </div>
      <div className="contributeGuideDiv">
        <div className="contributeFlex-3">
          <button onClick={handleFormShow}>Contribute</button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <h2 className="contributeAuthorizedUser">
          Hi {}. You are now authorized to contribute!
        </h2>
        <div
          className="contributeFormDiv"
          style={{ display: showForm ? "block" : "none" }}
        >
          <form className="contributeForm" onSubmit={handleContributionSubmit}>
            <label className="contributeLabel">Title:</label>
            <input
              type="text"
              placeholder="Contribution title"
              className="contributeFormInput"
              onChange={handleChange}
              name="contributionTitle"
              value={form.contributionTitle}
            />
            <label className="contributeLabel">Contribution:</label>
            <textarea
              className="contributeTextarea"
              placeholder="Contribute here...."
              onChange={handleChange}
              name="contributionText"
              value={form.contributionText}
            />
            <label className="contributeLabel">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="contributeFormInput"
              onChange={handleChange}
              name="email"
              value={form.email}
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