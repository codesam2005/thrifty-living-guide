
import React, { useState } from 'react';
import { Calendar, Plus, ArrowUpDown, Filter } from 'lucide-react';
import { Button, CardHeader, AnimatedCard, CategoryBadge } from './ui-components';

// Sample data
const EXPENSES = [
  { id: 1, name: 'Apartment Rent', amount: 1200, category: 'Housing', date: '2023-05-01' },
  { id: 2, name: 'Grocery Shopping', amount: 128.50, category: 'Food', date: '2023-05-03' },
  { id: 3, name: 'Gas Station', amount: 45.20, category: 'Transport', date: '2023-05-04' },
  { id: 4, name: 'Movie Tickets', amount: 32.00, category: 'Entertainment', date: '2023-05-05' },
  { id: 5, name: 'Online Shopping', amount: 79.99, category: 'Shopping', date: '2023-05-07' },
];

export const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  return (
    <AnimatedCard className="mt-6" delay={500}>
      <CardHeader 
        title="Recent Expenses" 
        subtitle="Your spending activity" 
        action={
          <div className="flex space-x-2">
            <Button variant="outline">
              <Filter size={16} className="mr-1" /> Filter
            </Button>
            <Button variant="primary">
              <Plus size={16} className="mr-1" /> Add New
            </Button>
          </div>
        }
      />
      
      <div className="overflow-hidden rounded-xl border border-finance-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-finance-background text-sm text-finance-text-secondary">
              <tr>
                <th className="text-left p-4 font-medium">Description</th>
                <th className="text-left p-4 font-medium whitespace-nowrap">
                  <span className="flex items-center">
                    Amount <ArrowUpDown size={14} className="ml-1" />
                  </span>
                </th>
                <th className="text-left p-4 font-medium">Category</th>
                <th className="text-left p-4 font-medium">
                  <span className="flex items-center">
                    Date <Calendar size={14} className="ml-1" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {expenses.map((expense) => (
                <tr key={expense.id} className="expense-item">
                  <td className="p-4">
                    <div className="font-medium">{expense.name}</div>
                  </td>
                  <td className="p-4 font-semibold whitespace-nowrap">
                    ${expense.amount.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <CategoryBadge category={expense.category} />
                  </td>
                  <td className="p-4 text-finance-text-secondary">
                    {new Date(expense.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-finance-text-secondary">
          Showing 5 of 24 transactions
        </span>
        <Button variant="subtle">View All Expenses</Button>
      </div>
    </AnimatedCard>
  );
};

export default ExpenseTracker;
