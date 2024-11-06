import React from 'react';
import timer from '../../assets/timer.svg';
import chartBar from '../../assets/chartBar.svg';
import copy from '../../assets/copy.svg';

const PartMetrics = ({ duration, difficulty, copies }) => (
  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-[#17384D] mt-4 sm:mt-0 sm:ml-auto">
    <div className="flex items-center gap-2">
      <img src={timer} alt="" className="w-4 sm:w-auto" />
      <p className="text-sm sm:text-base">{duration}</p>
    </div>
    <div className="flex items-center gap-2">
      <img src={chartBar} alt="" className="w-4 sm:w-auto" />
      <p className="text-sm sm:text-base">{difficulty}</p>
    </div>
    <div className="flex items-center gap-2">
      <img src={copy} alt="" className="w-4 sm:w-auto" />
      <p className="text-sm sm:text-base">{copies}</p>
    </div>
  </div>
);

export default PartMetrics;
