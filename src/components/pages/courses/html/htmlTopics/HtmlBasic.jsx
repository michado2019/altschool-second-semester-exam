import React from "react";
import "./HtmlBasic.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function HtmlBasic() {
  //Call useNavigate hook
  const navigate = useNavigate();

  //Handle navigate to html example
  const handleNavigateToExample = (e) => {
    e.preventDefault();

    //Navigate to html example
    navigate("/htmlBasic/example");
  };
  return (
    <div className="htmlBasic-wrapper">
      <h1 className="htmlBasic-title">HTML Basic</h1>
      <h2 className="htmlBasic-subtitle">HTML Document</h2>
      <ul>
        <li>
          All HTML documents must start with a document type declaration:'
          !DOCTYPE html, with a prefix and suffix of symbols less and greater
          than, respectively. .
        </li>
        <li>
          The visible part of the HTML document is between 'body' and 'body' tags.
        </li>
        <li>
          The HTML document itself begins with 'html' and ends with 'html' tags.
        </li>
      </ul>
      <button
        className="htmlBasicExample-btn"
        onClick={handleNavigateToExample}
      >
        Example
      </button>
      <Outlet />
    </div>
  );
}