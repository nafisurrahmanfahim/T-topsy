import React, { useEffect, useState } from 'react';

const Header = () => {
  const texts = [
    "🔥 Summer Sale | Exclusive Deals on Selected Items!",
    "🚚 Enjoy Complimentary Shipping on All Orders!",
    "💥 Flat 20% OFF on First Purchase!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);  // Animation শুরু

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setAnimate(false);  // Animation শেষ
      }, 500); // Animation চলার সময়
    }, 4000); // প্রতি ৪ সেকেন্ড পরপর পরিবর্তন

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-center py-1 overflow-hidden">
      <h3 className={`text-white text-sm sm:text-base font-semibold transition-all duration-500 ease-in-out inline-block 
        ${animate ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        {texts[currentIndex]}
      </h3>
    </div>
  );
};

export default Header;
