import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Sign from "../pages/sign/Sign";
import Html from "../pages/courses/html/Html";
import Css from "../pages/courses/css/Css";
import JavaScript from "../pages/courses/javascript/JavaScript";
import HtmlIntro from "../pages/courses/html/htmlTopics/HtmlIntro";
import HtmlExample from "../pages/courses/html/htmlTopics/HtmlExample";
import HtmlBasic from '../pages/courses/html/htmlTopics/HtmlBasic';
import HtmlBasicExample from '../pages/courses/html/htmlTopics/HtmlBasicExample';
import ErrorPage from "../pages/errorPage/ErrorPage";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/courses/html" element={<Html />} />
        <Route path="/htmlIntro" element={<HtmlIntro />}>
          <Route path="/htmlIntro/example" element={<HtmlExample />} />
        </Route>

        <Route exact path="/htmlBasic" element={<HtmlBasic />}>
          <Route path="/htmlBasic/example" element={<HtmlBasicExample />} />
        </Route>

        {/* {/* <Route path="/htmlCss" element={<HtmlCss />}>
          <Route path="/css/example" element={<CssExample />} />
        </Route>

        <Route path="/htmlLinks" element={<HtmlLinks />}>
          <Route path="/links/example" element={<HtmlLinks />} />
        </Route> */}
        <Route path="/courses/css" element={<Css />} />
        <Route path="/courses/javascript" element={<JavaScript />} /> 
        <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}
