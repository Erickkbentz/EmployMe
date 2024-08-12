import { Link } from "react-router-dom";
import  LoginButton  from "../LoginButton/LoginButton";


function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center p-5">
        <h1 className="text-3xl text-left font-bold text-white">
            <Link to="/">Employ Me</Link>
        </h1>
        <LoginButton />
    </nav>
  );
}

export default NavBar;