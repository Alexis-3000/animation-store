import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function Layout() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
    <header>
        <nav>
            <NavLink to={"/"} className="logo">Alexis’ Animation Store</NavLink>
            
            <div className="navbar">
                <NavLink to={"/cart"} className="cartLinkContainer">
                  <div>Shopping Cart</div>
                  {
                    state.cartItems > 0 && <div className="counter">{state.cartItems}</div>
                  }
                </NavLink>
                <NavLink to={"/earn-money"}>
                  <div>Earn Money</div>
                  <div>Credit: {state.coins} Coins</div>
                </NavLink>
            </div>
        </nav>
    </header>
    
    <main>
        <Outlet />
    </main>

    </>
  )
}

export default Layout;