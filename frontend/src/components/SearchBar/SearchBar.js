import React from 'react';

const SearchBar = () => {
  return (
      <div className="w-full max-w">
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for a job or task to do ..."
        />
      </div>
  );
};

export default SearchBar;