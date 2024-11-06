import React from 'react';
import ToggleButton from './ToggleButton';
import sessions from '../../assets/sessions.svg';
import material from '../../assets/material.svg';
import info from '../../assets/info.svg';

const Header = () => (
  <div className="flex flex-col lg:flex-row justify-between">
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">
      <div className="toogle flex flex-wrap xs:flex-nowrap justify-around bg-gradient-to-b from-[#EFF5FF] to-[rgba(239,245,255,0)] p-2 sm:p-3 rounded-md gap-8 w-full sm:w-auto">
        <ToggleButton icon={sessions} text="Mentor Sessions" isActive={false} />
        <ToggleButton icon={material} text="Learning Materials" isActive={true} />
      </div>
      
      <div className='flex items-center border-solid border-[#A4E6FF] border-2 rounded-lg text-xs sm:text-sm md:text-base gap-1 h-8 sm:h-12 p-2 w-full sm:w-auto justify-center sm:justify-start'>
        <img src={info} alt="" className="w-3 sm:w-4 md:w-auto"/>
        <p>How it works</p>
      </div>
    </div>
  </div>
);

export default Header;