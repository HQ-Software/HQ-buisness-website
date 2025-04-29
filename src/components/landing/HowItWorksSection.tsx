// components/landing/HowItWorksSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// IMPORTANT: Ensure component code exists in components/ui
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

// --- Make sure image paths are correct and files exist ---
const steps = [
  { title: "1. Tell Us Who You Are (Deep Profile)", description: "Go beyond 'beach or mountains'. Our intuitive quiz captures your unique travel style, interests, and hidden preferences.", image: "/images/placeholder-quiz.png", alt: "Personality Quiz Interface Mockup", isGlobe: false, },
  { title: "2. AI Does the Heavy Lifting", description: "Our algorithms analyze your profile against millions of data points – destinations, real-time events, pricing, and user reviews.", alt: "AI Processing Visualization using Globe", isGlobe: true, },
  { title: "3. Your Perfect Plan Materializes", description: "Receive a dynamic, personalized itinerary in minutes. Packed with suggestions you'll actually love, perfectly paced and budgeted.", image: "/images/placeholder-itinerary.png", alt: "Generated Itinerary Mockup", isGlobe: false, },
  { title: "4. Refine & Book with Confidence", description: "Easily swap activities, see real-time budget impact, and book flights, hotels, and experiences seamlessly within the app.", image: "/images/placeholder-booking.png", alt: "Booking Interface Mockup", isGlobe: false, }
];

// --- Globe Configuration (Adjust as needed) ---
const globeConfig = {
  pointSize: 4, globeColor: "#1d2a4d", showAtmosphere: true, atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1, emissive: "#062056", emissiveIntensity: 0.1, shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)", ambientLight: "#ffffff", directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff", pointLight: "#ffffff", arcTimeCoefficient: 0.9, arcLengthCoefficient: 0.9,
  mouseDragCoefficient: 0.9, touchDragCoefficient: 0.9, zoomDragCoefficient: 0.9, mapBrightness: 6,
  mapCenter: [0, 0], mapRotation: [0, 0, 0], mapMaxLat: 85, mapMaxLon: 180, mapMinLat: -85, mapMinLon: -180,
};
// --- End Globe Configuration ---

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-black overflow-hidden"> {/* Added overflow-hidden */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">It's Not Magic, It's <span className="text-purple-400">Smarter Tech</span></h2>
      <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto"> {/* Increased spacing */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={cn(
              "flex flex-col md:flex-row items-center gap-10 md:gap-16", // Increased gap
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            )}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger animation slightly earlier
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300">{step.title}</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">{step.description}</p>
            </div>

            {/* Visual Content (Image or Globe) */}
            <div className="md:w-1/2 w-full mt-6 md:mt-0 flex items-center justify-center min-h-[300px] md:min-h-[400px]"> {/* Ensure minimum height */}
              {step.isGlobe ? (
                <div className="relative w-full h-full max-w-lg aspect-square mx-auto"> {/* Use aspect-square and max-w */}
                  <Globe
                    className="absolute top-0 left-0 w-full h-full" // Use absolute positioning
                    globeConfig={globeConfig}
                    backgroundColor="transparent"
                  />
                </div>
              ) : (
                <div className="relative aspect-video w-full max-w-xl rounded-lg overflow-hidden shadow-2xl bg-neutral-800 border border-neutral-700">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                    />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
