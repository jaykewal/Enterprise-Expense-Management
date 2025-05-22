export interface User {
  id: string;
  name: string;
  email: string;
  role: 'EMPLOYEE' | 'MANAGER' | 'ADMIN';
  department: string;
  avatar?: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: 'TRAVEL' | 'FOOD' | 'OFFICE' | 'OTHER';
  date: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  description: string;
  receipts: string[];
  submittedBy: string;
  approvedBy?: string;
}

export interface ExpenseCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface ExpenseSummary {
  totalExpenses: number;
  pendingExpenses: number;
  approvedExpenses: number;
  rejectedExpenses: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}