import React from 'react';

const ToggleButton = ({ icon, text, isActive }) => (
  <div className={`flex p-1 items-center gap-1 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap ${
    isActive ? 'bg-[#fff] border-2 rounded-lg shadow-md shadow-[#29539B4D] shadow-[0px 3.67px 3.67px 0px] border-[#D2E3FF]' : ''
  }`}>
    <img src={icon} alt={text} className="w-3 sm:w-4 md:w-auto" />
    <p>{text}</p>
  </div>
);

export default ToggleButton;