import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Listed Books</NavLink></li>
                        <li><NavLink>Pages to Read</NavLink></li>
                        <li><NavLink>About Us</NavLink></li>
                        <li><NavLink>Community</NavLink></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">ReadEase Haven</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''}>Home</NavLink></li>
                    <li><NavLink to={'/listed-books'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''}>Listed Books</NavLink></li>
                    <li><NavLink to={'/page-to-read'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''}>Pages to Read</NavLink></li>
                    <li><NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''}>About us</NavLink></li>
                    <li><NavLink to={'/community'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''}>Community</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end  space-x-2 ">
                <button className="btn bg-green-600 text-white">Sign In</button>
                <button className="btn hidden md:block text-white bg-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;