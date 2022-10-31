import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/LayoutComponent";
import AppRouter from "./components/routes/Index";

function App() {
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
      foreground: "#ffffff",
      background: "#000000",
    }
  };
  return (
    <div className="App" style={darkMode ? {backgroundColor: darkModeStyle.dark.background, color: darkModeStyle.dark.foreground} : {backgroundColor: darkModeStyle.light.background, color: darkModeStyle.light.foreground} }>
      <Navbar toggle={handleDarkMode} darkMode={darkMode} />
      <AppRouter />
    </div>
  );
}
export default App;
