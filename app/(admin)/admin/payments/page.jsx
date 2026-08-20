"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const paymentsData = [
  { id: "PAY-2026-001", hostel: "NKD Boys Hostel", amount: "NPR 500", method: "eSewa", purpose: "Annual Renewal Fee", date: "2026-07-24", status: "Completed" },
  { id: "PAY-2026-002", hostel: "Suchana Girls Hostel", amount: "NPR 500", method: "Khalti", purpose: "Annual Renewal Fee", date: "2026-07-24", status: "Completed" },
  { id: "PAY-2026-003", hostel: "Siddhartha Boys Hostel", amount: "NPR 1,500", method: "Bank Transfer", purpose: "New Registration Fee", date: "2026-07-23", status: "Pending Verification" },
];

export default function PaymentsPage() {
  return (
    <div>
      <AdminTopbar title="Payments - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Payments & Transactions</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Hostel registration fees, annual renewals, and inspection charges.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ background: "#22c55e", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
            + Record Offline Payment
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Txn ID</th>
              <th>Hostel Name</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Purpose</th>
              <th>Date</th>
              <th>Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "#0EA5E9" }}>{item.id}</td>
                <td style={{ fontWeight: 700, color: "#0f172a" }}>{item.hostel}</td>
                <td style={{ fontWeight: 700, color: "#22c55e" }}>{item.amount}</td>
                <td>{item.method}</td>
                <td style={{ fontSize: "0.85rem", color: "#475569" }}>{item.purpose}</td>
                <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.date}</td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "2px 10px", borderRadius: "50px", fontWeight: 600, background: item.status === "Completed" ? "#dcfce7" : "#fef3c7", color: item.status === "Completed" ? "#166534" : "#92400e" }}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                    View Receipt
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
