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
        animation: <Morph />
    },
    {
        id: 2,
        animation: <Spin />
    },
    {
        id: 3,
        animation: <Wiggle />
    },
    {
        id: 4,
        animation: <Lotus />
    },
    {
        id: 5,
        animation: <Flip />
    },
    {
        id: 6,
        animation: <Bounce />
    },
    {
        id:7,
        animation: <Orbit />
    },
    {
        id: 8,
        animation: <Squares />
    },
    {
        id: 9,
        animation: <Swing />
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