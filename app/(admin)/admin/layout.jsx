"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/admin/Sidebar";
import AdminFooter from "@/components/admin/AdminFooter";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-body min-h-screen bg-[#f1f5f9] flex flex-col">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className={`main-content flex flex-col flex-1 ${sidebarOpen ? "" : "!ml-0"}`}>
        <main className="flex-1">{children}</main>
        <AdminFooter />
      </div>
    </div>
  );
}
