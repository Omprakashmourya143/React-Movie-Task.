import React from "react";

// SearchBar accepts props (searchTerm, setSearchTerm, handleSearch)
const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <>
    <div className="pl-4 ml-4 w-full h-[20vh] flex items-center justify-center">
      <input
        type="text"
        value={searchTerm}  // Input field will reflect the searchTerm from parent state
        onChange={(e) => setSearchTerm(e.target.value)}  // Update the searchTerm state when typing
        className="p-2 rounded-lg"
        placeholder="Search for movies..."
      />
      <button
        onClick={handleSearch}  // Trigger the handleSearch function from parent when clicked
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Search
      </button>
     </div>
    </>
  );
};

export default SearchBar;
