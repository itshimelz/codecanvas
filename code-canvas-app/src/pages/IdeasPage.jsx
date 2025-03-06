import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import IdeaCard from '../components/IdeaCard';
import { projectIdeas } from '../constants';

const IdeasPage = () => {
  const [filters, setFilters] = useState({
    programmingLanguages: [],
    projectTypes: [],
    courseLevels: [],
    difficultyLevels: [],
    licenseTypes: [],
  });

  // State to handle mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const filteredIdeas = projectIdeas.filter((idea) => {
    return (
      (filters.programmingLanguages.length === 0 || filters.programmingLanguages.includes(idea.language)) &&
      (filters.projectTypes.length === 0 || filters.projectTypes.includes(idea.type)) &&
      (filters.courseLevels.length === 0 || filters.courseLevels.includes(idea.courseLevel)) &&
      (filters.difficultyLevels.length === 0 || filters.difficultyLevels.includes(idea.difficulty)) &&
      (filters.licenseTypes.length === 0 || filters.licenseTypes.includes(idea.license))
    );
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Header with Toggle Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-[#1B1B1F] text-white">
        <h1 className="text-lg font-bold">Filters</h1>
        <button onClick={() => setIsSidebarOpen(true)}>
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="absolute left-0 top-0 w-64 h-full bg-[#1B1B1F] p-4 text-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                {/* Close Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Sidebar onFilterChange={handleFilterChange} filters={filters} />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-[#1B1B1F] text-white p-4">
        <Sidebar onFilterChange={handleFilterChange} filters={filters} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredIdeas.map((idea) => (
            <IdeaCard
              key={idea.id}
              title={idea.title}
              description={idea.description}
              tags={idea.tags}
              difficulty={idea.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;
