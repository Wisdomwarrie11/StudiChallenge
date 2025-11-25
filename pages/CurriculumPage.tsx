import React from "react";
import Curriculum from "../components/Curriculum";

const CurriculumPage: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-indigo-600 py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">6 Weeks to Mastery</h1>
            <p className="text-xl text-indigo-100">
                A rigorous, structured breakdown of the modern radiographic landscape.
            </p>
        </div>
      </div>
      <Curriculum />
    </div>
  );
};

export default CurriculumPage;