"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const PackageDetails = () => {
  const packageFeatures = [
    "Comprehensive Umrah Training & Workshops",
    "Round-Trip Flight Tickets",
    "Luxurial Hotel Accommodation",
    "Daily Meals: Breakfast, Lunch, and Dinner",
    "Guided Ziyarah to Sacred Sites",
    "Private Transportation for your entire journey",
    "24/7 Support and Assistance",
    "SIM & Internet",
  ];

  return (
    <div className="py-10 px-4 md:px-20">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 md:p-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          section="Packages"
          heading="Umrah Package (All Inclusive)"
          description="850 - 1200€ / per person"
          customStyle=""
        />
        <ul className="space-y-4 text-gray-600 text-lg">
          {packageFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-4 text-rose-500">✔</span> {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default PackageDetails;
