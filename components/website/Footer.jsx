import React from "react";
import Link from "next/link";

export default function WebsiteFooter() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9] flex items-center justify-center font-black text-xl">
                H
              </div>
              <div>
                <span className="text-xl font-black block leading-none">HEAN</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Hostel Association Nepal
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The national apex body of private hostels across Nepal, dedicated to standardizing student living, safety, and health standards.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/home" className="hover:text-[#0EA5E9] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0EA5E9] transition">About HEAN</Link>
              </li>
              <li>
                <Link href="/hostels" className="hover:text-[#0EA5E9] transition">Find Hostels</Link>
              </li>
              <li>
                <Link href="/committee" className="hover:text-[#0EA5E9] transition">Committee</Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-[#0EA5E9] transition">Notices & News</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">Featured Hostel</h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-xs font-bold text-white">NKD Boys Hostel</p>
              <p className="text-[11px] text-slate-400">Naya Baneshwor, Kathmandu</p>
              <Link
                href="/"
                className="inline-block text-xs font-bold text-[#38bdf8] hover:underline"
              >
                Visit Hostel Website →
              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">Contact Secretariat</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bagbazar, Kathmandu, Nepal<br />
              Tel: +977 1-4240000<br />
              Email: info@hean.org.np
            </p>
            <div className="mt-4">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-800 px-4 py-2 rounded-lg hover:bg-[#0EA5E9] hover:text-white transition"
              >
                <i className="fas fa-lock" /> Admin Login
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hostel Association Nepal (HEAN). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300">Helpline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
