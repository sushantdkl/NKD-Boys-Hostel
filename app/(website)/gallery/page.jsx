"use client";

import React, { useState } from "react";

const galleryPhotos = [
  { id: 1, title: "Modern Study Room Setup", tag: "Rooms", url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Hygienic Dining Hall", tag: "Dining", url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Spacious Bed Sharing", tag: "Rooms", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "HEAN Annual Meet 2026", tag: "Events", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Quiet Library & Study Space", tag: "Study", url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Clean Living Environment", tag: "Rooms", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
  { id: 7, title: "Hostel Inspection Workshop", tag: "Events", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
  { id: 8, title: "Community Lounge", tag: "Common", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
];

export default function PublicGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Rooms", "Dining", "Study", "Events", "Common"];

  const filtered = activeFilter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.tag === activeFilter);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Photo Gallery</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Life at HEAN Affiliated Hostels</h1>
        <p className="text-sm text-slate-500 mt-2">
          Glimpses of hostel facilities, hygienic dining, study lounges, and community events.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveFilter(c)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
              activeFilter === c
                ? "bg-[#0EA5E9] text-white shadow-md shadow-[#0EA5E9]/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 h-64"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#38bdf8]">{item.tag}</span>
              <p className="text-sm font-bold text-white mt-1 leading-snug">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
