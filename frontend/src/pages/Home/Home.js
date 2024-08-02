import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";


function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavBar/>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className="w-2/4">
                    <SearchBar/>
                </div>
            </main>
        </div>
    );
};

export default Home;