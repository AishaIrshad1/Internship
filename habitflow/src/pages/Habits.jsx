import React from 'react';
import { useHabits } from '../contexts/HabitContext';
import { CheckCircle, Circle, Trash2, Calendar, Target } from 'lucide-react';
import { format } from 'date-fns';

const Habits = () => {
  const { state, toggleCompletion, deleteHabit } = useHabits();
  const today = new Date().toISOString().split('T')[0];

  const getFrequencyColor = (frequency) => {
    switch (frequency) {
      case 'daily':
        return 'bg-blue-100 text-blue-800';
      case 'weekly':
        return 'bg-purple-100 text-purple-800';
      case 'monthly':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleToggleCompletion = (habitId) => {
    toggleCompletion(habitId, today);
  };

  const handleDelete = (habitId) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      deleteHabit(habitId);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Habits</h1>
        <p className="text-gray-600">Track and manage your daily habits</p>
      </div>

      {state.habits.length === 0 ? (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No habits yet</h3>
          <p className="text-gray-500 mb-4">Start building better habits today!</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Add Your First Habit
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.habits.map((habit) => {
            const isCompletedToday = habit.completions.includes(today);
            
            return (
              <div
                key={habit.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: habit.color }}
                    ></div>
                    <h3 className="text-lg font-semibold text-gray-900">{habit.name}</h3>
                  </div>
                  <button
                    onClick={() => handleDelete(habit.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{habit.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(habit.frequency)}`}>
                    {habit.frequency}
                  </span>
                  <span className="text-sm text-gray-500">
                    {habit.category}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {habit.streak} day streak
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Best: {habit.bestStreak}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {format(new Date(), 'MMM d, yyyy')}
                  </span>
                  <button
                    onClick={() => handleToggleCompletion(habit.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isCompletedToday
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isCompletedToday ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                    <span>{isCompletedToday ? 'Completed' : 'Mark Done'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Habits;