import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// children represents the component that we want to wrap
export const AuthContextProvider = ({ children }) => {
  //  saving user data in LocalStorage
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      inputs
    );
    setCurrentUser(response.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:3001/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
