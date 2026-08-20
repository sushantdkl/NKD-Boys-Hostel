"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const initialAlbums = [
  { id: 1, title: "HEAN Annual General Meeting 2026", count: 18, cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80", date: "2026-07-18" },
  { id: 2, title: "Hostel Inspection Workshop", count: 12, cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80", date: "2026-06-10" },
  { id: 3, title: "Blood Donation Program", count: 24, cover: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80", date: "2026-05-02" },
];

export default function GalleryAdminPage() {
  const [albums, setAlbums] = useState(initialAlbums);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    setAlbums([
      ...albums,
      {
        id: Date.now(),
        title: newTitle,
        count: 0,
        cover: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    setNewTitle("");
    setShowModal(false);
  };

  return (
    <div>
      <AdminTopbar title="Gallery - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Event Albums & Photo Gallery</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Manage published albums and activity photographs on the public website.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{ background: "#0EA5E9", color: "#fff", padding: "10px 22px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 15px rgba(14,165,233,0.3)" }}
        >
          <i className="fas fa-plus-circle" /> Add Event / Album
        </button>
      </div>

      {showModal && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Create New Photo Album</h3>
          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Album Title</label>
              <input
                type="text"
                placeholder="e.g. Kathmandu Valley Hostel Meet 2026"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="submit" className="btn btn-primary">Create Album</button>
              <button type="button" onClick={() => setShowModal(false)} style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", cursor: "pointer" }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
        {albums.map((a) => (
          <div key={a.id} style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <img src={a.cover} alt={a.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
            <div style={{ padding: "16px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>{a.title}</h3>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748b" }}>
                <span>{a.count} Photos</span>
                <span>{a.date}</span>
              </div>
              <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
                <button style={{ flex: 1, padding: "6px", background: "#0EA5E9", color: "#fff", border: "none", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                  Manage Photos
                </button>
                <button style={{ padding: "6px 12px", background: "#fee2e2", color: "#ef4444", border: "none", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
