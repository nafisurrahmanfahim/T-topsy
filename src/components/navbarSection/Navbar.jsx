import React, { useState, useEffect } from 'react';
import Container from '../Container';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Header from '../header/Header';
import LastHeader from '../header/LastHeader';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 left-0 w-full z-50">
            <Header />
            <div
                className={`w-full transition-all duration-500 ${
                    isScrolled
                        ? 'bg-black/80 shadow-lg'
                        : 'backdrop-blur-md bg-white/10 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]'
                } border-b border-white/10 overflow-x-hidden`}
            >
                <Container>
                    <div className="flex items-center justify-between flex-wrap px-4 py-4 w-full">

                        {/* Logo */}
                        <h3
                            className={`font-bold transition-all duration-300 tracking-wider text-lg sm:text-xl ${
                                isScrolled ? 'text-white scale-110' : 'text-black scale-100'
                            }`}
                        >
                            T-TOPSY
                        </h3>

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex flex-1 justify-center min-w-0 overflow-hidden">
                            <ul
                                className={`flex gap-6 font-semibold uppercase tracking-wide ${
                                    isScrolled ? 'text-white' : 'text-black'
                                }`}
                            >
                                {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                                    <li
                                        key={i}
                                        className="relative cursor-pointer px-2 group transition-all duration-300"
                                    >
                                        <span className="relative z-10 group-hover:text-pink-500 transition-colors duration-300">
                                            {item}
                                        </span>
                                        {/* Underline Effect */}
                                        <span className="absolute left-0 -bottom-[2px] h-[1.5px] w-0 bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Icons */}
                        <div
                            className={`flex items-center text-2xl gap-4 flex-shrink-0 ${
                                isScrolled ? 'text-white' : 'text-black'
                            }`}
                        >
                            <MdStarOutline />
                            <CiUser />
                            <HiOutlineShoppingBag />
                            <div className="xl:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="xl:hidden bg-black/90 text-white w-full">
                            <ul className="flex flex-col items-center gap-4 py-4">
                                {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                                    <li
                                        key={i}
                                        className="cursor-pointer hover:text-gray-300"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Container>
            </div>
            <LastHeader />
        </div>
    );
};

export default Navbar;
