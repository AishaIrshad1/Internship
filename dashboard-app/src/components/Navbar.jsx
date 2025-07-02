import { Moon, Sun } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

export function Navbar() {
  const { isDarkMode, setIsDarkMode } = useDashboard();

  return (
    <nav className="w-full h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h1>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </nav>
  );
}
