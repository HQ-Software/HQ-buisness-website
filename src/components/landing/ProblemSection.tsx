// components/landing/ProblemSection.tsx
"use client";
import { motion } from "framer-motion";
import { FaSearchMinus, FaRegCopy, FaHeadSideVirus, FaDollarSign, FaMapMarkedAlt } from 'react-icons/fa';
import { cn } from "@/lib/utils";

const problems = [
  { icon: FaSearchMinus, title: "Endless Research", description: "Drowning in tabs and generic advice." },
  { icon: FaRegCopy, title: "Cookie-Cutter Plans", description: "Your trip looks like everyone else's." },
  { icon: FaHeadSideVirus, title: "Overload Paralysis", description: "Too many options, too little clarity." },
  { icon: FaDollarSign, title: "Budget Black Holes", description: "Stress about money, not the experience." },
  { icon: FaMapMarkedAlt, title: "Missed Opportunities", description: "That hidden gem? You probably missed it." },
];

const ProblemSection = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index, // Faster stagger
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-20 px-4 bg-neutral-950"> {/* Slightly darker background */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Planning Trips Sucks. <span className="text-purple-400">We Fixed It.</span></h2>
      <p className="text-lg text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        Manual planning is broken. It's time-consuming, generic, and often leads to disappointment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800" // Added border
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <problem.icon className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">{problem.title}</h3>
            <p className="text-neutral-300 text-sm">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
