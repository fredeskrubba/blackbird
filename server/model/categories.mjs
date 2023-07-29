import mongoose from "mongoose"

const categories = new mongoose.Schema({
    categories: Array
}, {collection: "tags"})

export default mongoose.model("tags", categories)