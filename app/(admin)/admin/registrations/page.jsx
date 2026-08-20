"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const registrationsData = [
  { id: 1, name: "NKD Boys Hostel", owner: "Rojina Gautam", phone: "9848050046", district: "Kathmandu", type: "Boys", status: "Active", date: "2026-07-24" },
  { id: 2, name: "Suchana Girls Hostel", owner: "Suchana Adhikari", phone: "9851000000", district: "Kathmandu", type: "Girls", status: "Active", date: "2026-07-24" },
  { id: 3, name: "Siddhartha Boys Hostel", owner: "Siddhartha Thapa", phone: "9841223344", district: "Lalitpur", type: "Boys", status: "Pending", date: "2026-07-23" },
  { id: 4, name: "Peaceful Co-ed Hostel", owner: "Ramesh Sharma", phone: "9841556677", district: "Bhaktapur", type: "Co-Ed", status: "Pending", date: "2026-07-22" },
  { id: 5, name: "Himalayan Youth Hostel", owner: "Dawa Sherpa", phone: "9849112233", district: "Kathmandu", type: "Boys", status: "Active", date: "2026-07-21" },
  { id: 6, name: "Green Valley Girls Hostel", owner: "Bipana Rai", phone: "9860445566", district: "Kathmandu", type: "Girls", status: "Active", date: "2026-07-20" },
];

export default function RegistrationsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = registrationsData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.owner.toLowerCase().includes(search.toLowerCase()) || item.phone.includes(search);
    const matchStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter.toLowerCase();
    return matchSearch && matchStatus;
  });

  return (
    <div>
      <AdminTopbar title="Applications & Registrations - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Hostel Registrations</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Manage new applications and verified hostel registrations.</p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Search hostel, owner, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px 14px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "0.85rem", background: "#fff", outline: "none", minWidth: "220px" }}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "0.85rem", background: "#fff", outline: "none" }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hostel Name</th>
              <th>Owner / Contact</th>
              <th>District</th>
              <th>Type</th>
              <th>Status</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#64748b" }}>#{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.name}</td>
                <td>
                  <div style={{ fontWeight: 500 }}>{item.owner}</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{item.phone}</div>
                </td>
                <td>{item.district}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: item.type === "Boys" ? "#dbeafe" : item.type === "Girls" ? "#fce7f3" : "#f3e8ff", color: item.type === "Boys" ? "#1e40af" : item.type === "Girls" ? "#9d174d" : "#6b21a8" }}>
                    {item.type}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", fontWeight: 600, background: item.status === "Active" ? "#dcfce7" : "#fef3c7", color: item.status === "Active" ? "#166534" : "#92400e" }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.date}</td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer", marginRight: "6px" }}>
                    View
                  </button>
                  <button style={{ background: "#22c55e", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    Verify
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
