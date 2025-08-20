"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getRandomColor } from "@/lib/utils";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "CEO & Founder",
    text: "Lorem ipsum dolor sit amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "CTO",
    text: "Lorem ipsum dolor sit amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "3",
    name: "John Smith",
    role: "COO",
    text: "Lorem ipsum dolor sit amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: "4",
    name: "Gordon Doe",
    role: "Developer",
    text: "Lorem ipsum dolor sit amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: "5",
    name: "Alice Johnson",
    role: "Marketing Lead",
    text: "Lorem ipsum dolor sit amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const randomBg = getRandomColor();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`rounded-lg border border-gray-200 ${randomBg} p-6 shadow-md hover:shadow-lg transition h-full flex flex-col justify-between`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          width={500}
          height={500}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="text-left">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-700">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-800 italic">“{testimonial.text}”</p>
    </motion.div>
  );
};

const OurPartners = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet our happy clients
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Taking the lead in implementing brand-specific outreach strategies
          means advocating for and implementing effective methods to connect
          with a specific target audience or community, with the ultimate aim of
          achieving well-defined goals.
        </p>
      </motion.div>

      {/* Top carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="mt-16 relative mx-auto lg:max-w-7xl"
      >
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({ playOnInit: true, speed: 1, direction: "forward" }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </motion.div>

      {/* Bottom carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="mt-10 relative mx-auto lg:max-w-7xl"
      >
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({ playOnInit: true, speed: 1, direction: "backward" }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={`bottom-${testimonial.id}`}
                className="pl-4 basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default OurPartners;
