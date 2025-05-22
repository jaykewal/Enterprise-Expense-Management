import React, { useState } from 'react';
import { 
  BarChart2, 
  PieChart, 
  Download, 
  Calendar,
  FileText
} from 'lucide-react';
import { ChartData } from '../types';

interface ReportsProps {
  monthlyData: ChartData;
  categoryData: ChartData;
}

const Reports: React.FC<ReportsProps> = ({ monthlyData, categoryData }) => {
  const [reportType, setReportType] = useState('monthly');
  const [dateRange, setDateRange] = useState('last30');
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700">
          <Download size={18} />
          <span>Export PDF</span>
        </button>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
            <div className="flex space-x-2">
              <button
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border ${
                  reportType === 'monthly' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setReportType('monthly')}
              >
                <BarChart2 size={18} />
                <span>Monthly</span>
              </button>
              <button
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border ${
                  reportType === 'category' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setReportType('category')}
              >
                <PieChart size={18} />
                <span>By Category</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="text-gray-400" size={18} />
              </div>
              <select
                className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">Monthly expense chart visualization would appear here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">Category expense chart visualization would appear here</p>
          </div>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-500">Average Expense</p>
            <p className="text-2xl font-bold mt-1">$245.32</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-green-500 font-medium">↑ 8%</span>
              <span className="text-gray-500 ml-1">from previous period</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-500">Highest Category</p>
            <p className="text-2xl font-bold mt-1">Travel</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500">$1,250.75 (65% of total)</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-500">Approval Rate</p>
            <p className="text-2xl font-bold mt-1">82%</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-red-500 font-medium">↓ 3%</span>
              <span className="text-gray-500 ml-1">from previous period</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Saved Reports */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Saved Reports</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Create New Report
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">Q1 Expense Summary</p>
                  <p className="text-sm text-gray-500">Generated on Apr 2, 2025</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">Travel Expenses 2025</p>
                  <p className="text-sm text-gray-500">Generated on Mar 15, 2025</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">Department Comparison</p>
                  <p className="text-sm text-gray-500">Generated on Feb 28, 2025</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;