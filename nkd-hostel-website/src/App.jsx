import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const Icon = ({ type, size = 22, className = "" }) => {
  const icons = { home: "⌂", map: "⌖", phone: "☎", wifi: "≋", food: "◉", shield: "✓", sparkle: "✦", bed: "▭", water: "◌", book: "▤", star: "★", check: "✓", chat: "✉", menu: "☰", close: "×", camera: "▣", parking: "▰", sun: "☼", mail: "✉", flame: "◆" };
  return <span className={`inline-flex items-center justify-center font-black leading-none ${className}`} style={{ width: size, height: size, fontSize: size * 0.85 }} aria-hidden="true">{icons[type] || "•"}</span>;
};

const hostel = {
  name: "NKD Boys Hostel",
  tagline: "हजुरहरुको दोस्रो घर",
  location: "New Baneshwor, near Parliament Building Water Tank, Kathmandu",
  shortLocation: "Naya Baneshwor, Kathmandu",
  phone: "+977 984-8050046",
  inquiryEmail: "gautamrojina778@gmail.com",
  operating: "4+ years operating",
  googleMaps: "https://www.google.com/maps/place/NKD+Boys+Hostel/@27.6912963,85.3357402,91m/data=!3m1!1e3!4m6!3m5!1s0x39eb196427129baf:0x8b3318bc1a99b4e1!8m2!3d27.6912888!4d85.3358165!16s%2Fg%2F11vjtr5_wv",
  embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.3703660843752!2d85.33574015342397!3d27.691296265624985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196427129baf%3A0x8b3318bc1a99b4e1!2sNKD%20Boys%20Hostel!5e1!3m2!1sen!2snp!4v1778655496062!5m2!1sen!2snp"
};

const navItems = ["Home", "Facilities", "Rooms", "Gallery", "Reviews", "Inquiry"];

const facilities = [
  ["wifi", "High-Speed 5G Internet", "Fast WiFi for online classes, coding, assignments, and the occasional 2 AM YouTube lecture."],
  ["food", "Fresh Homely Meals", "We serve the same food we eat. Clean, regular, and hostel-life approved."],
  ["water", "Hot & Cold Water", "Hot/cold water support plus jar drinking water arrangement."],
  ["shield", "Family Environment", "Disciplined rules, safe living, and a home-like atmosphere."],
  ["parking", "Decent Parking Space", "Convenient parking for residents and visitors in Baneshwor."],
  ["sun", "Open From Every Side", "Better air, better light, and rooms that feel less boxed in."],
  ["book", "Study Friendly", "Peaceful enough for exam season and practical for daily student life."],
  ["bed", "Limited Seats", "Focused room mix instead of overcrowding. Better comfort, better management."]
];

const rooms = [
  ["3-Bed Sharing Room", "3 rooms", "Starts from NPR 12,000/month", "Best balance between budget, comfort, and social hostel life.", ["3 dedicated rooms", "Food + facilities access", "Best value option", "Student friendly"]],
  ["2-Bed Sharing Room", "1 room only", "Ask current availability", "A quieter option for residents who prefer fewer roommates.", ["More privacy", "Study friendly", "Limited seat premium", "Calm setup"]],
  ["4-Bed Attached Washroom", "1 room only", "Value rate on inquiry", "Group-friendly room with attached washroom convenience.", ["Attached washroom", "Group stay", "Convenient access", "Limited availability"]],
  ["4-Bed Standard Room", "3 rooms", "Affordable monthly package", "Budget-friendly, practical, and made for long-stay students.", ["3 standard rooms", "Budget focused", "Meals package", "Good for long stay"]]
];

const gallery = [
  ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=90", "Room Feel"],
  ["https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1400&q=90", "Study Corner"],
  ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=90", "Clean Living"],
  ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=90", "Comfort Space"],
  ["https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=90", "Food & Kitchen"],
  ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=90", "Homely Stay"]
];

const reviews = [
  ["Resident Experience", "Food, WiFi, water, and rules are the four pillars of hostel life. NKD focuses exactly there."],
  ["Student Friendly", "Located in Baneshwor with a practical environment for students, study, travel, and daily routine."],
  ["Parent Confidence", "Family environment, disciplined rules, and limited rooms make the hostel easier to trust and manage."]
];

