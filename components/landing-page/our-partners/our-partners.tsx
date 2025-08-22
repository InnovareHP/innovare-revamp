"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

// === Types & Data ===
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  headshot: string; // person photo
  companyLogo: string; // company logo
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ken Watts",
    role: "Owner/Founder",
    company: "Helping with Mom's Home",
    quote:
      "What comes to mind when I think of Rich, he is amazing at marketing! I have been in business for over 45 years, and he is the most cost-effective creative marketer I have ever worked with. If you need help building your business to higher profits, call Rich! Don’t waste your time anywhere else.",
    headshot: "/images/testimonials/ken.jpg",
    companyLogo: "/images/logos/helping-moms-home.png",
  },
  {
    id: "2",
    name: "Nadine Carlson",
    role: "Owner/Founder",
    company: "Care Provider Solutions",
    quote:
      "I highly recommend Innovare HP! They made a significant difference in our success!",
    headshot: "/images/testimonials/nadine.jpg",
    companyLogo: "/images/logos/care-provider-solutions.png",
  },
  {
    id: "3",
    name: "Suzy Posluszny",
    role: "Owner/Founder",
    company: "SilverTree Memory Partners",
    quote:
      "I truly enjoy working with Rich. His innovative approach to marketing has helped me grow my business. I highly recommend Rich for your healthcare marketing needs.",
    headshot: "/images/testimonials/suzy.jpg",
    companyLogo: "/images/logos/silvertree.png",
  },
];

// === Animations ===
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm hover:shadow-md h-full"
    >
      <div className="flex items-start gap-5">
        <div className="flex w-[120px] shrink-0 items-center justify-between gap-4">
          <Image
            src={t.headshot}
            alt={`${t.name} headshot`}
            width={72}
            height={72}
            className="h-18 w-18 rounded-full object-cover ring-1 ring-gray-200"
          />
        </div>

        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-gray-800 italic">
            “{t.quote}”
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-900">{t.name}</p>
            <p className="text-gray-700 italic">
              {t.role}
              <br />
              {t.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OurPartners = () => {
  return (
    <section id="clients" className="bg-gray-50 py-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What our clients say
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Real results from healthcare partners who trust our marketing
          approach.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
        className="mt-16 relative mx-auto lg:max-w-7xl"
      >
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({ playOnInit: true, speed: 1, direction: "forward" }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.id}
                className="pl-4 basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/2"
              >
                <TestimonialCard t={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default OurPartners;
