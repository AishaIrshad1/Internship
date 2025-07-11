import React, { useState } from 'react';
import { useHabits } from '../contexts/HabitContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import {
  Calendar, TrendingUp, Target, Award, Flame
} from 'lucide-react';
import { format, subDays } from 'date-fns';

const Progress = () => {
  const { state } = useHabits();
  const [selectedHabit, setSelectedHabit] = useState('all');

  const generateProgressData = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const dayStr = format(date, 'MMM d');

      let completions = 0;
      let total = 0;

      state.habits.forEach(habit => {
        if (selectedHabit === 'all' || habit.id === selectedHabit) {
          total++;
          if (habit.completions.includes(dateStr)) {
            completions++;
          }
        }
      });

      data.push({
        date: dayStr,
        completions,
        total,
        percentage: total > 0 ? (completions / total) * 100 : 0
      });
    }
    return data;
  };

  const progressData = generateProgressData();

  const getHabitStats = () => {
    const selectedHabits = selectedHabit === 'all'
      ? state.habits
      : state.habits.filter(habit => habit.id === selectedHabit);

    const totalHabits = selectedHabits.length;
    const totalCompletions = selectedHabits.reduce((sum, habit) => sum + habit.completions.length, 0);
    const averageStreak = selectedHabits.length > 0
      ? selectedHabits.reduce((sum, habit) => sum + habit.streak, 0) / selectedHabits.length
      : 0;
    const bestStreak = Math.max(...selectedHabits.map(habit => habit.bestStreak), 0);

    return { totalHabits, totalCompletions, averageStreak, bestStreak };
  };

  const stats = getHabitStats();

  const getStreakData = () => {
    const habits = selectedHabit === 'all'
      ? state.habits
      : state.habits.filter(habit => habit.id === selectedHabit);

    return habits.map(habit => ({
      name: habit.name,
      current: habit.streak,
      best: habit.bestStreak
    }));
  };

  const streakData = getStreakData();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Overview</h1>
        <p className="text-gray-600">Track your habit completion and streaks</p>
      </div>

      {/* Habit Filter */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by habit:
        </label>
        <select
          value={selectedHabit}
          onChange={(e) => setSelectedHabit(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Habits</option>
          {state.habits.map(habit => (
            <option key={habit.id} value={habit.id}>{habit.name}</option>
          ))}
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Habits</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalHabits}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Completions</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCompletions}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Streak</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(stats.averageStreak)}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Best Streak</p>
              <p className="text-2xl font-bold text-gray-900">{stats.bestStreak}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Top Habit Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Top Performing Habit</h2>
        {state.habits.length > 0 ? (
          (() => {
            const top = [...state.habits].sort((a, b) => b.streak - a.streak)[0];
            return (
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{top.name}</p>
                  <p className="text-sm text-gray-600">🔥 {top.streak}-day streak</p>
                  <p className="text-sm text-gray-600">✅ {top.completions.length} completions</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          })()
        ) : (
          <p className="text-gray-500">No habits found</p>
        )}
      </div>

      {/* 📊 30-Day Progress Chart */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-4">30-Day Progress</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="percentage"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: '#3B82F6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📊 Streak Comparison Chart */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Streak Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={streakData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#10B981" name="Current Streak" />
              <Bar dataKey="best" fill="#3B82F6" name="Best Streak" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🟩 7-Day Completion Snapshot */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Last 7 Days Snapshot</h2>
        <div className="flex gap-2">
          {Array.from({ length: 7 }).map((_, i) => {
            const date = subDays(new Date(), 6 - i);
            const dateStr = format(date, 'yyyy-MM-dd');

            let completed = false;
            state.habits.forEach(habit => {
              if (selectedHabit === 'all' || habit.id === selectedHabit) {
                if (habit.completions.includes(dateStr)) {
                  completed = true;
                }
              }
            });

            return (
              <div
                key={i}
                title={format(date, 'MMM d')}
                className={`w-6 h-6 rounded ${completed ? 'bg-green-500' : 'bg-gray-300'}`}
              />
            );
          })}
        </div>
      </div>

      {/* 🏅 Achievement Badge */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🏅 Your Badge</h2>
        {(() => {
          const totalCompletions = state.habits.reduce((sum, habit) => sum + habit.completions.length, 0);
          const maxStreak = Math.max(...state.habits.map(h => h.streak), 0);

          if (maxStreak >= 7) {
            return <p className="text-green-600 font-medium">🔥 Consistency Champ – 7+ Day Streak</p>;
          } else if (totalCompletions >= 50) {
            return <p className="text-blue-600 font-medium">🏆 Habit Hero – 50+ Total Completions</p>;
          } else {
            return <p className="text-gray-500">Keep going to unlock badges!</p>;
          }
        })()}
      </div>
    </div>
  );
};

export default Progress;
