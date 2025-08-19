"use client";

import animationData from "@/public/animation.json";
import Lottie from "lottie-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative z-40 min-h-screen lg:min-h-0">
      <Lottie
        className="w-full h-full hidden lg:block"
        animationData={animationData}
        loop={true}
        autoplay={true}
      />

      <Image
        src="https://innovarehp.com/images/656d3779371df12b332b2a473fe3f7f9.jpg"
        alt="Hero Section"
        width={1000}
        height={1920}
        className="w-full h-full block lg:hidden absolute top-0 left-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-1/3 left-4 right-0 p-4 text-white">
        <h1 className="text-[60px] lg:text-[200px] font-bold stroke-text">
          Innovation
        </h1>

        <p className="text-2xl lg:text-5xl font-bold">
          Shaping the Future of Healthcare Marketing
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
