"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const inspectionsData = [
  { id: 101, hostel: "NKD Boys Hostel", inspector: "Er. Ramesh Karki", scheduledDate: "2026-07-28", status: "Passed", score: "94/100", hygiene: "Excellent", safety: "Verified" },
  { id: 102, hostel: "Suchana Girls Hostel", inspector: "Dr. Sita Sharma", scheduledDate: "2026-07-29", status: "Passed", score: "90/100", hygiene: "Good", safety: "Verified" },
  { id: 103, hostel: "Siddhartha Boys Hostel", inspector: "Bikash Adhikari", scheduledDate: "2026-08-01", status: "Scheduled", score: "Pending", hygiene: "Pending", safety: "Pending" },
  { id: 104, hostel: "Peaceful Co-ed Hostel", inspector: "Bikash Adhikari", scheduledDate: "2026-08-02", status: "Scheduled", score: "Pending", hygiene: "Pending", safety: "Pending" },
];

export default function InspectionsPage() {
  return (
    <div>
      <AdminTopbar title="Hostel Inspections - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Inspection Logs</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Hostel safety, hygiene, meal quality, and standards inspection records.</p>
        </div>
        <button style={{ background: "#8B5CF6", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <i className="fas fa-plus" /> Schedule Inspection
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hostel Name</th>
              <th>Inspector</th>
              <th>Date</th>
              <th>Status</th>
              <th>Score</th>
              <th>Hygiene & Safety</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {inspectionsData.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#64748b" }}>#{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.hostel}</td>
                <td>{item.inspector}</td>
                <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.scheduledDate}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", fontWeight: 600, background: item.status === "Passed" ? "#dcfce7" : "#ede9fe", color: item.status === "Passed" ? "#166534" : "#6b21a8" }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ fontWeight: 600, color: item.score === "Pending" ? "#94a3b8" : "#0EA5E9" }}>{item.score}</td>
                <td style={{ fontSize: "0.8rem" }}>{item.hygiene} / {item.safety}</td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
