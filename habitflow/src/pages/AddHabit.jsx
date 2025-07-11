import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHabits } from '../contexts/HabitContext';
import { Target, Calendar, Tag, Palette } from 'lucide-react';

const AddHabit = () => {
  const navigate = useNavigate();
  const { addHabit } = useHabits();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: 'daily',
    category: '',
    color: '#3B82F6'
  });

  const colors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444',
    '#8B5CF6', '#06B6D4', '#84CC16', '#F97316',
    '#EC4899', '#6B7280', '#14B8A6', '#F59E0B'
  ];

  const categories = [
    'Health & Fitness',
    'Productivity',
    'Learning',
    'Personal Care',
    'Relationships',
    'Creativity',
    'Mindfulness',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.description.trim()) {
      addHabit(formData);
      navigate('/habits');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Habit</h1>
        <p className="text-gray-600">Create a new habit to track your progress</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/20 space-y-6">
        {/* Habit Name */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Target className="w-4 h-4" />
            <span>Habit Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., Drink 8 glasses of water"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <span>Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your habit and why it's important to you"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Frequency */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Frequency</span>
          </label>
          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Tag className="w-4 h-4" />
            <span>Category</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Palette className="w-4 h-4" />
            <span>Color</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {colors.map(color => (
              <button
                key={color}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, color }))}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  formData.color === color
                    ? 'border-gray-400 scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate('/habits')}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Habit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHabit;