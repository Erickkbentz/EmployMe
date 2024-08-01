import "./App.css";

import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
     </header>
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-2/4">
          <SearchBar/>
        </div>
      </main>
    </div>
  );
}

export default App;
