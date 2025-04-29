// components/landing/CTASection.tsx
"use client";
// IMPORTANT: Ensure component code exists in components/ui
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

const CTASection = () => {
  return (
    // Use AuroraBackground as the wrapper for the effect
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        // Removed background class, AuroraBackground handles it
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Ready for <span className="text-purple-400">Smarter Travel?</span></h2>
        <p className="text-base md:text-lg text-neutral-200 mt-4 mb-8 max-w-xl text-center">
          Sign up now for early access to Uvoyage and be the first to experience truly personalized, AI-powered trip planning.
        </p>
        <Button
          borderRadius="1.75rem"
          // Ensure dark mode styles are explicitly handled if needed, or rely on AuroraBackground's defaults
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl font-bold px-10 py-4"
          duration={2500}
        >
          Get Early Access Now
        </Button>
        {/* TODO: Add form input here or link button */}
      </motion.div>
    </AuroraBackground>
  );
};

export default CTASection;
