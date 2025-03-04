
import React from 'react';
import { cn } from '@/lib/utils';

// Animated Card Component
export const AnimatedCard = ({
  children,
  className,
  delay = 0,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { delay?: number }) => {
  return (
    <div
      className={cn(
        "financial-card animate-slide-up opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      {...props}
    >
      {children}
    </div>
  );
};

// Stat Card Component
export const StatCard = ({
  title,
  value,
  change,
  icon,
  positive = true,
  delay = 0,
  className,
}: {
  title: string;
  value: string;
  change?: string;
  icon?: React.ReactNode;
  positive?: boolean;
  delay?: number;
  className?: string;
}) => {
  return (
    <AnimatedCard className={cn("stat-card", className)} delay={delay}>
      <div className="flex justify-between items-start">
        <span className="stat-label">{title}</span>
        {icon && <div className="text-finance-primary">{icon}</div>}
      </div>
      <div className="stat-value">{value}</div>
      {change && (
        <div 
          className={`stat-change ${
            positive ? "text-finance-success" : "text-finance-danger"
          }`}
        >
          {positive ? "↑" : "↓"} {change}
        </div>
      )}
    </AnimatedCard>
  );
};

// Category Badge Component
export const CategoryBadge = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  // Map categories to colors
  const categoryColors: Record<string, string> = {
    Food: "bg-finance-secondary/20 text-finance-secondary",
    Housing: "bg-finance-primary/20 text-finance-primary",
    Transport: "bg-finance-success/20 text-finance-success",
    Entertainment: "bg-finance-warning/20 text-finance-warning",
    Shopping: "bg-finance-danger/20 text-finance-danger",
    Utilities: "bg-finance-neutral/20 text-finance-neutral",
    Health: "bg-emerald-100 text-emerald-700",
    default: "bg-gray-100 text-gray-700",
  };

  const colorClass = categoryColors[category] || categoryColors.default;

  return (
    <span className={cn(`category-badge ${colorClass}`, className)}>
      {category}
    </span>
  );
};

// Button Component
export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "subtle" | "outline" | "ghost";
}) => {
  const variantClasses = {
    primary: "primary-button",
    subtle: "subtle-button",
    outline: "px-4 py-2 rounded-full border border-finance-border text-finance-text font-medium transition-all duration-300 hover:bg-finance-background",
    ghost: "px-4 py-2 rounded-full text-finance-text-secondary font-medium transition-all duration-300 hover:bg-finance-background/50",
  };

  return (
    <button
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Header Component
export const CardHeader = ({
  title,
  subtitle,
  action,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-between items-start mb-4", className)}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-finance-text-secondary text-sm">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
};
