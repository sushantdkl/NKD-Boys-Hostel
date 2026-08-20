"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const initialNotices = [
  { id: 1, title: "HEAN Annual General Meeting 2026", date: "2026-07-18", category: "Event", published: true },
  { id: 2, title: "Compulsory Food Hygiene Guideline Notice", date: "2026-07-10", category: "Regulation", published: true },
  { id: 3, title: "Annual Membership Fee Renewal Notice for Fiscal 2083/84", date: "2026-06-25", category: "Notice", published: true },
  { id: 4, title: "Emergency Dengue Prevention Directives in Hostels", date: "2026-06-01", category: "Health", published: true },
];

export default function NoticesAdminPage() {
  const [notices, setNotices] = useState(initialNotices);
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCat, setNewCat] = useState("Notice");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    setNotices([
      ...notices,
      {
        id: Date.now(),
        title: newTitle,
        date: new Date().toISOString().split("T")[0],
        category: newCat,
        published: true,
      },
    ]);
    setNewTitle("");
    setShowCreate(false);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <AdminTopbar title="Notices - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Public Notices & Circulars</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Publish official press releases, government directives, and HEAN notices.</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          style={{ background: "#0EA5E9", color: "#fff", padding: "10px 22px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 15px rgba(14,165,233,0.3)" }}
        >
          <i className="fas fa-plus-circle" /> Add New Notice
        </button>
      </div>

      {showCreate && (
        <div className="dashboard-form" style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Publish New Notice</h3>
          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Notice Headline</label>
              <input
                type="text"
                placeholder="e.g. Kathmandu Valley Hostel Routine Update"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={newCat} onChange={(e) => setNewCat(e.target.value)}>
                <option>Notice</option>
                <option>Event</option>
                <option>Regulation</option>
                <option>Health</option>
                <option>Press Release</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="submit" className="btn btn-primary">Publish Notice</button>
              <button type="button" onClick={() => setShowCreate(false)} style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", cursor: "pointer" }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr key={n.id}>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{n.title}</td>
                <td style={{ fontSize: "0.85rem", color: "#64748b" }}>{n.date}</td>
                <td>
                  <span style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9", padding: "2px 12px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600 }}>
                    {n.category}
                  </span>
                </td>
                <td style={{ color: "#10B981" }}>✅ Published</td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", padding: "6px 14px", borderRadius: "6px", border: "none", fontSize: "0.75rem", cursor: "pointer", marginRight: "6px" }}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(n.id)}
                    style={{ background: "#ef4444", color: "#fff", padding: "6px 14px", borderRadius: "6px", border: "none", fontSize: "0.75rem", cursor: "pointer" }}
                  >
                    Delete
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
