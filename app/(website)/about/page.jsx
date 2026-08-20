import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">About Us</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Hostel Association Nepal (HEAN)
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          The unified national organization representing private student hostels, fostering standard accommodations, hygiene, and security across Nepal.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 leading-tight">
            Elevating the Standards of Student Accommodation Since Inception.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Hostel Association Nepal was established to organize, standardize, and monitor the rapidly growing hostel sector in Kathmandu Valley and major educational hubs across the country.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We work closely with local government bodies, education institutions, and parents to ensure that every affiliated hostel provides hygienic food, round-the-clock water, safety measures, and a nurturing family environment.
          </p>
          <div className="pt-4 flex gap-4">
            <Link
              href="/committee"
              className="px-6 py-3 rounded-full bg-[#0EA5E9] text-white font-bold text-xs shadow-md hover:bg-[#0284c7] transition"
            >
              Meet Committee
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
            >
              Contact Office
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-4xl font-extrabold text-[#0EA5E9]">536+</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-bold mt-2">Member Hostels</div>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-4xl font-extrabold text-[#22c55e]">3</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-bold mt-2">Valley Districts</div>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-4xl font-extrabold text-[#8B5CF6]">12k+</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-bold mt-2">Students Housed</div>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-4xl font-extrabold text-[#F59E0B]">100%</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-bold mt-2">Safety Monitored</div>
          </div>
        </div>
      </div>

      {/* Core Objectives */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Key Association Pillars</h2>
            <p className="text-xs text-slate-500 mt-2">How HEAN supports both hostel owners and students.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-shield-alt",
                title: "Safety & Security Audits",
                desc: "Regular inspections of CCTV coverage, fire safety equipment, and emergency exit routes in all hostels.",
              },
              {
                icon: "fa-utensils",
                title: "Food & Water Quality",
                desc: "Strict adherence to hygiene norms, clean water purification systems, and nutritious weekly meal plans.",
              },
              {
                icon: "fa-handshake",
                title: "Owner Support & Training",
                desc: "Workshops for hostel owners on student counseling, conflict resolution, and modern facility management.",
              },
            ].map((p) => (
              <div key={p.title} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center text-xl mb-4">
                  <i className={`fas ${p.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
