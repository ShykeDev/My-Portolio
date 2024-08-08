"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Projects = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <ProjectCard
            src="/Project1.png"
            title="FPLSP EXAM"
            description="Online exam delivery allows students to take the exam remotely and automatically distributes shuffled questions. This helps prevent cheating and ensures fairness in the exam. In addition, it is also a powerful tool to manage exam questions for lecturers."
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <ProjectCard
            src="/Project2.png"
            title="Captcha solver"
            description="Google's Teachable Machine is a powerful tool that allows you to create machine learning models without requiring extensive knowledge of programming or artificial intelligence. I have used it to build a CAPTCHA solver."
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <ProjectCard
            src="/Project3.png"
            title="Android app Modding"
            description="Android game modding is the process of customizing and changing games on Android devices to unlock features, add new content, or improve the playing experience. This often requires special tools and basic programming knowledge."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
