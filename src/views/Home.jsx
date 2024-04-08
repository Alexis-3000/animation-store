import Bounce from "../animations/Bounce"
import Flip from "../animations/Flip"
import Lotus from "../animations/Lotus"
import Morph from "../animations/Morph"
import Orbit from "../animations/Orbit"
import Spin from "../animations/Spin"
import Squares from "../animations/Squares"
import Swing from "../animations/Swing"
import Wiggle from "../animations/Wiggle"
import BuyButton from "../components/BuyButton"
import animationArray from "../data"
import "./Home.css"

function Home() {
  return (
    <>
      {
        animationArray.map(animation => {
          return <div className="animationContainer">
            {animation}
            <BuyButton />
          </div>
        })
      }


      

      <div className="animationContainer">
        <Morph />
        <BuyButton />
      </div>
      
      {/* <Spin />
      <Wiggle />
      <Lotus />
      <Flip />
      <Bounce />
      <Orbit />
      <Squares />
      <Swing /> */}
    </>
  )
}

export default Home;