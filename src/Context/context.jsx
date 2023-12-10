import {createContext} from "react";

export const GlobalContext = createContext("Initial Value");


const data = {
    user: null
};

export default function ContextProvider({children}) {
    return (
        <GlobalContext.Provider value={data}> {children} </GlobalContext.Provider>
    )
} 