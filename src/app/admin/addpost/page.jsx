"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
export default function addDish() {
    const router = useRouter()
    const [post, setPost] = useState({
        fullname: "",
        description: "",
        price: "",
        image: null

    })

    const handleInput = (e) => {
        let { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }))
    }

    const handleImage = (e) => {
        let file = e.target.files[0];
        setPost((prev) => ({ ...prev, image: file }))
    }

    // In your handleForm function, add headers:
    const handleForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", post.fullname);
        formData.append("description", post.description);
        formData.append("price", post.price);
        formData.append("image", post.image);

        try {
            const response = await axios.post(
                "https://foodapp-pi-three.vercel.app/api/upload",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true // if using cookies/sessions
                }
            );

            if (response.data) {
                router.push("/admin");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert(`Upload failed: ${error.response?.data?.message || error.message}`);
        }
    }
    return (
        <main className="min-h-screen flex justify-center">
            <form onSubmit={handleForm} className="w-[500px] h-[530px] mt-10 flex flex-col gap-5 shadow-2xl bg-[#f8f9fa] text-[#1c1c1c] p-5 rounded-2xl">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl">
                        Add Dish...
                    </h1>
                </div>
                <div>
                    <label>Dish Name</label>
                    <input type="text" name="fullname" placeholder="dishName" required className="w-full input input-primary" value={post.fullname} onChange={handleInput} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        required className="w-full textarea textarea-primary textarea-md resize-none "
                        name="description"
                        placeholder="Enter Detail of Dish" value={post.description} onChange={handleInput}
                    ></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" placeholder="street no 9 garden town" required className="w-full input input-primary" value={post.price} onChange={handleInput} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" name="file" required className="w-full input input-primary" onChange={handleImage} />
                </div>

                <div className="w-full flex justify-end items-center">
                    <button type="submit" className="btn btn-warning">Add Now</button>
                </div>
            </form>
        </main>
    )
}