import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar fixed */}
      <Navbar />

      {/* Main content */}
      <div className="ml-[15%] w-[85%]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
