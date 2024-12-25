"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const SpiritualJourney = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <SectionTitle
          section="Journey"
          heading="Join Us for a Spiritual Journey"
          description="Umrah in Saudi Arabia in ANY MONTH in 2025!"
          customStyle=""
        />
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-blue-800">
              Dear Brothers and Sisters,
            </span>{" "}
            <br />
            Embark on a life-changing journey to the holy cities of Makkah and
            Madinah. Join our exclusive 7-day Umrah package and experience the
            peace, blessings, and spirituality of Umrah with comfort and ease.
          </p>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SpiritualJourney;
