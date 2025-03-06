
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useState } from "react";
import logo from "../assets/react.svg";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const location = useLocation(); // Get current location

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img className="h-10 w-10 mr-2" src={logo} alt="CodeCanvas Logo" />
                            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                                CodeCanvas
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.to}
                                    className={`text-gray-300 hover:text-white transition duration-300 ${location.pathname === item.to ? 'font-bold' : ''}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Sign In and Create Account Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <Link
                            to="/signin"
                            className={`py-2 px-4 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 transition duration-300 ${location.pathname === '/signin' ? 'font-bold' : ''}`}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/register"
                            className={`bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-4 rounded-md text-white hover:from-blue-600 hover:to-blue-800 transition duration-300 ${location.pathname === '/register' ? 'font-bold' : ''}`}
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden flex-col justify-end">
                        <button onClick={toggleNavbar} className="text-gray-300 hover:text-white transition duration-300">
                            {mobileDrawerOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="lg:hidden mt-4">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className={`block text-gray-300 hover:text-white transition duration-300 ${location.pathname === item.to ? 'font-bold' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link
                                to="/signin"
                                className={`py-2 px-4 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 transition duration-300 text-center ${location.pathname === '/signin' ? 'font-bold' : ''}`}>
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className={`bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-4 rounded-md text-white hover:from-blue-600 hover:to-blue-800 transition duration-300 text-center ${location.pathname === '/register' ? 'font-bold' : ''}`}>
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;