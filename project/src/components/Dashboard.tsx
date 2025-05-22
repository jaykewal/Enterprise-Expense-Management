import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle, 
  XCircle,
  CreditCard,
  DollarSign
} from 'lucide-react';
import { ExpenseSummary, ChartData, Expense } from '../types';

interface DashboardProps {
  summary: ExpenseSummary;
  monthlyData: ChartData;
  categoryData: ChartData;
  recentExpenses: Expense[];
}

const Dashboard: React.FC<DashboardProps> = ({ 
  summary, 
  monthlyData, 
  categoryData,
  recentExpenses 
}) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700">
            New Expense
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold mt-1">${summary.totalExpenses.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="text-green-500 mr-1" size={16} />
            <span className="text-green-500 font-medium">12%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold mt-1">${summary.pendingExpenses.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="text-yellow-600" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowDownRight className="text-red-500 mr-1" size={16} />
            <span className="text-red-500 font-medium">5%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Approved</p>
              <p className="text-2xl font-bold mt-1">${summary.approvedExpenses.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="text-green-600" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="text-green-500 mr-1" size={16} />
            <span className="text-green-500 font-medium">18%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Rejected</p>
              <p className="text-2xl font-bold mt-1">${summary.rejectedExpenses.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="text-red-600" size={20} />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowDownRight className="text-red-500 mr-1" size={16} />
            <span className="text-red-500 font-medium">3%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would appear here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would appear here</p>
          </div>
        </div>
      </div>
      
      {/* Recent Expenses */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Expenses</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{expense.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{expense.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{expense.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">${expense.amount.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${expense.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 
                        expense.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {expense.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Company Cards */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Company Cards</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Manage Cards
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <CreditCard size={32} />
              <span className="font-medium">VISA</span>
            </div>
            <div className="mb-6">
              <p className="text-lg tracking-widest">**** **** **** 4589</p>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <p className="text-xs opacity-80">EXPIRES</p>
                <p className="font-medium">12/26</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <CreditCard size={32} />
              <span className="font-medium">MASTERCARD</span>
            </div>
            <div className="mb-6">
              <p className="text-lg tracking-widest">**** **** **** 7652</p>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="font-medium">Marketing Team</p>
              </div>
              <div>
                <p className="text-xs opacity-80">EXPIRES</p>
                <p className="font-medium">09/27</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
            <div className="p-3 bg-gray-100 rounded-full mb-3">
              <CreditCard size={24} />
            </div>
            <p className="font-medium">Add New Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;