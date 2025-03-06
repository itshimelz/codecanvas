import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";

const HeroSection = () => {
    return (
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            < div className="lg:w-1/2 mb-8 lg:mb-0" >
                <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-20">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center lg:text-left tracking-wide">
                        CodeCanvas helps students
                        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                            {" "}
                            find their perfect project ideas
                        </span>
                    </h1>
                    <p className="mt-5 text-lg text-center lg:text-left text-neutral-500 max-w-4xl text-justify">
                        Empower your learning journey by discovering innovative project ideas across
                        various computer science courses. Whether you're a beginner or an advanced
                        learner, CodeCanvas makes it easy to find projects that match your skills
                        and interests.
                    </p>
                </div>
                <div className="flex space-x-4 mt-10 justify-center lg:justify-start">
                    <Button to="/courses" variant="primary" Icon={ArrowRight} width="w-48"> Explore Ideas</Button>
                    <Button to="/courses" variant="borderOnly">Learn More</Button>
                </div>
            </div>

            {/* Right Side: Illustration/Image */}
            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                <img
                    src="https://placehold.co/600x400/000000/FFFFFF/png"
                    alt="CodeCanvas Hero Illustration"
                    className="w-full max-w-md rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default HeroSection;