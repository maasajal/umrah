import { motion } from "framer-motion";

interface SectionTitleProps {
  heading: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  heading,
  description,
}) => {
  return (
    <div className="my-10">
      <motion.div
        className="text-end space-y-5"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light arabic-description">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
