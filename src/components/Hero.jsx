import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const taglines = [
    "Elevate your coding experience.",
    "Discover powerful tools.",
    "Build better, faster.",
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="container mx-auto max-w-5xl pt-16 pb-[3rem] px-4">
      {/* Hero Section Wrapper */}
      <motion.div
        className="bg-gray-800 h-[79.5vh] rounded-xl flex flex-col items-center justify-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Graphic */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={fadeInVariants}
        ></motion.div>
        <motion.div className="absolute inset-0 z-0" variants={fadeInVariants}>
          <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] opacity-30"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          {/* Badge */}
          <motion.div
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white transition rounded-full shadow-md bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-lg"
            variants={fadeInVariants}
          >
            🚀 Built for Developers
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-4 text-4xl font-extrabold !leading-[1.15] text-white md:text-5xl lg:text-6xl"
            variants={fadeInVariants}
          >
            Supercharge Your <br />
            <span className="text-blue-400">Development Workflow</span>
          </motion.h1>

          {/* Rotating Tagline with Animation */}
          <motion.div className="h-10" variants={fadeInVariants}>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mb-8 text-lg font-medium text-gray-300 md:text-xl"
              >
                {taglines[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-4 mt-4"
            variants={fadeInVariants}
          >
            <Link
              to="/extensions/all"
              className="px-6 py-3 font-medium text-gray-800 transition-transform transform rounded-lg shadow bg-btn"
            >
              Explore Extensions
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexwWmm3d3-AlImiNJz0CFbUlUIgNWUlSrwHoKZ3MewRavDlw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-transform transform bg-gray-700 rounded-lg shadow"
            >
              <span>Add Your Extension</span>
              <span>⭐</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
