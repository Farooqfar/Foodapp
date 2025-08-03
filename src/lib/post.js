import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/foodapps")
const postSchema = new mongoose.Schema({
    fullname: String,
    description: String,
    price: Number,
    image: String
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)