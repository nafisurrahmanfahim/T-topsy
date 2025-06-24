import React from 'react';
import video from '../../assets/video.mp4'
const BackgroundVideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 sm:px-12 text-white text-center">
        {/* <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Welcome to Modern Web
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light drop-shadow-sm">
            Beautiful background video design with React + Tailwind CSS
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
