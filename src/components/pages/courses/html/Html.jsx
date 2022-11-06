import React from "react";
import "./Html.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Html() {
  return (
    <div className="htmlWrapper">
      <Helmet>
        <title>HTML Tutorial</title>
        <meta name="description" content="Learn HTML with easy" />
        <link rel="canonical" href="/courses/html" />
      </Helmet>
      <div className="htmlCourse-outline">
        <h1 className="htmlCourse-outline_hint">Number one and two have the implementation of nested routes</h1>
        <h2 className="htmlCourse-outline_title">Course Outline</h2>
        <ol className="htmlCourse-grid">
          <Link to="/htmlIntro" className="link">
            <li className="htmlCourse-links">HTML Introduction</li>
          </Link>
          <Link to="/htmlBasic" className="link">
            <li className="htmlCourse-links">HTML Basic</li>
          </Link>
          <Link to="/htmlCss" className="link">
            <li className="htmlCourse-links">HTML CSS</li>
          </Link>
          <Link to="/htmlLinks" className="link">
            <li className="htmlCourse-links">HTML Links</li>
          </Link>
        </ol>
      </div>
    </div>
  );
}
