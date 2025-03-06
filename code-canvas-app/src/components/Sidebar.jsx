import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    language: true,
    projectType: true,
    courseLevel: true,
    difficulty: true,
    license: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-full md:w-64 bg-[#1B1B1F] p-4 space-y-4 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <FilterSection
        title="Programming Language"
        isOpen={expandedSections.language}
        onToggle={() => toggleSection("language")}
      >
        <div className="flex flex-wrap gap-2">
          <FilterTag name="Python" />
          <FilterTag name="JavaScript" />
          <FilterTag name="C++" />
          <FilterTag name="Java" />
          <FilterTag name="Swift" />
        </div>
      </FilterSection>

      <FilterSection
        title="Project Type"
        isOpen={expandedSections.projectType}
        onToggle={() => toggleSection("projectType")}
      >
        <div className="flex flex-wrap gap-2">
          <FilterTag name="Web Development" />
          <FilterTag name="AI/ML" />
          <FilterTag name="Cybersecurity" />
          <FilterTag name="IoT" />
          <FilterTag name="Data Science" />
        </div>
      </FilterSection>

      <FilterSection
        title="Course Level"
        isOpen={expandedSections.courseLevel}
        onToggle={() => toggleSection("courseLevel")}
      >
        <div className="flex flex-wrap gap-2">
          <FilterTag name="Beginner" />
          <FilterTag name="Intermediate" />
          <FilterTag name="Advanced" />
        </div>
      </FilterSection>

      <FilterSection
        title="Difficulty Level"
        isOpen={expandedSections.difficulty}
        onToggle={() => toggleSection("difficulty")}
      >
        <div className="flex flex-wrap gap-2">
          <FilterTag name="Easy" />
          <FilterTag name="Medium" />
          <FilterTag name="Hard" />
        </div>
      </FilterSection>

      <FilterSection
        title="License"
        isOpen={expandedSections.license}
        onToggle={() => toggleSection("license")}
      >
        <div className="flex flex-wrap gap-2">
          <FilterTag name="Free" />
          <FilterTag name="Paid" />
        </div>
      </FilterSection>
    </aside>
  );
};

const FilterSection = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-gray-700 pb-2">
    <button
      onClick={onToggle}
      className="flex justify-between w-full text-white font-medium text-sm py-2"
    >
      {title}
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
    {isOpen && <div className="mt-2">{children}</div>}
  </div>
);

const FilterTag = ({ name }) => (
  <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-600">
    {name}
  </span>
);

export default Sidebar;
