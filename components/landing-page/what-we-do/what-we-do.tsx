"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const services = [
  {
    title: "DIGITAL STRATEGY & INTELLIGENT MARKETING EXECUTION",
    description:
      "We build digital systems that don’t chase clicks — they build credibility, authority, and patient trust. From SEO and precision ad campaigns to content ecosystems and analytic dashboards, we drive growth rooted in insight, not guesswork. Every action is intentional. Every channel is aligned. Every dollar works harder, smarter, and with clinical-grade precision.",
  },
  {
    title: "COMMUNITY-BASED OUTREACH & REFERRAL DEVELOPMENT",
    description:
      "Healthcare is local, personal, and relational — so our work is too. We cultivate meaningful partnerships with physicians, senior living communities, hospitals, and service providers, ensuring your mission is known, felt, and trusted in the places decisions are made. We are boots-on-the-ground advocates building referral pipelines through relationships that last, not handshakes that fade.",
  },
  {
    title: "PUBLIC RELATIONS, THOUGHT LEADERSHIP & STORY CRAFTING",
    description:
      "Your story deserves more than a post — it deserves positioning. We transform your mission, voice, and expertise into consistent, influential communications that elevate your brand in the eyes of patients, families, and referral partners. From media features and reputation building to executive visibility and narrative strategy, we shape how the market sees you — with honesty, heart, and authority.",
  },
  {
    title: "EVENT PLANNING, PARTNERSHIPS & ACTIVATION",
    description:
      "We don’t “host events” — we create connection environments. From community workshops and appreciation experiences to collaborative luncheons and professional roundtables, we make your organization a presence, not a billboard. Every event becomes a touchpoint for trust, strengthening relationships, sparking referrals, and planting seeds that grow communities of support.",
  },
  {
    title: "BESPOKE CAMPAIGNS DESIGNED FOR YOUR MARKET & METRICS",
    description:
      "No templates. No recycled ideas. Every campaign is purpose-built to match your goals, audience, region, and growth stage. We blend strategy, creativity, and market intelligence to produce campaigns that don't just look good — they move the needle. Your mission is unique. Your marketing should be too.",
  },

  {
    title: "MARKETING TRAINING AND COACHING",
    description:
      "We empower your team with the knowledge and tools to sustain and scale your marketing efforts. Through strategic workshops, digital marketing fundamentals, and best practices training, we build internal capabilities that transform your staff into confident marketing champions.",
  },
];

export default function WhatWeDo() {
  return (
    <motion.section
      className="bg-gray-50 py-16 px-6"
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-thin mb-10 text-gray-800">What We Do</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {services.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-sky-500"
            >
              <AccordionTrigger className="text-2xl font-medium hover:text-sky-500 transition-colors cursor-pointer">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-700 text-lg leading-relaxed mt-2"
                >
                  {item.description}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
