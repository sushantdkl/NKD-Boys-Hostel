import React from "react";

export default function AdminFooter() {
  return (
    <footer className="admin-footer">
      <div className="brand-line">
        <strong style={{ color: "#0b2b4a" }}>HEAN</strong>
        <span style={{ color: "#6a7e96", fontWeight: 300 }}> · </span>
        <span style={{ color: "#4a6a8b" }}>Hostel Association Nepal</span>
      </div>
      <div className="tech-partner">
        Technology Partner ·{" "}
        <a href="https://www.hostelhubnepal.com" target="_blank" rel="noopener noreferrer">
          🏨 HostelHub Nepal
        </a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} HEAN · All Rights Reserved
      </div>
    </footer>
  );
}
