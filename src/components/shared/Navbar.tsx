"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-12 w-screen flex items-center justify-between px-4 fixed top-0 bg-black-p z-50">
      <Link
        href="/"
        className="text-white text-xl font-bold relative overflow-hidden group"
      >
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          drovide pivide
        </span>
        <span className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          deepee
        </span>
      </Link>

      {/* Hamburger menu for small devices */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-p">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-12">
        <Link href="/" className="text-yellow-p">
          Home
        </Link>
        <Link href="/WhatWeDo" className="text-yellow-p">
          What We Do
        </Link>
        <Link href="/WhatWeChase" className="text-yellow-p">
          What We Chase
        </Link>
        <Link href="/whoweare" className="text-yellow-p">
          Who We Are
        </Link>
      </div>

      {/* Mobile dropdown menu */}

      <div
        className={`absolute top-12 left-0 w-full bg-black-p md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="block py-3 px-4 text-yellow-p">
          Home
        </Link>
        <Link href="/WhatWeDo" className="block py-3 px-4 text-yellow-p">
          What We Do
        </Link>
        <Link href="/WhatWeChase" className="block py-3 px-4 text-yellow-p">
          What We Chase
        </Link>
        <Link href="/whoweare" className="block py-3 px-4 text-yellow-p">
          Who We Are
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
