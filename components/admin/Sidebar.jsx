"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", href: "/admin", icon: "fa-chart-pie" },
      { name: "Applications", href: "/admin/registrations", icon: "fa-file-alt" },
      { name: "Inspections", href: "/admin/inspections", icon: "fa-clipboard-list" },
      { name: "Hostels", href: "/admin/hostels", icon: "fa-hotel" },
      { name: "Committee", href: "/admin/committee", icon: "fa-users" },
      { name: "Notices", href: "/admin/notices", icon: "fa-bullhorn" },
      { name: "Gallery", href: "/admin/gallery", icon: "fa-images" },
    ],
  },
  {
    title: "Finance",
    items: [
      { name: "Invoices", href: "/admin/invoices", icon: "fa-file-invoice" },
      { name: "Payments", href: "/admin/payments", icon: "fa-credit-card" },
      { name: "Receipts", href: "/admin/receipts", icon: "fa-receipt" },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Settings", href: "/admin/settings", icon: "fa-cog" },
      { name: "Reports", href: "/admin/reports", icon: "fa-chart-bar" },
      { name: "Certificate", href: "/admin/certificate", icon: "fa-certificate" },
      { name: "CMS", href: "/admin/cms", icon: "fa-edit" },
      { name: "Import", href: "/admin/import", icon: "fa-upload" },
    ],
  },
];

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <aside className={`sidebar ${isOpen ? "" : "closed"}`} id="sidebar">
      <div className="sidebar-header">
        <div className="brand flex items-center gap-2">
          <span className="text-xl font-black text-[#0EA5E9] tracking-wider">HEAN</span>
          <span className="text-xs uppercase bg-[#0EA5E9]/20 text-[#38bdf8] px-2 py-0.5 rounded font-bold">Admin</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sidebar-toggle-btn"
          aria-label="Toggle Sidebar"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      <nav id="sidebarNav" className="flex-1 pb-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <div className="nav-section">{section.title}</div>
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  <i className={`fas ${item.icon}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        ))}

        <div className="logout px-4 pt-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 transition"
          >
            <i className="fas fa-sign-out-alt" />
            <span>Exit to NKD Site</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
