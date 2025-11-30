"use client";

import { Brain, MessageCircle, Target, TrendingUp } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineSection = () => {
  const steps = [
    {
      id: 1,
      title: "Kickoff Chat",
      subtitle: "Discuss Goals & Needs",
      description:
        "We dive deep into your goals and needs to tailor a perfect marketing strategy for you.",
      icon: MessageCircle,
      date: "Step 01",
      iconBg: "rgb(102, 126, 234)",
    },
    {
      id: 2,
      title: "Strategy Vibes",
      subtitle: "Craft a Custom Plan",
      description:
        "We design a unique marketing plan that hits all the right notes for your audience.",
      icon: Brain,
      date: "Step 02",
      iconBg: "rgb(240, 147, 251)",
    },
    {
      id: 3,
      title: "Action Mode",
      subtitle: "Execute the Plan",
      description:
        "We bring the strategy to life with creative content and targeted campaigns.",
      icon: Target,
      date: "Step 03",
      iconBg: "rgb(79, 172, 254)",
    },
    {
      id: 4,
      title: "Glow Up",
      subtitle: "Track & Improve",
      description:
        "We monitor results and tweak the strategy for continuous improvement and growth.",
      icon: TrendingUp,
      date: "Step 04",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-500/70 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our 4-Point{" "}
            <span className="bg-white bg-clip-text text-transparent">
              Collab Process
            </span>
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto">
            Purpose-built strategies with people at the center
          </p>
        </div>

        {/* Custom CSS */}
        <style>{`
          .vertical-timeline::before {
            background: #ffffff !important;
            width: 4px !important;
          }

          .vertical-timeline-element-content {
            background: #ffffff !important;
            color: #000000 !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
                        0 10px 10px -5px rgba(0, 0, 0, 0.1) !important;
            border-radius: 16px !important;
            padding: 2rem !important;
          }

          .vertical-timeline-element-content:hover {
            transform: scale(1.03);
            transition: all 0.3s ease !important;
          }

          .vertical-timeline-element-date {
            color: #000000 !important;
            font-weight: 600 !important;
            font-size: 1.1rem !important;
          }

          .vertical-timeline-element-icon {
            width: 60px !important;
            height: 60px !important;

          }
        `}</style>

        {/* Timeline */}
        <VerticalTimeline lineColor="#ffffff">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <VerticalTimelineElement
                key={step.id}
                contentStyle={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                contentArrowStyle={{
                  borderRight: `10px solid #ffffff`,
                }}
                date={step.date}
                iconStyle={{
                  background: "#fff",
                  color: "#000000",
                }}
                icon={<Icon size={28} />}
              >
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {step.title}
                </h3>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  {step.subtitle}
                </h4>
                <p className="text-black leading-relaxed">{step.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimelineSection;
