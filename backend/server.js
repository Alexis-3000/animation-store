import express from "express";
import cors from "cors";
import connect from "./libs/database.js";
import animationsRouter from "./routes/animations.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js";

await connect(); // import function with database connection

const app = express(); // store all functionalities of express framework

app.use(cors()); // allow the client to access the server (they have different origins)
app.use(express.json()); // middleware that parses incoming requests for data in JSON format

// create routes
app.use("/animations", animationsRouter);

// define the server address (port)
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});

app.use(globalErrorHandler);
