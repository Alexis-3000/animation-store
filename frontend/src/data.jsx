import Bounce from "./animations/Bounce"
import Flip from "./animations/Flip"
import Lotus from "./animations/Lotus"
import Morph from "./animations/Morph"
import Orbit from "./animations/Orbit"
import Spin from "./animations/Spin"
import Squares from "./animations/Squares"
import Swing from "./animations/Swing"
import Wiggle from "./animations/Wiggle"

const animationArray = [
    {   
        id: 1,
        animation: <Morph />, 
        name: "Morph",
        price: 5,
    },
    {
        id: 2,
        animation: <Spin />,
        name: "Spin",
        price: 5,
    },
    {
        id: 3,
        animation: <Wiggle />,
        name: "Wiggle",
        price: 5,
    },
    {
        id: 4,
        animation: <Lotus />,
        name: "Lotus",
        price: 10,
    },
    {
        id: 5,
        animation: <Flip />,
        name: "Flip",
        price: 5,
    },
    {
        id: 6,
        animation: <Bounce />,
        name: "Bounce",
        price: 5,
    },
    {
        id:7,
        animation: <Orbit />,
        name: "Orbit", 
        price: 10,
    },
    {
        id: 8,
        animation: <Squares />,
        name: "Squares",
        price: 5,
    },
    {
        id: 9,
        animation: <Swing />,
        name: "Swing",
        price: 5,
    },
   

    {/* 
    <Morph />,
    <Spin />,
    <Wiggle />,
    <Lotus />,
    <Flip />,
    <Bounce />,
    <Orbit />,
    <Squares />,
    <Swing />, 
    */}
];

export default animationArray;