import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CourseGrid from '../components/CourseGrid';
import { coursesData } from '../constants';

const CoursesPage = () => {
  const [filters, setFilters] = useState({
    programmingLanguages: [],
    projectTypes: [],
    courseLevels: [],
    difficultyLevels: [],
    licenseTypes: [],
  });

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const filteredCourses = coursesData.filter((course) => {
    return (
      (filters.programmingLanguages.length === 0 || filters.programmingLanguages.includes(course.language)) &&
      (filters.projectTypes.length === 0 || filters.projectTypes.includes(course.type)) &&
      (filters.courseLevels.length === 0 || filters.courseLevels.includes(course.courseLevel)) &&
      (filters.difficultyLevels.length === 0 || filters.difficultyLevels.includes(course.difficulty)) &&
      (filters.licenseTypes.length === 0 || filters.licenseTypes.includes(course.license))
    );
  });

  return (
    <div className="flex">
      {/* Sidebar with fixed width */}
      <div className="w-64 bg-[#1B1B1F] text-white p-4">
        <Sidebar onFilterChange={handleFilterChange} filters={filters} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <CourseGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default CoursesPage;
