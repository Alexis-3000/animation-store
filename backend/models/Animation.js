import { Schema, model } from "mongoose";


const animationSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    }
})

const Animation = model("Anmiation", animationSchema);

export default Animation;