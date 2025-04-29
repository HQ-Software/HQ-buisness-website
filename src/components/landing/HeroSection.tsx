// components/landing/HeroSection.tsx
"use client";
import React from "react";
// IMPORTANT: Make sure you have the HeroParallax component code in components/ui
import { HeroParallax } from "@/components/ui/hero-parallax";

// --- Define products array (MAKE SURE IMAGE PATHS ARE CORRECT and files exist in /public) ---
const products = [
  { title: "Personalized Itineraries", link: "#", thumbnail: "/images/parallax/itinerary-mockup.png", },
  { title: "Smart Budgeting", link: "#", thumbnail: "/images/parallax/budget-mockup.png", },
  { title: "Hidden Gems Discovery", link: "#", thumbnail: "/images/parallax/hidden-gem.jpg", },
  { title: "Seamless Booking", link: "#", thumbnail: "/images/parallax/booking-mockup.png", },
  { title: "Parisian Charm", link: "#", thumbnail: "/images/parallax/paris.jpg", },
  { title: "Mountain Adventures", link: "#", thumbnail: "/images/parallax/mountains.jpg", },
  { title: "Beach Relaxation", link: "#", thumbnail: "/images/parallax/beach.jpg", },
  { title: "Tokyo Neon", link: "#", thumbnail: "/images/parallax/tokyo.jpg", },
  { title: "Cultural Exploration", link: "#", thumbnail: "/images/parallax/museum.jpg", },
  { title: "Foodie Tours", link: "#", thumbnail: "/images/parallax/food-market.jpg", },
  { title: "AI Route Optimization", link: "#", thumbnail: "/images/parallax/map-ai.png", },
  { title: "Real-time Alerts", link: "#", thumbnail: "/images/parallax/notification-mockup.png", },
  { title: "Local Events", link: "#", thumbnail: "/images/parallax/local-event.jpg", },
  { title: "Dynamic Adaptation", link: "#", thumbnail: "/images/parallax/sync-icon.png", },
  { title: "User Profile", link: "#", thumbnail: "/images/parallax/profile-mockup.png", },
];
// --- End products array definition ---

const HeroSection = () => {
  return <HeroParallax products={products} />;
};

export default HeroSection;
