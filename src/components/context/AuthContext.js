import { createContext, useReducer } from "react";

//Create context
export const AuthContext = createContext();

//Create reducer
const reducer = (state, action) => {
  switch (action) {
    case "LOGIN":
      return {
        ...state,
        user: action,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
export const AuthContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, { user: null });
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
        {children}
        </AuthContext.Provider>
    );
    };