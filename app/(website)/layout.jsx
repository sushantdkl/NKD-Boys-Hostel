import React from "react";
import WebsiteNavbar from "@/components/website/Navbar";
import WebsiteFooter from "@/components/website/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Inter',sans-serif]">
      <WebsiteNavbar />
      <main className="flex-1">{children}</main>
      <WebsiteFooter />
    </div>
  );
}
