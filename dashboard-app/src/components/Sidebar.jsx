// src/components/Sidebar.jsx
import {
  Home,
  Users,
  BarChart2,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <Home />, label: "Dashboard" },
    { icon: <Users />, label: "Users" },
    { icon: <BarChart2 />, label: "Analytics" },
    { icon: <Settings />, label: "Settings" },
  ];

  return (
    <>
      <div className="md:hidden p-2">
        <button onClick={() => setOpen(true)}><Menu /></button>
      </div>

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transform transition-transform duration-300 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} md:static md:block`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold">My Dashboard</h2>
          <button className="md:hidden" onClick={() => setOpen(false)}><X /></button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
