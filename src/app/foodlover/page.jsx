"use client"
import ImageCursorTrail from "@/components/ui/image-cursortrail"

import Card from './../_components/Card';
import {useState , useEffect} from "react";
import axios from "axios"

export default function foodlover() {
  const [post , setPost] = useState([]);
  const handlePost=async()=>{
    let { data } = await axios.get("https://foodapp-fh8em8hss-farooqs-projects-f073550d.vercel.app/api/upload");
        setPost(data.allPost)
  }
  useEffect(()=>{
    handlePost()
  },[])

  const images = [
    "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg",
    "https://images.pexels.com/photos/27099588/pexels-photo-27099588.jpeg",
    "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg",
    "https://images.pexels.com/photos/11390376/pexels-photo-11390376.jpeg",
    "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
    "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg",
    "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg",
    "https://images.pexels.com/photos/33233564/pexels-photo-33233564.jpeg",
    "https://images.pexels.com/photos/33180335/pexels-photo-33180335.jpeg"
  ]
  return (

    <main className="w-screen min-h-screen overflow-x-hidden">

      <div className="w-full h-[600px]   bg-[#f8f9fa] text-[#1c1c1c]">
        <ImageCursorTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36  "
          className=" w-full h-full"
        >
          <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl  tracking-tight ">
              Three Breakfast ideas to
            </h1>
            <h1 className="max-w-2xl text-center text-5xl  tracking-tight ">control your appetite all day</h1>
            <p className="max-w-2xl text-center text-2xl tracking-tight ">Try SomeThing Different</p>
          </article>
        </ImageCursorTrail>
      </div>
      <div className="w-screen bg-white flex flex-wrap items-center justify-center  gap-5 mt-5 mb-5 overflow-hidden min-h-[80%]">
        {
          post.map((item)=>{
            return(
              <Card item={item} key={item._id} />
            )
          })
        }

        


      </div>

    </main>
  )

}