// Main.js
import React from 'react';
import Header from './components/Header/Header';
import ChapterItem from './components/Chapters/ChapterItem';
import Part from './components/Part/Part';
import video from './assets/video.svg';
import article from './assets/article.svg';
import coding from './assets/coding.svg';
import copy from './assets/copy.svg';
import line from './assets/line.svg';
import line_20 from './assets/line_20.svg';
import line_0 from './assets/line_0.svg';

const Main = () => {
  const chapters = [
    { title: 'Chapter 1', duration: '05:00:00', isActive: true },
    { title: 'Chapter 2' },
    { title: 'Chapter 3' },
    { title: 'Chapter 4' },
    { title: 'Chapter 5' }
  ];

  const part1Resources = [
    { icon: video, title: "Video 1", duration: "10:00" },
    { icon: article, title: "Article 1", duration: "10:00" },
    { icon: article, title: "Quiz 1", duration: "10:00" },
    { icon: coding, title: "Coding Exercise 1", duration: "10:00" },
    { icon: copy, title: "Combined Resource 1", duration: "10:00" }
  ];

  return (
    <div className="box-border w-full h-full p-2 sm:p-4 border-[1px] my-2 ml-2 sm:my-6 sm:ml-8 border-solid border-[#A4E6FF] lg:my-24 rounded-lg" style={{marginTop: 40}}>
      <Header />
      
      <div className='hidden sm:block w-full h-[1px] bg-[#A4E6FF] my-4'></div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4">
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-2">
          <div className="divide-y divide-gray-100">
            {chapters.map((chapter, index) => (
              <ChapterItem 
                key={index}
                chapter={chapter.title}
                duration={chapter.duration}
                isActive={chapter.isActive}
              />
            ))}
          </div>
        </div>
        </div>

        <div className='flex flex-col'>
          

          <Part 
            partNumber={1}
            title="Lorem ipsm dolor sit amet"
            duration="02:00:00"
            difficulty="Medium"
            copies={5}
            completion={45}
            isExpanded={true}
            progressLine={line}
            resources={part1Resources}
            
          />

          
          <Part 
            partNumber={2}
            title="Lorem ipsum dolor sit amet"
            duration="02:00:00"
            difficulty="Medium"
            copies={12}
            completion={20}
            isExpanded={false}
            progressLine={line_20}
          />
          
          <Part 
            partNumber={3}
            title="Lorem ipsum dolor sit amet"
            duration="02:00:00"
            difficulty="Medium"
            copies={12}
            completion={0}
            isExpanded={false}
            progressLine={line_0}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

