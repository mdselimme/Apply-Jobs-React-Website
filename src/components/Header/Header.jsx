import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { LuLogIn } from "react-icons/lu";


const Header = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="navbar bg-base-100 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/home"}>Home</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/appliedjobs"}>Applied Jobs</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/blogs"}>Blogs</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/contact"}>Contact</NavLink></li>
            </ul>
          </div>
          <h1 className="text-4xl text-[#1A1919] font-extrabold"><Link to={"/"}>Apply<span className="text-[#818DFE]">Jobs.com</span></Link></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/home"}>Home</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/appliedjobs"}>Applied Jobs</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/blogs"}>Blogs</NavLink></li>
              <li><NavLink className="text-base font-medium text-[#757575]" to={"/contact"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
        <Link to={"/login"} className="flex items-center bg-common rounded-lg text-base mr-3">Start Applying</Link>
          <Link to={"/login"} className="flex items-center bg-common rounded-lg text-base"><LuLogIn className="mr-2" />LogIn</Link>          
        </div>
      </div>
        </div>
    );
};

export default Header;