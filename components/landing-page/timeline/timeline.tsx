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
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      iconBg: "rgb(67, 233, 123)",
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

        {/* Custom CSS for styling */}
        <style>{`
          .vertical-timeline::before {
            background: linear-gradient(180deg,
              rgb(102, 126, 234) 0%,
              rgb(240, 147, 251) 33%,
              rgb(79, 172, 254) 66%,
              rgb(67, 233, 123) 100%
            ) !important;
            width: 6px !important;
          }

          .vertical-timeline-element-content {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),
                        0 10px 10px -5px rgba(0, 0, 0, 0.2) !important;
            border-radius: 16px !important;
            padding: 2rem !important;
            transition: all 0.3s ease !important;
          }

          .vertical-timeline-element-content:hover {
            transform: scale(1.03);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          }

          .vertical-timeline-element-icon {
            box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
                        0 10px 15px -3px rgba(0,0,0,0.3) !important;
            width: 60px !important;
            height: 60px !important;
            transition: all 0.3s ease !important;
          }

          .vertical-timeline-element:hover .vertical-timeline-element-icon {
            transform: scale(1.15) rotate(5deg);
          }

          /* DATE STYLE UPGRADE → sky-100 for best readability on blue */
          .vertical-timeline-element-date {
            color: #e0f2fe !important; /* sky-100 */
            font-weight: 600 !important;
            font-size: 1.1rem !important;
            opacity: 0.95 !important;
          }
        `}</style>

        {/* Timeline */}
        <VerticalTimeline lineColor="transparent">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <VerticalTimelineElement
                key={step.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: step.gradient,
                  color: "#fff",
                  border: "none",
                }}
                contentArrowStyle={{
                  borderRight: `10px solid transparent`,
                }}
                date={step.date}
                iconStyle={{
                  background: step.iconBg,
                  color: "#fff",
                }}
                icon={<Icon size={28} />}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <h4 className="text-lg font-semibold mb-3 text-slate-100">
                  {step.subtitle}
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimelineSection;
