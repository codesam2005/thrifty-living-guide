
import React, { useState, useEffect } from 'react';
import { Bell, Menu, Search, UserCircle } from 'lucide-react';
import { Button } from './ui-components';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="mr-2 text-finance-primary font-bold text-xl">
            Finance<span className="text-finance-secondary">Assistant</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li className="text-finance-text hover:text-finance-primary transition-colors">
                <a href="#" className="font-medium">Dashboard</a>
              </li>
              <li className="text-finance-text-secondary hover:text-finance-primary transition-colors">
                <a href="#" className="font-medium">Expenses</a>
              </li>
              <li className="text-finance-text-secondary hover:text-finance-primary transition-colors">
                <a href="#" className="font-medium">Budget</a>
              </li>
              <li className="text-finance-text-secondary hover:text-finance-primary transition-colors">
                <a href="#" className="font-medium">Investments</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-finance-background transition-colors">
            <Search size={20} className="text-finance-text-secondary" />
          </button>
          <button className="p-2 rounded-full hover:bg-finance-background transition-colors relative">
            <Bell size={20} className="text-finance-text-secondary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-finance-primary rounded-full"></span>
          </button>
          <div className="hidden md:block">
            <Button variant="primary">Sign In</Button>
          </div>
          <button className="md:hidden p-2 rounded-full hover:bg-finance-background transition-colors">
            <Menu size={20} className="text-finance-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
