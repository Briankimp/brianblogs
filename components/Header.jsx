"use client";
import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import { FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMoon, setIsMoon] = useState(theme === "dark");

  const toggleIcon = () => {
    setIsMoon(!isMoon);
    setTheme(isMoon ? "light" : "dark");
  };

  return (
    <div>
      <div className="h-16 border-b-2 border-gray-500 py-3 flex items-center justify-between">
        <h1 className="text-3xl h-full text-beautiful-primary bg-slate-950 w-fit px-2 m-2 rounded-2xl font-extrabold flex items-center">
          Brianblogs <span className="text-4xl">.</span>
        </h1>
        <form action="search" className="m-0 p-0 relative">
          <div className="flex items-center w-fit">
            <input
              type="text"
              className="text-black rounded-full"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="absolute right-0 p-2 hover:text-beautiful-primary"
            >
              <FiSearch />
            </button>
          </div>
        </form>
        <div className="text-xl gap-3 mx-2 font-bold">
          <Link href="/" className={`px-2 ${pathname === '/' ? 'text-beautiful-primary' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`px-2 ${pathname === '/about' ? 'text-beautiful-primary' : ''}`}>
            About
          </Link>
          <Link href="/projects" className={`px-2 ${pathname === '/projects' ? 'text-beautiful-primary' : ''}`}>
            Project
          </Link>
        </div>
        <div>
          <Button onClick={toggleIcon} variant="outline" className="px-2 rounded-full mx-3">
            {isMoon ? <FaMoon /> : <IoMdSunny />}
          </Button>
          <Button variant="default" className="mx-3">
            <h1>Sign In</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
