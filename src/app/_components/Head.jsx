"use client";
import Link from "next/link";
import { useState } from "react";
import FlipLink from "@/components/ui/text-effect-flipper";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#ffffff] text-[#1c1c1c] shadow-md h-15 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <FlipLink href="/foodapp">EaT FooD</FlipLink>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-10 mt-4 md:mt-0  w-full md:w-auto absolute md:static left-0 top-16 px-4 py-4 md:p-0 z-90`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
            <li>
              <Link href="/foodlover" className="hover:text-[#007bff] transition">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/orderhistory" className="hover:text-[#007bff]  transition">
                ORDER
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-[#007bff]  transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-[#f8f9fa] text-[#1c1c1c] px-4 py-2 rounded hover:bg-yellow-300 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
