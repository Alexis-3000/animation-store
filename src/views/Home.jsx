import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import BuyButton from "../components/BuyButton"
import "./Home.css"


function Home() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <>
      {
        state.items.map((animation, index) =>
          <div className="animationContainer" key={index}>
            {animation.animation}
            <BuyButton id={animation.id}/>
          </div>
        )
      }
    </>
  )
}

export default Home;