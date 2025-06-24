// src/components/Footer.jsx

import React from 'react'
import Container from '../Container'
import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-32 overflow-x-hidden w-full">
      <Container>
        <div className="text-[#FAFAFA] font-poppins flex flex-wrap gap-10 justify-between w-full">

          {/* Subscribe */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <h3 className="font-medium text-xl pb-6">Exclusive</h3>
            <h3 className="font-medium text-xl pb-6">Subscribe</h3>
            <p className="text-base pb-4">Get 10% off your first order</p>
            <div className="w-full max-w-xs relative">
              <input
                className="w-full h-12 bg-transparent border border-white/50 pl-4 pr-10 rounded focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-2xl text-white cursor-pointer">
                <LuSendHorizontal />
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <h3 className="font-medium text-xl pb-6">Support</h3>
            <address className="not-italic text-sm leading-6">
              <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p className="py-4">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 pt-6 sm:pt-0">
            <h3 className="font-medium text-xl pb-4">Download App</h3>
            <p className="text-sm text-gray-400 pb-2">Save $3 with App New User Only</p>
            <div className="flex gap-4 text-xl pt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400"><FaTwitterSquare /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><IoLogoLinkedin /></a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer;
