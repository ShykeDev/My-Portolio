"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  href: any;
}

const SkillDataProvider = ({ src, width, height, index, href }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="transform transition-transform duration-300 hover:scale-110 cursor-pointer "
    >
      <a href={href}  target="_blank">
        <Image src={src} width={width} height={height} alt="skill image" />
      </a>
    </motion.div>
  );
};

export default SkillDataProvider;
