// "use client";
// import { useEffect } from "react";

// const CalendlyEmbed = ({ url }: { url: string }) => {
//   useEffect(() => {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");
//     script.setAttribute(
//       "src",
//       "https://assets.calendly.com/assets/external/widget.js"
//     );
//     head?.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget h-full w-full"
//       data-url={url}
//       style={{ minHeight: "100vh", width: "100%" }}
//     ></div>
//   );
// };

// export default CalendlyEmbed;
