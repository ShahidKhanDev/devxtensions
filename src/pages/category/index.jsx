import { useParams, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { toast } from "sonner";
import { Search, ExtensionCard, Footer } from "../../components";
import { motion } from "framer-motion";
import categories from "../../data/categories";
import extensions from "../../data/extensions";
import { useEffect, useState } from "react";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [filteredExtensions, setFilteredExtensions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  // Find category based on slug
  const category =
    slug === "all" ? categories : categories.find((cat) => cat.slug === slug);

  useEffect(() => {
    if (!category) {
      navigate("/extensions/all"); // Redirect to default if category not found
    }
  }, [category, navigate]);

  // Filter extensions based on category and query
  useEffect(() => {
    const filtered =
      slug === "all"
        ? extensions // Show all extensions if slug is "all"
        : extensions.filter((ext) => ext.category === slug);

    if (query) {
      const queryFiltered = filtered.filter((ext) =>
        ext.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredExtensions(queryFiltered);
    } else {
      setFilteredExtensions(filtered);
    }
  }, [slug, query]);

  // If no extensions found
  if (!filteredExtensions.length) {
    return <div className="text-center text-white">No extensions found</div>;
  }

  // Function to copy installation command
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("Installation command copied to clipboard!", {
      classNames: {
        toast: "bg-gray-800 border-slate-700",
        title: "text-gray-100",
      },
      icon: <FaCheck className="w-5 h-5 text-green-500" />,
      position: "top-right",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-4 text-gray-100 bg-background"
    >
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center max-w-5xl mx-auto mb-6 overflow-hidden bg-gray-800 rounded-lg h-[50vh] isolate">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] opacity-30"></div>
        </div>
        <div className="container mx-auto text-center text-white">
          <div>
            <h1 className="mb-4 text-4xl font-extrabold">
              {slug === "all" ? "🌐" : category?.icon}
              <span className="font-orbitron">
                {slug === "all" ? "All Extensions" : category?.name}
              </span>
            </h1>
            <p className="mb-6 text-lg font-roboto">
              {slug === "all"
                ? "Browse all available extensions in one place."
                : category?.description}
            </p>
          </div>
          <Search
            extensions={extensions}
            setFilteredExtensions={setFilteredExtensions}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>

      {/* Featured Extensions Grid */}
      <div className="container max-w-5xl pb-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredExtensions.map((extension) => (
            <ExtensionCard
              extension={extension}
              key={extension.id}
              handleCopy={handleCopy}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Category;
