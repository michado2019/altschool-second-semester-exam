import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/LayoutComponent";
import AppRouter from "./components/routes/Index";
import {ErrorBoundary, useErrorHandler} from 'react-error-boundary';
import {HelmetProvider} from 'react-helmet-async';

// ErrorBoundary
const ErrorBoundaryComponent = ({ error }) => {
    return (
        <div role='alert' className="errorBoundary">
            <h1 className="errorBoundary-title">Something went wrong!</h1>
            <p className="errorBoundary-message">{error.message}</p>
        </div>
    )
}
function App() {

  const handleError = useErrorHandler();

  // ErrorBoundary useEffect
  useEffect(() => {
      handleError()
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
    }
  };
  return (
    <div className="App" style={darkMode ? {backgroundColor: darkModeStyle.dark.background, color: darkModeStyle.dark.foreground} : {backgroundColor: darkModeStyle.light.background, color: darkModeStyle.light.foreground} }>
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
      <HelmetProvider>
      <Navbar toggle={handleDarkMode} darkMode={darkMode} />
      <AppRouter />
      </HelmetProvider>
      </ErrorBoundary>
    </div>
  );
}
export default App;