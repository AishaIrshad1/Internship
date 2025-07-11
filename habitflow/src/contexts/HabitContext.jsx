import React, { createContext, useContext, useReducer, useEffect } from 'react';

const habitReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HABITS':
      return { ...state, habits: action.payload };
    case 'ADD_HABIT':
      return { ...state, habits: [...state.habits, action.payload] };
    case 'UPDATE_HABIT':
      return {
        ...state,
        habits: state.habits.map(habit =>
          habit.id === action.payload.id ? action.payload : habit
        )
      };
    case 'DELETE_HABIT':
      return {
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload)
      };
    case 'TOGGLE_COMPLETION':
      return {
        ...state,
        habits: state.habits.map(habit => {
          if (habit.id === action.payload.habitId) {
            const completions = habit.completions.includes(action.payload.date)
              ? habit.completions.filter(date => date !== action.payload.date)
              : [...habit.completions, action.payload.date];
            
            const streak = calculateStreak(completions);
            const bestStreak = Math.max(habit.bestStreak, streak);
            
            return {
              ...habit,
              completions,
              streak,
              bestStreak
            };
          }
          return habit;
        })
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const calculateStreak = (completions) => {
  if (completions.length === 0) return 0;
  
  const sortedDates = completions.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  const today = new Date().toISOString().split('T')[0];
  
  let streak = 0;
  let currentDate = new Date(today);
  
  for (let i = 0; i < sortedDates.length; i++) {
    const completionDate = new Date(sortedDates[i]);
    const dateStr = completionDate.toISOString().split('T')[0];
    const currentDateStr = currentDate.toISOString().split('T')[0];
    
    if (dateStr === currentDateStr) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
};

const HabitContext = createContext();

export const useHabits = () => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};

export const HabitProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, {
    habits: [],
    loading: false
  });

  useEffect(() => {
    const savedHabits = localStorage.getItem('habitflow-habits');
    if (savedHabits) {
      dispatch({ type: 'SET_HABITS', payload: JSON.parse(savedHabits) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habitflow-habits', JSON.stringify(state.habits));
  }, [state.habits]);

  const addHabit = (habitData) => {
    const newHabit = {
      ...habitData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      completions: [],
      streak: 0,
      bestStreak: 0
    };
    dispatch({ type: 'ADD_HABIT', payload: newHabit });
  };

  const updateHabit = (habit) => {
    dispatch({ type: 'UPDATE_HABIT', payload: habit });
  };

  const deleteHabit = (id) => {
    dispatch({ type: 'DELETE_HABIT', payload: id });
  };

  const toggleCompletion = (habitId, date) => {
    dispatch({ type: 'TOGGLE_COMPLETION', payload: { habitId, date } });
  };

  return (
    <HabitContext.Provider value={{
      state,
      addHabit,
      updateHabit,
      deleteHabit,
      toggleCompletion
    }}>
      {children}
    </HabitContext.Provider>
  );
};