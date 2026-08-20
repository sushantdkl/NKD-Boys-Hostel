"use client";

import React from "react";
import Link from "next/link";
import AdminTopbar from "@/components/admin/Topbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AdminDashboardPage() {
  const lineChartData = {
    labels: ["Aug 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026"],
    datasets: [
      {
        label: "Registrations",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 539],
        borderColor: "#0EA5E9",
        backgroundColor: "rgba(14,165,233,0.08)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#0EA5E9",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        borderWidth: 2.5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Boys", "Girls", "Co-Ed"],
    datasets: [
      {
        data: [279, 230, 27],
        backgroundColor: ["#3B82F6", "#EC4899", "#8B5CF6"],
        borderWidth: 2.5,
        borderColor: "#fff",
      },
    ],
  };

  const barData = {
    labels: ["Active", "Pending"],
    datasets: [
      {
        label: "Registrations",
        data: [536, 3],
        backgroundColor: ["#3B82F6", "#F59E0B"],
        borderRadius: 6,
      },
    ],
  };

  const revenueData = {
    labels: ["Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026"],
    datasets: [
      {
        label: "Revenue (NPR)",
        data: [0, 0, 0, 0, 0, 1000],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34,197,94,0.08)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#22C55E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        borderWidth: 2.5,
      },
    ],
  };

  return (
    <div>
      <AdminTopbar title="Dashboard - HEAN Admin" />

      {/* Top Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "14px", marginBottom: "18px" }}>
        {[
          { icon: "fa-hotel", bg: "#0EA5E9", count: "536", label: "Total Hostels" },
          { icon: "fa-clock", bg: "#F59E0B", count: "3", label: "Pending Registrations" },
          { icon: "fa-clipboard-list", bg: "#8B5CF6", count: "3", label: "Inspections Pending" },
          { icon: "fa-users", bg: "#10B981", count: "4", label: "Members" },
          { icon: "fa-money-bill-wave", bg: "#22C55E", count: "NPR 1,000", label: "Total Revenue" },
          { icon: "fa-certificate", bg: "#EC4899", count: "2", label: "Certificates" },
        ].map((c) => (
          <div
            key={c.label}
            className="stat-card-hover"
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "14px 16px",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: c.bg,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <i className={`fas ${c.icon}`} style={{ fontSize: "1rem" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a" }}>{c.count}</div>
              <div style={{ fontSize: "0.65rem", color: "#64748b", textTransform: "uppercase" }}>{c.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Stats Bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px,1fr))", gap: "10px", marginBottom: "18px" }}>
        {[
          { label: "Today", val: "5", color: "#0f172a" },
          { label: "This Week", val: "5", color: "#0f172a" },
          { label: "This Month", val: "539", color: "#0f172a" },
          { label: "Active Hostels", val: "536", color: "#0f172a" },
          { label: "Expired", val: "0", color: "#dc2626" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#f8fafc",
              borderRadius: "8px",
              padding: "10px 12px",
              textAlign: "center",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase" }}>{s.label}</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: s.color }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
        <Link
          href="/admin/registrations?status=pending"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #F59E0B, #D97706)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            boxShadow: "0 4px 15px rgba(245,158,11,0.3)",
          }}
        >
          <i className="fas fa-check-circle" /> Approve Pending
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "2px 10px", borderRadius: "50px", fontSize: "0.75rem" }}>
            3
          </span>
        </Link>
      </div>

      {/* Charts Grid Row 1 */}
      <div className="dashboard-charts-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "18px", marginBottom: "18px" }}>
        <div style={{ background: "#fff", borderRadius: "10px", padding: "16px 18px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 12px 0", fontSize: "0.9rem", fontWeight: 600, color: "#0f172a" }}>
            <i className="fas fa-chart-line" style={{ color: "#0EA5E9", marginRight: "8px" }} />
            Monthly Registrations
          </h4>
          <div style={{ position: "relative", height: "180px" }}>
            <Line
              data={lineChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "10px", padding: "16px 18px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 12px 0", fontSize: "0.9rem", fontWeight: 600, color: "#0f172a" }}>
            <i className="fas fa-chart-pie" style={{ color: "#8B5CF6", marginRight: "8px" }} />
            Hostel Types
          </h4>
          <div style={{ position: "relative", height: "180px" }}>
            <Doughnut
              data={doughnutData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: "bottom" } },
                cutout: "60%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Charts Grid Row 2 */}
      <div className="dashboard-charts-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "18px", marginBottom: "18px" }}>
        <div style={{ background: "#fff", borderRadius: "10px", padding: "16px 18px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 12px 0", fontSize: "0.9rem", fontWeight: 600, color: "#0f172a" }}>
            <i className="fas fa-chart-bar" style={{ color: "#F59E0B", marginRight: "8px" }} />
            Registration Status
          </h4>
          <div style={{ position: "relative", height: "180px" }}>
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "10px", padding: "16px 18px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 12px 0", fontSize: "0.9rem", fontWeight: 600, color: "#0f172a" }}>
            <i className="fas fa-money-bill-wave" style={{ color: "#22C55E", marginRight: "8px" }} />
            Monthly Revenue
          </h4>
          <div style={{ position: "relative", height: "180px" }}>
            <Line
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className="dashboard-recents-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginBottom: "18px" }}>
        {/* Recent Registrations */}
        <div style={{ background: "#fff", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 10px 0", fontSize: "0.8rem", fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
            <i className="fas fa-file-alt" style={{ color: "#0EA5E9" }} />
            Recent Applications
            <Link href="/admin/registrations" style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#0EA5E9" }}>
              View All
            </Link>
          </h4>
          {[
            { name: "NKD Boys Hostel", time: "10 mins ago", status: "Active", bg: "#dbeafe", color: "#1e40af" },
            { name: "Suchana Hostel", time: "1 hour ago", status: "Active", bg: "#dbeafe", color: "#1e40af" },
            { name: "Siddhartha Boys", time: "2 hours ago", status: "Pending", bg: "#fef3c7", color: "#92400e" },
          ].map((r, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: "0.78rem", color: "#0f172a" }}>{r.name}</div>
                <div style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{r.time}</div>
              </div>
              <span style={{ fontSize: "0.6rem", padding: "1px 8px", borderRadius: "50px", fontWeight: 500, background: r.bg, color: r.color }}>
                {r.status}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Payments */}
        <div style={{ background: "#fff", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 10px 0", fontSize: "0.8rem", fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
            <i className="fas fa-credit-card" style={{ color: "#22C55E" }} />
            Recent Payments
            <Link href="/admin/payments" style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#0EA5E9" }}>
              View All
            </Link>
          </h4>
          {[
            { name: "NKD Boys Hostel", date: "2026-07-24", amount: "NPR 500" },
            { name: "Suchana Hostel", date: "2026-07-24", amount: "NPR 500" },
            { name: "पाण्डेश्वरी ब्वाइज", date: "2026-07-15", amount: "NPR 0" },
          ].map((p, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: "0.78rem", color: "#0f172a" }}>{p.name}</div>
                <div style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{p.date}</div>
              </div>
              <div style={{ fontWeight: 600, color: "#22C55E", fontSize: "0.78rem" }}>{p.amount}</div>
            </div>
          ))}
        </div>

        {/* Recent Certificates */}
        <div style={{ background: "#fff", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
          <h4 style={{ margin: "0 0 10px 0", fontSize: "0.8rem", fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
            <i className="fas fa-certificate" style={{ color: "#8B5CF6" }} />
            Recent Certificates
            <Link href="/admin/certificate" style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#0EA5E9" }}>
              View All
            </Link>
          </h4>
          {[
            { cert: "HEAN-2026-00002", date: "2026-07-23", status: "Generated" },
            { cert: "HEAN-2026-00001", date: "2026-07-23", status: "Generated" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: "0.78rem", color: "#0f172a" }}>{c.cert}</div>
                <div style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{c.date}</div>
              </div>
              <span style={{ fontSize: "0.6rem", background: "#eef2ff", color: "#4338ca", padding: "1px 8px", borderRadius: "50px", fontWeight: 500 }}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
