import { createContext, useReducer } from "react";
// import animationArray from "../data";

export const GlobalContext = createContext();

const initialState = {
    screenWidth: window.innerWidth,
    /* items: animationArray, */ // old version
    items: [],
    shoppingCart: [],
    cartItems: 0,
    totalPrice: 0,
    coins: 0,
}

function reducer (state, action) {
    switch (action.type) {
        case "setScreenWidth": {
            return {
                ...state, 
                screenWidth: window.innerWidth,
            }
        }
        case "getAnimations": {
            return {
                ...state,
                items: action.payload
            }
        }
        case "addToCart": {
            return {
                ...state, 
                shoppingCart: [...state.shoppingCart, state.items.find((item) => item.id === action.payload)],
                cartCounter: state.cartItems++,
                totalPrice: state.shoppingCart.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 5),
            }
        }
        case "deleteItem": {
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, state.shoppingCart.filter((item) => item.id !== action.payload.id)],
                cartCounter: state.cartItems--,
                totalPrice: state.shoppingCart.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 5),
            }
        }
        case "collectCoin": {
            return {
                ...state,
                coins: state.coins++,
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
