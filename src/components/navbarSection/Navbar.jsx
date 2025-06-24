import React, { useState } from 'react';
import Container from '../Container';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] border-b border-white/10">
            <Container>
                <div className="flex items-center justify-between mx-auto px-4 py-3">

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="search"
                            className="outline-none w-[160px] sm:w-[200px] md:w-[240px] h-[36px] border border-[black] pl-6 text-sm text-black"
                            placeholder="search"
                            aria-label="Search Products"
                        />
                        <div className="absolute top-1/2 left-[5px] transform -translate-y-1/2 text-black">
                            <IoIosSearch />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex">
                        <ul className="flex gap-4 text-white font-bold font-poppins">
                            {["Home", "About", "Services", "Products", "Contact", "Support"].map((item, i) => (
                                <li key={i} className="px-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full transition-all after:transition-all after:duration-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Icons + Hamburger */}
                    <div className="flex items-center text-2xl gap-4 text-white">
                        <MdStarOutline />
                        <CiUser />
                        <HiOutlineShoppingBag />

                        {/* Hamburger ১২২০px নিচে */}
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
    )
}

export default Navbar;
