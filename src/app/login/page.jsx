"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
export default function resturant() {
  const router = useRouter()
  const [login, setLogin] = useState({

    email: "",
    password: "",

  });

  const handleValue = (e) => {
    let { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {

      let data = await axios.post("https://foodapp-pi-three.vercel.app/api/login", login)
      if (data) {
        router.push("/foodlover")
      }
    } catch (error) {
      alert("email or password invalid")
      return error
    }

  };
  return (
    <main className="w-screen min-h-screen flex flex-col justify-center bg-[url('/loginBg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="relative w-[40%] mt-10 ml-20 p-5 rounded-2xl shadow-2xl bg-black/40 max-md:w-[90%] max-md:ml-4 max-lg:w-[70%]" >
        <div>
          <Image
            src="/logo.png"
            alt="not found"
            width={100}
            height={100}
            className="absolute left-[40%] top-[-70px] shadow-2xl rounded-full bg-black/40"
          />
        </div>
        <div>
          <form onSubmit={handleForm} className="flex flex-col gap-6">
            <div>
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                id=""
                required
                className="input input-primary w-[100%]"
                value={login.email}
                onChange={handleValue}
              />
            </div>
            <div>
              <label className="text-white">Password</label>
              <input
                type="password"
                name="password"
                id=""
                required
                className="input input-primary w-[100%] "
                value={login.password}
                onChange={handleValue}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
