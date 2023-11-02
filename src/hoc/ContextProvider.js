import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {
    const state = useState({episode: null});
    
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};