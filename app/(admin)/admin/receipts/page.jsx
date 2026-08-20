"use client";

import React from "react";
import AdminTopbar from "@/components/admin/Topbar";

const receiptsData = [
  { id: "REC-2026-001", hostel: "NKD Boys Hostel", amount: "NPR 500", date: "2026-07-24", issuedBy: "HEAN Finance" },
  { id: "REC-2026-002", hostel: "Suchana Girls Hostel", amount: "NPR 500", date: "2026-07-24", issuedBy: "HEAN Finance" },
];

export default function ReceiptsPage() {
  return (
    <div>
      <AdminTopbar title="Official Receipts - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Payment Receipts</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Official fiscal payment receipts issued to HEAN registered hostels.</p>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Receipt #</th>
              <th>Hostel Name</th>
              <th>Amount (NPR)</th>
              <th>Date Issued</th>
              <th>Issued By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {receiptsData.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#22c55e" }}>{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.hostel}</td>
                <td style={{ fontWeight: 700 }}>{item.amount}</td>
                <td style={{ fontSize: "0.85rem", color: "#64748b" }}>{item.date}</td>
                <td style={{ fontSize: "0.85rem" }}>{item.issuedBy}</td>
                <td>
                  <button style={{ background: "#22c55e", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    Download Receipt PDF
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
