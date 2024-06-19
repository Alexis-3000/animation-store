import "./css/Bounce.css"
import "./css/Flip.css"
import "./css/Lotus.css"
import "./css/Morph.css"
import "./css/Orbit.css"
import "./css/Spin.css"
import "./css/Squares.css"
import "./css/Swing.css"
import "./css/Wiggle.css"


function Animation({ type }) {
  return (
    <>
    {/* conditional rendering: if it is a complex animation, render needed structure, else render a simple component with type as className */}
    { 
        type === "lotus" ? 
            <div className="lotusContainer">
                <div className="lotus"></div>
            </div>
        : type === "orbit" ?
            <div className="orbitContainer">
                <div className="circle"></div>
                <div className="orbit">
                    <div className="moon"></div>
                </div>
            </div>
        : type === "squares" ?
            <div className="squares">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        : type === "swing" ?
            <div className="swingContainer">
                <div className="swing"></div>
            </div>
        : <div className={type}></div> 
    }
    </>
    
  )
}

export default Animation