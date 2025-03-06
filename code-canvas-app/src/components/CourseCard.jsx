import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, showDescription = false }) => {
  return (
    <div className="bg-[#202127] p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-95">
      <div className="flex flex-col items-start text-left space-y-4 h-full">
        {/* Icon */}
        <div className="p-4 bg-[#1B1B1F] rounded">
          {course.icon && <course.icon size={36} className="text-[#F97316]" />}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white leading-tight">
          {course.title}
        </h3>

        {/* Description - Conditionally Rendered */}
        {showDescription && course.description && (
          <p className="text-gray-400 text-sm line-clamp-3 overflow-hidden">
            {course.description}
          </p>
        )}

        {/* Button */}
        <Link
          to={`/courses/${course.id}`}
          className="text-[#F97316] hover:underline mt-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
