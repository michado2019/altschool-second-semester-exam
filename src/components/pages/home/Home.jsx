import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeAbout-div">
        <div className="homeAbout">
          <div className="aboutDesign"></div>
          <h1 className="About-title">About</h1>
          <p className="About-details">
            Setup react-router, implement Nested routes, 404 page, and Error
            boundary. Set up fake userAuthContext using the context API to
            always carry out a fake authentication, bonus - extract out a custom
            hook to get the currently logged-in user. Implement SEO and
            Navigation menu that will show on each page
          </p>
        </div>
        <div>
          <img src="aboutImg.jpg" alt="aboutImg" className="homeAbout-img" />
        </div>
      </div>
      <div className="homeCourses">
        <h1 className="homeCourses-gen_title">Available Courses</h1>
        <div className="homeCoursesFlex">
          <div className="homeCourses-contents">
          <div className="aboutDesign"></div>
            <h3 className="homeCourses-titles">HTML</h3>
            <p className="homeCourses-details">
              HTML is the standard markup language for Web pages. With HTML you
              can create your own Website. HTML is easy to learn - You will
              enjoy it!
            </p>
          </div>
          <div className="homeCourses-contents">
          <div className="aboutDesign"></div>
            <h3 className="homeCourses-titles">CSS</h3>
            <p className="homeCourses-details">
              CSS is the language we use to style an HTML document. CSS
              describes how HTML elements should be displayed. This tutorial
              will teach you CSS from basic to advanced.
            </p>
          </div>
          <div className="homeCourses-contents">
          <div className="aboutDesign"></div>
            <h3 className="homeCourses-titles">JAVASCRIPT</h3>
            <p className="homeCourses-details">
              JavaScript is the world's most popular programming language.
              JavaScript is the programming language of the Web. JavaScript is
              easy to learn. This tutorial will teach you JavaScript from basic
              to advanced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
