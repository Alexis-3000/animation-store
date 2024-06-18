import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import CartItem from "../components/CartItem";
import "./ShoppingCart.css"

function ShoppingCart() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <section>

        <div className="cartContainer">
          { state.shoppingCart.length > 0 ?
            <>
            { 
              state.shoppingCart.map((item, index) =>
              <CartItem item={item} index={index}/>
              )
            }
            </>
            :
            <div>The Shopping Cart is empty</div>
          }
        </div>
        
        <div className="cartFooter">
          <div className="">Total: {state.totalPrice} Coins</div>
          <button className="checkoutButton">Checkout</button>
        </div>

      </section>
      
    </>
  )
}

export default ShoppingCart;