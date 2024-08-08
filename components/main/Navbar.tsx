"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenuClick = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[50px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/icon.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Shyke Dev
          </span>
        </a>

        <div className="menu w-[400px] h-full flex flex-row items-center justify-end hidden md:flex">
          <div className="flex items-center justify-between w-full h-auto py-[10px] text-white">
            <a
              href="#about-me"
              className="cursor-pointer me-10 group relative inline-block text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              About me
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#skills"
              className="cursor-pointer me-10 group relative inline-block text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#projects"
              className="cursor-pointer me-10 group relative inline-block text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#contact-me"
              className="cursor-pointer me-10 group relative inline-block text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-purple-400 hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-purple-400 hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {navbarOpen && (
        <div className="menu w-full h-auto flex flex-col items-center justify-end md:hidden shadow-lg bg-[#03001417]">
          <a
            href="#about-me"
            onClick={handleMenuClick}
            className="cursor-pointer py-2 text-white w-full text-center group relative inline-block hover:text-purple-400 transition-colors duration-300"
          >
            About me
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
          <a
            href="#skills"
            onClick={handleMenuClick}
            className="cursor-pointer py-2 text-white w-full text-center group relative inline-block hover:text-purple-400 transition-colors duration-300"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
          <a
            href="#projects"
            onClick={handleMenuClick}
            className="cursor-pointer py-2 text-white w-full text-center group relative inline-block hover:text-purple-400 transition-colors duration-300"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
          <a
            href="#contact-me"
            onClick={handleMenuClick}
            className="cursor-pointer py-2 text-white w-full text-center group relative inline-block hover:text-purple-400 transition-colors duration-300"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
