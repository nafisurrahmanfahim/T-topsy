import React from 'react'
import Container from '../Container'
import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div>
       <footer className="bg-[#000000] pt-[80px] pb-[124px]">
      <Container>
        <div className="text-[#FAFAFA] font-poppins flex justify-between flex-wrap">

          {/* Subscribe */}
          <div className="w-[27%] md:w-[50%] 2xl:w-[15%]">
            <h3 className="font-medium text-[20px] pb-[24px]">Exclusive</h3>
            <h3 className="font-medium text-[20px] pb-[24px]">Subscribe</h3>
            <p className="font-normal text-[16px] pb-[16px]">Get 10% off your first order</p>
            <div className="w-[217px] relative">
              <input
                className="w-full h-[48px] bg-transparent border-[1px] pl-[16px] pt-[2px] rounded-[4px]"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <div className="absolute top-[50%] translate-y-[-50%] right-[15px] text-[22px] cursor-pointer">
                <LuSendHorizontal />
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="w-[25%] md:w-[50%] 2xl:w-[15%]">
            <h3 className="font-medium text-[20px] pb-[24px]">Support</h3>
            <address className="not-italic text-[15px]">
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p className="py-[16px]">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </address>
          </div>



  

          {/* Download + Social */}
          <div className="w-[26%] md:pt-[50px]">
            <h3 className="font-medium text-[20px] pb-[15px]">Download App</h3>
            <p className="font-poppins font-medium text-[12px] text-[#a39e9e] pb-[8px]">Save $3 with App New User Only</p>

            <div className="flex text-[24px] gap-[19px]">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitterSquare /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><IoLogoLinkedin /></a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
