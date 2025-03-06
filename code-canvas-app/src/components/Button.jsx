import React from "react";
import {Link } from "react-router-dom";

const Button = ({ to, href, children, variant = "primary", width = "w-40", Icon }) => {
    const baseStyles = "font-semibold py-3 px-6 rounded-md shadow-md flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
        secondary: "bg-gray-800 text-gray-300 hover:bg-gray-700",
        borderOnly: "border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 transition duration-300",
    };

    return (
        <Link to={to} className={`${baseStyles} ${variants[variant]} ${width}`}>
            {Icon && <Icon size={20} />}
            <span>{children}</span>
        </Link>
    )
};

export default Button;
