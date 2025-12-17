import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  icon,
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-industrial-900 text-white hover:bg-industrial-800 shadow-sm rounded-full",
    secondary: "bg-industrial-100 text-industrial-900 hover:bg-industrial-200 rounded-full",
    outline: "border border-industrial-300 text-industrial-700 hover:bg-industrial-50 bg-transparent rounded-full",
    ghost: "text-industrial-600 hover:text-industrial-900 hover:bg-industrial-50 rounded-lg",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-2.5",
    lg: "text-lg px-8 py-4 gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;