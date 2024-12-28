"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const VisaGuide = () => {
  const steps = [
    {
      title: "European RP Holders",
      description:
        "As a European RP holder, you are eligible for an on-arrival visa in Saudi Arabia.",
      icon: "🛂",
    },
    {
      title: "On-Arrival Visa Process",
      description:
        "Present your passport and European RP at the immigration counter upon arrival.",
      icon: "🛬",
    },
    {
      title: "Required Documents",
      description:
        "Ensure you carry your passport, European RP, travel itinerary, and Umrah package booking confirmation.",
      icon: "📜",
    },
    {
      title: "Validity and Fees",
      description:
        "The visa is valid for 1 year, allowing ample time for Umrah. Fees are approximately €100.",
      icon: "💳",
    },
    {
      title: "Additional Notes",
      description:
        "Ensure your passport has at least 6 months of validity and confirm all details with your travel agent.",
      icon: "ℹ️",
    },
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
          section="Visas"
          heading="Visa Process for Umrah"
          description="Simplified steps to guide you through obtaining your Umrah visa"
          customStyle=""
        />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VisaGuide;
