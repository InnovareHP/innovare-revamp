"use client";

import animationData from "@/public/animation.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative z-40 h-[77vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Lottie
          className="w-full object-cover hidden lg:block"
          animationData={animationData}
          loop
          autoplay
        />

        <Image
          src="https://innovarehp.com/images/656d3779371df12b332b2a473fe3f7f9.jpg"
          alt="Hero Section"
          width={1000}
          height={1920}
          className="w-full h-full block lg:hidden absolute top-0 left-0 object-cover"
        />
      </motion.div>

      {/* Overlay with gradient fade */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />

      {/* Content */}
      <div className="absolute top-1/3 left-4 right-0 p-4 text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[60px] lg:text-[200px] font-bold stroke-text leading-none drop-shadow-lg"
        >
          Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-2xl lg:text-5xl font-bold mt-4 drop-shadow-md"
        >
          Shaping the Future of Healthcare Marketing
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
