import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Coin() {
    const { state, dispatch} = useContext(GlobalContext);

  return (
    <div onClick={() => dispatch({ type: "collectCoin"})}></div>
  )
}

export default Coin;