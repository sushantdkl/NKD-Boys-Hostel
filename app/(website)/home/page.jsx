"use client";

import React, { useState } from "react";
import Link from "next/link";

const featuredHostels = [
  {
    id: 1,
    name: "NKD Boys Hostel",
    type: "Boys",
    location: "New Baneshwor, Kathmandu",
    price: "NPR 12,000+",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    rating: "4.9",
    tag: "Featured Member",
  },
  {
    id: 2,
    name: "Suchana Girls Hostel",
    type: "Girls",
    location: "Putalisadak, Kathmandu",
    price: "NPR 13,500+",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    rating: "4.8",
    tag: "Verified",
  },
  {
    id: 3,
    name: "Siddhartha Boys Hostel",
    type: "Boys",
    location: "Kupondole, Lalitpur",
    price: "NPR 11,500+",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    rating: "4.7",
    tag: "Verified",
  },
];

const latestNotices = [
  {
    id: 1,
    title: "HEAN Annual General Meeting 2026 Scheduled for Shrawan 2",
    date: "July 18, 2026",
    category: "General Notice",
  },
  {
    id: 2,
    title: "Mandatory Quality & Hygiene Checklist for All Affiliated Hostels",
    date: "July 10, 2026",
    category: "Guideline",
  },
  {
    id: 3,
    title: "Notice regarding renewal of Membership Registration for 2083/84",
    date: "June 25, 2026",
    category: "Membership",
  },
];

export default function WebsiteHomePage() {
  const [searchDistrict, setSearchDistrict] = useState("all");
  const [searchType, setSearchType] = useState("all");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0b2b4a] to-slate-900 text-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.2),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
              <span>●</span> Official Portal of Hostel Association Nepal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Find Verified & Safe Hostels Across Nepal.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              HEAN unites over 536+ accredited private hostels, ensuring hygienic meals, high security, peaceful study environments, and student well-being.
            </p>

            {/* Quick Filter Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col sm:flex-row gap-3">
              <select
                value={searchDistrict}
                onChange={(e) => setSearchDistrict(e.target.value)}
                className="flex-1 bg-slate-900/90 text-white px-4 py-3 rounded-xl border border-white/10 text-sm outline-none focus:border-[#0EA5E9]"
              >
                <option value="all">All Districts (Kathmandu Valley)</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="bhaktapur">Bhaktapur</option>
              </select>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="flex-1 bg-slate-900/90 text-white px-4 py-3 rounded-xl border border-white/10 text-sm outline-none focus:border-[#0EA5E9]"
              >
                <option value="all">All Types</option>
                <option value="boys">Boys Hostel</option>
                <option value="girls">Girls Hostel</option>
                <option value="coed">Co-Ed Hostel</option>
              </select>
              <Link
                href="/hostels"
                className="px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm text-center shadow-lg hover:bg-[#0284c7] transition"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Hero Stats Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center">
              <div className="text-4xl sm:text-5xl font-black text-[#38bdf8]">536+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-2 font-semibold">Affiliated Hostels</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center">
              <div className="text-4xl sm:text-5xl font-black text-[#22c55e]">12,800+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-2 font-semibold">Student Capacity</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center">
              <div className="text-4xl sm:text-5xl font-black text-[#F59E0B]">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-2 font-semibold">Quality Verified</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center">
              <div className="text-4xl sm:text-5xl font-black text-[#EC4899]">24/7</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-2 font-semibold">Student Safety</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hostels Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Accredited Hostels</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Featured Hostels in Nepal</h2>
          </div>
          <Link href="/hostels" className="text-sm font-bold text-[#0EA5E9] hover:underline">
            View All 536+ Hostels →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredHostels.map((h) => (
            <div
              key={h.id}
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    ★ {h.rating}
                  </span>
                  <span className="absolute bottom-3 left-3 bg-[#0EA5E9] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {h.type} Hostel
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{h.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <i className="fas fa-map-marker-alt text-[#0EA5E9]" /> {h.location}
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-4">
                    Starting {h.price} <span className="text-xs font-normal text-slate-500">/ month</span>
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                {h.id === 1 ? (
                  <Link
                    href="/"
                    className="block w-full text-center py-2.5 rounded-xl bg-[#214d3e] text-white text-xs font-bold hover:bg-[#183b30] transition"
                  >
                    View Official NKD Page
                  </Link>
                ) : (
                  <Link
                    href="/hostels"
                    className="block w-full text-center py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notices & Announcements Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Notice Board</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Official Circulars & News</h2>
            </div>
            <Link href="/notices" className="text-sm font-bold text-[#0EA5E9] hover:underline">
              All Notices →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestNotices.map((n) => (
              <div key={n.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">{n.category}</span>
                    <span>{n.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{n.title}</h3>
                </div>
                <Link href="/notices" className="mt-6 text-xs font-bold text-[#0EA5E9] hover:underline">
                  Read Full Notice →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-[#0b2b4a] to-[#0EA5E9] text-white text-center shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Are You a Hostel Owner in Nepal?</h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
            Join the Hostel Association Nepal network. Get accredited, receive official certification, and connect with thousands of students.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-[#0b2b4a] font-bold text-sm shadow-lg hover:bg-slate-100 transition"
            >
              Apply for Affiliation
            </Link>
            <Link
              href="/admin"
              className="px-8 py-3.5 rounded-full bg-black/30 border border-white/30 text-white font-bold text-sm hover:bg-black/50 transition"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
