"use client";

import { motion } from "framer-motion";

type MasonryImage = {
  src: string;
  title: string;
  date: string;
};

const MasonrySection = () => {
  const images: MasonryImage[] = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      title: "Exploring Design Trends",
      date: "Jan 12, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      title: "Creative Layouts",
      date: "Jan 14, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      title: "Modern Workspaces",
      date: "Jan 15, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      title: "Urban Inspiration",
      date: "Jan 16, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      title: "Cozy Interiors",
      date: "Jan 18, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      title: "Nature & Balance",
      date: "Jan 20, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      title: "Creative Studio",
      date: "Jan 21, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      title: "Lifestyle Picks",
      date: "Jan 23, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      title: "Calm Corners",
      date: "Jan 25, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      title: "Architecture Shots",
      date: "Jan 26, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      title: "Vintage Aesthetic",
      date: "Jan 27, 2025",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      title: "Coastal Vibes",
      date: "Jan 28, 2025",
    },
  ];

  const columns: MasonryImage[][] = [[], [], []];
  images.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What We&apos;re Talking About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: (imgIndex + colIndex) * 0.1, // stagger effect
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105 cursor-pointer"
                >
                  <img
                    className="h-auto w-full flex-1"
                    src={img.src}
                    alt={img.title}
                  />
                  <div className="p-3 flex-1">
                    <h3 className="font-medium text-sm">{img.title}</h3>
                    <p className="text-gray-500 text-xs">{img.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonrySection;
