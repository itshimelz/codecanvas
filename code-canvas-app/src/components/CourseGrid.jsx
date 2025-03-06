import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} showDescription={true} />
      ))}
    </div>
  );
};

export default CourseGrid;