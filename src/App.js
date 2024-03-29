import React, { useState, useEffect, createContext, Suspense, lazy } from "react";
import "./App.css";
import { Navbar } from "./components/LayoutComponent";
import { Sidebar } from "./components/LayoutComponent";
import { Loading } from "./components/Loading";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { getDocs, collection } from "@firebase/firestore";
import { HelmetProvider } from "react-helmet-async";
import {
  ArrowUpward,
} from "@mui/icons-material";
import {
  auth,
  provider,
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
  db,
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

  const AppRouter = lazy(() => import('./components/routes/Index'))
  const handleError = useErrorHandler();

  // ErrorBoundary useEffect
  useEffect(() => {
    handleError();
  }, [handleError]);

  //Set state for the darkmode
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
// State
const [allContributions, setAllContributions] = useState('');
const [run, setRun] = useState(true)
const dbRef = collection(db, "contribution");
// useEffect
useEffect(() => {
  if(run === true){
    async function getAllContributions() {
      const contributions = await getDocs(dbRef);
         setAllContributions(contributions.docs.length)
    }
    getAllContributions();
  }
}, [dbRef, run]);

  //Handle the darkmode
  const handleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  };

  //Styles
  const darkModeStyle = {
    light: {
      foreground: "#000000",
      background: "#f2f2f2",
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
      if (user !== null) {
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
      <Suspense fallback={<Loading />}>
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
              <UserContext.Provider value={user}>
                <Navbar toggle={handleDarkMode} darkMode={darkMode} />
                <div className="sidebarAppDiv">
                  <Sidebar />
                  <a href="#topRegion-locator" id="topRegion">
                    <ArrowUpward />
                  </a>
                  <AppRouter handleAuth={handleAuth} setRun={setRun} allContributions={allContributions}/>
                </div>
              </UserContext.Provider>
            </HelmetProvider>
          </ErrorBoundary>
        </div>
      </Suspense>
    </DbContext.Provider>
  );
}
export default App;