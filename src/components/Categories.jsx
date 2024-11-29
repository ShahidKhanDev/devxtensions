import categories from "../data/categories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="container grid max-w-5xl grid-cols-1 gap-6 p-4 pb-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="p-4 bg-gray-800 rounded-lg shadow cursor-pointer hover:bg-dark"
        >
          <Link
            to={
              category.id === "themes"
                ? "/themes"
                : `/extensions/${category.slug}`
            }
            className="relative"
          >
            <h2 className="flex items-center text-xl font-semibold text-gray-100">
              {category.icon} <span className="ml-2">{category.name}</span>
            </h2>
            <p className="mt-3 text-gray-400">{category.description}</p>
            <p className="inline-flex items-center justify-center px-4 py-1 mt-2 text-sm text-gray-100 bg-gray-900 rounded-full">
              {category.totalExtensions || 0}{" "}
              {category.id === "themes" ? "Themes" : "Extensions"}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Categories;
