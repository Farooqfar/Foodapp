"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function resturant() {
  const [signup, setSignup] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleValue = (e) => {
    let { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
      alert("password must be same");
    }
    try {

      let data = await axios.post("https://foodapp-pi-three.vercel.app/api/register", signup)
    } catch (error) {
      alert("user already exist")
      return
    }

    console.log(signup);
  };
  return (
    <main className="w-screen h-screen  flex flex-col items-end p-10 justify-center bg-[url(/register.jpg)] bg-cover bg-center bg-norepeat max-md:p-1 max-md:items-center">
      <div className="relative w-[500px] float-right  mt-10 p-5 rounded-2xl shadow-2xl  bg-black/40 max-md:w-[90%] max-md:ml-4 max-lg:w-[70%]">
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
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <div className="mt-10">
              <label className="text-white">First Name</label>
              <input
                type="text"
                name="FirstName"
                id=""
                required
                className="input input-primary w-[100%]"
                value={signup.FirstName}
                onChange={handleValue}
              />
            </div>
            <div>
              <label className="text-white">Last Name</label>
              <input
                type="text"
                name="LastName"
                id=""
                required
                className="input input-primary w-[100%]"
                value={signup.LastName}
                onChange={handleValue}
              />
            </div>
            <div>
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                id=""
                required
                className="input input-primary w-[100%]"
                value={signup.email}
                onChange={handleValue}
              />
            </div>
            <div>
              <label className="text-white">Password</label>
              <input
                type="password"
                name="password"
                required
                id=""
                className="input input-primary w-[100%] "
                value={signup.password}
                onChange={handleValue}
              />
            </div>
            <div>
              <label className="text-white">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id=""
                required
                className={
                  signup.password === signup.confirmPassword
                    ? "input input-primary w-[100%]"
                    : "input input-error w-[100%]" ||
                      signup.password.length == 4
                      ? "input input-accent w-[100%]"
                      : "input input-primary w-[100%]"
                }
                value={signup.confirmPassword}
                onChange={handleValue}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
