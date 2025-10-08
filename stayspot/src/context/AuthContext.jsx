


import React, { createContext, useContext, useState, useMemo } from "react";
import { login as loginApi } from "../api/client.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Parse user from localStorage
const getUserFromStorage = () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser || storedUser === "undefined") return null;
  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(getUserFromStorage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Await returns the data object directly (see client.js)
      const response = await loginApi(email, password);
      console.log("Login API response:", response);

      // Destructure token and user from response directly
      const { token, user } = response;

      // Normalize user id field (handle both _id or id)
      const normalizedUser = { ...user, _id: user._id || user.id };

      setToken(token);
      setUser(normalizedUser);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(normalizedUser));
      console.log("User logged in:", normalizedUser);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = useMemo(
    () => ({ token, user, loading, error, signIn, signOut }),
    [token, user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



// subcate
// import React, { createContext, useContext, useState, useMemo } from "react";
// import { login as loginApi } from "../api/client.js";

// const AuthContext = createContext();

// // Named export hook for consuming context
// export const useAuth = () => useContext(AuthContext);

// // Utility: parse user from localStorage
// const getUserFromStorage = () => {
//   const storedUser = localStorage.getItem("user");
//   if (!storedUser || storedUser === "undefined") return null;
//   try {
//     return JSON.parse(storedUser);
//   } catch {
//     return null;
//   }
// };

// // AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("token"));
//   const [user, setUser] = useState(getUserFromStorage);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const signIn = async (email, password) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await loginApi(email, password);
//       console.log("Login API response:", response);

//       const { token, user } = response;
//       const normalizedUser = { ...user, _id: user._id || user.id };

//       setToken(token);
//       setUser(normalizedUser);
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(normalizedUser));

//       console.log("User logged in:", normalizedUser);
//     } catch (err) {
//       setError(err.message || "Login failed");
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signOut = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   // useMemo ensures value object reference is stable for HMR
//   const value = useMemo(
//     () => ({ token, user, loading, error, signIn, signOut }),
//     [token, user, loading, error]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
