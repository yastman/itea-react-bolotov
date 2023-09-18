import React from "react";

export const Search = (searchQuery, handleSearch) => {
  return (
    <div className="Search">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search movies"
      />
    </div>
  );
};
