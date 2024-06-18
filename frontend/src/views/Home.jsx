import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import BuyButton from "../components/BuyButton"
import "./Home.css"
import Morph from "../animations/Morph";


function Home() {
  const { state, dispatch } = useContext(GlobalContext)

  // fetch animations from the backend
  useEffect(() => {
    getAnimations();
  }, [])
  
  console.log(import.meta.env.VITE_API);

  async function getAnimations() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/animations`);

      if (response.ok) {
        const animations = await response.json();
        console.log(animations);
        dispatch({ type: "getAnimations", payload: animations });
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {
        state.items.map((animation, index) =>
          <div className="animationContainer" key={index}>
            {animation.path}
            <BuyButton id={animation.id}/>
          </div>
        )
      }
    </>
  )
}

export default Home;