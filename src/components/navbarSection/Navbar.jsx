import React from 'react'
import Container from '../Container'
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";



const Navbar = () => {
    return (
        <div className="">
            <div>
                <div class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] border-b border-white/10">
                    <Container>
                        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                            <div className="relative">
                                <input
                                    type="search"
                                    className="outline-none w-[240px] h-[36px] border border-[black] pl-6 text-sm text-black"
                                    placeholder="search"
                                    aria-label="Search Products"
                                />
                                <div className="absolute top-1/2 left-[5px] outline-none transform -translate-y-1/2">
                                    <IoIosSearch />
                                </div>
                            </div>


                            <div class="" >
                                <ul className='flex gap-6 font-loto text-white'>
                                    <li className='bg-[crimson] px-4 rounded-md hover:shadow-blue-500/70 hover:shadow-[0_0_25px_5px] hover:-translate-y-1 cursor-pointer transition-all duration-300'>Home</li>
                                    <li className='bg-[crimson] px-4 rounded-md hover:shadow-blue-500/70 hover:shadow-[0_0_25px_5px] hover:-translate-y-1 cursor-pointer transition-all duration-300'>About</li>
                                    <li className='bg-[crimson] px-4 rounded-md hover:shadow-blue-500/70 hover:shadow-[0_0_25px_5px] hover:-translate-y-1 cursor-pointer transition-all duration-300'>Services</li>
                                    <li className='bg-[crimson] px-4 rounded-md hover:shadow-blue-500/70 hover:shadow-[0_0_25px_5px] hover:-translate-y-1 cursor-pointer transition-all duration-300'>Contact</li>
                                </ul>
                            </div>

                            <div class="flex text-2xl gap-4 pr-9">
                                <MdStarOutline />
                                <CiUser />
                                <HiOutlineShoppingBag />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Navbar