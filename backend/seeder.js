import connect from "./libs/database.js";
import Animation from "./models/Animation.js";

try {
    console.log("Attempting to seed database...");

    await connect(); // connect to "animation-store" database

    await Animation.deleteMany({}); // delete all existing documents in the "Animation" collection

    const animationArray = [
        {   
            id: 1,
            path: "frontend/src/animations/Morph.jsx", 
            name: "Morph",
            price: 5,
        },
        {
            id: 2,
            path: "frontend/src/animations/Spin.jsx",
            name: "Spin",
            price: 5,
        },
        {
            id: 3,
            path: "frontend/src/animations/Wiggle.jsx",
            name: "Wiggle",
            price: 5,
        },
        {
            id: 4,
            path: "frontend/src/animations/Lotus.jsx",
            name: "Lotus",
            price: 10,
        },
        {
            id: 5,
            path: "frontend/src/animations/Flip.jsx",
            name: "Flip",
            price: 5,
        },
        {
            id: 6,
            path: "frontend/src/animations/Bounce.jsx",
            name: "Bounce",
            price: 5,
        },
        {
            id: 7,
            path: "frontend/src/animations/Orbit.jsx",
            name: "Orbit", 
            price: 10,
        },
        {
            id: 8,
            path: "frontend/src/animations/Squares.jsx",
            name: "Squares",
            price: 5,
        },
        {
            id: 9,
            path: "frontend/src/animations/Swing.jsx",
            name: "Swing",
            price: 5,
        } 
    ];

    await Animation.insertMany(animationArray);

    console.log("Database seeded!");

    process.exit(0); // Exit process with "success" code
} catch (error) {
    console.log(error);
    process.exit(1); // Exit process with "failure" code
}

