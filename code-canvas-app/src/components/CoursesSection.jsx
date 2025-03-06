import React from "react";
import { coursesData } from '../constants';
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import CourseCard from './CourseCard';


const Courses = () => {
    return (
        <div className="container mx-auto px-4 pt-16 pb-24">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Explore Our Courses</h2>
                <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
                    Discover a wide range of computer science courses tailored to help you grow
                    your skills and achieve your goals.
                </p>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.slice(0, 6).map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
            {/* View All Button */}
            <div className="mt-12 text-center">
                <Button to="/courses" variant="primary" width="w-56 block mx-auto" Icon={ArrowRight}>View all courses</Button>
            </div>
        </div>
    );
};

export default Courses;