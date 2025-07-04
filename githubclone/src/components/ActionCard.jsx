import React from 'react';

const ActionCard = ({ icon: Icon, title, description, color = 'text-gray-600' }) => {
  return (
    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <Icon className={`${color} flex-shrink-0`} size={24} />
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ActionCard;