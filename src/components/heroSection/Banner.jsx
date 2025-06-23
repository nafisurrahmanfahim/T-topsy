import React from 'react'
import women from '../../assets/ban.jpg'
import Container from '../Container'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <div className='py-[80px]' style={{ background: 'radial-gradient(100% 100% at 50% 0%,  #020617, #FFF)' }}>
      <Container>
        {/* <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div> */}
        <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50 lg:animate-spin sm:animate-none"></div>
        <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>

        <div className="flex justify-between gap-36">
          <div className="w-[55%]">
            <h3 className="text-[64px] font-bold pt-32 leading-tight uppercase">Your Beauty in trusted hands</h3>
            <p className="pt-3 pb-8 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsum inventore repudiandae temporibus veniam voluptatum mollitia aliquid a, enim quibusdam modi quia doloribus, deleniti illum unde quaerat consequatur nobis. Alias vero incidunt dolorum in minima odit quo. Ex amet, numquam enim atque nihil, dolores ab error repellendus, doloribus laboriosam consectetur.</p>
            <motion.a
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className='cursor-pointer py-3 px-5 bg-[black] text-white inline-block'>Shop Now</motion.a>
          </div>
          <div className="flex justify-start pt-32">
            <div className="md:w-[45%]">
            <img src={women} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
