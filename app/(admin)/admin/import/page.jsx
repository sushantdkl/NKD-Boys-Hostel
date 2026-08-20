"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

export default function ImportPage() {
  const [file, setFile] = useState(null);
  const [imported, setImported] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return;
    setImported(true);
  };

  return (
    <div>
      <AdminTopbar title="Import Hostel Data - HEAN Admin" />

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Batch Data Import</h2>
        <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Upload CSV / Excel spreadsheets to bulk import hostel records, members, or fee registries.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div className="dashboard-form">
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Upload Spreadsheet</h3>
          <form onSubmit={handleUpload}>
            <div className="form-group">
              <label>Data Category</label>
              <select>
                <option>Hostels Directory (Name, Type, Location, Capacity)</option>
                <option>Member Records (Owners & Representatives)</option>
                <option>Inspection Checklist Scores</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select CSV / XLSX File</label>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ padding: "10px" }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              <i className="fas fa-upload" /> Start Import Process
            </button>
          </form>

          {imported && (
            <div style={{ marginTop: "16px", padding: "12px", borderRadius: "8px", background: "#dcfce7", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>
              ✓ File &quot;{file?.name}&quot; validated successfully. 536 records ready for database synchronization.
            </div>
          )}
        </div>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Template Instructions</h3>
          <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
            Ensure your spreadsheet follows the standard HEAN column mapping:
          </p>
          <ul style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.8, paddingLeft: "20px" }}>
            <li><code>hostel_name</code> (Required, Text)</li>
            <li><code>type</code> (Required: &quot;boys&quot;, &quot;girls&quot;, &quot;co-ed&quot;)</li>
            <li><code>district</code> (Required: &quot;Kathmandu&quot;, &quot;Lalitpur&quot;, &quot;Bhaktapur&quot;)</li>
            <li><code>owner_name</code> (Required, Text)</li>
            <li><code>phone</code> (Required, 10 digits)</li>
            <li><code>capacity</code> (Optional, Number)</li>
          </ul>
          <button style={{ marginTop: "16px", background: "#f1f5f9", color: "#334155", border: "1px solid #cbd5e1", padding: "8px 16px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>
            <i className="fas fa-download" /> Download Sample CSV
          </button>
        </div>
      </div>
    </div>
  );
}
