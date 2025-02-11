"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Home,
  LayoutDashboard,
  FolderClosed,
  CheckSquare,
  Settings,
  MessageSquare,
} from "lucide-react";
import { RootState } from "@/types";

interface NavItem {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const navItems: NavItem[] = [
    { icon: <Home className="h-5 w-5" />, href: "/", label: "Home" },
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: <FolderClosed className="h-5 w-5" />,
      href: "/projects",
      label: "Projects",
    },
    {
      icon: <CheckSquare className="h-5 w-5" />,
      href: "/tasks",
      label: "Tasks",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
      label: "Settings",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/messages",
      label: "Messages",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen transition-transform ${
        isOpen ? "w-64" : "w-16"
      } bg-white dark:bg-gray-900 border-r`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="mb-5">
          <div className="flex items-center mb-5 justify-center">
            <div className="h-8 w-8 rounded-lg bg-orange-500" />
          </div>
        </div>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  pathname === item.href ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
