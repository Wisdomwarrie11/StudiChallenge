import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLaptopMedical } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto mb-12">
                <FaLaptopMedical className="text-5xl text-indigo-600 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Not just another webinar.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    The Locked-In Challenge is a structure, a system, and a community designed to 
                    pull the best version of your professional self out of hibernation. 
                    We don't just give you content; we give you a path to mastery.
                </p>
                <Link to="/about" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center justify-center gap-2">
                    Learn about our methodology <FaArrowRight size={14} />
                </Link>
            </div>
        </div>
      </section>
      
      {/* Mini CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-500 font-medium mb-4">Ready to commit?</p>
            <Link 
                to="/register" 
                className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
            >
                Secure Your Spot Now
            </Link>
        </div>
      </section>
    </>
  );
};

export default Home;