import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Loading = () => {
  return <div>Loading....</div>;
};

export default function AppRouter({ handleAuth }) {
  const Home = lazy(() => import("../pages/home/Home"));
  const Contribute = lazy(() => import("../pages/contribute/Contribute"));
  const Sign = lazy(() => import("../pages/sign/Sign"));
  const CodingSchools = lazy(() => import("../pages/courses/CodingSchools"));
  const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"));
  const SignIn = lazy(() => import("../pages/signIn/SignIn"));
  const Blog = lazy(() => import("../pages/blog/Blog"));

  // State
  const [contribute, setContribute] = useState("");
  return (
    <div className="appRouter">
      <Suspense fallback={Loading}>
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
          <Route path="/sign" element={<Sign handleAuth={handleAuth} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/courses" element={<CodingSchools />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
