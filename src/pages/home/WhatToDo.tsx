"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const WhatToDo = () => {
  const steps = [
    {
      id: 1,
      title: "Make Your Best Niyat",
      description:
        "Start with pure intentions to embark on this spiritual journey.",
      icon: "🙏",
    },
    {
      id: 2,
      title: "Confirm Your Journey",
      description: "Provide your details to confirm your participation.",
      icon: "✅",
    },
    {
      id: 3,
      title: "Attend the Umrah Workshop",
      description: "Join us at Hervanta Mosque for a detailed workshop.",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Book Your Flight",
      description:
        "Reserve your seat 45 days before your selected journey date.",
      icon: "✈️",
    },
    {
      id: 5,
      title: "Let's Start the Journey",
      description:
        "Begin your spiritual journey in any month of the year 2025.",
      icon: "🌍",
    },
  ];

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-5">
        <SectionTitle
          heading="What Should You Do"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.id * 0.2 }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatToDo;
