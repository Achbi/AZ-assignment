import React from 'react';
import timer from '../../assets/timer.svg';

const ChapterItem = ({ chapter, duration, isActive }) => (
  <div
    className={`flex justify-between w-full p-2 m-1 text-sm sm:text-base ${
      isActive ? 'bg-[#EFF5FF] rounded-lg' : 'hover:bg-gray-50'
    } cursor-pointer`}
  >
    <p>{chapter}</p>
    {duration && (
      <div className="flex gap-1 items-center text-[#608AD2]">
        <img src={timer} alt="timer" className="w-4" />
        <p>{duration}</p>
      </div>
    )}
  </div>
);

export default ChapterItem;

