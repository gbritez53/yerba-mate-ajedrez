import React from "react";
import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.section
      className="px-4 md:px-32 lg:px-16"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
