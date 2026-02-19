import React, { useRef, useEffect, useState } from 'react';
import { Course } from '../types';
import { Button } from './Button';
import { Clock, BarChart, Tag, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`h-full transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="bg-[#2A2A2A] rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-mainra-orange transition-colors duration-300 flex flex-col h-full group">
        <div className="relative overflow-hidden h-48">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-mainra-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {course.audience}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mainra-orange transition-colors">
            {course.title}
          </h3>
          <p className="text-mainra-grey text-sm mb-4 line-clamp-3 flex-grow">
            {course.description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-mainra-blue" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart size={14} className="text-mainra-blue" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-[#333] text-gray-300 px-2 py-1 rounded border border-gray-700">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-700">
            <span className="text-lg font-bold text-white">{course.price}</span>
            <Button variant="outline" className="!px-4 !py-1.5 text-sm !border-gray-600 !text-gray-300 hover:!border-mainra-orange hover:!text-white">
              Info Detail <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};