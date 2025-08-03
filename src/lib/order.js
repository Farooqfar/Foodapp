import { User } from "lucide-react";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/foodapps")
const orderSchema = mongoose.Schema({
    fullname: String,
    food: String,
    address: String,
    phone: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:" User"
    }
})

export default mongoose.models.Order || mongoose.model("Order", orderSchema)