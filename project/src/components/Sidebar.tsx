import React from 'react';
import { 
  Home, 
  Receipt, 
  BarChart2, 
  Users, 
  Settings, 
  LogOut,
  CreditCard
} from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'expenses', label: 'Expenses', icon: <Receipt size={20} /> },
    { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} /> },
    { id: 'cards', label: 'Cards', icon: <CreditCard size={20} /> }
  ];

  // Only show Users for Managers and Admins
  if (user.role === 'MANAGER' || user.role === 'ADMIN') {
    menuItems.push({ id: 'users', label: 'Users', icon: <Users size={20} /> });
  }

  menuItems.push({ id: 'settings', label: 'Settings', icon: <Settings size={20} /> });

  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <CreditCard className="text-blue-400" size={28} />
          <h1 className="text-xl font-bold">ExpenseTrack</h1>
        </div>
      </div>
      
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-400">{user.role}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-5">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-5 border-t border-gray-800">
        <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;