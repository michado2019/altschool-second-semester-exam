import React from "react";
import "./HtmlIntro.css";
import {Outlet, useNavigate} from 'react-router-dom'

export default function HtmlIntro() {

    //Call useNavigate hook
    const navigate = useNavigate();

    //Handle navigate to html example
    const handleNavigateToExample = (e) => {
    e.preventDefault();
    //Navigate to html example
      navigate('/htmlIntro/example');
    }
  return (
    <div className="htmlIntro-wrapper">
      <h1 className='htmlIntro-title'>HTML Introduction</h1>
      <h2 className='htmlIntro-subtitle'>What is HTML?</h2>
      <ul>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
        <li>
          HTML elements label pieces of content such as "this is a heading",
          "this is a paragraph", "this is a link", etc.
        </li>
      </ul>
      <button className='htmlExample-btn' onClick={handleNavigateToExample}>Example</button>
      <Outlet />
    </div>
  );
}
