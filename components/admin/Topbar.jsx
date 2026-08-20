"use client";

import React from "react";
import Link from "next/link";

export default function AdminTopbar({ title = "Dashboard - HEAN Admin", onToggleSidebar }) {
  return (
    <div className="topbar">
      <div className="left-section">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm mr-2"
          >
            <i className="fas fa-bars" />
          </button>
        )}
        <h1 className="page-title text-xl font-bold text-[#0f172a]">{title}</h1>

        <Link
          href="/home"
          className="btn btn-home"
          style={{
            background: "#0EA5E9",
            color: "#fff",
            padding: "4px 14px",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "0.8rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "0.3s",
            marginLeft: "12px",
          }}
        >
          <i className="fas fa-globe" />
          <span>Public Website</span>
        </Link>

        <div className="language-switcher">
          <button className="text-slate-500 font-semibold text-sm hover:text-slate-800">EN</button>
          <span className="divider">|</span>
          <button className="text-slate-500 font-semibold text-sm hover:text-slate-800">नेपाली</button>
        </div>
      </div>

      <div className="user-info">
        <span className="name">HEAN Admin</span>
        <span className="role">Admin</span>
        <div className="avatar">H</div>
      </div>
    </div>
  );
}
