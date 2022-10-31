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
    backgroundColor: darkMode ? "#000" : "#fff",
  };
  return (
    <div className="App" style={darkModeStyle}>
      <Navbar toggle={handleDarkMode} darkMode={darkMode} />
      <AppRouter />
    </div>
  );
}
export default App;
