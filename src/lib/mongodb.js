import Order from "@/app/_components/Order"
import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/foodapps")
const UserSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    email: String,
    password: String,
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }
})

export default mongoose.models.User || mongoose.model("User", UserSchema)