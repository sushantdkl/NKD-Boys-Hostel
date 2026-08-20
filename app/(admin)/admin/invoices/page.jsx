"use client";

import React from "react";
import AdminTopbar from "@/components/admin/Topbar";

const invoicesData = [
  { id: "INV-2026-001", hostel: "NKD Boys Hostel", amount: "NPR 500", dueDate: "2026-07-31", status: "Paid" },
  { id: "INV-2026-002", hostel: "Suchana Girls Hostel", amount: "NPR 500", dueDate: "2026-07-31", status: "Paid" },
  { id: "INV-2026-003", hostel: "Siddhartha Boys Hostel", amount: "NPR 1,500", dueDate: "2026-08-05", status: "Unpaid" },
  { id: "INV-2026-004", hostel: "Peaceful Co-ed Hostel", amount: "NPR 1,500", dueDate: "2026-08-10", status: "Unpaid" },
];

export default function InvoicesPage() {
  return (
    <div>
      <AdminTopbar title="Invoices - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Membership & Inspection Invoices</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Generate, track, and send billing invoices to hostel owners.</p>
        </div>
        <button style={{ background: "#0EA5E9", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
          + Create Invoice
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Billed To (Hostel)</th>
              <th>Total Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#0EA5E9" }}>{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.hostel}</td>
                <td style={{ fontWeight: 600 }}>{item.amount}</td>
                <td style={{ fontSize: "0.85rem", color: "#64748b" }}>{item.dueDate}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", fontWeight: 600, background: item.status === "Paid" ? "#dcfce7" : "#fee2e2", color: item.status === "Paid" ? "#166534" : "#dc2626" }}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer", marginRight: "6px" }}>
                    Print
                  </button>
                  <button style={{ background: "#f1f5f9", color: "#334155", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    Email
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
