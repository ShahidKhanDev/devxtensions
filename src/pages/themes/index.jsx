import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  FileIcon,
  FolderIcon,
  LayoutPanelLeft,
  SettingsIcon,
  Code2,
  PlayCircle,
  GitBranchIcon,
  SquareArrowOutUpRight,
} from "lucide-react";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { createHighlighter } from "shiki";
import themes from "../../data/themes";

let cachedHighlighter = null; // Cache the highlighter instance

export default function VSCodeUI() {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [currentTheme, setCurrentTheme] = useState("One Dark Pro"); // Default theme -> check data/themes for available themes
  const [themeColors, setThemeColors] = useState(themes["One Dark Pro"]);

  // Highlight code when the theme changes or initial render
  useEffect(() => {
    const initHighlighter = async () => {
      if (!cachedHighlighter) {
        // Create the highlighter instance only if it doesn't already exist
        cachedHighlighter = await createHighlighter({
          langs: ["javascript"],
          themes: [],
        });
      }

      const customTheme = {
        name: currentTheme,
        type: "dark",
        colors: {
          background: themeColors.background,
          text: themeColors.foreground,
        },
        tokenColors: [
          { scope: "keyword", settings: { foreground: themeColors.primary } },
          { scope: "string", settings: { foreground: themeColors.success } },
          { scope: "function", settings: { foreground: themeColors.info } },
          { scope: "comment", settings: { foreground: themeColors.secondary } },
          { scope: "variable", settings: { foreground: themeColors.warning } },
        ],
      };

      await cachedHighlighter.loadTheme(customTheme);

      const code = `
extensions.forEach(extension => {
  const { id, name, stars, category } = extension;
  if (
    stars > 100 ||
    (category === "Productivity" && stars >= 50) ||
    userFavorites[id]
  ) {
    highlightedExtensions++;
    console.log([DevXtensions] is a must-have!);
  }
});
      `;

      const highlighted = cachedHighlighter.codeToHtml(code, {
        lang: "javascript",
        theme: currentTheme,
      });

      setHighlightedCode(highlighted);
    };

    initHighlighter();
  }, [currentTheme, themeColors]);

  // Theme selector handler
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setCurrentTheme(selectedTheme);
    setThemeColors(themes[selectedTheme]);
  };

  // Animation variants
  const themeSelectorVariants = {
    hidden: { opacity: 0, y: 10, x: "-50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col w-full h-screen text-white"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.foreground,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Bar */}
      <div
        className="flex items-center px-4 text-sm select-none h-9 font-inter"
        style={{
          backgroundColor: themeColors.background,
        }}
      >
        <span className="mr-4">File</span>
        <span className="mr-4">Edit</span>
        <span className="mr-4">View</span>
        <span className="mr-4">Go</span>
        <span className="mr-4">Run</span>
        <span className="mr-4">Terminal</span>
        <span>Help</span>
      </div>

      <div
        className="flex flex-1"
        style={{
          backgroundColor: themeColors.background,
        }}
      >
        {/* Sidebar */}
        <div
          className={`flex flex-col items-center w-12 py-4 select-none`}
          style={{
            backgroundColor: themeColors.background,
          }}
        >
          <FileIcon className="w-6 h-6 mb-4 text-gray-400 cursor-pointer " />
          <Code2 className="w-6 h-6 mb-4 text-gray-400 cursor-pointer" />
          <GitBranchIcon className="w-6 h-6 mb-4 text-gray-400 cursor-pointer" />
          <PlayCircle className="w-6 h-6 mb-4 text-gray-400 cursor-pointer" />
          <SettingsIcon className="w-6 h-6 mt-auto text-gray-400 cursor-pointer" />
        </div>

        {/* File Explorer */}
        <div
          className="w-64 p-2"
          style={{
            backgroundColor: themeColors.background,
          }}
        >
          <div className="flex items-center justify-between mb-2 select-none">
            <span className="font-semibold">EXPLORER</span>
            <LayoutPanelLeft className="w-4 h-4" />
          </div>
          <div className="h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="pl-2 text-sm select-none font-inter">
              <div className="flex items-center mb-1 cursor-pointer">
                <ChevronDown className="w-4 h-4 mr-1" />
                <FolderIcon className="w-4 h-4 mr-2 text-blue-400" />
                <span>devxtensions</span>
              </div>
              <div className="pl-6">
                <div className="flex items-center mb-1 cursor-pointer">
                  <FileIcon className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>index.js</span>
                </div>
                <div className="flex items-center mb-1 cursor-pointer">
                  <FileIcon className="w-4 h-4 mr-2 text-blue-400" />
                  <span>styles.css</span>
                </div>
                <div className="flex items-center mb-1 cursor-pointer">
                  <FileIcon className="w-4 h-4 mr-2 text-orange-400" />
                  <span>package.json</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1">
          <div className="flex mb-2 text-sm"></div>
          <div className="h-[calc(100vh-8rem)] rounded-md overflow-auto">
            <div
              className={`!bg-[${themeColors.background}] rounded-md`}
              style={{
                backgroundColor: themeColors.background,
              }}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        </div>
      </div>

      {/* Theme Selector with Animation */}
      <motion.div
        className="absolute z-50 flex max-w-xl gap-4 px-4 py-3 overflow-x-auto -translate-x-1/2 bottom-2 left-1/2 scrollbar-hidden "
        variants={themeSelectorVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.keys(themes).map((t) => (
          <motion.div
            key={t}
            className={`flex items-center flex-col flex-shrink-0 min-w-[12rem] px-4 py-2 h-[6rem] cursor-pointer rounded-xl select-none font-inter justify-center relative ${
              currentTheme === t
                ? "outline outline-blue-400 outline-offset-2"
                : ""
            }`}
            onClick={() => {
              handleThemeChange({ target: { value: t } });
            }}
            style={{
              backgroundColor: themes[t].subtleBackground,
              color: themes[t].foreground,
            }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="mt-2">{t}</span>
            {/* <a
              href=""
              className="px-2 py-1 mt-0.5 text-sm rounded-xl"
              style={{ backgroundColor: themeColors.subtleBackground }}
            >
              Get theme
            </a> */}
            <div className="absolute flex items-center gap-1.5 right-2 top-1">
              <a
                className={`p-1.5 rounded-full bg-blue-600 transition-opacity duration-300 ease-in-out ${
                  currentTheme === t
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                href={`vscode:extension/${themeColors.metadata.identifier}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MdOutlineInstallDesktop className="w-4 h-4 text-white duration-300" />
              </a>
              <a
                className={`p-1.5 rounded-full bg-blue-600 transition-opacity duration-300 ease-in-out ${
                  currentTheme === t
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                href={themeColors.metadata.themeLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <SquareArrowOutUpRight className="w-4 h-4 text-white drop-shadow-lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
