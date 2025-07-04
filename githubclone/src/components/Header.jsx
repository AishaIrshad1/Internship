import React from 'react';
import { 
  Github, 
  Search, 
  Bell, 
  Plus, 
  GitPullRequest, 
  MessageSquare,
  Menu
} from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden text-gray-300 hover:text-white">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <Github size={32} className="text-white" />
            <span className="text-white font-semibold text-lg">Dashboard</span>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Type / to search"
              className="w-full bg-gray-800 border border-gray-600 rounded-md pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white">
            <Plus size={20} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <GitPullRequest size={20} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <MessageSquare size={20} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;