import { motion } from "framer-motion";

const Banner = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="static md:relative mx-10 py-5 md:py-10 md:mb-80">
      <motion.div
        className="md:absolute mx-auto -bottom-64 left-0 right-0 p-6 bg-white max-w-xl sm:max-w-3xl md:max-w-5xl rounded-xl shadow-lg text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-4">
          {/* Title with motion */}
          <motion.h2
            className="tracking-wider text-xl md:text-2xl font-bold"
            variants={itemVariants}
          >
            EID & Umrah in Mekka
          </motion.h2>

          {/* Price with motion */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium"
            variants={itemVariants}
          >
            €600 - €800 (All Inclusive)
          </motion.p>

          {/* Dates with motion */}
          <motion.p
            className="text-sm sm:text-base md:text-lg font-light uppercase"
            variants={itemVariants}
          >
            January, February, March 2025
          </motion.p>

          {/* Description with motion */}
          <motion.p
            className="text-center max-w-xl mx-auto leading-8"
            variants={itemVariants}
          >
            Umrah from Finland. Join us for a Spiritual Journey: Umrah in Soudi
            Arabia. Embark on a life-changing journey to the holy cities of
            Makkah and Madinah. Join our exclusive 7-days Umrah package and
            experience the peace, blessings, and spirituality of Umrah with
            Comfort and ease.
          </motion.p>

          {/* Tour Route with motion */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light uppercase"
            variants={itemVariants}
          >
            Tour Route: Jeddah, Mekka, Madinah
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
