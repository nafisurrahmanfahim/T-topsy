import React, { useEffect, useRef } from 'react';
import Container from '../Container';
import { motion, useInView, useAnimation } from 'framer-motion';

import model from '../../assets/model.png';

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="bg-[#f7f8f7]">
      <h3 className="pt-1 text-center font-normal font-[serif] tracking-[0.1em] leading-[0.85] text-[48px] sm:text-[64px] md:text-[96px] lg:text-[129px]">
        T-TOPSY
      </h3>

      <Container>
        <div className="py-[20px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-36">
          
          {/* Text Area */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="font-luxary text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-tight uppercase">
              Your Beauty in trusted hands
            </h3>
            <p className="font-pera pt-3 pb-8 font-bold text-sm sm:text-base md:text-lg lg:text-[17px] xl:text-[18px] max-w-[600px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsum inventore repudiandae temporibus veniam voluptatum mollitia aliquid a, enim quibusdam modi quia doloribus, deleniti illum unde quaerat consequatur nobis.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer py-3 px-6 bg-black text-white inline-block rounded-sm"
            >
              Shop Now
            </motion.a>
          </motion.div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={model}
              alt="Model"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto object-contain"
            />
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Banner;
