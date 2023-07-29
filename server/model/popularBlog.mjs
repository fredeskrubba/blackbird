import mongoose from "mongoose"

const popularBlog = new mongoose.Schema({
    title: String,
    tags: Array,
    description: String
}, {collection: "hot"})

export default mongoose.model("hot", popularBlog)
