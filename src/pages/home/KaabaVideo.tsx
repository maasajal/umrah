"use client";
import { motion } from "framer-motion";

const KaabaVideo = () => {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-96 object-cover"
        >
          <source src="/assets/kaabaVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-96 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
          <div className="space-y-5">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider uppercase"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to Umrah Journey
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Accommodation: Luxury Hotel Flight | Visa | Transfer & More
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaabaVideo;
