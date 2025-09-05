"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeatureHero = () => {
  return (
    <section className="py-20 bg-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="lg:sticky lg:top-50 self-start h-fit"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Forward-thinking healthcare marketing strategies that deliver
            meaningful growth.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-600"
          >
            The landscape of healthcare marketing underwent a significant
            transformation with the rise in patient choice and autonomy. This
            shift led numerous healthcare facilities to adopt new strategies,
            utilizing multiple platforms to promote their services combining
            creative conscious communication efforts and impact-driven community
            development projects.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-8 flex gap-4"
          >
            <Link href="/get-in-touch">
              <Button className="group">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-100 flex items-center justify-center rounded-lg h-full overflow-hidden"
        >
          <Image
            src="https://innovarehp.com/images/d305eac0ee842504f0f5f93932d6c008.jpg"
            width={500}
            height={500}
            alt="Feature Graphic"
            className="h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHero;
