import React, { createContext, useReducer } from 'react';

const weatherContext = createContext();

export const Provider = ({ reducer, initialState, children }) => {
  const contextValue = useReducer(reducer, initialState)
  return (
    <weatherContext.Provider value={contextValue}>
      {children}
    </weatherContext.Provider>
  );
};

export default weatherContext;