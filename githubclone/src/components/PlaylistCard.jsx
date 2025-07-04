import React from 'react';
import { Play, X } from 'lucide-react';

const PlaylistCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-gray-500 uppercase tracking-wide">Playlist</div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            GitHub for beginners on YouTube
          </h3>
          <p className="text-gray-600 mb-6">
            Designed to help you master the basics of GitHub, whether you're new to 
            coding or looking to enhance your version control skills.
          </p>
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md transition-colors">
            <Play size={16} />
            <span>Start playlist</span>
          </button>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ufKRYe8ZPaw"
              title="GitHub for Beginners Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
