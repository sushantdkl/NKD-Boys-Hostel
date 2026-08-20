"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LuxuryHostelPage() {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const canvasRef = useRef(null);

  // Canvas animated particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080c10] text-[#f0ece4] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#d4a843] selection:text-black">
      {/* Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[9999] bg-[#1aa896] text-white px-6 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-400 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {toastMsg}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[900] h-[70px] flex items-center justify-between px-[5vw] bg-[#080c10]/80 backdrop-blur-xl border-b border-[#d4a843]/15">
        <Link href="/" className="font-['Playfair_Display',serif] text-2xl font-black text-[#d4a843] tracking-tight">
          NKD <span className="text-[#f0ece4]">Boys Hostel</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#7a8492]">
          <li>
            <button onClick={() => scrollTo("hero")} className="hover:text-[#f0c96a] transition">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("about")} className="hover:text-[#f0c96a] transition">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("rooms")} className="hover:text-[#f0c96a] transition">
              Rooms
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("facilities")} className="hover:text-[#f0c96a] transition">
              Facilities
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("reviews")} className="hover:text-[#f0c96a] transition">
              Reviews
            </button>
          </li>
          <li>
            <Link href="/" className="hover:text-[#f0c96a] transition">
              Light Version
            </Link>
          </li>
          <li>
            <Link href="/home" className="hover:text-[#f0c96a] transition">
              HEAN Network
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4a843] to-[#f0c96a] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4a843]/20 hover:-translate-y-0.5 transition cursor-pointer"
            >
              Inquire Now
            </button>
          </li>
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#f0ece4]"
          onClick={() => setMobNavOpen(!mobNavOpen)}
        >
          <span className="w-6 h-0.5 bg-current rounded"></span>
          <span className="w-6 h-0.5 bg-current rounded"></span>
          <span className="w-6 h-0.5 bg-current rounded"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobNavOpen && (
        <div className="fixed inset-x-0 top-[70px] z-[899] bg-[#080c10]/95 backdrop-blur-2xl p-6 flex flex-col gap-4 border-b border-[#d4a843]/15 md:hidden">
          <button onClick={() => scrollTo("hero")} className="text-left py-2 text-lg font-semibold text-[#7a8492]">
            Home
          </button>
          <button onClick={() => scrollTo("about")} className="text-left py-2 text-lg font-semibold text-[#7a8492]">
            About
          </button>
          <button onClick={() => scrollTo("rooms")} className="text-left py-2 text-lg font-semibold text-[#7a8492]">
            Rooms
          </button>
          <button onClick={() => scrollTo("facilities")} className="text-left py-2 text-lg font-semibold text-[#7a8492]">
            Facilities
          </button>
          <button onClick={() => scrollTo("reviews")} className="text-left py-2 text-lg font-semibold text-[#7a8492]">
            Reviews
          </button>
          <button onClick={() => scrollTo("contact")} className="text-left py-2 text-lg font-semibold text-[#d4a843]">
            Book a Seat
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-[5vw] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(212,168,67,0.18)_0%,transparent_60%),radial-gradient(ellipse_70%_60%_at_80%_60%,rgba(26,168,150,0.14)_0%,transparent_55%),linear-gradient(170deg,#060a0d_0%,#0b1318_50%,#071210_100%)] z-0" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#d4a843]/10 border border-[#d4a843]/30 rounded-full text-xs font-bold uppercase tracking-widest text-[#f0c96a]">
            <span className="w-2 h-2 rounded-full bg-[#f0c96a] animate-ping" />
            Kathmandu&apos;s Premium Student Living
          </div>

          <h1 className="font-['Playfair_Display',serif] text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            More Than A Room. <br />
            <em className="italic bg-gradient-to-r from-[#a07825] via-[#d4a843] to-[#ffe09a] bg-clip-text text-transparent">
              A Second Home.
            </em>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#f0ece4]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Located in Naya Baneshwor, Kathmandu. Experience hygienic meals, blazing 5G WiFi, 24/7 security, peaceful study environment, and a community that feels like family.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a843] to-[#f0c96a] text-black font-bold text-base shadow-xl shadow-[#d4a843]/20 hover:-translate-y-1 transition cursor-pointer"
            >
              Book Room Tour
            </button>
            <button
              onClick={() => scrollTo("rooms")}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-base hover:border-[#d4a843] hover:text-[#f0c96a] transition"
            >
              Explore Rates & Rooms
            </button>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 bg-white/[0.03] border border-[#d4a843]/15 rounded-3xl overflow-hidden backdrop-blur-md">
            {[
              ["4+", "Years Operating"],
              ["100%", "Hygienic Home Food"],
              ["5G", "High-Speed WiFi"],
              ["NPR 12k", "Starting Rate"],
            ].map(([num, label]) => (
              <div key={label} className="p-6 text-center border-r last:border-r-0 border-[#d4a843]/15">
                <div className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-black text-[#d4a843]">
                  {num}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#7a8492] mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-[5vw] bg-[#0e1318]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-[#d4a843]/20 bg-gradient-to-br from-[#1a2a1a] via-[#0d1a1a] to-[#1a1500] p-12 text-center shadow-2xl">
            <div className="font-['Playfair_Display',serif] text-6xl font-black text-[#d4a843]">NKD</div>
            <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-[#f0c96a]">
              हजुरहरुको दोस्रो घर
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-xs text-[#7a8492] uppercase">Water</p>
                <p className="text-sm font-bold text-white mt-1">24/7 Hot & Cold</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-xs text-[#7a8492] uppercase">Catering</p>
                <p className="text-sm font-bold text-white mt-1">3x Homely Meals</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4a843] mb-4">
              About NKD Hostel
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Designed For Students Who Deserve Peace & Excellence.
            </h2>
            <p className="mt-6 text-base text-[#f0ece4]/60 leading-relaxed font-light">
              NKD Boys Hostel was founded with one clear mission: to eliminate the common pain points of student accommodation in Kathmandu. We prioritize clean, well-ventilated rooms, fresh ingredients, regular maintenance, and disciplined management.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Open from All 4 Sides",
                "Spacious Bike Parking",
                "Peaceful Neighborhood",
                "Close to Baneshwor Chowk",
                "Clean Common Washrooms",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/5 text-xs font-semibold text-[#f0c96a]"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-28 px-[5vw] bg-[#080c10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4a843]">Accommodation</span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-black mt-2">
              Rooms & Monthly Packages
            </h2>
            <p className="text-sm text-[#7a8492] mt-3">
              Transparent packages including lodging, food, WiFi, electricity, and hot water.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "3-Bed Sharing",
                tag: "Most Popular",
                price: "NPR 12,000",
                desc: "Balanced comfort, spacious desks, ideal for focused college students.",
                features: ["3 dedicated beds", "Study desks & wardrobe", "Meals + 5G WiFi included", "Daily cleaning"],
              },
              {
                title: "2-Bed Sharing",
                tag: "Limited Seat",
                price: "NPR 14,000+",
                desc: "High privacy setup for senior students and exam preparation.",
                features: ["Only 2 occupants", "Extra quiet atmosphere", "Ample natural sunlight", "Full meal service"],
              },
              {
                title: "4-Bed Attached",
                tag: "Premium Attached",
                price: "Value Rate",
                desc: "Attached private washroom convenience with maximum space.",
                features: ["Attached bathroom", "Group friendly", "Hot water direct access", "Full amenities"],
              },
              {
                title: "4-Bed Standard",
                tag: "Budget Friendly",
                price: "NPR 11,000+",
                desc: "Economic package with no compromise on meal quality or security.",
                features: ["Economical budget", "Full meal access", "High speed WiFi", "Spacious room"],
              },
            ].map((room) => (
              <div
                key={room.title}
                className="rounded-3xl border border-[#d4a843]/15 bg-[#141b22] p-8 flex flex-col justify-between hover:border-[#d4a843]/40 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#d4a843]/15 text-[#f0c96a] mb-4">
                    {room.tag}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-bold">{room.title}</h3>
                  <p className="text-xs text-[#7a8492] mt-2 leading-relaxed">{room.desc}</p>
                  <div className="font-['Playfair_Display',serif] text-2xl font-black text-[#d4a843] my-6">
                    {room.price} <span className="text-xs font-normal text-[#7a8492]">/month</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#f0ece4]/70 border-t border-white/5 pt-4">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-[#1aa896]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    triggerToast(`Selected ${room.title}. Fill the form below to complete inquiry!`);
                    scrollTo("contact");
                  }}
                  className="mt-8 w-full py-3 rounded-full border border-[#a07825] bg-[#d4a843]/10 text-[#f0c96a] font-bold text-xs hover:bg-[#d4a843] hover:text-black transition cursor-pointer"
                >
                  Reserve Seat
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Bento Grid */}
      <section id="facilities" className="py-28 px-[5vw] bg-[#0e1318]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4a843]">Amenities</span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-black mt-2">
              Everything You Need To Thrive
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "High-Speed 5G WiFi", text: "Dual-band mesh internet setup so gaming, Zoom classes, and code builds never buffer." },
              { icon: "🍲", title: "Homely Nutritious Meals", text: "Cooked fresh three times daily. Vegetables, lentils, chicken on fixed days, and clean filtered water." },
              { icon: "🚿", title: "24/7 Water Support", text: "Hot water geysers for winter and adequate storage to guarantee continuous water supply." },
              { icon: "🛡️", title: "CCTV & Security", text: "Main entrance and corridors monitored with CCTV for resident safety and parent peace of mind." },
              { icon: "🏍️", title: "Spacious Bike Parking", text: "Dedicated secure area inside the boundary wall to park motorcycles and scooters safely." },
              { icon: "📚", title: "Quiet Study Atmosphere", text: "Strict 10 PM quiet hours ensuring undisturbed preparation for entrance & semester exams." },
            ].map((fac) => (
              <div key={fac.title} className="p-8 rounded-3xl bg-[#141b22] border border-[#d4a843]/15 hover:border-[#d4a843]/30 transition">
                <div className="text-4xl mb-4">{fac.icon}</div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">{fac.title}</h3>
                <p className="text-xs text-[#7a8492] leading-relaxed">{fac.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-28 px-[5vw] bg-[#080c10] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4a843]">Testimonials</span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-black mt-2">
              What Students & Parents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Aayush Sharma",
                role: "Engineering Student (IOE)",
                review: "The food here is genuinely superior to other hostels in Baneshwor. The study environment during semester exams is top-tier.",
              },
              {
                name: "Rohan Pokharel",
                role: "CA Aspirant",
                review: "Peaceful atmosphere and reliable WiFi. The warden is very accommodating if you need early breakfast or late study hours.",
              },
              {
                name: "Suresh Thapa",
                role: "Parent (Butwal)",
                review: "We visited 6 hostels before choosing NKD. The hygiene, open ventilation, and family atmosphere gave us immediate confidence.",
              },
            ].map((r) => (
              <div key={r.name} className="p-8 rounded-3xl bg-[#141b22] border border-[#d4a843]/15 flex flex-col justify-between">
                <div>
                  <div className="text-[#d4a843] mb-4">★★★★★</div>
                  <p className="text-sm text-[#f0ece4]/75 italic leading-relaxed">“{r.review}”</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="font-bold text-sm text-white">{r.name}</div>
                  <div className="text-xs text-[#7a8492]">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-[5vw] bg-[#0e1318]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4a843]">Inquiry & Booking</span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-black mt-2">
              Secure Your Room Today
            </h2>
            <p className="text-sm text-[#7a8492] mt-3">
              Limited rooms available for the upcoming session. Submit your details below.
            </p>
          </div>

          <form
            action="https://formsubmit.co/gautamrojina778@gmail.com"
            method="POST"
            className="p-8 sm:p-12 rounded-3xl bg-[#141b22] border border-[#d4a843]/20 shadow-2xl space-y-6"
          >
            <input type="hidden" name="_subject" value="New NKD Luxury Page Inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#7a8492] mb-2">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#d4a843]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#7a8492] mb-2">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  placeholder="98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#d4a843]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#7a8492] mb-2">
                  Preferred Room Type
                </label>
                <select
                  name="roomType"
                  className="w-full px-4 py-3 rounded-xl bg-[#141b22] border border-white/10 text-white outline-none focus:border-[#d4a843]"
                >
                  <option>3-Bed Sharing Room</option>
                  <option>2-Bed Sharing Room</option>
                  <option>4-Bed Attached Washroom</option>
                  <option>4-Bed Standard Room</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#7a8492] mb-2">
                  Expected Move-in Date
                </label>
                <input
                  type="date"
                  name="moveIn"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#d4a843]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-[#7a8492] mb-2">
                Questions or Requests
              </label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us your requirements, college name, or preferred visit date."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#d4a843]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4a843] to-[#f0c96a] text-black font-['Playfair_Display',serif] font-black text-lg shadow-xl shadow-[#d4a843]/20 hover:-translate-y-0.5 transition cursor-pointer"
            >
              Submit Inquiry to NKD Hostel
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-[5vw] bg-[#040608] border-t border-[#d4a843]/15 text-xs text-[#7a8492]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} NKD Boys Hostel. Naya Baneshwor, Kathmandu, Nepal.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#d4a843]">Light Mode Home</Link>
            <Link href="/home" className="hover:text-[#d4a843]">HEAN Public Website</Link>
            <Link href="/admin" className="hover:text-[#d4a843]">HEAN Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
