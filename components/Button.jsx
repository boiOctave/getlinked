'use client'

import { motion } from "framer-motion";

const Button = ({ type, className, title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      className={className}
      title={title}
    >
      {title}
    </motion.button>
  );
};

export default Button;
