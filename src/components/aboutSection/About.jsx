import React, { useRef } from 'react';
import Container from '../Container';
import women from '../../assets/aboutImg2.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from 'framer-motion';

const About = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const magnetArea = imageRef.current;
    const rect = magnetArea.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    magnetArea.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div className="relative overflow-hidden text-white bg-[#ADACD5] py-16">

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 md:px-10">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[55%] space-y-6 text-center lg:text-left"
          >
            <h2 className="font-loto text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Power Meets Elegance
            </h2>
            <p className="text-lg text-gray-200">
              Embrace beauty with confidence. Discover luxurious cosmetics made to elevate your style and empower your presence.
            </p>
            <a
              href="#"
              className="inline-block mt-3 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition hover:scale-105 font-semibold"
            >
              Learn More
            </a>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, IoLogoLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border border-gray-300 rounded-full text-white hover:bg-white hover:text-black transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Image Section with magnet effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[35%] flex justify-center"
          >
            <div
              className="rounded-xl overflow-hidden shadow-xl group magnet-wrapper"
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={women}
                alt="Model"
                className="w-[70%] mx-auto md:w-[60%] lg:w-[80%] rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default About;
