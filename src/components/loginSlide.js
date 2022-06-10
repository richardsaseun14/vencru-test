import React from 'react';
import SlideSvg from '../assets/img/vencru-slide.svg';

const LoginSlide = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full space-y-14">
      <p className="text-2xl font-medium mb-6 text-[#2D74DA]">
        Organize your customer information
      </p>
      <img src={SlideSvg} alt="" className="" />
      <ul className="flex space-x-2">
        <li className="w-2 h-2 bg-[#2D74DA] rounded-full"></li>
        <li className="w-2 h-2 bg-[#79A6F6] rounded-full"></li>
        <li className="w-2 h-2 bg-[#79A6F6] rounded-full"></li>
        <li className="w-2 h-2 bg-[#79A6F6] rounded-full"></li>
      </ul>
    </div>
  );
};

export default LoginSlide;
