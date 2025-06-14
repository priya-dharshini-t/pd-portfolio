import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 opacity-20 animate-gradient-bg"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center px-4"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Priya Dharshini T
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          ML Enthusiast | Web Developer | Driver Safety Researcher
        </p>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-10 text-gray-600 dark:text-gray-400 select-none"
        >
          ⬇ Scroll down
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
