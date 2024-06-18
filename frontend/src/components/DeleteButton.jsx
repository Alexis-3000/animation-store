import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


function DeleteButton({ item }) {
    const { state, dispatch } = useContext(GlobalContext);

  return (
    <button className="deleteButton" onClick={() => dispatch({ type: "deleteItem", payload: item})}><i className="fa-solid fa-xmark"></i></button>
  )
}

export default DeleteButton;