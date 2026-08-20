"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Get in Touch</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Contact Secretariat</h1>
        <p className="text-sm text-slate-500 mt-2">
          Have questions regarding hostel affiliation, student complaints, or association membership? Reach out to us.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold">Hostel Association Nepal</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We are open Sunday through Friday from 10:00 AM to 5:00 PM. For emergency student complaints or inquiries, please contact our helpline.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#38bdf8]">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <span>Bagbazar, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#38bdf8]">
                  <i className="fas fa-phone" />
                </div>
                <span>+977 1-4240000 / 9848050046</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#38bdf8]">
                  <i className="fas fa-envelope" />
                </div>
                <span>info@hean.org.np / contact@hean.org.np</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f4efe6] border border-[#214d3e]/15">
            <h4 className="text-sm font-bold text-[#214d3e]">Looking for NKD Boys Hostel directly?</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              NKD Boys Hostel is situated near Parliament Building Water Tank, Naya Baneshwor, Kathmandu. Phone: +977 984-8050046.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Send an Inquiry or Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Inquiry Topic
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0EA5E9] bg-white">
                <option>New Hostel Affiliation Application</option>
                <option>Student Complaint / Quality Issue</option>
                <option>General Information</option>
                <option>Certificate Verification</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Explain your inquiry in detail..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm shadow-md hover:bg-[#0284c7] transition cursor-pointer"
            >
              Submit Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              ✓ Thank you! Your message has been received by the HEAN Secretariat.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
