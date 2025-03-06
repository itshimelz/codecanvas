import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../constants';
import Button from "../components/Button";

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === parseInt(courseId));

    if (!course) {
        return (
            <div className="container mx-auto px-4 flex items-center justify-center pt-16">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-500">Course Not Found</h1>
                    <p className="mt-2 text-gray-400">The course you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 text-white pt-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <ol className="flex text-sm text-gray-400 space-x-2">
                    <li><a href="/" className="hover:text-[#F97316]">Home</a></li>
                    <li>›</li>
                    <li><a href="/courses" className="hover:text-[#F97316]">Courses</a></li>
                    <li>›</li>
                    <li className="text-gray-200">{course.title}</li>
                </ol>
            </nav>

            {/* Course Title and Description */}
            <section className="bg-[#202127] rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{course.title}</h2>
                <p className="text-gray-400 leading-relaxed">{course.description}</p>
            </section>

            {/* Course Details Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#202127] rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Course Information</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><strong>Instructor:</strong></li>
                        <li><strong>Duration:</strong></li>
                        <li><strong>Level:</strong></li>
                        <li><strong>Price:</strong></li>
                    </ul>
                </div>

                <div className="bg-[#202127] rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Enroll Now</h3>
                    <p className="text-gray-400 mb-4">Ready to start learning? Enroll in this course today!</p>
                    <Button to="/courses" variant="primary" width="w-48">Enroll</Button>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Downloadable Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                </div>
            </section>

            {/* Project Ideas Section */}
            <section>
                <h3 className="text-2xl font-semibold text-white mb-4">Project Ideas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;
