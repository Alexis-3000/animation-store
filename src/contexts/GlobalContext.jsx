import { createContext, useReducer } from "react";
import animationArray from "../data";

export const GlobalContext = createContext();

const initialState = {
    screenWidth: window.innerWidth,
    items: animationArray,
    shoppingCart: [],
}

function reducer (state, action) {
    switch (action.type) {
        case "setScreenWidth": {
            return {
                ...state, 
                screenWidth: window.innerWidth,
            }
        }
        case "addToCart": {
            /* write addToCart function! */
            return {
                ...state, 
                shoppingCart: [...state.shoppingCart, action.payload /* what to add? how to get the id? */]
            }
        }

    }
}

function GlobalContextProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
