"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CtaStayInTouch from "../cta-stay-in-touch/cta-stay-in-touch";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rich Nollen",
      role: "Founder & CEO",
      image: "/assets/team/team-photo-1-ceo.jpeg",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "Roy Gingrich",
      role: "Chief Finance Officer",
      image: "/assets/team/team-photo-6-cfo.jpeg",
      socials: { linkedin: "#" },
    },
    {
      id: 3,
      name: "Mark Ivor Glorioso",
      role: "Chief Information Officer",
      image: "/assets/team/team-photo-5-cio.jpeg",
      socials: { linkedin: "#" },
    },
    {
      id: 4,
      name: "Abcdef Cresencio",
      role: "Chief Information Officer",
      image: "/assets/team/team-photo-6-wsm.jpg",
      socials: { linkedin: "#" },
    },
    {
      id: 5,
      name: "Shiela Mae Veran",
      role: "Strategic Growth Associate",
      image: "/assets/team/team-photo-4-hr.jpeg",
      socials: { linkedin: "#" },
    },
    {
      id: 6,
      name: "Amy Cunningham",
      role: "Outreach Manager",
      image: "/assets/team/team-photo-8-cod.png",
      socials: { linkedin:"#" },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden bg-none hover:bg-gray-200 transition-all duration-300 rounded-lg mb-6"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-[400px] object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105 filter grayscale"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CtaStayInTouch />
    </section>
  );
};

export default MeetOurTeam;