function scrollToSection(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NKDBoysHostelWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = useMemo(() => {
    const cleanPhone = hostel.phone.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Namaste, I want to know about room availability at ${hostel.name}.`)}`;
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4efe6] font-sans text-[#18231e]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#f0d397_0%,transparent_30%),radial-gradient(circle_at_80%_20%,#b7d2c5_0%,transparent_28%),linear-gradient(135deg,#f7f1e7_0%,#eee2cf_45%,#edf5ef_100%)]" />
      <div className="pointer-events-none fixed -left-36 -top-28 -z-10 h-96 w-96 rounded-full bg-[#d9b56f]/40 blur-3xl" />
      <div className="pointer-events-none fixed -right-40 top-96 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#214d3e]/25 blur-3xl" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-[#f4efe6]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#214d3e] text-white shadow-[0_18px_40px_rgba(33,77,62,0.28)]"><Icon type="home" size={24} /></div>
            <div className="text-left"><p className="text-lg font-black tracking-tight">NKD Boys Hostel</p><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9a6d3a]">{hostel.shortLocation}</p></div>
          </button>
          <nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <button key={item} onClick={() => scrollToSection(item)} className="text-sm font-black text-[#405148] transition hover:text-[#b98254]">{item}</button>)}</nav>
          <div className="hidden items-center gap-3 lg:flex"><a href={`tel:${hostel.phone}`} className="rounded-full border border-[#214d3e]/20 px-5 py-3 text-sm font-black text-[#214d3e] transition hover:bg-white">Call Now</a><a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#214d3e] px-5 py-3 text-sm font-black text-white shadow-xl shadow-[#214d3e]/20 transition hover:-translate-y-0.5 hover:bg-[#183b30]">WhatsApp</a></div>
          <button className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <Icon type="close" size={24} /> : <Icon type="menu" size={24} />}</button>
        </div>
        {menuOpen && <div className="border-t border-[#214d3e]/10 bg-[#f4efe6] px-5 py-4 lg:hidden"><div className="grid gap-3">{navItems.map((item) => <button key={item} onClick={() => { scrollToSection(item); setMenuOpen(false); }} className="rounded-2xl bg-white px-4 py-3 text-left text-sm font-black shadow-sm">{item}</button>)}</div></div>}
      </header>

      <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#214d3e]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#9a6d3a] shadow-sm backdrop-blur"><Icon type="sparkle" size={16} /> {hostel.tagline} · {hostel.operating}</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#18231e] md:text-7xl lg:text-8xl">Hostel life, but make it clean, bright & actually livable.</h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#52635a]">{hostel.name} is a boys hostel in {hostel.location}. Open from every side, family-environment focused, and made for students who need food, WiFi, water, peace, and a bed that does not feel like punishment.</p>
          <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-[0_24px_70px_rgba(24,35,30,0.10)] backdrop-blur-xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#b98254]">Hostel truth</p><p className="mt-2 text-2xl font-black text-[#214d3e]">“We eat what we serve. No sad hostel daal-bhat drama.”</p></div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#214d3e] px-7 py-4 text-base font-black text-white shadow-[0_25px_60px_rgba(33,77,62,0.32)] transition hover:-translate-y-1"><Icon type="chat" size={20} /> Check Availability</a><button onClick={() => scrollToSection("inquiry")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-[#214d3e] shadow-xl shadow-black/5 transition hover:-translate-y-1"><Icon type="mail" size={20} /> Send Inquiry</button></div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">{[["Operating", "4+ Years"], ["From", "NPR 12,000"], ["Location", "Baneshwor"], ["Room Mix", "8 Rooms"]].map(([a, b]) => <div key={a} className="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a6d3a]">{a}</p><p className="mt-1 text-2xl font-black text-[#214d3e]">{b}</p></div>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, rotateY: -18, y: 30 }} animate={{ opacity: 1, rotateY: 0, y: 0 }} transition={{ duration: 0.8 }} className="relative [perspective:1200px]">
          <div className="absolute -right-4 -top-8 z-10 rotate-6 rounded-[2rem] bg-[#b98254] px-6 py-4 text-white shadow-[0_25px_70px_rgba(185,130,84,0.35)]"><p className="text-xs font-black uppercase tracking-[0.2em]">Limited seats</p><p className="text-2xl font-black">Book before your friend does</p></div>
          <motion.div animate={{ y: [0, -10, 0], rotateX: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative rounded-[2.8rem] border border-white/80 bg-white/45 p-4 shadow-[0_40px_100px_rgba(24,35,30,0.22)] backdrop-blur-xl [transform-style:preserve-3d] lg:rotate-[-2deg]"><img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1500&q=90" alt="Modern hostel room preview" className="h-[34rem] w-full rounded-[2.2rem] object-cover" /><div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/40 bg-[#18231e]/78 p-5 text-white shadow-2xl backdrop-blur-xl"><p className="text-sm font-bold text-[#e8d1a4]">Room-first hostel design</p><h2 className="mt-1 text-2xl font-black">3-bed, 2-bed & 4-bed options</h2><p className="mt-2 text-sm leading-6 text-white/80">Upload real Google/Facebook room photos here before final deployment.</p></div></motion.div>
        </motion.div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="mb-12 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#b98254]">Facilities</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Good amenities. Less tension. More “ghar jasto”.</h2><p className="mt-5 text-lg font-medium leading-8 text-[#52635a]">Built around what hostel residents actually ask about first: food, internet, water, cleanliness, parking, safety, and study environment.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{facilities.map(([icon, title, text], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }} className="group rounded-[2rem] border border-white/75 bg-white/68 p-6 shadow-[0_22px_60px_rgba(24,35,30,0.08)] backdrop-blur transition [transform-style:preserve-3d]"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#214d3e] text-white shadow-lg shadow-[#214d3e]/20 transition group-hover:bg-[#b98254]"><Icon type={icon} size={25} /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm font-medium leading-7 text-[#52635a]">{text}</p></motion.div>)}</div></section>

      <section id="rooms" className="relative bg-[#214d3e] px-5 py-24 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#e8d1a4]">Rooms & Rates</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Limited rooms, better managed stay.</h2><p className="mt-5 text-lg font-medium leading-8 text-white/75">Pricing is starting/package guidance. Final rate can vary by seat availability, room type, and included services.</p></div><a href={`tel:${hostel.phone}`} className="rounded-full bg-white px-6 py-4 text-center font-black text-[#214d3e] shadow-xl transition hover:-translate-y-1">Ask Final Rate</a></div><div className="grid gap-6 lg:grid-cols-4">{rooms.map(([title, badge, price, desc, points], index) => <motion.article key={title} whileHover={{ y: -12, rotateX: 5 }} className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur [transform-style:preserve-3d]"><div className="mb-5 inline-flex rounded-full bg-[#e8d1a4] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#214d3e]">{badge}</div><p className="text-5xl font-black text-[#e8d1a4]">0{index + 1}</p><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-lg font-black text-white">{price}</p><p className="mt-3 text-sm font-medium leading-7 text-white/75">{desc}</p><div className="mt-7 grid gap-3">{points.map((point) => <div key={point} className="flex items-center gap-3 text-sm font-bold text-white/90"><Icon type="check" size={18} className="text-[#e8d1a4]" /> {point}</div>)}</div></motion.article>)}</div><div className="mt-10 rounded-[2rem] border border-white/15 bg-white/10 p-6 text-sm font-medium leading-7 text-white/75 backdrop-blur"><span className="font-black text-[#e8d1a4]">Rate note:</span> I could not find an official 2026 Hotel Association Nepal hostel-rate table, so this site uses your real starting rate and avoids fake official claims.</div></div></section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="mb-12 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#b98254]">Gallery</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Real photos should sell the room before you say a word.</h2><p className="mt-5 text-lg font-medium leading-8 text-[#52635a]">Current images are production-safe placeholders. Replace them with original photos from your Google/Facebook profile: front view, rooms, washroom, kitchen, meal, parking, and common space.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{gallery.map(([src, label], index) => <motion.div key={label} whileHover={{ scale: 1.035, rotate: index % 2 ? 1.2 : -1.2, y: -8 }} className={`relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(24,35,30,0.14)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><img src={src} alt={label} className="h-full min-h-72 w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /><p className="absolute bottom-5 left-5 rounded-full bg-white/92 px-4 py-2 text-sm font-black text-[#214d3e]">{label}</p></motion.div>)}</div></section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="rounded-[2.8rem] border border-white/80 bg-white/62 p-6 shadow-[0_30px_90px_rgba(24,35,30,0.10)] backdrop-blur md:p-10"><div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-sm font-black uppercase tracking-[0.25em] text-[#b98254]">Trust & Reviews</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A hostel parents can call and students can actually live in.</h2></div><p className="max-w-xl font-medium leading-7 text-[#52635a]">Google review text is not publicly extractable in this preview. Add real copied reviews from your Google Business profile here before launch.</p></div><div className="grid gap-5 lg:grid-cols-3">{reviews.map(([name, text]) => <motion.div key={name} whileHover={{ y: -8, rotateX: 4 }} className="rounded-[2rem] bg-[#f4efe6] p-6 shadow-inner"><div className="mb-4 flex gap-1 text-[#b98254]">{[1, 2, 3, 4, 5].map((i) => <Icon key={i} type="star" size={18} />)}</div><p className="font-medium leading-7 text-[#405148]">“{text}”</p><p className="mt-5 font-black text-[#214d3e]">{name}</p></motion.div>)}</div></div></section>

      <section id="inquiry" className="px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]"><div className="rounded-[2.8rem] bg-[#18231e] p-8 text-white shadow-[0_40px_100px_rgba(0,0,0,0.22)] md:p-10"><p className="text-sm font-black uppercase tracking-[0.25em] text-[#e8d1a4]">Inquiry</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Want a room? Send inquiry before seats disappear.</h2><p className="mt-5 font-medium leading-8 text-white/70">This form sends inquiries to your email using FormSubmit. Replace the email with your official hostel email before launch.</p><div className="mt-8 grid gap-5"><a href={`tel:${hostel.phone}`} className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 transition hover:bg-white/15"><Icon type="phone" size={24} className="text-[#e8d1a4]" /><div><p className="text-sm text-white/60">Phone</p><p className="font-black">{hostel.phone}</p></div></a><a href={hostel.googleMaps} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 transition hover:bg-white/15"><Icon type="map" size={24} className="text-[#e8d1a4]" /><div><p className="text-sm text-white/60">Location</p><p className="font-black">{hostel.location}</p></div></a></div></div><form action={`https://formsubmit.co/${hostel.inquiryEmail}`} method="POST" className="rounded-[2.8rem] border border-white/80 bg-white/70 p-6 shadow-[0_30px_90px_rgba(24,35,30,0.12)] backdrop-blur md:p-8"><input type="hidden" name="_subject" value="New NKD Boys Hostel Inquiry" /><input type="hidden" name="_captcha" value="false" /><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-black text-[#214d3e]">Full Name<input required name="name" placeholder="Your name" className="rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]" /></label><label className="grid gap-2 text-sm font-black text-[#214d3e]">Phone Number<input required name="phone" placeholder="98XXXXXXXX" className="rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]" /></label><label className="grid gap-2 text-sm font-black text-[#214d3e]">Preferred Room<select name="room" className="rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]"><option>3-Bed Sharing Room</option><option>2-Bed Sharing Room</option><option>4-Bed Attached Washroom</option><option>4-Bed Standard Room</option></select></label><label className="grid gap-2 text-sm font-black text-[#214d3e]">Move-in Date<input name="moveInDate" type="date" className="rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]" /></label></div><label className="mt-5 grid gap-2 text-sm font-black text-[#214d3e]">Message<textarea name="message" rows="5" placeholder="Tell us your preferred room, budget, and when you want to visit." className="rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]" /></label><button className="mt-6 w-full rounded-full bg-[#214d3e] px-7 py-4 text-base font-black text-white shadow-[0_25px_60px_rgba(33,77,62,0.28)] transition hover:-translate-y-1" type="submit">Send Inquiry to Email</button></form></div></section>

      <section className="px-5 pb-24 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_90px_rgba(24,35,30,0.12)] backdrop-blur"><iframe title="NKD Boys Hostel Google Map" src={hostel.embedMap} width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[28rem] w-full rounded-[2.2rem]" /></div></section>

      <footer className="border-t border-[#214d3e]/10 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-semibold text-[#52635a] md:flex-row md:items-center"><p>© {new Date().getFullYear()} {hostel.name}. All rights reserved.</p><p>Replace placeholder photos/reviews with original Google/Facebook assets before final launch.</p></div></footer>
    </main>
  );
}
