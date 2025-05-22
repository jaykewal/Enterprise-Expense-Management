import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';
import { currentUser, expenses, expenseSummary, monthlyExpenseData, categoryExpenseData, users } from './data/mockData';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        user={currentUser}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      
      <div className="flex-1 overflow-y-auto">
        {activeItem === 'dashboard' && (
          <Dashboard 
            summary={expenseSummary}
            monthlyData={monthlyExpenseData}
            categoryData={categoryExpenseData}
            recentExpenses={expenses}
          />
        )}
        
        {activeItem === 'expenses' && (
          <ExpenseList expenses={expenses} />
        )}
        
        {activeItem === 'reports' && (
          <Reports 
            monthlyData={monthlyExpenseData}
            categoryData={categoryExpenseData}
          />
        )}
        
        {activeItem === 'users' && (
          <UserManagement users={users} />
        )}
        
        {activeItem === 'settings' && (
          <Settings user={currentUser} />
        )}
      </div>
    </div>
  );
}

export default App;