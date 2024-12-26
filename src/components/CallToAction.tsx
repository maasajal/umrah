"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <motion.div
      className="bg-rose-500 text-white py-10 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
      <p className="text-lg mb-6">
        Book your Umrah package now and let us take care of the rest.
      </p>
      <Link
        href="tel:+358449869280"
        className="bg-white text-rose-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Call Us Now: +358 449 869280
      </Link>
    </motion.div>
  );
};

export default CallToAction;
