// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-12 bg-white dark:bg-gray-900 transition duration-500">
      {/* Left: About Text */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi! I'm <span className="font-semibold text-pink-600 dark:text-pink-400">Priya Dharshini</span>, a passionate developer who loves building beautiful and functional web experiences. I specialize in React, Tailwind, and making digital magic ✨.
        </p>
      </div>

      {/* Right: Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/priya-photo.jpg"
          alt="Priya Dharshini"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-pink-500 object-cover animate-fade-in"
        />
      </div>
    </section>
  );
}

