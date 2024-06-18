import createError from "http-errors";
import Animation from "../models/Animation.js";

export async function getAnimations(req, res, next) {
    try {
        const animations = await Animation.find();
        res.status(200).json(animations);
    } catch (error) {
        next(createError(500, "Server error"));
    } 
}
