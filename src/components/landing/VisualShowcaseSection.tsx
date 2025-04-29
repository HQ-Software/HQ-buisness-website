// components/landing/VisualShowcaseSection.tsx
"use client";
import React from "react";
// IMPORTANT: Ensure component code exists in components/ui
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { cn } from "@/lib/utils";
// Optional: If you want a custom badge
// import Link from "next/link";

const VisualShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 px-0 sm:px-4 overflow-hidden bg-gradient-to-b from-black to-neutral-950"> {/* Adjusted background */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">See <span className="text-purple-400">Uvoyage</span> In Action</h2>
      <div className="relative">
        {/* Ensure you have a suitable image for the 'src' prop in /public */}
        {/* Recommended image size: ~2880x1800 for good retina quality */}
        <MacbookScroll
          title={
            <span className="text-xl md:text-2xl font-semibold text-neutral-200 text-center block mb-4">
              Experience the future of travel planning. <br /> Intuitive. Powerful. Personalized.
            </span>
          }
          // TODO: Replace with actual UI showcase image
          src={`/images/placeholder-macbook-screen.png`} // Example placeholder path
          showGradient={true}
        // Optional Badge Example:
        // badge={
        //   <Link href="#">
        //     <div className="inline-flex items-center justify-center px-4 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
        //       Explore Features
        //     </div>
        //   </Link>
        // }
        />
      </div>
    </section>
  );
};

export default VisualShowcaseSection;
