import React, { createContext, useContext } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const value = { future: "some value" }; // Replace with your actual value
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
