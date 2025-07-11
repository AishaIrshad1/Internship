import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HabitProvider } from './contexts/HabitContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Habits from './pages/Habits';
import Progress from './pages/Progress';
import AddHabit from './pages/AddHabit';

function App() {
  return (
    <HabitProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/add-habit" element={<AddHabit />} />
          </Routes>
        </Layout>
      </Router>
    </HabitProvider>
  );
}

export default App;
