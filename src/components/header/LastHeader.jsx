import React from 'react';

const LastHeader = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-4 py-3 px-4 text-center">
        <h3 className="text-[12px] sm:text-base font-semibold tracking-wide animate-pulse font-nunito">
          🎉 New exclusive items added to Summer Sale!
        </h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-4 border border-white hover:bg-white hover:text-black transition duration-300 text-sm font-nunito"
          >
            Women
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastHeader;
