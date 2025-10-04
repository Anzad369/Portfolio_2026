'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, rotateX: 90, y: 30 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const imageVariants: Variants = {
  hidden: { rotate: -15, scale: 0, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20 text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={imageVariants}
          className="relative rounded-full mx-auto mb-6 border-4 border-white shadow-lg w-48 h-48 overflow-hidden"
        >
          <Image
            src="/images/1.jpeg"
            alt="Mohammed Anzad"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Mohammed Anzad P A
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium text-blue-600 mb-6"
        >
          Frontend Developer & AI Enthusiast
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          I build exceptional digital experiences with modern web technologies and AI integration. Passionate about
          creating intuitive interfaces and solving complex problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition duration-300 shadow-md"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
