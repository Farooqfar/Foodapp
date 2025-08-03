import mongoose from "mongoose";
mongoose.connect("mongodb+srv://info4895:pnvXvEukLylmxJes@cluster0.nkomlwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const postSchema = new mongoose.Schema({
    fullname: String,
    description: String,
    price: Number,
    image: String
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)