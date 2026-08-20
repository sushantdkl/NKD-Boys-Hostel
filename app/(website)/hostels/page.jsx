"use client";

import React, { useState } from "react";
import Link from "next/link";

const allHostels = [
  {
    id: 1,
    name: "NKD Boys Hostel",
    type: "Boys",
    district: "Kathmandu",
    area: "New Baneshwor",
    price: "NPR 12,000",
    beds: "32",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    phone: "+977 984-8050046",
    hasCustomSite: true,
  },
  {
    id: 2,
    name: "Suchana Girls Hostel",
    type: "Girls",
    district: "Kathmandu",
    area: "Putalisadak",
    price: "NPR 13,500",
    beds: "40",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    phone: "9851000000",
  },
  {
    id: 3,
    name: "Siddhartha Boys Hostel",
    type: "Boys",
    district: "Lalitpur",
    area: "Kupondole",
    price: "NPR 11,500",
    beds: "24",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    phone: "9841223344",
  },
  {
    id: 4,
    name: "Peaceful Co-ed Hostel",
    type: "Co-Ed",
    district: "Bhaktapur",
    area: "Suryabinayak",
    price: "NPR 10,000",
    beds: "50",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80",
    phone: "9841556677",
  },
  {
    id: 5,
    name: "Himalayan Youth Hostel",
    type: "Boys",
    district: "Kathmandu",
    area: "Koteshwor",
    price: "NPR 12,500",
    beds: "28",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    phone: "9849112233",
  },
  {
    id: 6,
    name: "Green Valley Girls Hostel",
    type: "Girls",
    district: "Kathmandu",
    area: "Shankhamul",
    price: "NPR 14,000",
    beds: "36",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
    phone: "9860445566",
  },
];

export default function HostelsDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const filtered = allHostels.filter((h) => {
    const matchSearch =
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = selectedType === "all" || h.type.toLowerCase() === selectedType.toLowerCase();
    const matchDistrict =
      selectedDistrict === "all" || h.district.toLowerCase() === selectedDistrict.toLowerCase();
    return matchSearch && matchType && matchDistrict;
  });

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Hostel Directory</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Accredited Hostels in Nepal</h1>
        <p className="text-sm text-slate-500 mt-2">
          Explore certified student accommodations with verified fees, locations, and facilities.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name or area (e.g. Baneshwor)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
        >
          <option value="all">All Hostel Types</option>
          <option value="boys">Boys Hostel</option>
          <option value="girls">Girls Hostel</option>
          <option value="co-ed">Co-Ed Hostel</option>
        </select>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm outline-none focus:border-[#0EA5E9]"
        >
          <option value="all">All Districts</option>
          <option value="kathmandu">Kathmandu</option>
          <option value="lalitpur">Lalitpur</option>
          <option value="bhaktapur">Bhaktapur</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="text-xs font-semibold text-slate-500 mb-6">
        Showing {filtered.length} of {allHostels.length} verified hostels
      </div>

      {/* Hostels Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map((h) => (
          <div
            key={h.id}
            className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 w-full overflow-hidden">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  ★ {h.rating}
                </span>
                <span
                  className={`absolute bottom-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full ${
                    h.type === "Boys" ? "bg-[#3B82F6]" : h.type === "Girls" ? "bg-[#EC4899]" : "bg-[#8B5CF6]"
                  }`}
                >
                  {h.type} Hostel
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{h.name}</h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <i className="fas fa-map-marker-alt text-[#0EA5E9]" /> {h.area}, {h.district}
                </p>
                <div className="mt-4 flex justify-between items-center text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <span>Capacity: <strong>{h.beds} beds</strong></span>
                  <span className="font-bold text-slate-900 text-sm">Starts {h.price}</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 space-y-2">
              {h.hasCustomSite ? (
                <Link
                  href="/"
                  className="block w-full text-center py-2.5 rounded-xl bg-[#214d3e] text-white text-xs font-bold hover:bg-[#183b30] transition"
                >
                  Visit NKD Hostel Page
                </Link>
              ) : (
                <a
                  href={`tel:${h.phone}`}
                  className="block w-full text-center py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition"
                >
                  Call: {h.phone}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
