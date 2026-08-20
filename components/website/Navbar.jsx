"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Hostels", href: "/hostels" },
  { name: "Committee", href: "/committee" },
  { name: "Gallery", href: "/gallery" },
  { name: "Notices", href: "/notices" },
  { name: "Contact", href: "/contact" },
];

export default function WebsiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[999] w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0EA5E9] to-[#3B82F6] flex items-center justify-center text-white font-black text-xl shadow-md shadow-[#0EA5E9]/25">
            H
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#0b2b4a] block leading-none">HEAN</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9]">Hostel Association Nepal</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  isActive ? "text-[#0EA5E9]" : "text-slate-700 hover:text-[#0EA5E9]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="text-xs font-bold text-[#214d3e] bg-[#f4efe6] px-4 py-2 rounded-full border border-[#214d3e]/20 hover:bg-[#214d3e] hover:text-white transition"
          >
            NKD Hostel Landing
          </Link>
          <Link
            href="/admin"
            className="text-xs font-bold text-white bg-[#0EA5E9] px-5 py-2.5 rounded-full shadow-md shadow-[#0EA5E9]/25 hover:bg-[#0284c7] hover:-translate-y-0.5 transition"
          >
            Admin Portal
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700"
          aria-label="Toggle Navigation"
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0EA5E9]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-bold text-[#214d3e] bg-[#f4efe6] py-2.5 rounded-xl"
            >
              NKD Hostel Site
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-bold text-white bg-[#0EA5E9] py-2.5 rounded-xl"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
