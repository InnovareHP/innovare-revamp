"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

// === Types & Data ===
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  headshot: string;
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  // Existing
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

  // Added testimonials
  {
    id: "4",
    name: "Michelle Williams",
    role: "Owner",
    company: "Ada Grace AFC",
    quote:
      "Rich and his team at Innovare HP are outstanding. They designed our website and created our social media. Getting the word out is their specialty and they do it extremely well.",
    headshot: "/images/testimonials/michelle-williams.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "5",
    name: "Phi Nguyen",
    role: "Owner",
    company: "Tender Living Home",
    quote:
      "Rich and Cheryl are wonderful to team up with. They helped us elevate our brand and strengthen our connection to our communities.",
    headshot: "/images/testimonials/phi.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "6",
    name: "Brian Caulfield",
    role: "CMO",
    company: "Centerline Medical Billing",
    quote:
      "Our organization's relationship with Innovare HP is rooted in a clear increase in revenue driven by their innovative strategies, collaborative approach, and high-quality introductions.",
    headshot: "/images/testimonials/brian.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "7",
    name: "Jamie Palma",
    role: "Owner",
    company: "Via Coaching",
    quote:
      "Rich and his team at Innovare HP treated me like family. They listened, respected, and designed one of the most beautiful websites. Highly recommend!",
    headshot: "/images/testimonials/jamie.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "8",
    name: "Norma’s Haven",
    role: "Owner",
    company: "Norma’s Haven",
    quote:
      "Innovare HP helped us grow by strengthening our brand and reaching more connections. Their support made a real impact and we’re expanding with confidence.",
    headshot: "/images/testimonials/norma.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "9",
    name: "Darlene Brown",
    role: "Client",
    company: "Independent Healthcare Professional",
    quote:
      "I couldn’t be more impressed with their service, professionalism, and dedication. Rich and Cheryl deliver excellence from start to finish.",
    headshot: "/images/testimonials/darlene.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "10",
    name: "Ryan A",
    role: "Client",
    company: "Healthcare Industry",
    quote:
      "Rich and his team are fantastic—extremely talented and knowledgeable. I highly recommend them to anyone looking!",
    headshot: "/images/testimonials/ryan.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "11",
    name: "Charity Songer",
    role: "Owner",
    company: "Community Outreach",
    quote:
      "Rich provides a seamless experience with marketing, outreach, and connecting key players. The solutions he delivers are meaningful and results-driven.",
    headshot: "/images/testimonials/charity.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "12",
    name: "Josh Conrad",
    role: "Owner",
    company: "Conrad Signings",
    quote:
      "Working with Rich and Innovare has been a game-changer. His depth of knowledge and actionable strategies helped me grow in major ways.",
    headshot: "/images/testimonials/josh.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "13",
    name: "Erin Schultz",
    role: "Healthcare Leader",
    company: "Healthcare Network",
    quote:
      "Rich and his team bring a fresh, innovative perspective to healthcare marketing. Their passion for meaningful connections is unmatched.",
    headshot: "/images/testimonials/erin.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "14",
    name: "Jennylyn Conrad",
    role: "Owner",
    company: "Conrad Signings",
    quote:
      "Their Rise and Thrive event was incredible—packed with quality professionals. Innovare HP knows how to bring the right people together.",
    headshot: "/images/testimonials/jennylyn.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "15",
    name: "Brent M",
    role: "Client",
    company: "Community Development",
    quote:
      "Rich and his team continue to impress. I look forward to more events and collaborations!",
    headshot: "/images/testimonials/brent.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "16",
    name: "Eric Goodlock",
    role: "Local Guide",
    company: "Community Network",
    quote:
      "Great team at Innovare! Rich is one of the most helpful and well-connected people I know.",
    headshot: "/images/testimonials/eric.jpg",
    companyLogo: "/images/logos/default.png",
  },
  {
    id: "17",
    name: "Skylar Pratt",
    role: "Client",
    company: "Healthcare Community",
    quote:
      "So thankful for the network of people I’ve connected with through Innovare HP!",
    headshot: "/images/testimonials/skylar.jpg",
    companyLogo: "/images/logos/default.png",
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
