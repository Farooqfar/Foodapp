import Order from "@/app/_components/Order"
import mongoose from "mongoose"
mongoose.connect("mongodb+srv://info4895:yxOsxzOWRxNF5tlP@foodapp.3olxdpi.mongodb.net/?retryWrites=true&w=majority&appName=foodapp")

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