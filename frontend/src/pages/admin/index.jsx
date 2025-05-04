import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        {/* Main content area */}
        <main className="flex-1 p-4 overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
