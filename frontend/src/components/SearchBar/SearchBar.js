import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/jobs?search=${search}`);
    }
  };

  return (
      <form onSubmit={handleSearch} className="w-full max-w w-full max-w flex items-center border border-gray-300 rounded-full shadow-sm focus-within:ring-1 focus-within:ring-blue-500">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full p-4 rounded-l-full focus:outline-none"
          placeholder="Please give me a job ..."
        />
        <button type='submit' className="p-4 bg-black text-white rounded-r-full hover:bg-gray-500 focus:outline-none">
          Search
        </button>
      </form>
  );
};

export default SearchBar;