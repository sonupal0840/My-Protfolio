import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import style from "./Port.module.css";

const Portfolio = () => {
    // Default theme को "dark" करने के लिए localStorage check करें
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : true
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            <nav className={style.Navbar}>
                <aside>Portfolio</aside>

                <ul className={style.navLinks}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/studies">Studies</Link></li>
                    <li><Link to="/Project">Projects</Link></li>
                    <li><Link to="/certificate">Certificates</Link></li>
                    <li><Link to="/Plateform">Contacts</Link></li>
                </ul>

                {/* Theme Toggle Button */}
                <button className={style.themeToggle} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaMoon /> : <FaSun />}
                </button>
            </nav>
        </>
    );
};

export default Portfolio;
