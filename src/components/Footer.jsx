import { GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation Variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
    visible: {
      opacity: 1,
      y: 0, // Slide into place
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth transition
    },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="fixed bottom-0 left-0 z-20 w-full px-4 py-2.5 bg-gray-900 border-t border-gray-700 shadow-md dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="container flex flex-col items-center justify-center max-w-5xl mx-auto md:flex-row md:items-center md:justify-between">
        {/* Copyright Section */}
        <span className="text-sm text-gray-400 sm:text-center dark:text-gray-500">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/ShahidKhanDev"
            className="text-white hover:underline"
          >
            Shahid Ullah Safi
          </a>
          . All Rights Reserved.
        </span>

        {/* Links */}
        <ul className="flex-wrap items-center hidden mt-3 text-sm font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
          <li>
            <a
              href="https://github.com/ShahidKhanDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ShahidKhanDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="mailto:shahidkhandev19@gmail.com"
              className="hover:underline me-4 md:me-6"
            >
              Email
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Made With Love Section */}
        <div className="flex items-center mt-3 space-x-1 sm:mt-0">
          <span className="text-sm text-gray-400">Made with</span>
          <GoHeartFill className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-sm text-gray-400">by Shahid Ullah Safi</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
