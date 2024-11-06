import React from 'react';
import PartMetrics from './PartMetrices';
import ResourceItem from '../Resources/ResourceItem';
import arrow_up from '../../assets/arrow_up.svg';
import arrow_down from '../../assets/arrow_down.svg';

const Part = ({ 
  partNumber, 
  title, 
  duration, 
  difficulty, 
  copies, 
  completion, 
  isExpanded, 
  progressLine,
  resources = [] 
}) => (
  <div className="flex-1 border-box border-solid border-[#A4E6FF] border-2 my-2 rounded-md">
    <div className="flex flex-col sm:flex-row p-4 items-start sm:items-center w-full">
      <div className="flex flex-col">
        <p className="text-sm sm:text-base">PART {partNumber}</p>
        <p className="font-bold text-sm sm:text-base">{title}</p>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-[#17384D] mt-4 sm:mt-0 sm:ml-auto">
      <div className="flex items-center gap-2">
        <PartMetrics duration={duration} difficulty={difficulty} copies={copies} />
        
        <img 
          src={isExpanded ? arrow_down : arrow_up} 
          alt="" 
          className="w-4 sm:w-auto cursor-pointer mt-4 ml-1 sm:mt-0"
        />
      </div>
    </div>
    </div>
    
    <div className="flex justify-end">
      <p className="w-36 mr-2 text-center h-auto text-sm sm:text-base bg-[#EFF5FF] border-[1px] border-solid border-[#99E4FF] rounded-md font-sans">
        {completion}% Completed
      </p>
    </div>
    
    <img src={progressLine} alt="" className="w-full rounded-b-md mt-2" />
    <div className="divide-y divide-gray-100">
    {isExpanded && resources.map((resource, index) => (
        
    
      <ResourceItem 
        key={index}
        icon={resource.icon}
        title={resource.title}
        duration={resource.duration}
      />
    ))}
    </div>
  </div>
);

export default Part;


