"use client";

import React from "react";
import AdminTopbar from "@/components/admin/Topbar";

export default function ReportsPage() {
  return (
    <div>
      <AdminTopbar title="Reports - HEAN Admin" />

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Statistical Reports</h2>
        <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "4px 0 0" }}>Hostel demographics, district breakdown, and compliance analytics.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "24px" }}>
        <div className="stat-card">
          <div className="num">536</div>
          <div className="label">Total Hostels</div>
        </div>
        <div className="stat-card">
          <div className="num" style={{ color: "#22c55e" }}>533</div>
          <div className="label">Active & Approved</div>
        </div>
        <div className="stat-card">
          <div className="num" style={{ color: "#F59E0B" }}>3</div>
          <div className="label">Pending Verification</div>
        </div>
        <div className="stat-card">
          <div className="num" style={{ color: "#8B5CF6" }}>12,800+</div>
          <div className="label">Estimated Student Capacity</div>
        </div>
      </div>

      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Hostels by District</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>District / Region</th>
              <th>Boys Hostels</th>
              <th>Girls Hostels</th>
              <th>Co-Ed Hostels</th>
              <th>Total Count</th>
              <th>Market Share</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700, color: "#0f172a" }}>Kathmandu District</td>
              <td>230</td>
              <td>195</td>
              <td>21</td>
              <td style={{ fontWeight: 700 }}>446</td>
              <td>83.2%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "#0f172a" }}>Lalitpur District</td>
              <td>35</td>
              <td>25</td>
              <td>4</td>
              <td style={{ fontWeight: 700 }}>64</td>
              <td>11.9%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "#0f172a" }}>Bhaktapur District</td>
              <td>14</td>
              <td>10</td>
              <td>2</td>
              <td style={{ fontWeight: 700 }}>26</td>
              <td>4.9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
