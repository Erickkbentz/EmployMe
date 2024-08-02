import React from 'react';

const SearchBar = () => {
  return (
      <div className="w-full max-w w-full max-w flex items-center border border-gray-300 rounded-full shadow-sm focus-within:ring-1 focus-within:ring-blue-500">
        <input
          type="text"
          className="w-full p-4 rounded-l-full focus:outline-none"
          placeholder="Please give me a job ..."
        />
        <button className="p-4 bg-black text-white rounded-r-full hover:bg-gray-500 focus:outline-none">
          Search
        </button>
      </div>
  );
};

export default SearchBar;