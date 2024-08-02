import "./App.css";

import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="flex flex-row justify-between p-5">
        <h1 className="text-3xl text-left font-bold text-white">
          Employ Me
        </h1>
        <h1 className="text-xl text-right font-bold text-white">
          Login
        </h1>
     </header>
      <main className="flex justify-center items-center flex-grow">
        <div className="w-2/4">
          <SearchBar/>
        </div>
      </main>
    </div>
  );
}

export default App;
