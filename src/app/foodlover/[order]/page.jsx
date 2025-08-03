"use client"
import { react, useState } from "react"
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Order() {
    const { orderId } = useParams();
    const searchParams = useSearchParams();
    const router = useRouter()
    const foodName = searchParams.get("name");
    const [order, setOrder] = useState({
        fullname: "",
        food: foodName,
        address: "",
        phone: ""
    })

    const handleInput = (e) => {
        let { name, value } = e.target;
        setOrder((prev) => ({ ...prev, [name]: value }))
    }
    const handleForm = async (e) => {
        e.preventDefault();
        try {

            let data = await axios.post("http://localhost:3000/api/order", order)
            if (data) {

                router.push("/orderhistory")

            }
        } catch (error) {
            return error
        }
    }
    return (
        <main className="min-h-screen flex justify-center">
            <form onSubmit={handleForm} className="w-[500px] h-[480px] mt-10 flex flex-col gap-5 shadow-2xl bg-[#f8f9fa] text-[#1c1c1c] p-5">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl">
                        Order Now...
                    </h1>
                </div>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname" placeholder="Full Name" required className="w-full input input-primary" value={order.fullname} onChange={handleInput} />
                </div>
                <div>
                    <label>Food</label>
                    <input type="text" name="food" placeholder="Pizza" readOnly required className="w-full input input-primary" value={foodName} />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" placeholder="street no 9 garden town" required className="w-full input input-primary" value={order.address} onChange={handleInput} />
                </div>
                <div>
                    <label>Phone no.</label>
                    <input type="tel" name="phone" placeholder="03216565309" required className="w-full input input-primary" value={order.phone} onChange={handleInput} />
                </div>
                <div className="w-full flex justify-end items-center">
                    <button type="submit" className="btn btn-warning">Order Now</button>
                </div>
            </form>
        </main>
    )
}
