import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


function BuyButton({ id }) {
    const { state, dispatch } = useContext(GlobalContext);

    console.log(id);
  return (
    <button className="buyButton" onClick={() => dispatch({ type: "addToCart", payload: id})}>Buy</button>
  )
}

export default BuyButton;