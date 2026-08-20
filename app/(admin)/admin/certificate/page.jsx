"use client";

import React, { useState } from "react";
import AdminTopbar from "@/components/admin/Topbar";

const certificatesData = [
  { id: "HEAN-2026-00001", hostel: "NKD Boys Hostel", issueDate: "2026-07-23", validTill: "2027-07-22", status: "Active", type: "Standard Affiliation" },
  { id: "HEAN-2026-00002", hostel: "Suchana Girls Hostel", issueDate: "2026-07-23", validTill: "2027-07-22", status: "Active", type: "Standard Affiliation" },
];

export default function CertificateManagementPage() {
  const [selectedCert, setSelectedCert] = useState(certificatesData[0]);

  return (
    <div>
      <AdminTopbar title="Certificates - HEAN Admin" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Affiliation Certificates</h2>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Generate, verify, and print official HEAN membership certificates with QR code.</p>
        </div>
        <button style={{ background: "#8B5CF6", color: "#fff", padding: "8px 18px", borderRadius: "50px", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
          + Issue New Certificate
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Certificate Preview Card */}
        <div style={{ background: "#fff", border: "2px solid #8B5CF6", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(139,92,246,0.1)", textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#8B5CF6", fontWeight: 800 }}>
            Hostel Association Nepal (HEAN)
          </div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#0f172a", margin: "10px 0 6px", fontFamily: "serif" }}>
            Certificate of Affiliation
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>This is to certify that</p>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0EA5E9", margin: "14px 0" }}>
            {selectedCert.hostel}
          </div>
          <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6, maxWidth: "450px", margin: "0 auto" }}>
            has successfully fulfilled all quality, hygiene, and security standards prescribed by the Hostel Association Nepal and is hereby recognized as an accredited affiliated member.
          </p>

          <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-around", borderTop: "1px dashed #cbd5e1", paddingTop: "16px" }}>
            <div>
              <div style={{ fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Certificate No.</div>
              <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.85rem" }}>{selectedCert.id}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "#94a3b8", textTransform: "uppercase" }}>Valid Until</div>
              <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.85rem" }}>{selectedCert.validTill}</div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button style={{ background: "#8B5CF6", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "50px", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
              Print Official Certificate
            </button>
          </div>
        </div>

        {/* Certificate List */}
        <div className="table-container" style={{ margin: 0 }}>
          <table>
            <thead>
              <tr>
                <th>Cert ID</th>
                <th>Hostel Name</th>
                <th>Valid Till</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {certificatesData.map((item) => (
                <tr key={item.id} onClick={() => setSelectedCert(item)} style={{ cursor: "pointer" }}>
                  <td style={{ fontWeight: 600, color: "#8B5CF6" }}>{item.id}</td>
                  <td style={{ fontWeight: 700 }}>{item.hostel}</td>
                  <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.validTill}</td>
                  <td>
                    <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "50px", fontWeight: 600, background: "#dcfce7", color: "#166534" }}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button style={{ background: "#0EA5E9", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "6px", fontSize: "0.75rem", cursor: "pointer" }}>
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
