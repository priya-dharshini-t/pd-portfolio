// src/components/AnimatedBackground.js
import { motion } from "framer-motion";
import "./AnimatedBackground.css";

const shapes = [
  { className: "shape1", x: -100, y: 0, duration: 8 },
  { className: "shape2", x: 150, y: -50, duration: 12 },
  { className: "shape3", x: -150, y: 100, duration: 10 },
  { className: "shape4", x: 100, y: 80, duration: 14 },
];

const AnimatedBackground = () => {
  return (
    <div className="background-animated">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`shape ${shape.className}`}
          animate={{
            y: [0, shape.y, 0],
            x: [0, shape.x, 0],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
