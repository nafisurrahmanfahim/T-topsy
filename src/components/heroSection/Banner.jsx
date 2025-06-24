import React from 'react';
import women from '../../assets/ban.jpg';
import Container from '../Container';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className='py-[60px] md:py-[80px] bg-gradient-to-br from-black via-gray-800 to-white text-white relative overflow-hidden'>

      <Container>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-36">

          {/* Text Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight uppercase">
              Your Beauty in trusted hands
            </h3>
            <p className="pt-3 pb-8 font-bold text-sm sm:text-base md:text-lg lg:text-[17px] xl:text-[18px] max-w-[600px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsum inventore repudiandae temporibus veniam voluptatum mollitia aliquid a, enim quibusdam modi quia doloribus, deleniti illum unde quaerat consequatur nobis.
            </p>
            <motion.a
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className='cursor-pointer py-3 px-6 bg-black text-white inline-block rounded-sm'
            >
              Shop Now
            </motion.a>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[75%] aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={women} className="w-full h-full object-cover" alt="img" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Banner;
