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
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Sticky Navbar */}
            <div className="sticky top-0 left-0 w-full z-50">
                <Header />
                <div
                    className={`w-full transition-all duration-500 ${
                        isScrolled
                            ? 'bg-black/80 shadow-lg'
                            : 'backdrop-blur-md bg-white/10 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]'
                    } overflow-x-hidden`}
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
                            <div className="hidden xl:flex flex-1 justify-center">
                                <ul className="flex gap-10 font-semibold uppercase tracking-wide">
                                    {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                                        <li
                                            key={i}
                                            className="relative cursor-pointer px-2 pb-1 group"
                                        >
                                            <span className="relative z-10 group-hover:text-pink-500 transition-colors duration-300">
                                                {item}
                                            </span>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Icons */}
                            <div className={`flex items-center text-2xl gap-4 flex-shrink-0 ${isScrolled ? 'text-white' : 'text-black'}`}>
                                <MdStarOutline />
                                <CiUser />
                                <HiOutlineShoppingBag />
                                <div className="cursor-pointer" onClick={() => setMenuOpen(true)}>
                                    <GiHamburgerMenu />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <LastHeader />
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]" 
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Slide-in Mobile Menu */}
            <div className={`fixed top-0 right-0 h-screen w-[300px] bg-black/95 text-white transform transition-transform duration-500 z-[9999] ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {/* Close Button */}
                <div className="flex justify-end p-4 border-b border-gray-700">
                    <IoClose className="text-3xl cursor-pointer hover:text-pink-500 transition" onClick={() => setMenuOpen(false)} />
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-6 px-6 pt-10">
                    <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Menu</h3>
                    {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                        <li
                            key={i}
                            className="list-none relative cursor-pointer group text-lg font-medium tracking-wide py-2 border-b border-gray-800 hover:border-pink-500 transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="group-hover:text-pink-500 transition-colors duration-300">
                                {item}
                            </span>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
