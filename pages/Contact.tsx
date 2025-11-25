import React from "react";
import { FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h1>
        <p className="text-lg text-slate-600 mb-12">
            Have questions about the challenge, payments, or just want to say hi? 
            We'd love to hear from you.
        </p>

        <div className="grid gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-indigo-600">
                    <FaEnvelope size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Email Support</h3>
                    <p className="text-slate-600 mb-2">For general inquiries and payment issues.</p>
                    <a href="mailto:support@studirad.com" className="text-indigo-600 font-medium hover:underline">
                        support@studirad.com
                    </a>
                </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-green-600">
                    <FaWhatsapp size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">WhatsApp Community</h3>
                    <p className="text-slate-600 mb-2">Join our open community for updates.</p>
                    <a href="#" className="text-green-600 font-medium hover:underline">
                        Join Group
                    </a>
                </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-blue-400">
                    <FaTwitter size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Twitter / X</h3>
                    <p className="text-slate-600 mb-2">Follow us for daily tips and announcements.</p>
                    <a href="#" className="text-blue-500 font-medium hover:underline">
                        @StudiRad
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;