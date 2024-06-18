import mongoose from "mongoose";

async function connect() {
    // register connection events
    mongoose.connection.on("connected", () => console.log("Database is connected"));
    mongoose.connection.on("error", (error) => console.log("Database error", error));

    // connect to the database using a connection string
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}

export default connect;