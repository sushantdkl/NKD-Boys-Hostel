"use client";

import React, { useState } from "react";

const allNotices = [
  {
    id: 1,
    title: "HEAN Annual General Meeting 2026 Scheduled for Shrawan 2",
    date: "July 18, 2026",
    category: "General Notice",
    desc: "All member hostel owners are cordially requested to attend the 14th AGM of HEAN at Nepal Academy Hall, Kamaladi, Kathmandu.",
    content: "The meeting will review the annual audit report, elect executive members, and discuss student fee guidelines for the upcoming academic session.",
  },
  {
    id: 2,
    title: "Mandatory Quality & Hygiene Checklist for All Affiliated Hostels",
    date: "July 10, 2026",
    category: "Guideline",
    desc: "Directives regarding regular kitchen sanitization, water testing certificates, and nutritionist-certified menu plans.",
    content: "HEAN inspection teams will conduct random sampling of water filters and kitchen hygiene across Valley hostels starting next month.",
  },
  {
    id: 3,
    title: "Notice regarding renewal of Membership Registration for Fiscal 2083/84",
    date: "June 25, 2026",
    category: "Membership",
    desc: "All registered private hostels must renew their accreditation before the end of Ashadh to remain active on the official HEAN directory.",
    content: "Renewal fees can be paid via eSewa, Khalti, or direct bank transfer to HEAN Central account.",
  },
  {
    id: 4,
    title: "Emergency Dengue Prevention & Mosquito Fogging Directives",
    date: "June 01, 2026",
    category: "Health & Safety",
    desc: "Mandatory preventive fogging and installation of window wire mesh across all student dormitories.",
    content: "Hostels are strictly instructed to clear standing water from rooftops and air-conditioning units to safeguard resident health.",
  },
];

export default function PublicNoticesPage() {
  const [selectedNotice, setSelectedNotice] = useState(allNotices[0]);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Notice Board</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Official Circulars & Announcements</h1>
        <p className="text-sm text-slate-500 mt-2">
          Stay updated with policy updates, association notices, and safety guidelines.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Notice List */}
        <div className="lg:col-span-1 space-y-4">
          {allNotices.map((n) => (
            <div
              key={n.id}
              onClick={() => setSelectedNotice(n)}
              className={`p-5 rounded-2xl border transition duration-200 cursor-pointer ${
                selectedNotice.id === n.id
                  ? "bg-[#0EA5E9]/10 border-[#0EA5E9] shadow-sm"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex justify-between items-center text-[11px] text-slate-400 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">{n.category}</span>
                <span>{n.date}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">{n.title}</h3>
            </div>
          ))}
        </div>

        {/* Notice Detail Card */}
        <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <span className="px-3 py-1 rounded-full bg-[#0EA5E9]/15 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
              {selectedNotice.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">Published: {selectedNotice.date}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {selectedNotice.title}
          </h2>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 italic">
            &quot;{selectedNotice.desc}&quot;
          </div>

          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <p>{selectedNotice.content}</p>
            <p>
              For further queries or clarifications, please contact the HEAN Secretariat at Bagbazar, Kathmandu or reach out via official phone at +977 1-4240000.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex gap-4">
            <button
              onClick={() => alert("Downloading notice document...")}
              className="px-6 py-2.5 rounded-full bg-[#0EA5E9] text-white text-xs font-bold shadow-md hover:bg-[#0284c7] transition cursor-pointer"
            >
              Download PDF Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
