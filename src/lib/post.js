import mongoose from "mongoose";
mongoose.connect("mongodb+srv://info4895:yxOsxzOWRxNF5tlP@foodapp.3olxdpi.mongodb.net/?retryWrites=true&w=majority&appName=foodapp")

const postSchema = new mongoose.Schema({
    fullname: String,
    description: String,
    price: Number,
    image: String
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)