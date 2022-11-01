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

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/courses/html" element={<Html />} />
        <Route path="/intro" element={<HtmlIntro />}>
          <Route path="/intro/example" element={<HtmlExample />} />
        </Route>
        <Route path="/courses/css" element={<Css />} />
        <Route path="/courses/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  );
}
