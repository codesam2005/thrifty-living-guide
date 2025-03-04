
import React from 'react';
import { Wallet, TrendingUp, CreditCard, DollarSign } from 'lucide-react';
import { StatCard } from './ui-components';
import BudgetOverview from './BudgetOverview';
import ExpenseTracker from './ExpenseTracker';

export const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold opacity-0 animate-slide-down" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Financial Dashboard
        </h1>
        <p className="text-finance-text-secondary mt-2 opacity-0 animate-slide-down" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Track your spending, manage your budget, and reach your financial goals
        </p>
      </div>
      
      <div className="dashboard-grid">
        <StatCard 
          title="Total Balance" 
          value="$8,240.00" 
          change="12% from last month" 
          positive={true} 
          icon={<Wallet size={20} />}
          delay={100}
        />
        <StatCard 
          title="Monthly Income" 
          value="$4,000.00" 
          change="Same as last month" 
          positive={true}
          icon={<TrendingUp size={20} />}
          delay={150}
        />
        <StatCard 
          title="Monthly Spending" 
          value="$3,100.00" 
          change="8% from last month" 
          positive={false}
          icon={<CreditCard size={20} />}
          delay={200}
        />
        <StatCard 
          title="Savings Goal" 
          value="$12,000.00" 
          change="68% achieved" 
          positive={true}
          icon={<DollarSign size={20} />}
          delay={250}
        />
      </div>
      
      <div className="mt-8">
        <BudgetOverview />
      </div>
      
      <ExpenseTracker />
      
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-finance-primary/10 to-finance-secondary/10 border border-finance-primary/20 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Need financial advice?</h3>
            <p className="text-finance-text-secondary mt-1">Get personalized tips to improve your financial health</p>
          </div>
          <div className="flex space-x-4">
            <button className="subtle-button">Learn More</button>
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
