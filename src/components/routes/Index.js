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
import Admin from "../pages/admin/Admin";
import BlogCustomize from "../pages/blogCustomize/BlogCustomize";
import DeleteBlog from "../pages/blogCustomize/DeleteBlog";
import ViewBlogs from "../pages/blogCustomize/ViewBlogs";
import EditBlog from "../pages/blogCustomize/EditBlog"

export default function AppRouter({ handleAuth, allContributions, setRun }) {

  // State
  const [contribute, setContribute] = useState("");
  const [contributionId, setContributionId] = useState("")
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
                setRun={setRun}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/sign" element={<Sign handleAuth={handleAuth} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/courses" element={<CodingSchools />} />
          <Route path="/admin" element={<Admin allContributions={allContributions}/>} >
            <Route path="/admin/blogCustomize/:id" element={<BlogCustomize />} />
          </Route>
          <Route path='/admin/blogCustomize/:id/editBlog' element={<EditBlog contribute={contribute}
                setContributionId={setContributionId}
                contributionId={contributionId}
                setContribute={setContribute}
                handleAuth={handleAuth}/>} />
          <Route path='/admin/blogCustomize/:id/deleteBlog' element={<DeleteBlog />} />
          <Route path='/admin/blogCustomize/:id/viewBlogs' element={<ViewBlogs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}
