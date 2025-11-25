import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Curriculum from "./components/Curriculum";
import Logistics from "./components/Logistics";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";
import About from "./pages/About"; // example
import Contact from "./pages/Contact"; // example

const App: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Benefits />
                <Curriculum />
                <Logistics onOpenDisclaimer={() => setShowDisclaimer(true)} />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <DisclaimerModal 
          isOpen={showDisclaimer} 
          onClose={() => setShowDisclaimer(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
