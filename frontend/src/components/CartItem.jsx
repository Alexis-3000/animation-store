import DeleteButton from "./DeleteButton";

function CartItem({ item, index }) {
  return (
    <div className="itemContainer" key={index}>
        <div className="animation">{item.animation}</div>
        <div className="animationInfo">
            <div className="infoHeader">
                <div className="animationName">{item.name}</div>
                <DeleteButton item={item}/> 
            </div>
            <div className="price">Price: {item.price} coins</div>
        </div>
    </div>
  )
}

export default CartItem;