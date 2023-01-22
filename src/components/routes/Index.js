import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import Home from '../pages/home/Home'
import Contribute from '../pages/contribute/Contribute'
import Blog from '../pages/blog/Blog'
import Sign from '../pages/sign/Sign'
import SignIn from '../pages/signIn/SignIn'
import CodingSchools from "../pages/courses/CodingSchools";
import ErrorPage from '../pages/errorPage/ErrorPage'

export default function AppRouter({ handleAuth }) {

  // State
  const [contribute, setContribute] = useState("");
  return (
    <div className="appRouter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contribute"
            element={
              <Contribute
                contribute={contribute}
                setContribute={setContribute}
                handleAuth={handleAuth}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/sign" element={<Sign handleAuth={handleAuth} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/courses" element={<CodingSchools />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}
