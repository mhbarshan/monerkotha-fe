import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, inputs);
   if(res)  setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`);
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
