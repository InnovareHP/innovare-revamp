"use client";
import { InlineWidget } from "react-calendly";

const Page = () => {
  return (
    <section className="min-h-screen h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50  flex flex-col justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl">Choose a time that works best for you</p>
      </div>

      <InlineWidget
        url="https://calendly.com/markivor-glorioso/30min"
        styles={{
          height: "700px",
          backgroundColor: "transparent",
        }}
      />
    </section>
  );
};

export default Page;
