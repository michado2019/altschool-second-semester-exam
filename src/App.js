import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Navbar } from "./components/LayoutComponent";
import { Sidebar } from "./components/LayoutComponent";
import AppRouter from "./components/routes/Index";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { ArrowUpward, ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import {
  auth,
  provider,
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
  db
} from "./firebase";

 // create context
 export const DbContext = createContext();
 export const UserContext = createContext();

 // ErrorBoundary
 const ErrorBoundaryComponent = ({ error }) => {
  return (
    <div role="alert" className="errorBoundary">
      <h1 className="errorBoundary-title">Something went wrong!</h1>
      <p className="errorBoundary-message">{error.message}</p>
    </div>
  );
};
function App() {
  const handleError = useErrorHandler();

  // ErrorBoundary useEffect
  useEffect(() => {
    handleError();
  }, [handleError]);

  //Set state for the darkmode
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  // Handle sidebar
  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  //Handle the darkmode
  const handleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  };

  //Styles
  const darkModeStyle = {
    light: {
      foreground: "#000000",
      background: "#ffffff",
    },
    dark: {
      foreground: "#737737",
      background: "#000000",
    },
  };

  // Auth
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, []);

  useEffect(() => {
    //Get signedIn user
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, photoURL, email } = user;
          setUser({ displayName, photoURL, email });
      } else {
        console.log("user signed out");
        setUser(null);
      }
    });
  }, []);
  return (
    <DbContext.Provider value={db}>
      <div
        className="App"
        style={
          darkMode
            ? {
                backgroundColor: darkModeStyle.dark.background,
                color: darkModeStyle.dark.foreground,
              }
            : {
                backgroundColor: darkModeStyle.light.background,
                color: darkModeStyle.light.foreground,
              }
        }
      >
        <div id="topRegion-locator"></div>
        <div id="circleArrow">
          {
            sidebar ?
            <ArrowCircleRight   className="arrows" onClick={handleSidebar}/> :
            <ArrowCircleLeft  className="arrows" onClick={handleSidebar}/> 
          }
          </div>
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
          <HelmetProvider>
            <UserContext.Provider value={user}>
              <Navbar toggle={handleDarkMode} darkMode={darkMode} />
              <div className="sidebarAppDiv">
                <Sidebar sidebar= {sidebar} />
                <a href="#topRegion-locator" id="topRegion">
                  <ArrowUpward />
                </a>
                <AppRouter handleAuth={handleAuth} />
              </div>
            </UserContext.Provider>
          </HelmetProvider>
        </ErrorBoundary>
      </div>
    </DbContext.Provider>
  );
}
export default App;