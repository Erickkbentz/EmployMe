import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UploadResume from "../../components/UploadResume/UploadResume";


function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavBar/>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className="flex justify-center items-center w-2/4 -mt-60">
                    <SearchBar/>
                    <UploadResume/>
                </div>
            </main>
        </div>
    );
};

export default Home;