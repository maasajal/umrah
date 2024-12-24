"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const OurOffer = () => {
  const offers = [
    {
      id: 1,
      title: "Personalized Service",
      description:
        "Tailored to your specific needs, ensuring a unique and enjoyable experience.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Experienced Guides",
      description:
        "Our professional guides provide insights to enrich your journey.",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Flexible Packages",
      description:
        "Choose from a variety of customizable packages to fit your schedule.",
      icon: "🕒",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-5">
        <SectionTitle heading="What We Offer" description="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: offer.id * 0.2 }}
            >
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
