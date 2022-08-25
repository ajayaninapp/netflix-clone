import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

export const userContext = createContext({
  isLoggedIn: false,
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = {
  email: "",
  password: "",
};

export function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(JSON.parse(sessionStorage.getItem("isLoggedIn")));
  });

  const [user, setUser] = useState(USER);
  function logIn(details) {
    const fetchdetails = JSON.parse(localStorage.getItem(details.email));
    console.log(fetchdetails);
    if (fetchdetails !== null) {
      const fetchPass = fetchdetails.password;
      console.log(fetchPass);
  
      if (fetchPass === details.password) {
        setUser({ fetchdetails });
        sessionStorage.setItem("isLoggedIn", true);
        debugger
        setIsLoggedIn(true);
        console.log(isLoggedIn);
      } else {
        sessionStorage.setItem("isLoggedIn", false);
        setIsLoggedIn(false);
        console.log(isLoggedIn);
        return true;
      }
    } else {
      console.log("wrong email");
    }
  }
  function logOut() {
    setUser(USER);
  }
  return (
    <userContext.Provider value={{ user, logIn, logOut,isLoggedIn }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user,isLoggedIn, logIn, logOut } = useContext(userContext);

  return { user,isLoggedIn, logIn, logOut };
}
