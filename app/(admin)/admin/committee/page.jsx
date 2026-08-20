"use client";

import React from "react";
import AdminTopbar from "@/components/admin/Topbar";

const committeeMembers = [
  { name: "Mr. Bikash Adhikari", role: "President", phone: "9851000001", term: "2024 - 2026", status: "Active" },
  { name: "Ms. Sunita Shrestha", role: "Vice President", phone: "9851000002", term: "2024 - 2026", status: "Active" },
  { name: "Mr. Rajan Karki", role: "General Secretary", phone: "9851000003", term: "2024 - 2026", status: "Active" },
  { name: "Mr. Suresh Thapa", role: "Treasurer", phone: "9851000004", term: "2024 - 2026", status: "Active" },
  { name: "Ms. Rojina Gautam", role: "Executive Member", phone: "9848050046", term: "2024 - 2026", status: "Active" },
];

export default function CommitteeManagementPage() {
  return (
    <div>
      <AdminTopbar title="Committee Management - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Executive Committee</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Hostel Association Nepal Central Committee & Office Bearers.</p>
        </div>
        <button style={{ background: "#8B5CF6", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
          + Add Member
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "24px" }}>
        {committeeMembers.map((m) => (
          <div key={m.name} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", background: "#ede9fe", color: "#6b21a8", fontWeight: 600 }}>
                {m.role}
              </span>
              <span style={{ fontSize: "0.75rem", color: "#166534", fontWeight: 600 }}>● {m.status}</span>
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: "4px 0 0" }}>{m.name}</h3>
            <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>Phone: {m.phone}</p>
            <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: 0 }}>Tenure: {m.term}</p>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <button style={{ flex: 1, padding: "6px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#f8fafc", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                Edit
              </button>
              <button style={{ flex: 1, padding: "6px", borderRadius: "6px", border: "1px solid #fee2e2", background: "#fef2f2", color: "#ef4444", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
