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
      backgroundColor: "bg-yellow-400",
      bio: "Visionary leader passionate about transforming healthcare marketing.",
      socials: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Roy Gingrich",
      role: "Chief Finance Officer",
      image: "/assets/team/team-photo-6-cfo.jpeg",
      backgroundColor: "bg-green-400",
      bio: "Expert in financial growth strategies and sustainable planning.",
      socials: {
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Cheryl Szczytko",
      role: "Chief Marketing Officer",
      image: "/assets/team/team-photo-2-marketing-manager.jpeg",
      backgroundColor: "bg-green-400",
      bio: "Marketing strategist focused on brand positioning and outreach.",
      socials: {
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Mark Ivor Glorioso",
      role: "Chief Information Officer",
      image: "/assets/team/team-photo-5-cio.jpeg",
      backgroundColor: "bg-pink-300",
      bio: "Driving innovation through technology and digital infrastructure.",
      socials: {
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Adrian Pol Peligrino",
      role: "IT Manager",
      image: "/assets/team/team-photo-3-it-manager.jpeg",
      backgroundColor: "bg-green-300",
      bio: "Oversees IT systems ensuring smooth and secure operations.",
      socials: {
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Shiela Mae Veran",
      role: "Strategic Growth Associate",
      image: "/assets/team/team-photo-4-hr.jpeg",
      backgroundColor: "bg-yellow-400",
      bio: "Passionate about building hospital partnerships and community outreach.",
      socials: {
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionaries driving healthcare growth. Our leadership combines
            expertise in digital marketing, community outreach, and hospital
            partnerships to deliver proven results for providers and patients.
          </p>
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
                className={`relative overflow-hidden rounded-lg ${member.backgroundColor} mb-6`}
              >
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={500}
                  height={400}
                  loading="lazy"
                  className="w-[400px] h-[400px] object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
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
