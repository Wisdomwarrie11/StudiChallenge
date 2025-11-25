import React, { useState } from "react";
import { FaCalendarAlt, FaMoneyBillWave, FaExclamationCircle, FaLock, FaCheckCircle } from "react-icons/fa";
import { usePaystackPayment } from "react-paystack";
import { ImportantDate } from "../types";
import axios from "axios";

interface LogisticsProps {
  onOpenDisclaimer: () => void;
}

const Logistics: React.FC<LogisticsProps> = ({ onOpenDisclaimer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [referralSource, setReferralSource] = useState("");
  
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const importantDates: ImportantDate[] = [
    { label: "Registration Closes", date: "Jan 31, 2026", isHighlight: true },
    { label: "Onboarding Session", date: "Feb 04, 2026" },
    { label: "1st Assessment", date: "Feb 13, 2026" },
    { label: "2nd Assessment", date: "Feb 20, 2026" },
    { label: "3rd Assessment", date: "Feb 27, 2026" },
    { label: "4th Assessment", date: "Mar 06, 2026" },
    { label: "5th Assessment", date: "Mar 13, 2026" },
    { label: "Grand Assessment", date: "Mar 20, 2026", isHighlight: true },
  ];

  // Paystack Config
  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: 500000, // Amount in kobo (5000 * 100)
    publicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // REPLACE WITH YOUR PUBLIC KEY
    metadata: {
      name, // Standard field
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: name
        },
        {
          display_name: "Qualification",
          variable_name: "qualification",
          value: qualification
        },
        {
          display_name: "Referral Source",
          variable_name: "referral_source",
          value: referralSource
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    setLoading(true);
    console.log("Payment Reference sent from Paystack:", reference);
    
    // In a real app, you would verify this with your backend
    // await axios.post('http://localhost:5000/verify-payment/' + reference.reference)
    
    // Simulating backend verification delay
    setTimeout(() => {
        setLoading(false);
        setPaymentSuccess(true);
        // Reset form
        setName("");
        setEmail("");
        setQualification("");
        setReferralSource("");
    }, 1500);
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && qualification && referralSource) {
        initializePayment(onSuccess, onClose);
    }
  };

  const isFormValid = email && name && qualification && referralSource;

  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Timeline Section */}
          <div>
            <div className="mb-10">
                <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-3">Schedule</h2>
                <h3 className="text-3xl font-bold text-slate-900">Important Dates</h3>
                <p className="mt-2 text-slate-600">Mark your calendar for these key milestones.</p>
            </div>
            
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-8 py-2">
              {importantDates.map((d, i) => (
                <div key={i} className="relative group">
                  <div className={`absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white transition-colors duration-300 ${d.isHighlight ? 'bg-indigo-600 ring-4 ring-indigo-100' : 'bg-slate-300 group-hover:bg-indigo-400'}`}></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <span className={`font-semibold ${d.isHighlight ? 'text-indigo-900' : 'text-slate-700'}`}>{d.label}</span>
                    <span className={`text-sm font-mono ${d.isHighlight ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>{d.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration / Pricing Card */}
          <div id="register" className="lg:mt-12">
            <div className="sticky top-24">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                    
                    {paymentSuccess ? (
                        <div className="relative z-10 text-center py-12 animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg shadow-green-500/30">
                                <FaCheckCircle />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Registration Complete!</h3>
                            <p className="text-slate-300 mb-6">Welcome to the cohort. A confirmation email has been sent.</p>
                            <button 
                                onClick={() => setPaymentSuccess(false)}
                                className="text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                            >
                                Register another person
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold mb-2 relative z-10">Secure Your Spot</h3>
                            <p className="text-slate-400 mb-8 relative z-10">Join the next cohort of top-tier radiographers.</p>

                            <div className="flex items-baseline gap-2 mb-8 relative z-10">
                                <span className="text-5xl font-bold text-white">₦5,000</span>
                                <span className="text-slate-400">/ person</span>
                            </div>

                            <form onSubmit={handlePayment} className="relative z-10 space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase font-bold text-slate-500 mb-1">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        required
                                        placeholder="John Doe" 
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase font-bold text-slate-500 mb-1">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        required
                                        placeholder="john@example.com" 
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* Qualification Select */}
                                <div>
                                    <label htmlFor="qualification" className="block text-xs uppercase font-bold text-slate-500 mb-1">
                                        Educational Qualification
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="qualification"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                                            value={qualification}
                                            onChange={(e) => setQualification(e.target.value)}
                                        >
                                            <option value="" disabled>Select your status</option>
                                            <option value="Radiographer">Radiographer</option>
                                            <option value="Pre-intern">Pre-intern</option>
                                            <option value="Intern">Intern</option>
                                            <option value="Student">Student</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Referral Source Select */}
                                <div>
                                    <label htmlFor="referral" className="block text-xs uppercase font-bold text-slate-500 mb-1">
                                        How did you hear about us?
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="referral"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                                            value={referralSource}
                                            onChange={(e) => setReferralSource(e.target.value)}
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="LinkedIn">LinkedIn</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Twitter/X">Twitter / X</option>
                                            <option value="Colleague/Friend">Colleague / Friend</option>
                                            <option value="WhatsApp Group">WhatsApp Group</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary & Button */}
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                                        <FaMoneyBillWave className="text-indigo-400"/>
                                        <span>One-time secure payment via Paystack</span>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={loading || !isFormValid}
                                        className={`w-full py-4 bg-indigo-600 text-white text-center font-bold rounded-xl shadow-lg transition-all transform flex items-center justify-center gap-2
                                            ${loading || !isFormValid ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-500 hover:scale-[1.02]'}
                                        `}
                                    >
                                        {loading ? 'Processing...' : (
                                            <>
                                                <FaLock size={14} /> Pay Now
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    <button
                        onClick={onOpenDisclaimer}
                        className="w-full mt-6 flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm transition-colors relative z-10"
                    >
                        <FaExclamationCircle />
                        View Important Disclaimer
                    </button>
                </div>

                <div className="mt-6 text-center text-slate-500 text-sm">
                    <p>Limited slots available for quality assurance.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logistics;