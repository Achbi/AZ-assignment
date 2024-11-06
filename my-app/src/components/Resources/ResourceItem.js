import React from 'react';
import timer from '../../assets/timer.svg';

const ResourceItem = ({ icon, title, duration }) => (

    
  <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 hover:bg-gray-50 cursor-pointer">
    
    <div className="flex gap-2 items-center">
      <img src={icon} alt="" className="w-[15px] h-auto"/>
      <p className="font-semibold text-sm sm:text-base">{title}</p>
    </div>
    <div className="flex gap-2 items-center">
      <img className="w-[15px] h-auto" src={timer} alt=""/>
      <p className="text-sm sm:text-base">{duration}</p>
    </div>
  </div>

);

export default ResourceItem;
