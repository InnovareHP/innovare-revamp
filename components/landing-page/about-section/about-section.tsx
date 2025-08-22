"use client";

import { addViewer } from "@/app/(public)/blog/[slug]/action";
import { formatDate } from "@/lib/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MasonrySection = ({
  blogs,
}: {
  blogs: {
    company_blog_id: string;
    company_blog_title: string;
    company_blog_featured_image: string | null;
    company_blog_created_at: Date;
    company_blog_slug: string;
  }[];
}) => {
  const router = useRouter();
  const columns: {
    company_blog_id: string;
    company_blog_title: string;
    company_blog_featured_image: string | null;
    company_blog_created_at: Date;
    company_blog_slug: string;
  }[][] = [[], [], []];
  blogs.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  const handleViewBlog = async (slug: string) => {
    await addViewer(slug);
    router.push(`/blog/${slug}`);
  };

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
                  onClick={() => handleViewBlog(img.company_blog_slug)}
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
                  <Image
                    width={500}
                    height={500}
                    className="h-auto w-full flex-1"
                    src={img.company_blog_featured_image ?? ""}
                    alt={img.company_blog_title}
                  />
                  <div className="p-3 flex-1">
                    <h3 className="font-medium text-sm">
                      {img.company_blog_title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {formatDate(img.company_blog_created_at)}
                    </p>
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
