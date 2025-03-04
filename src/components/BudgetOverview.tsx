
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Button, CardHeader, AnimatedCard } from './ui-components';
import { DollarSign, PieChart as PieChartIcon } from 'lucide-react';

// Sample data
const data = [
  { name: 'Housing', value: 1200, color: '#007AFF' },
  { name: 'Food', value: 800, color: '#5AC8FA' },
  { name: 'Transport', value: 400, color: '#34C759' },
  { name: 'Entertainment', value: 300, color: '#FF9500' },
  { name: 'Shopping', value: 250, color: '#FF3B30' },
  { name: 'Utilities', value: 350, color: '#8E8E93' },
];

const TOTAL_BUDGET = 4000;
const SPENT = data.reduce((acc, item) => acc + item.value, 0);
const REMAINING = TOTAL_BUDGET - SPENT;

export const BudgetOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <AnimatedCard className="lg:col-span-2" delay={300}>
        <CardHeader 
          title="Budget Breakdown" 
          subtitle="Monthly allocation by category" 
          action={<Button variant="subtle">View Details</Button>}
        />
        
        <div className="chart-container h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          {data.map((category) => (
            <div key={category.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-sm text-finance-text-secondary mr-2">{category.name}</span>
              <span className="text-sm font-medium">${category.value}</span>
            </div>
          ))}
        </div>
      </AnimatedCard>
      
      <AnimatedCard delay={400}>
        <CardHeader 
          title="Budget Status" 
          subtitle="Current monthly budget" 
          action={<PieChartIcon size={20} className="text-finance-primary" />}
        />
        
        <div className="flex flex-col items-center mt-6">
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold">${REMAINING}</h3>
                <p className="text-sm text-finance-text-secondary">Remaining</p>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Spent', value: SPENT, color: '#007AFF' },
                    { name: 'Remaining', value: REMAINING, color: '#E5E5EA' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={70}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {[
                    { name: 'Spent', value: SPENT, color: '#007AFF' },
                    { name: 'Remaining', value: REMAINING, color: '#E5E5EA' },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-finance-text-secondary">Total Budget</span>
              <span className="text-sm font-medium">${TOTAL_BUDGET}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-finance-text-secondary">Spent</span>
              <span className="text-sm font-medium">${SPENT}</span>
            </div>
            <Button className="w-full mt-4" variant="primary">
              <DollarSign size={16} className="mr-1" /> Update Budget
            </Button>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default BudgetOverview;
