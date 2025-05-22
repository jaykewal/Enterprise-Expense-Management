import { Expense, ExpenseCategory, User, ExpenseSummary, ChartData } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@company.com',
  role: 'MANAGER',
  department: 'Engineering',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
};

export const users: User[] = [
  currentUser,
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    role: 'EMPLOYEE',
    department: 'Marketing',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@company.com',
    role: 'ADMIN',
    department: 'Finance',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    role: 'EMPLOYEE',
    department: 'Engineering',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const expenseCategories: ExpenseCategory[] = [
  {
    id: '1',
    name: 'Travel',
    color: '#4CAF50',
    icon: 'plane'
  },
  {
    id: '2',
    name: 'Food',
    color: '#FF9800',
    icon: 'utensils'
  },
  {
    id: '3',
    name: 'Office',
    color: '#2196F3',
    icon: 'briefcase'
  },
  {
    id: '4',
    name: 'Other',
    color: '#9C27B0',
    icon: 'more-horizontal'
  }
];

export const expenses: Expense[] = [
  {
    id: '1',
    title: 'Business Trip to New York',
    amount: 1250.75,
    category: 'TRAVEL',
    date: '2025-03-15',
    status: 'APPROVED',
    description: 'Flight tickets and hotel accommodation for the tech conference.',
    receipts: ['receipt1.pdf', 'receipt2.pdf'],
    submittedBy: '2',
    approvedBy: '1'
  },
  {
    id: '2',
    title: 'Team Lunch',
    amount: 187.50,
    category: 'FOOD',
    date: '2025-03-20',
    status: 'APPROVED',
    description: 'Team lunch after project completion.',
    receipts: ['receipt3.pdf'],
    submittedBy: '2',
    approvedBy: '1'
  },
  {
    id: '3',
    title: 'Office Supplies',
    amount: 75.25,
    category: 'OFFICE',
    date: '2025-03-22',
    status: 'PENDING',
    description: 'Notebooks, pens, and other stationery items.',
    receipts: ['receipt4.pdf'],
    submittedBy: '4'
  },
  {
    id: '4',
    title: 'Client Meeting',
    amount: 95.00,
    category: 'FOOD',
    date: '2025-03-25',
    status: 'PENDING',
    description: 'Lunch with potential client.',
    receipts: ['receipt5.pdf'],
    submittedBy: '2'
  },
  {
    id: '5',
    title: 'Software License',
    amount: 299.99,
    category: 'OTHER',
    date: '2025-03-27',
    status: 'REJECTED',
    description: 'Annual license for design software.',
    receipts: ['receipt6.pdf'],
    submittedBy: '4'
  }
];

export const expenseSummary: ExpenseSummary = {
  totalExpenses: 1908.49,
  pendingExpenses: 170.25,
  approvedExpenses: 1438.25,
  rejectedExpenses: 299.99
};

export const monthlyExpenseData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Expenses',
      data: [1200, 1900, 1908.49, 0, 0, 0],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }
  ]
};

export const categoryExpenseData: ChartData = {
  labels: ['Travel', 'Food', 'Office', 'Other'],
  datasets: [
    {
      label: 'Expenses by Category',
      data: [1250.75, 282.50, 75.25, 299.99],
      backgroundColor: [
        'rgba(76, 175, 80, 0.6)',
        'rgba(255, 152, 0, 0.6)',
        'rgba(33, 150, 243, 0.6)',
        'rgba(156, 39, 176, 0.6)'
      ],
      borderColor: [
        'rgba(76, 175, 80, 1)',
        'rgba(255, 152, 0, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(156, 39, 176, 1)'
      ],
      borderWidth: 1
    }
  ]
};