import React from 'react';
import { Plus, Search } from 'lucide-react';

const Sidebar = () => {
  const repositories = [
    { name: 'AishaIrshad1/Internship', color: 'bg-purple-600' },
    { name: 'AishaIrshad1/ai-chatbot', color: 'bg-purple-600' },
    { name: 'AishaIrshad1/aishaIrshad-demo', color: 'bg-purple-600' },
  ];

  return (
    <aside className="w-80 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Top repositories</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center space-x-1">
            <Plus size={16} />
            <span>New</span>
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          {repositories.map((repo, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className={`w-4 h-4 rounded-full ${repo.color}`}></div>
              <span className="text-gray-900 text-sm">{repo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;