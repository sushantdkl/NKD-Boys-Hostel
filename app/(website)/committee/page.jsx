import React from "react";

const committeeMembers = [
  {
    name: "Mr. Bikash Adhikari",
    role: "President",
    hostel: "Siddhartha Boys Hostel",
    phone: "+977 9851000001",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    message: "Serving the hostel fraternity with integrity, high standards, and unified advocacy.",
  },
  {
    name: "Ms. Sunita Shrestha",
    role: "Vice President",
    hostel: "Suchana Girls Hostel",
    phone: "+977 9851000002",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    message: "Committed to women-student security, clean kitchens, and safe residential campuses.",
  },
  {
    name: "Mr. Rajan Karki",
    role: "General Secretary",
    hostel: "Kathmandu Valley Hostel",
    phone: "+977 9851000003",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    message: "Managing association records, government liaison, and annual membership services.",
  },
  {
    name: "Mr. Suresh Thapa",
    role: "Treasurer",
    hostel: "Himalayan Youth Hostel",
    phone: "+977 9851000004",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    message: "Ensuring transparent fiscal management and welfare funds for affiliated hostels.",
  },
  {
    name: "Ms. Rojina Gautam",
    role: "Executive Member",
    hostel: "NKD Boys Hostel",
    phone: "+977 984-8050046",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    message: "Advocating for premium hostel facilities, student nutrition, and peaceful study environments in Baneshwor.",
  },
];

export default function PublicCommitteePage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">Leadership</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Central Executive Committee</h1>
        <p className="text-sm text-slate-500 mt-2">
          Elected representatives of the Hostel Association Nepal guiding the national hostel community.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {committeeMembers.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-64 w-full overflow-hidden relative">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-[#0EA5E9] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                  {m.role}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
                <p className="text-xs text-[#0EA5E9] font-semibold mt-0.5">{m.hostel}</p>
                <p className="text-xs text-slate-500 italic mt-3 leading-relaxed">
                  &quot;{m.message}&quot;
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-semibold">
                <i className="fas fa-phone text-[#0EA5E9]" /> {m.phone}
              </span>
              <span className="text-slate-400 font-medium">Tenure: 2024-2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
