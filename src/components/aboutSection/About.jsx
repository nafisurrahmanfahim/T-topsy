import React from 'react';
import Container from '../Container';
import women from '../../assets/aboutImg2.jpg';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import background1 from '../../assets/bg.jpg';


const About = () => {
    return (
        <div style={{
            backgroundImage: `url(${background1})`
        }} className='py-10 md:py-20 bg-gradient-to-br from-white via-gray-300 to-black text-black relative'>

            {/* Mobile View Icon Top Area */}
            <div className="flex gap-4 justify-center mb-6 lg:hidden">
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                    <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                    <FaTwitterSquare />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                    <FaInstagram />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                    <IoLogoLinkedin />
                </a>
            </div>

            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

                    {/* Desktop Left Side Icon */}
                    <div className="hidden lg:flex lg:flex-col gap-4 animate-pulse">
                        <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                            <FaTwitterSquare />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                            <FaInstagram />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110">
                            <IoLogoLinkedin />
                        </a>
                    </div>

                    {/* Image Area */}
                    <div className="cursor-pointer w-full md:w-[50%] lg:w-[25%] flex justify-center overflow-hidden group">
                        <img
                            src={women}
                            className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-full rounded-lg shadow-lg transition-transform duration-700 ease-in-out group-hover:scale-110"
                            alt="womenImg"
                        />
                    </div>

                    {/* Text Area */}
                    <div className="w-full lg:w-[50%] text-center lg:text-left space-y-6">
                        <h3 className="text-[32px] sm:text-[42px] md:text-[52px] font-bold uppercase leading-tight">Power Of Make Up</h3>
                        <p className="text-sm sm:text-base md:text-lg font-medium max-w-[600px] mx-auto lg:mx-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione neque sapiente accusamus cupiditate quam voluptatibus molestias possimus.
                        </p>
                        <a className="inline-block text-white bg-black px-6 py-3 rounded hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer">
                            Learn More
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
