import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Contribute from "../pages/contribute/Contribute";
import Blog from "../pages/blog/Blog";
import Sign from "../pages/sign/Sign";
import Html from "../pages/courses/html/Html";
import Css from "../pages/courses/css/Css";
import JavaScript from "../pages/courses/javascript/JavaScript";
import HtmlIntro from "../pages/courses/html/htmlTopics/HtmlIntro";
import HtmlExample from "../pages/courses/html/htmlTopics/HtmlExample";
import HtmlBasic from "../pages/courses/html/htmlTopics/HtmlBasic";
import HtmlBasicExample from "../pages/courses/html/htmlTopics/HtmlBasicExample";
import ErrorPage from "../pages/errorPage/ErrorPage";
import { provider, auth, signInWithPopup, getRedirectResult, onAuthStateChanged } from "../../firebase";

export default function AppRouter() {
  // State
  const [contribute, setContribute] = useState("");

  //Set user state
  const [user, setUser] = useState(null)

  const handleAuth = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  useEffect(() => {
   
    getRedirectResult(auth)
   .then((result) => {
   }).catch((error) => {
 
     // Handle Errors here.
     const errorMessage = error.message;
     console.log(errorMessage)
   });
   }, [])
   useEffect(() => {
 
     //Get signedIn user
     onAuthStateChanged(auth, (user) => {
         if (user) {
           // ...
           setUser(user)
         } else {
           // User is signed out
           // ...
           console.log('user signed out')
           setUser(null)
         }
       });
 }, [])
  return (
    <div className="appRouter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contribute"
          element={
            <Contribute contribute={contribute} setContribute={setContribute} user={user} handleAuth = {handleAuth}/>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/courses/html" element={<Html />} />
        <Route path="/htmlIntro" element={<HtmlIntro />}>
          <Route path="/htmlIntro/example" element={<HtmlExample />} />
        </Route>
        <Route exact path="/htmlBasic" element={<HtmlBasic />}>
          <Route path="/htmlBasic/example" element={<HtmlBasicExample />} />
        </Route>
        <Route path="/courses/css" element={<Css />} />
        <Route path="/courses/javascript" element={<JavaScript />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
