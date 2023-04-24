import React, { createContext, useContext, useReducer } from "react";

const contextValue = createContext();
function Stateprovider({ initialState, reducer, children }) {
    return (
        <contextValue.Provider value={useReducer(reducer, initialState)}>
            {children}
        </contextValue.Provider>
    )
};

export const useGlobalContext = () => useContext(contextValue);
export default Stateprovider;
