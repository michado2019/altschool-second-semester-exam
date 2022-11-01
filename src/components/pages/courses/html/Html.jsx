import React from "react";
import "./Html.css";
import { Link } from "react-router-dom";

export default function Html() {
  return (
    <div className="htmlWrapper">
      <div className="htmlGreeting">
        <h1 className="htmlWelcome">Hi, {}</h1>
        <h1 className="htmlWelcome">You are welcome</h1>
      </div>
      <div className="htmlUser-img_div">
        <img src="/public/faqs.jpg" alt="html" className="htmlUser-img"/>
        <div></div>
      </div>
      <div className="htmlCourse-outline">
        <h1 className="htmlCourse-outline_title">Course Outline</h1>
        <ol className="htmlCourse-grid">
          <Link to='/htmlIntro'>
          <li className='htmlCourse-links'>HTML Introduction</li>
          </Link>
          <Link to='/htmlBasic'>
          <li className='htmlCourse-links'>HTML Basic</li>
          </Link>
          <Link to='/htmlCss'>
          <li className='htmlCourse-links'>HTML CSS</li>
          </Link>
          <Link to='/htmlLinks'>
          <li className='htmlCourse-links'>HTML Links</li>
          </Link>
        </ol>
      </div>
    </div>
  );
}
