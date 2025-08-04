"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function AddDish() {
    const router = useRouter()
    const [post, setPost] = useState({
        fullname: "",
        description: "",
        price: "",
        image: null
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleInput = (e) => {
        let { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }))
    }

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPost((prev) => ({ ...prev, image: e.target.files[0] }))
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError("")

        if (!post.image) {
            setError("Please select an image")
            setLoading(false)
            return
        }

        const formData = new FormData();
        formData.append("fullname", post.fullname);
        formData.append("description", post.description);
        formData.append("price", post.price);
        formData.append("image", post.image);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post(
                "https://foodapp-pi-three.vercel.app/api/upload",
                formData,
                config
            )

            if (data) {
                router.push("/admin")
            }
        } catch (error) {
            setError(error.response?.data?.message || "Failed to add dish")
            console.error("Upload error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex justify-center">
            <form onSubmit={handleForm} className="w-[500px] h-[530px] mt-10 flex flex-col gap-5 shadow-2xl bg-[#f8f9fa] text-[#1c1c1c] p-5 rounded-2xl">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl">Add Dish...</h1>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                <div>
                    <label>Dish Name</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Dish Name"
                        required
                        className="w-full input input-primary"
                        value={post.fullname}
                        onChange={handleInput}
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        required
                        className="w-full textarea textarea-primary textarea-md resize-none"
                        name="description"
                        placeholder="Enter Detail of Dish"
                        value={post.description}
                        onChange={handleInput}
                    ></textarea>
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        required
                        className="w-full input input-primary"
                        value={post.price}
                        onChange={handleInput}
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        required
                        className="w-full input input-primary"
                        onChange={handleImage}
                    />
                </div>

                <div className="w-full flex justify-end items-center">
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : "Add Now"}
                    </button>
                </div>
            </form>
        </main>
    )
}