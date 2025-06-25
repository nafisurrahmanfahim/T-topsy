import React, { useState, useEffect } from 'react';
import Container from '../Container';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 shadow-lg' : 'backdrop-blur-md bg-white/10 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]'} border-b border-white/10 overflow-x-hidden`}>
            <Container>
                <div className="flex items-center justify-between flex-wrap px-4 py-3 w-full">

                    {/* Search */}
                    <div className="relative flex-shrink-0">
                        <input
                            type="search"
                            className={`outline-none w-[160px] sm:w-[200px] md:w-[240px] h-[40px] rounded-full pl-10 pr-4 text-sm transition-all duration-500 ${isScrolled ? 'bg-black/60 border border-white text-white placeholder:text-white/70' : 'bg-white border border-black text-black placeholder:text-black/70'}`}
                            placeholder="Search products..."
                            aria-label="Search Products"
                        />
                        <div className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-lg transition-all duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>
                            <IoIosSearch />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex flex-1 justify-center min-w-0 overflow-hidden">
                        <ul className={`flex gap-4 font-bold font-poppins flex-wrap ${isScrolled ? 'text-white' : 'text-black'}`}>
                            {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                                <li
                                    key={i}
                                    className={`px-2 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] ${isScrolled ? 'after:bg-white' : 'after:bg-black'} hover:after:w-full transition-all after:duration-500 cursor-pointer`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Icons + Hamburger */}
                    <div className={`flex items-center text-2xl gap-4 flex-shrink-0 ${isScrolled ? 'text-white' : 'text-black'}`}>
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
                                <li key={i} className="cursor-pointer hover:text-gray-300" onClick={() => setMenuOpen(false)}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Navbar;
