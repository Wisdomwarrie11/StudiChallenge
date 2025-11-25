import React from "react";
import Features from "../components/Features";
import Benefits from "../components/Benefits";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About The Challenge</h1>
            <p className="text-xl text-slate-600">
                StudiRad was born from a simple observation: most radiographers stop growing 
                academically after university. We are here to change that.
            </p>
        </div>
      </div>
      <Features />
      <Benefits />
    </div>
  );
};

export default About;