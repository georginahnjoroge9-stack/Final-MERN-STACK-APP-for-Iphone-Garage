import { createContext, useContext, useState } from "react";
import axios from "axios";
import API from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = async (email, password) => {
    const { data } = await axios.post(`${API}/api/users/login`, {
      email,
      password,
    });
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const register = async (name, email, password) => {
    const { data } = await axios.post(`${API}/api/users/register`, {
      name,
      email,
      password,
    });
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
