"use client";

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
  gridSpan?: {
    col?: number;
    row?: number;
  };
  bgColor?: string;
  showHeadshot?: boolean;
  accentColor?: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ken Watts",
    role: "Owner/Founder",
    company: "Helping with Mom's Home",
    quote:
      "What comes to mind when I think of Rich, he is amazing at marketing! I have been in business for over 45 years, and he is the most cost-effective creative marketer I have ever worked with.",
    headshot: "/images/testimonials/ken.jpg",
    companyLogo: "/images/logos/helping-moms-home.png",
    gridSpan: { col: 2, row: 1 },
    bgColor: "bg-white",
    accentColor: "border-l-4 border-blue-500",
    highlight: true,
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
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-blue-50/50",
    accentColor: "border-t-4 border-blue-400",
  },
  {
    id: "3",
    name: "Suzy Posluszny",
    role: "Owner/Founder",
    company: "SilverTree Memory Partners",
    quote:
      "I truly enjoy working with Rich. His innovative approach to marketing has helped me grow my business.",
    headshot: "/images/testimonials/suzy.jpg",
    companyLogo: "/images/logos/silvertree.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-gray-50/80",
    accentColor: "border-r-4 border-gray-300",
  },
  {
    id: "4",
    name: "Michelle Williams",
    role: "Owner",
    company: "Ada Grace AFC",
    quote:
      "Rich and his team at Innovare HP are outstanding. They designed our website and created our social media.",
    headshot: "/images/testimonials/michelle-williams.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-sky-50/50",
    accentColor: "border-b-4 border-sky-400",
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
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-white",
  },
  {
    id: "6",
    name: "Brian Caulfield",
    role: "CMO",
    company: "Centerline Medical Billing",
    quote:
      "Our organization's relationship with Innovare HP is rooted in a clear increase in revenue driven by their innovative strategies.",
    headshot: "/images/testimonials/brian.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-blue-50/50",
    accentColor: "border-l-4 border-blue-600",
    highlight: true,
  },
  {
    id: "7",
    name: "Jamie Palma",
    role: "Owner",
    company: "Via Coaching",
    quote:
      "Rich and his team at Innovare HP treated me like family. They listened, respected, and designed one of the most beautiful websites.",
    headshot: "/images/testimonials/jamie.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-white",
    accentColor: "border-t-4 border-gray-400",
  },
  {
    id: "8",
    name: "Norma's Haven",
    role: "Owner",
    company: "Norma's Haven",
    quote:
      "Innovare HP helped us grow by strengthening our brand and reaching more connections.",
    headshot: "/images/testimonials/norma.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 2, row: 1 },
    bgColor: "bg-sky-50/50",
    accentColor: "border-r-4 border-sky-400",
  },
  {
    id: "9",
    name: "Darlene Brown",
    role: "Client",
    company: "Independent Healthcare Professional",
    quote:
      "I couldn't be more impressed with their service, professionalism, and dedication.",
    headshot: "/images/testimonials/darlene.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-gray-50/80",
    accentColor: "border-b-4 border-gray-400",
  },
  {
    id: "10",
    name: "Ryan A",
    role: "Client",
    company: "Healthcare Industry",
    quote:
      "Rich and his team are fantastic—extremely talented and knowledgeable. I highly recommend them!",
    headshot: "/images/testimonials/ryan.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 1, row: 1 },
    bgColor: "bg-blue-50/50",
    accentColor: "border-l-4 border-blue-400",
  },
  {
    id: "11",
    name: "Charity Songer",
    role: "Owner",
    company: "Community Outreach",
    quote:
      "Rich provides a seamless experience with marketing, outreach, and connecting key players.",
    headshot: "/images/testimonials/charity.jpg",
    companyLogo: "/images/logos/default.png",
    gridSpan: { col: 2, row: 1 },
    bgColor: "bg-white",
    accentColor: "border-t-4 border-gray-300",
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
    gridSpan: { col: 2, row: 1 },
    bgColor: "bg-blue-50/50",
    accentColor: "border-l-4 border-blue-600",
    highlight: true,
  },
];

// === Animations ===
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  const colSpan = t.gridSpan?.col || 1;
  const rowSpan = t.gridSpan?.row || 1;
  const bgColor = t.bgColor || "bg-white";
  const accentColor = t.accentColor || "";
  const isHighlight = t.highlight || false;

  const colSpanClass = colSpan === 2 ? "md:col-span-2 lg:col-span-2" : "";
  const rowSpanClass = rowSpan === 2 ? "md:row-span-2 lg:row-span-2" : "";
  // Match mobile font size with description text (text-lg)
  const quoteSize = isHighlight
    ? "text-lg md:text-lg lg:text-xl"
    : "text-lg md:text-base";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.01, y: -6 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`${bgColor} ${colSpanClass} ${rowSpanClass} rounded-3xl p-5 md:p-6 flex flex-col relative overflow-hidden group border border-gray-200/60 backdrop-blur-sm`}
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Modern hover shadow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      />

      {/* Subtle accent border - more refined */}
      {accentColor && (
        <div
          className={`absolute inset-0 rounded-3xl ${accentColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`}
        />
      )}

      {/* Refined gradient overlay for highlight cards */}
      {isHighlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none rounded-3xl" />
      )}

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="flex flex-col relative z-10">
        {t.quote && (
          <div className="mb-4">
            <div className="mb-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300 opacity-60"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p
              className={`${quoteSize} leading-[1.6] text-gray-900 font-normal tracking-tight`}
            >
              {t.quote}
            </p>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-gray-200/40">
          <p
            className={`font-semibold text-gray-900 tracking-tight text-base md:text-base`}
          >
            {t.name}
          </p>
          <p
            className={`text-gray-600 mt-1 font-normal tracking-wide text-sm md:text-sm`}
          >
            {t.role}
            {t.company && (
              <span className="text-gray-500 font-light"> • {t.company}</span>
            )}
          </p>
        </div>
      </div>

      {/* Refined corner accent for highlight cards */}
      {isHighlight && (
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/8 via-blue-500/4 to-transparent rounded-tl-3xl pointer-events-none" />
      )}
    </motion.div>
  );
};

const OurPartners = () => {
  return (
    <section id="clients" className="bg-gray-50 py-20 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mobile-scroll-container::-webkit-scrollbar {
            display: none;
          }
        `,
        }}
      />
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-block mb-4">
          <span className="text-5xl md:text-6xl font-serif text-gray-300 leading-none">
            &ldquo;
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          What our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">clients</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/40 -z-0"></span>
          </span>{" "}
          say
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real results from healthcare partners who trust our marketing
          approach.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-1 w-4 bg-gray-300 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-16 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Mobile: Horizontal Scroll */}
        <div
          className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 mobile-scroll-container"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
            overscrollBehaviorX: "contain",
          }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-[85vw] max-w-sm flex-shrink-0"
                style={{ minWidth: "320px" }}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 md:gap-6"
          style={{ gridAutoFlow: "dense" }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurPartners;
