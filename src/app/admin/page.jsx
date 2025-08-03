"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from 'react';
import axios from "axios"

export default function Admin() {
  const [post, setPost] = useState([]);

  const handleApi = async () => {
    let { data } = await axios.get("http://localhost:3000/api/upload");
    setPost(data.allPost)
  }
  const handleDeleteBtn=async(id)=>{
  
  let update = await axios.delete("http://localhost:3000/api/upload",{data:{id}})
setPost(post.filter((item)=> item._id !== id))
  }
  
  useEffect(() => {
    handleApi()

  }, [])
 
  return (
    <main className="min-h-screen w-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-4 overflow-x-auto">
        <div className="w-full flex justify-between">

          <h1 className="text-2xl font-bold mb-4">Admin - Food Posts</h1>
          <Link href="/admin/addpost">
            <button className="btn btn-primary">Add Dish</button>
          </Link>
        </div>
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Edit</th>
              <th className="p-3 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              post.map((items) => {

                return (<tr key={items._id} className="hover:bg-gray-50">
                  <td className="p-3 border">1</td>
                  <td className="p-3 border">
                    <Image
                      src={`/${items.image}`}
                      alt="pizza"
                      width={60}
                      height={40}
                      className="rounded-md object-cover"
                    />
                  </td>
                  <td className="p-3 border font-medium">{items.fullname}</td>
                  <td className="p-3 border text-sm text-gray-600">
                    {items.description}
                  </td>
                  <td className="p-3 border">Rs.{items.price}</td>
                  <td className="p-3 border">
                    <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Active
                    </button>
                  </td>
                  <td className="p-3 border text-center">
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                  <td className="p-3 border text-center">
                    <button onClick={()=>handleDeleteBtn(items._id)} className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
                )

              })

            }

            {/* Repeat <tr> for more items */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
