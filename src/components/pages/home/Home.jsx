import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../context/AuthContext";
import AppGuide from '../../AppGuide'

export default function Home() {

  // State 
  const [expandFAQs, setExpandFAQs] = useState(false);
  const [guide, setGuide] = useState(false);

  //use context
  const { state, dispatch } = useContext(AuthContext);
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    setUserLoggedIn((prev) => !prev);
    if (state === null) {
      dispatch("LOGOUT");
    }
  }, [dispatch, state]);

  //Handle the dropdown menu
  const handleFAQsExpand = (e) => {
    e.preventDefault();
    setExpandFAQs((prev) => !prev);
  };

  // Handle guide display
  const handleGuide = () => {
    setGuide(prev => !prev)
  }

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
      <div className="homeAbout-div">
        <div className="homeAbout">
          <h1 className="About-title">About</h1>
          <p className="About-details">
            <span className="codeMiller-span">Code miller</span> is an app that permits coders break codes complexity, such that starters would understand. And share via our <Link to='contribute' className="contributeLink">'contribute platform'</Link>.
          </p>
        </div>
        <div>
          <img src="aboutImg.jpg" alt="aboutImg" className="homeAbout-img" />
        </div>
      </div>
      <AppGuide guide = {guide}/>
      <div className="homeBigBtnsDiv">
        <div className="homeBigBtns">
        <Link to='contribute' className="contributeLink">
        <button className="homeBigBtn">Get Started</button>
        </Link>
          <button className="homeBigBtn" id="homeBigBtn" onClick={handleGuide}>Guide</button>
        </div>
      </div>
      <div
        className="homeCourses"
        style={{ display: userLoggedIn ? "block" : "none" }}
      >
        <h1 className="homeCourses-gen_title">Available Courses</h1>
        <div className="homeCoursesFlex">
          <Link to="/courses/html" className="link">
            <div className="homeCourses-contents">
              <div className="aboutDesign"></div>
              <h3 className="homeCourses-titles">HTML</h3>
              <p className="homeCourses-details">
                HTML is the standard markup language for Web pages. With HTML
                you can create your own Website. HTML is easy to learn - You
                will enjoy it!
              </p>
            </div>
          </Link>
          <Link to="/courses/css" className="link">
            <div className="homeCourses-contents">
              <div className="aboutDesign"></div>
              <h3 className="homeCourses-titles">CSS</h3>
              <p className="homeCourses-details">
                CSS is the language we use to style an HTML document. CSS
                describes how HTML elements should be displayed. This tutorial
                will teach you CSS from basic to advanced.
              </p>
            </div>
          </Link>
          <Link to="/courses/javascript" className="link">
            <div className="homeCourses-contents" id="javascript">
              <div className="aboutDesign"></div>
              <h3 className="homeCourses-titles">JAVASCRIPT</h3>
              <p className="homeCourses-details">
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
          </Link>
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
          <div className="homeContacts-social_div">
            <img
              src="contact.webp"
              alt="contactImg"
              className="homeContacts-img"
            />
            <div className="footerSocial">
              <div className="footerSocial-flex">
                <a
                  href="https://twitter.com/Mike_Adeshina"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="twitter--icon.png"
                    alt="img"
                    className="footerSocial-img"
                  />
                </a>
                <a
                  href="https://github.com/michado2019"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="github--icon.png"
                    alt="img"
                    className="footerSocial-img"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/michado2019"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="linked--in_icon.png"
                    alt="img"
                    className="footerSocial-img"
                  />
                </a>
              </div>
              <footer className="footerCopyright">
                <p className="copyright"> &copy;Michado 2022</p>
              </footer>
            </div>
          </div>
          <div className="homeContact-newsletter">
            <h3 className="homeContact-newsletter-title">
              Subscribe for our newsletter:
            </h3>
            <form>
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
  );
}
