import { User } from "lucide-react";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://info4895:yxOsxzOWRxNF5tlP@foodapp.3olxdpi.mongodb.net/?retryWrites=true&w=majority&appName=foodapp")

const orderSchema = mongoose.Schema({
    fullname: String,
    food: String,
    address: String,
    phone: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: " User"
    }
})

export default mongoose.models.Order || mongoose.model("Order", orderSchema)