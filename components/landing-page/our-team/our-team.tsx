import Image from "next/image";
import CtaStayInTouch from "../cta-stay-in-touch/cta-stay-in-touch";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Michael Chen",
      role: "CO-FOUNDER & CO-CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      backgroundColor: "bg-yellow-400",
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      role: "CO-FOUNDER & CO-CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      backgroundColor: "bg-green-400",
    },
    {
      id: 3,
      name: "David Patel",
      role: "CHIEF TECHNOLOGY OFFICER",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
      backgroundColor: "bg-pink-300",
    },
    {
      id: 4,
      name: "Dr. Amanda Foster",
      role: "ENTERPRISE & CLOUD PLATFORM",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
      backgroundColor: "bg-green-300",
    },

    {
      id: 6,
      name: "Robert Kim",
      role: "CHIEF FINANCIAL OFFICER",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face",
      backgroundColor: "bg-yellow-400",
    },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our leadership team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the champions of our proven outreach strategies. Over the
            course of our journey, we have forged meaningful partnerships with a
            diverse range of healthcare and health-related organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div
                className={`relative overflow-hidden rounded-lg ${member.backgroundColor} mb-6`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
            </div>
          ))}
        </div>
      </div>

      <CtaStayInTouch />
    </section>
  );
};

export default MeetOurTeam;
