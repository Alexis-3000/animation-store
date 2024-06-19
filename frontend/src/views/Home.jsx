import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Animation from "../components/Animation";
import BuyButton from "../components/BuyButton"
import "./Home.css"


function Home() {
  const { state, dispatch } = useContext(GlobalContext)

  // fetch animations from the backend on page load
  useEffect(() => {
    getAnimations();
  }, [])

  async function getAnimations() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/animations`);

      if (response.ok) {
        const animations = await response.json();
        console.log(animations);
        dispatch({ type: "getAnimations", payload: animations }); // store in reducer
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
      {/* map through the fetched animations and render components */}
      {
        state.items.map((animation, index) =>
          <div className="animationContainer" key={index}>
            <Animation type={animation.type}/>
            <BuyButton id={animation.id}/>
          </div>
        )
      }
    </>
  )
}

export default Home;