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
          <Link to='/intro'>
          <li className='htmlCourse-links'>HTML Introduction</li>
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <Link>
          
          </Link>
          <li className='htmlCourse-links'>HTML Basic</li>
          <li className='htmlCourse-links'>HTML CSS</li>
          <li className='htmlCourse-links'>HTML Links</li>
          <li className='htmlCourse-links'>HTML Images</li>
          <li className='htmlCourse-links'>HTML Tables</li>
          <li className='htmlCourse-links'>HTML Forms</li>
          <li className='htmlCourse-links'>HTML Media</li>
        </ol>
      </div>
    </div>
  );
}
