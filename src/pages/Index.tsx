
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother animation experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-finance-background">
        <div className="text-center">
          <div className="w-16 h-16 mb-4 mx-auto border-4 border-finance-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-finance-text-secondary animate-pulse">Loading your financial dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-finance-background">
      <Header />
      
      <div className="pt-24 px-6 pb-16 max-w-7xl mx-auto">
        <Dashboard />
      </div>
      
      <footer className="py-8 px-6 text-center text-finance-text-secondary text-sm">
        <p>© 2023 Finance Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
