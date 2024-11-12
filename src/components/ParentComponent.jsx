import React, { useState } from "react";
import SearchBar from "./SearchBar"; // Make sure the import path is correct

const ParentComponent = () => {
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search (you can customize this logic)
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Add more search logic here (e.g., API call)
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default ParentComponent;
