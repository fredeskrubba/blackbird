import mongoose from "mongoose"

const user = new mongoose.Schema({
    name: String,
    password: String,
    id: Number,
}, {collection: "users"})

export default mongoose.model("users", user)