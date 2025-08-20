"use client";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <motion.div
      className="bg-gray-50  py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-thin mb-8">What we do</h2>
        <div className="space-y-6 text-2xl font-medium">
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl"
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            BRAND DEVELOPMENT AND PROMOTION
          </motion.div>
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl"
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            DATA, INTELLIGENCE, AND STRATEGY
          </motion.div>
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl"
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            EXPERIENCE AND INNOVATION
          </motion.div>
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl"
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            PR, SOCIAL & INFLUENCE
          </motion.div>
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl"
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            MEDICAL EDUCATION
          </motion.div>
          <motion.div
            className="border-b border-sky-500 pb-2 text-5xl  "
            whileHover={{ x: 10, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            MARKET ACCESS AND PAYER
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
