"use client";
import { motion } from "framer-motion";

const PageCover = ({ title, bgImage }: { title: string; bgImage: string }) => {
  return (
    <div
      className="relative w-full h-80 sm:h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <motion.div
        className="bg-black bg-opacity-60 text-white text-center p-6 rounded-xl mx-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="uppercase">{title}</h1>
      </motion.div>
    </div>
  );
};

export default PageCover;
