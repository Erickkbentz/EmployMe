import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex flex-row justify-between p-5">
        <h1 className="text-3xl text-left font-bold text-white">
            <Link to="/">Employ Me</Link>
        </h1>
        <h1 className="text-xl text-right font-bold text-white">
            Login
        </h1>
    </nav>
  );
}

export default NavBar;