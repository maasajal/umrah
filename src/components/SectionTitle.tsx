import { motion } from "framer-motion";

interface SectionTitleProps {
  section: string;
  heading: string;
  description: string;
  customStyle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  section,
  heading,
  description,
  customStyle,
}) => {
  return (
    <div className="my-10">
      <motion.div
        className={`text-end space-y-5 ${customStyle}`}
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h3
          className="font-bold uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🐪🐪🐪 {section} 🐪🐪🐪
        </motion.h3>
        <motion.h2
        //   className="text-blue-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h2>
        <p className="text-md md:text-lg lg:text-xl font-light arabic-description">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
