"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <AdminTopbar title="Settings - HEAN Admin" />

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>System & Organization Settings</h2>
        <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Update HEAN Secretariat address, official email, telephone, and membership rules.</p>
      </div>

      <div className="dashboard-form" style={{ maxWidth: "700px" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Organization Name</label>
            <input type="text" defaultValue="Hostel Association Nepal (HEAN)" />
          </div>
          <div className="form-group">
            <label>Head Office Address</label>
            <input type="text" defaultValue="Bagbazar, Kathmandu, Nepal" />
          </div>
          <div className="form-group">
            <label>Official Phone Number</label>
            <input type="text" defaultValue="+977 1-4240000 / 9851000000" />
          </div>
          <div className="form-group">
            <label>Contact / Inquiry Email</label>
            <input type="email" defaultValue="info@hean.org.np" />
          </div>
          <div className="form-group">
            <label>Office Working Hours</label>
            <input type="text" defaultValue="Sunday - Friday: 10:00 AM - 5:00 PM" />
          </div>
          <div className="form-group">
            <label>Annual Renewal Fee (NPR)</label>
            <input type="number" defaultValue="500" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>
            Save Organization Settings
          </button>
        </form>

        {saved && (
          <div style={{ marginTop: "16px", padding: "12px", borderRadius: "8px", background: "#dcfce7", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>
            ✓ System settings updated successfully!
          </div>
        )}
      </div>
    </div>
  );
}
