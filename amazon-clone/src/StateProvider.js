import React, { createContext, useContext, userReducer } from "react";

// Prepares teh DataLayer
export const StateContext = createContext();

//  Wrap our app & provide teh Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={userReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
