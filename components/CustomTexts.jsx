'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from "@/utils/Constants";

export const TypingText = ({ title }) => (
    <motion.h3
      variants={textContainer}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
  
export const TypingPara= ({ title }) => (
    <motion.p
      variants={textContainer}
      transition={{repeat: Infinity}}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span   variants={textVariant2} key={index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
  
  export const TitleText = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
  