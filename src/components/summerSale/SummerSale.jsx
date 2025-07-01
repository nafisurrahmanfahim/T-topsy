import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

const SummerSale = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const posX = event.clientX - rect.left;
        const posY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        x.set(posX - centerX);
        y.set(posY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div className="py-[130px] bg-black relative overflow-hidden">

            {/* Heading */}
            <motion.h3
                ref={ref}
                className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[266px] text-center font-summer text-white leading-none relative z-10 drop-shadow-[0_0_30px_#E01518] hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                SUMMER{' '}
                <span className='text-[#E01518] drop-shadow-[0_0_10px_rgba(224,21,24,0.6)]'>
                    SALE
                </span>
            </motion.h3>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="flex justify-center mt-12"
            >
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{
                        scale: 1.1,
                        backgroundPosition: "200% 0",
                        boxShadow: "0 0 25px rgba(224,21,24,0.7)",
                        transition: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="
                        px-10 py-4 
                        rounded-full 
                        text-white 
                        font-semibold 
                        text-lg 
                        tracking-wider 
                        bg-gradient-to-r from-[#E01518] via-[#ff3c3c] to-[#a20e0e] 
                        bg-[length:300%_300%] 
                        shadow-md 
                        cursor-pointer 
                        select-none 
                        transition-all duration-500 relative overflow-hidden
                    "
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY }}
                >
                    <span className="relative z-10">Shop Now</span>

                    {/* Hover glow */}
                    <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(224,21,24,0.4) 0%, transparent 70%)",
                            opacity: 0,
                            zIndex: 0
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.3
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default SummerSale;
