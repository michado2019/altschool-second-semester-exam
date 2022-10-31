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
    </div>
  );
}
