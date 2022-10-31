import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Sign from "../pages/sign/Sign";
import Html from "../pages/courses/html/Html";
import Css from "../pages/courses/css/Css";
import JavaScript from "../pages/courses/javascript/JavaScript";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/courses/html" element={<Html />} />
        <Route path="/courses/css" element={<Css />} />
        <Route path="/courses/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  );
}
