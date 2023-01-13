import React, { useState } from "react";
import "./Home.css";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AppGuide from "../../AppGuide";

export default function Home() {
  // State
  const [expandFAQs, setExpandFAQs] = useState(false);
  const [guide, setGuide] = useState(false);

  //Handle the dropdown menu
  const handleFAQsExpand = (e) => {
    e.preventDefault();
    setExpandFAQs((prev) => !prev);
  };

  // Handle guide display
  const handleGuide = () => {
    setGuide((prev) => !prev);
  };

  //Styles
  const faqsDisplayStyles = {
    display: expandFAQs ? "block" : "none",
  };
  return (
    <div className="homeWrapper">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Welcome to my Homepage" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="faqContactDiv">
        <div className="homeAbout-div">
          <div className="homeAbout">
            <h1 className="About-title">About</h1>
            <p className="About-details">
              <span className="codeMiller-span">Code miller</span> is an app
              that permits coders break codes complexity, such that starters
              would understand. And share via our{" "}
              <Link to="contribute" className="contributeLink">
                'contribute platform'
              </Link>
              .
            </p>
          </div>
          <div>
            <img src="aboutImg.jpg" alt="aboutImg" className="homeAbout-img" />
          </div>
        </div>
        <div id='appGuide'>
        <AppGuide guide={guide}/>
        </div>
        <div className="homeBigBtnsDiv">
          <div className="homeBigBtns">
            <Link to="contribute" className="contributeLink">
              <button className="homeBigBtn">Get Started</button>
            </Link>
            <button
              className="homeBigBtn"
              id="homeBigBtn"
              onClick={handleGuide}
            >
              Guide
            </button>
          </div>
        </div>
        <div className="homeFAQs">
          <h1 className="homeFAQs-gen_title">FAQs</h1>
          <div className="homeFAQs-main_flex">
            <div className="homeFAQs-flex">
              <div className="homeFAQs-div">
                <h4 className="homeFAQs-heading" onClick={handleFAQsExpand}>
                  HTML freguently asked questions
                </h4>
                <div className="homeFAQs-expands">
                  {expandFAQs ? <ExpandLess /> : <ExpandMore />}
                </div>
              </div>
              <p className="homeFAQs-click" style={faqsDisplayStyles}>
                <a
                  href="https://www.w3.org/html/wiki/FAQs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click me
                </a>
              </p>
              <div className="homeFAQs-div">
                <h4 className="homeFAQs-heading" onClick={handleFAQsExpand}>
                  CSS freguently asked questions
                </h4>
                <div className="homeFAQs-expands">
                  {expandFAQs ? <ExpandLess /> : <ExpandMore />}
                </div>
              </div>
              <p className="homeFAQs-click" style={faqsDisplayStyles}>
                <a
                  href="https://www.hwg.org/resources/faqs/cssFAQ.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click me
                </a>
              </p>
              <div className="homeFAQs-div">
                <h4 className="homeFAQs-heading" onClick={handleFAQsExpand}>
                  JAVASCRIPT freguently asked questions
                </h4>
                <div className="homeFAQs-expands">
                  {expandFAQs ? <ExpandLess /> : <ExpandMore />}
                </div>
              </div>
              <p className="homeFAQs-click" style={faqsDisplayStyles}>
                <a
                  href="https://www.johnsmiley.com/jscript/faqs.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click me
                </a>
              </p>
            </div>
            <img src="qs.jpg" alt="qsImg" className="qsImg" />
            <img src="faqs.jpg" alt="faqImg" className="homeFAQs-img" />
          </div>
        </div>
        <div className="homeContacts">
          <h1 className="homeContacts-gen_title">Contact Us</h1>
          <div className="homeContacts-flex">
            <div className="homeContact-newsletter">
              <h3 className="homeContact-newsletter-title">
                Subscribe for our newsletter:
              </h3>
              <form className="subForm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="homeContact-sub"
                />
                <button className="homeContact-sub_btn">Subscribe</button>
              </form>
              <form className="textarea">
                <textarea
                  placeholder="Enter your comment"
                  className=" homeContact-msg"
                  cols="20"
                  rows="5"
                />
                <button className="homeContact-comment_btn">Send</button>
              </form>
              <img
                src="contact2.webp"
                alt="contactImg"
                className="homeContacts-img2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
