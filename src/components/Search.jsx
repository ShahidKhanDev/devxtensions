import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon

const Search = ({ query, setQuery }) => {
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setQuery(localQuery);
    }, 250);

    return () => clearTimeout(debounceTimer);
  }, [localQuery, setQuery]);

  return (
    <div className="w-[90%] max-w-lg mx-auto">
      <div className="flex items-center justify-between transition-all duration-200 bg-gray-600 rounded-full">
        <FaSearch className="ml-4 text-xl text-gray-400" />
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="w-[calc(100%-30px)] bg-transparent text-white focus:outline-none rounded-full pl-4 py-2.5 text-lg placeholder-gray-400 font-inter placeholder:text-[15px]"
          placeholder="Search extensions..."
          aria-label="Search extensions"
        />
      </div>
    </div>
  );
};

export default Search;
