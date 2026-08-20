"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <div>
      <AdminTopbar title="Content Management (CMS) - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Public Website CMS</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Update home hero text, notices, about story, and contact details.</p>
        </div>
        <button style={{ background: "#0EA5E9", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
          Save All Changes
        </button>
      </div>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {["hero", "about", "contact", "footer"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: activeTab === tab ? "#0EA5E9" : "#e2e8f0",
              background: activeTab === tab ? "#0EA5E9" : "#fff",
              color: activeTab === tab ? "#fff" : "#475569",
              fontWeight: 600,
              fontSize: "0.85rem",
              textTransform: "capitalize",
              cursor: "pointer",
            }}
          >
            {tab} Section
          </button>
        ))}
      </div>

      <div className="dashboard-form">
        {activeTab === "hero" && (
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>Hero Banner Content</h3>
            <div className="form-group">
              <label>Hero Title (English)</label>
              <input type="text" defaultValue="Find Verified Hostels Across Nepal" />
            </div>
            <div className="form-group">
              <label>Hero Tagline (Nepali)</label>
              <input type="text" defaultValue="नेपालभरिका गुणस्तरीय तथा सुरक्षित होस्टेलहरुको साझा संस्था" />
            </div>
            <div className="form-group">
              <label>Hero Description</label>
              <textarea rows={3} defaultValue="Hostel Association Nepal (HEAN) represents certified hostels ensuring safety, quality meals, clean living conditions, and student well-being." />
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>About Page Story</h3>
            <div className="form-group">
              <label>Vision Statement</label>
              <textarea rows={3} defaultValue="To build a nationwide ecosystem of affordable, hygienic, and student-focused accommodations." />
            </div>
            <div className="form-group">
              <label>Total Affiliated Count Display</label>
              <input type="text" defaultValue="536+ Hostels" />
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>Contact & Office Info</h3>
            <div className="form-group">
              <label>Office Address</label>
              <input type="text" defaultValue="Bagbazar, Kathmandu, Nepal" />
            </div>
            <div className="form-group">
              <label>Official Helpline</label>
              <input type="text" defaultValue="+977 1-4240000" />
            </div>
            <div className="form-group">
              <label>Official Email</label>
              <input type="text" defaultValue="info@hean.org.np" />
            </div>
          </div>
        )}

        {activeTab === "footer" && (
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>Footer Settings</h3>
            <div className="form-group">
              <label>Copyright Notice</label>
              <input type="text" defaultValue="© 2026 HEAN. All Rights Reserved." />
            </div>
          </div>
        )}

        <button type="button" className="btn btn-primary" style={{ marginTop: "16px" }}>
          Update CMS Content
        </button>
      </div>
    </div>
  );
}
