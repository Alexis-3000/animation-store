import connect from "./libs/database.js";
import Animation from "./models/Animation.js";

try {
    console.log("Attempting to seed database...");

    await connect(); // connect to "animation-store" database

    await Animation.deleteMany({}); // delete all existing documents in the "Animation" collection

    const animationArray = [
        {   
            id: 1,
            type: "morph", 
            name: "Morph",
            price: 5,
        },
        {
            id: 2,
            type: "spin",
            name: "Spin",
            price: 5,
        },
        {
            id: 3,
            type: "wiggle",
            name: "Wiggle",
            price: 5,
        },
        {
            id: 4,
            type: "lotus",
            name: "Lotus",
            price: 10,
        },
        {
            id: 5,
            type: "flip",
            name: "Flip",
            price: 5,
        },
        {
            id: 6,
            type: "bounce",
            name: "Bounce",
            price: 5,
        },
        {
            id: 7,
            type: "orbit",
            name: "Orbit", 
            price: 10,
        },
        {
            id: 8,
            type: "squares",
            name: "Squares",
            price: 5,
        },
        {
            id: 9,
            type: "swing",
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

