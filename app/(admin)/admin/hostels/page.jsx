"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const hostelsData = [
  { id: 1, name: "NKD Boys Hostel", type: "Boys", location: "New Baneshwor, Kathmandu", capacity: "32 beds", rooms: 8, status: "Active", rate: "NPR 12,000" },
  { id: 2, name: "Suchana Girls Hostel", type: "Girls", location: "Putalisadak, Kathmandu", capacity: "40 beds", rooms: 10, status: "Active", rate: "NPR 13,500" },
  { id: 3, name: "Siddhartha Boys Hostel", type: "Boys", location: "Kupondole, Lalitpur", capacity: "24 beds", rooms: 6, status: "Active", rate: "NPR 11,500" },
  { id: 4, name: "Peaceful Co-ed Hostel", type: "Co-Ed", location: "Suryabinayak, Bhaktapur", capacity: "50 beds", rooms: 14, status: "Active", rate: "NPR 10,000" },
  { id: 5, name: "Himalayan Youth Hostel", type: "Boys", location: "Koteshwor, Kathmandu", capacity: "28 beds", rooms: 7, status: "Active", rate: "NPR 12,500" },
];

export default function HostelsManagementPage() {
  const [search, setSearch] = useState("");

  const filtered = hostelsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <AdminTopbar title="Hostels Management - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Registered Hostels Directory</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Total 536 affiliated hostels across Kathmandu Valley and Nepal.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Search hostels or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px 14px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "0.85rem", background: "#fff", outline: "none" }}
          />
          <button style={{ background: "#0EA5E9", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
            + Add Hostel
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hostel Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Starting Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#64748b" }}>#{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.name}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: item.type === "Boys" ? "#dbeafe" : item.type === "Girls" ? "#fce7f3" : "#f3e8ff", color: item.type === "Boys" ? "#1e40af" : item.type === "Girls" ? "#9d174d" : "#6b21a8" }}>
                    {item.type}
                  </span>
                </td>
                <td style={{ fontSize: "0.85rem", color: "#475569" }}>{item.location}</td>
                <td>{item.capacity} ({item.rooms} rooms)</td>
                <td style={{ fontWeight: 600, color: "#0f172a" }}>{item.rate}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", fontWeight: 600, background: "#dcfce7", color: "#166534" }}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer", marginRight: "6px" }}>
                    Edit
                  </button>
                  <button style={{ background: "#ef4444", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    Suspend
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
