import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <header>
        <nav>
            <div className="navbar">
                <NavLink to={"/"}>Alexis’ Animation Store</NavLink>
                <NavLink to={"/cart"}>Shopping Cart</NavLink>
                <NavLink to={"/earn-money"}>Earn Money</NavLink>
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