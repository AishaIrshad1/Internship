import React, { useState, useEffect } from 'react';
import { useHabits } from '../contexts/HabitContext';
import { Quote, Calendar, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const { state } = useHabits();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/today'); 
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error('Failed to fetch quote:', error);
        setQuote({
          q: "The journey of a thousand miles begins with one step.",
          a: "Lao Tzu"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  const todayHabits = state.habits.filter(habit => {
    if (habit.frequency === 'daily') return true;
    if (habit.frequency === 'weekly') {
      const dayOfWeek = new Date().getDay();
      return dayOfWeek === 1; // Monday
    }
    if (habit.frequency === 'monthly') {
      const dayOfMonth = new Date().getDate();
      return dayOfMonth === 1; // First day of month
    }
    return false;
  });

  const completedToday = todayHabits.filter(habit => 
    habit.completions.includes(today)
  ).length;

  const totalStreak = state.habits.reduce((sum, habit) => sum + habit.streak, 0);
  const bestStreak = Math.max(...state.habits.map(habit => habit.bestStreak), 0);

  const stats = [
    {
      title: 'Total Habits',
      value: state.habits.length,
      icon: Target,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Completed Today',
      value: `${completedToday}/${todayHabits.length}`,
      icon: CheckCircle,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Total Streak',
      value: totalStreak,
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Best Streak',
      value: bestStreak,
      icon: Calendar,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back!
        </h1>
        <p className="text-gray-600">
          {format(new Date(), 'EEEE, MMMM do, yyyy')}
        </p>
      </div>

      {/* Motivational Quote */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-start space-x-4">
          <Quote className="w-8 h-8 text-white/80 flex-shrink-0 mt-1" />
          <div>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-white/30 rounded w-1/2"></div>
              </div>
            ) : (
              <>
                <p className="text-lg italic mb-2">"{quote?.q}"</p>
                <p className="text-sm text-white/80">— {quote?.a}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today's Habits */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Habits</h2>
        {todayHabits.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No habits scheduled for today. Start by adding some habits!
          </p>
        ) : (
          <div className="space-y-3">
            {todayHabits.map((habit) => {
              const isCompleted = habit.completions.includes(today);
              return (
                <div
                  key={habit.id}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${isCompleted ? 'text-green-900' : 'text-gray-900'}`}>
                      {habit.name}
                    </h3>
                    <p className={`text-sm ${isCompleted ? 'text-green-700' : 'text-gray-600'}`}>
                      {habit.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {habit.streak} day streak
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: habit.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
