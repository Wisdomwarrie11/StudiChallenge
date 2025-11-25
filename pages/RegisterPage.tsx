import React, { useState } from "react";
import Logistics from "../components/Logistics";
import DisclaimerModal from "../components/DisclaimerModal";

const RegisterPage: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="pt-20">
       <div className="bg-slate-900 py-16 px-6 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Join the Next Cohort</h1>
            <p className="text-xl text-slate-400">
                Invest in your career. Transform your practice.
            </p>
      </div>
      
      <Logistics onOpenDisclaimer={() => setShowDisclaimer(true)} />
      
      <DisclaimerModal 
        isOpen={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />
    </div>
  );
};

export default RegisterPage;