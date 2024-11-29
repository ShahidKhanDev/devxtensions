import React from "react";
import { Link } from "react-router-dom";
import GitHubButton from "./GithubButton";
import { motion } from "framer-motion";

const Header = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
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
    // Full-width container for the glass effect
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed top-0 left-0 right-0 z-20 w-full bg-opacity-60 backdrop-blur-md backdrop-filter"
    >
      <motion.header
        variants={fadeInVariants}
        className="container flex items-center justify-between max-w-5xl px-4 py-2 mx-auto"
      >
        {/* Logo / Title */}
        <motion.div variants={fadeInVariants}>
          <Link
            to="/"
            className="inline-flex items-center justify-center text-2xl font-bold text-gray-200 font-orbitron"
          >
            <img src="/logo.png" alt="logo" className="inline-block w-7 h-7" />
            evXtensions
          </Link>
        </motion.div>

        {/* GitHub Button */}
        <motion.div variants={fadeInVariants}>
          <ul className="">
            <li>
              <GitHubButton
                href="https://github.com/ShahidKhanDev/weather.github.io"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                data-size="large"
              >
                Give us a star
              </GitHubButton>
            </li>
          </ul>
        </motion.div>
      </motion.header>
    </motion.div>
  );
};

export default Header;
