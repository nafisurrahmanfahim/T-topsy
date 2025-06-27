import React, { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import { motion, useInView, useAnimation } from 'framer-motion';

import background1 from '../../assets/bg.jpg';
import model1 from '../../assets/tops.jpg';
import model2 from '../../assets/bgModel.jpg';
import model3 from '../../assets/bgModel3.png';
import model4 from '../../assets/bgModel4.png';

const Banner = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const images = [model1, model2, model3, model4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="py-[60px] md:py-[20px] text-black relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background1})`
      }}
    >
      <Container>
        <div className="py-[160px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-36">

          {/* Text Area */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="font-luxary text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-tight uppercase">
              Your Beauty in trusted hands
            </h3>
            <p className="font-pera pt-3 pb-8 font-bold text-sm sm:text-base md:text-lg lg:text-[17px] xl:text-[18px] max-w-[600px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsum inventore repudiandae temporibus veniam voluptatum mollitia aliquid a, enim quibusdam modi quia doloribus, deleniti illum unde quaerat consequatur nobis.
            </p>
            <motion.a
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className='cursor-pointer py-3 px-6 bg-black text-white inline-block rounded-sm'
            >
              Shop Now
            </motion.a>
          </motion.div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div
              key={images[currentIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[75%] aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img src={images[currentIndex]} className="w-full h-full object-cover" alt="Model" />
            </motion.div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
