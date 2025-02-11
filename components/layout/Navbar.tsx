"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { Menu } from "lucide-react";
import { toggleSidebar } from "@/store/actions/sidebar";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 z-30 w-full bg-white border-b dark:bg-gray-900">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
