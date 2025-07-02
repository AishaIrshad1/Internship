// src/App.jsx
import { DashboardProvider } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import {
  Package,
  Truck,
  PlusCircle,
} from "lucide-react";

export default function App() {
  return (
    <DashboardProvider>
      <div className="h-screen w-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] dark:bg-gray-950 transition-colors duration-300">
        <Sidebar />

        <div className="flex flex-col overflow-auto">
          <Navbar />

          <main className="p-6 flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <h2 className="text-2xl font-bold mb-4">Inventory Snapshot</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Low Stock Items */}
              <div className="p-4 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 rounded-2xl shadow-md flex flex-col gap-2 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Low Stock Items</div>
                  <Package className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">58 Products</div>
                <div className="text-xs">Update required urgently</div>
              </div>

              {/* Pending Deliveries */}
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 rounded-2xl shadow-md flex flex-col gap-2 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Pending Deliveries</div>
                  <Truck className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">22 Orders</div>
                <div className="text-xs">Expected within 3 days</div>
              </div>

              {/* New Products Added */}
              <div className="p-4 bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 rounded-2xl shadow-md flex flex-col gap-2 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">New Products</div>
                  <PlusCircle className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">15 Added</div>
                <div className="text-xs">This week</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
