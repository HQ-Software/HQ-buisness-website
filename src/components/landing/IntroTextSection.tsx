// components/landing/IntroTextSection.tsx
"use client";

import { motion } from "framer-motion";
// IMPORTANT: Ensure component code exists in components/ui
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

const IntroTextSection = () => {
  const words = `Stop Wasting Your Life Planning Trips.`;
  const subText = `Uvoyage is your AI travel brain, crafting hyper-personalized itineraries in minutes, not days. Tailored to your unique vibe, budget, and hidden desires.`;

  return (
    <section className="bg-black py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }} // Animate only once when it comes into view
        className="relative flex flex-col gap-4 items-center justify-center"
      >
        <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center">
          <TextGenerateEffect words={words} className="text-center" />
        </div>
        <div className="font-extralight text-base md:text-xl text-neutral-200 py-4 max-w-3xl text-center">
          {subText}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          // Use whileInView for animation trigger as well
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }} // Adjust delay
        >
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg font-semibold px-6 py-3" // Adjusted padding
            duration={3000}
          >
            Join Beta Waitlist
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroTextSection;
