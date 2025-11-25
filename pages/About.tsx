import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">About Us</h1>
      <p className="text-lg text-slate-700 mb-6">
        Welcome to StudiRad Locked-In Challenge! We are passionate about helping students stay focused and achieve their study goals.
      </p>
      <p className="text-lg text-slate-700">
        Our platform is designed to make learning fun, efficient, and rewarding. With personalized dashboards, focus tracking, and micro-goals, you can optimize your study sessions and see real results.
      </p>
    </div>
  );
};

export default About;
