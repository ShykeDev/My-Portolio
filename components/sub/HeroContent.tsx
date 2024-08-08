"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import * as Icon from "react-bootstrap-icons";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello, I&apos;m <br></br>
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              sequence={["Shyke", 1000, "Nhat Vu", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer with experience in Website, Mobile and
          Software development.
          <br />
          <br /> ✔️ 3 Years experience with front & backend development
          <br /> ✔️ Open to initiating, new ideas and new technologies
          <br /> ✔️ Highly recommended by my customers
          <br />
          <br />
          <span className="text-lg text-white">
            👉 nguyenlenhatvu27@gmail.com
          </span>
        </motion.p>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-purple-400 max-w-[600px] d-flex"
        >
          <a href="https://www.facebook.com/tks.vu" className="me-10 group relative inline-block">
            Facebook
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
          <a href="https://zalo.me/0865805582" className="me-10 group relative inline-block">
            Zalo
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
          <a href="https://t.me/shyketeam" className="me-10 group relative inline-block">
            Telegram
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </a>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-3 rounded-lg max-w-[600px]  d-flex"
        >
          <a href="#skills">

            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Icon.Search className="inline-block me-2 h-4 w-4"></Icon.Search>
              Check my skills
            </button>
          </a>

          <a href="#contact-me">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-purple-400 group-hover:from-purple-600 group-hover:to-purple-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                📩 Contact me
              </span>
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
