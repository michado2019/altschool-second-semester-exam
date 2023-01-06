import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Navbar } from "./components/LayoutComponent";
import { Sidebar } from "./components/LayoutComponent";
import AppRouter from "./components/routes/Index";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { ArrowUpward } from "@mui/icons-material";
import { db } from './firebase'

export const DbContext = createContext()

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
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <HelmetProvider>
          <Navbar toggle={handleDarkMode} darkMode={darkMode} />
          <div className="sidebarAppDiv">
            <Sidebar />
            <a href="#topRegion-locator" id="topRegion">
              <ArrowUpward />
            </a>
            <AppRouter />
          </div>
        </HelmetProvider>
      </ErrorBoundary>
    </div>   
    </DbContext.Provider>
  );
}
export default App;