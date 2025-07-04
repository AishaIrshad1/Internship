import React from 'react';
import { Smile, Code, Globe, Send } from 'lucide-react';
import ActionCard from './ActionCard';
import PlaylistCard from './PlaylistCard';

const MainContent = () => {
  return (
    <main className="flex-1 p-8 bg-white">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Home</h1>
        
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask Copilot"
              className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Send size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ActionCard 
            icon={Smile}
            title="Get started with GitHub"
            color="text-green-600"
          />
          <ActionCard 
            icon={Code}
            title="Learn to code"
            color="text-blue-600"
          />
          <ActionCard 
            icon={Globe}
            title="Create a web app"
            color="text-purple-600"
          />
        </div>

        <PlaylistCard />
      </div>
    </main>
  );
};

export default MainContent;